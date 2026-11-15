const { processComments } = require('./index'); // or standalone import
const path = require('path');
const fs = require('fs');

const { refreshAccessToken, getRecentChannelComments, likeComment, replyToComment } = require('./youtube');
const { generateReplyWithGemini } = require('./gemini');

const configPath = path.join(__dirname, 'config.json');
const repliedDbPath = path.join(__dirname, 'replied_comments.json');

function loadConfig() {
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }
  return {};
}

function loadRepliedDb() {
  if (fs.existsSync(repliedDbPath)) {
    return JSON.parse(fs.readFileSync(repliedDbPath, 'utf8'));
  }
  return {};
}

function saveRepliedDb(db) {
  fs.writeFileSync(repliedDbPath, JSON.stringify(db, null, 2), 'utf8');
}

async function runAutoModerationCycle() {
  const timestamp = new Date().toLocaleString('ar-SA');
  console.log(`\n[${timestamp}] 🔍 بدء فحص التعليقات الجديدة للقناة...`);

  const config = loadConfig();
  if (!config.refreshToken) {
    console.error('❌ تنبيه: ملف config.json غير مكتمل أو لم يتم ربط القناة عبر setup_oauth.js');
    return;
  }

  try {
    const accessToken = await refreshAccessToken(config);
    const comments = await getRecentChannelComments(accessToken, 20);
    const repliedDb = loadRepliedDb();

    let newCount = 0;

    for (const item of comments) {
      const topComment = item.snippet && item.snippet.topLevelComment;
      if (!topComment) continue;

      const commentId = topComment.id;
      const authorName = topComment.snippet.authorDisplayName || 'صديقنا';
      const commentText = topComment.snippet.textDisplay || '';
      const videoTitle = topComment.snippet.videoTitle || 'تحدي لَـمْـحَـة';

      if (repliedDb[commentId]) continue;

      // Check if already replied
      const totalReplyCount = item.snippet.totalReplyCount || 0;
      if (totalReplyCount > 0 && item.replies && item.replies.comments) {
        const alreadyHasOwnerReply = item.replies.comments.some(r => r.snippet && r.snippet.authorIsChannelOwner);
        if (alreadyHasOwnerReply) {
          repliedDb[commentId] = { repliedAt: new Date().toISOString(), skipped: true };
          continue;
        }
      }

      console.log(`\n💬 تعليق جديد من [${authorName}]: "${commentText}"`);

      // 1. Like
      const liked = await likeComment(accessToken, commentId);
      if (liked) console.log(`   ❤️ تم الإعجاب بالتعليق`);

      // 2. Generate Reply via Gemini
      const aiReply = await generateReplyWithGemini(
        config.geminiApiKey,
        commentText,
        authorName,
        videoTitle
      );
      console.log(`   🤖 رد Gemini: "${aiReply}"`);

      // 3. Post Reply
      const replied = await replyToComment(accessToken, commentId, aiReply);
      if (replied) {
        console.log(`   ✅ تم نشر الرد بنجاح`);
        repliedDb[commentId] = {
          repliedAt: new Date().toISOString(),
          author: authorName,
          comment: commentText,
          reply: aiReply,
          liked
        };
        newCount++;
      }

      // Small pause between comments to stay well within YouTube API rate limits
      await new Promise(r => setTimeout(r, 2000));
    }

    saveRepliedDb(repliedDb);
    console.log(`✨ اكتمل الفحص: تم الرد على ${newCount} تعليق جديد.`);
  } catch (err) {
    console.error('❌ حدث خطأ أثناء دورة الفحص:', err.message);
  }
}

// Run immediately on start
runAutoModerationCycle();

// Run every 1 hour (3,600,000 milliseconds)
const ONE_HOUR = 60 * 60 * 1000;
setInterval(() => {
  runAutoModerationCycle();
}, ONE_HOUR);

console.log('🚀 خادم الرد التلقائي يعمل الآن في الخلفية (كل ساعة)...');
