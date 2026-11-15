const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { refreshAccessToken, getRecentChannelComments, likeComment, replyToComment } = require('./youtube');
const { generateReplyWithGemini } = require('./gemini');

const configPath = path.join(__dirname, 'config.json');
const repliedDbPath = path.join(__dirname, 'replied_comments.json');

function loadConfig() {
  if (fs.existsSync(configPath)) {
    try {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    } catch (e) {}
  }
  return {
    clientId: process.env.YOUTUBE_CLIENT_ID || '',
    clientSecret: process.env.YOUTUBE_CLIENT_SECRET || '',
    refreshToken: process.env.YOUTUBE_REFRESH_TOKEN || '',
    geminiApiKey: process.env.GEMINI_API_KEY || ''
  };
}

function loadRepliedDb() {
  if (fs.existsSync(repliedDbPath)) {
    try {
      return JSON.parse(fs.readFileSync(repliedDbPath, 'utf8'));
    } catch (e) {}
  }
  return {};
}

function saveRepliedDb(db) {
  fs.writeFileSync(repliedDbPath, JSON.stringify(db, null, 2), 'utf8');
}

// Core Auto-Responder Logic
async function processComments() {
  const config = loadConfig();
  if (!config.refreshToken) {
    return {
      status: 'error',
      message: 'لم يتم ربط القناة بعد. يرجى تشغيل node setup_oauth.js أولاً.'
    };
  }

  const accessToken = await refreshAccessToken(config);
  const comments = await getRecentChannelComments(accessToken, 15);
  const repliedDb = loadRepliedDb();

  const results = [];

  for (const item of comments) {
    const topComment = item.snippet && item.snippet.topLevelComment;
    if (!topComment) continue;

    const commentId = topComment.id;
    const authorName = topComment.snippet.authorDisplayName || 'صديقنا المتابع';
    const commentText = topComment.snippet.textDisplay || '';
    const videoTitle = topComment.snippet.videoTitle || 'تحدي لَـمْـحَـة';

    // Check if already replied
    if (repliedDb[commentId]) continue;

    // Check if the comment already has replies from channel owner
    const totalReplyCount = item.snippet.totalReplyCount || 0;
    if (totalReplyCount > 0 && item.replies && item.replies.comments) {
      const alreadyHasOwnerReply = item.replies.comments.some(r => r.snippet && r.snippet.authorIsChannelOwner);
      if (alreadyHasOwnerReply) {
        repliedDb[commentId] = { repliedAt: new Date().toISOString(), skipped: true };
        continue;
      }
    }

    // 1. Like the comment
    let liked = false;
    try {
      liked = await likeComment(accessToken, commentId);
    } catch (e) {
      console.error(`Failed to like comment ${commentId}:`, e.message);
    }

    // 2. Generate intelligent reply via Gemini
    const replyText = await generateReplyWithGemini(
      config.geminiApiKey,
      commentText,
      authorName,
      videoTitle
    );

    // 3. Post the reply
    let replied = false;
    try {
      replied = await replyToComment(accessToken, commentId, replyText);
    } catch (e) {
      console.error(`Failed to reply to comment ${commentId}:`, e.message);
    }

    if (replied) {
      repliedDb[commentId] = {
        repliedAt: new Date().toISOString(),
        author: authorName,
        comment: commentText,
        reply: replyText,
        liked
      };
      results.push({
        commentId,
        author: authorName,
        comment: commentText,
        reply: replyText,
        liked
      });
    }
  }

  saveRepliedDb(repliedDb);

  return {
    status: 'success',
    processedCount: results.length,
    actions: results
  };
}

// MCP Protocol Handling (JSON-RPC via stdio)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function sendResponse(id, result, error = null) {
  const resp = { jsonrpc: '2.0', id };
  if (error) resp.error = error;
  else resp.result = result;
  process.stdout.write(JSON.stringify(resp) + '\n');
}

rl.on('line', async (line) => {
  if (!line.trim()) return;
  try {
    const msg = JSON.parse(line);
    const { id, method, params } = msg;

    if (method === 'initialize') {
      sendResponse(id, {
        protocolVersion: '2024-11-05',
        capabilities: { tools: {} },
        serverInfo: {
          name: 'youtube-gemini-auto-responder',
          version: '1.0.0'
        }
      });
    } else if (method === 'notifications/initialized') {
      // client acknowledgment
    } else if (method === 'tools/list') {
      sendResponse(id, {
        tools: [
          {
            name: 'check_and_reply_new_comments',
            description: 'فحص التعليقات والردود الجديدة على قناة يوتيوب، والإعجاب بها (Like)، وتوليد رد ذكي عبر Gemini ونشره فوراً.',
            inputSchema: {
              type: 'object',
              properties: {},
              required: []
            }
          },
          {
            name: 'generate_smart_reply',
            description: 'توليد رد ذكي مخصص ومحفز لتعليق معين عبر نموذج Gemini.',
            inputSchema: {
              type: 'object',
              properties: {
                commentText: { type: 'string', description: 'نص تعليق المشاهد' },
                authorName: { type: 'string', description: 'اسم صاحب التعليق' },
                videoTitle: { type: 'string', description: 'عنوان الفيديو' }
              },
              required: ['commentText', 'authorName']
            }
          }
        ]
      });
    } else if (method === 'tools/call') {
      const toolName = params && params.name;
      const args = (params && params.arguments) || {};

      if (toolName === 'check_and_reply_new_comments') {
        const out = await processComments();
        sendResponse(id, {
          content: [
            {
              type: 'text',
              text: JSON.stringify(out, null, 2)
            }
          ]
        });
      } else if (toolName === 'generate_smart_reply') {
        const cfg = loadConfig();
        const reply = await generateReplyWithGemini(
          cfg.geminiApiKey,
          args.commentText,
          args.authorName,
          args.videoTitle || 'تحدي لَـمْـحَـة'
        );
        sendResponse(id, {
          content: [{ type: 'text', text: reply }]
        });
      } else {
        sendResponse(id, null, { code: -32601, message: 'Tool not found' });
      }
    } else {
      // Ignore unknown methods
      if (id !== undefined) {
        sendResponse(id, null, { code: -32601, message: 'Method not found' });
      }
    }
  } catch (err) {
    console.error('Error handling line:', err);
  }
});
