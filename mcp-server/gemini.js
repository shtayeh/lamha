const https = require('https');

function generateReplyWithGemini(apiKey, commentText, authorName, videoTitle) {
  return new Promise((resolve, reject) => {
    if (!apiKey) {
      return resolve(`شكراً لك يا ${authorName} على تفاعلك الجميل وإجابتك الرائعة! 👏 لا تنسَ متابعة تحديات لَـمْـحَـة القادمة ⚡`);
    }

    const payload = JSON.stringify({
      contents: [{
        parts: [{
          text: `أنت المعلق وصاحب قناة "لَـمْـحَـة | Lamha Quiz" على يوتيوب (قناة مسابقات، ذكاء، ألغاز، وثقافة عامة).
المشاهد اسمه: "${authorName}".
عنوان الفيديو: "${videoTitle || 'مسابقة وتحدي الأذكياء'}".
تعليق المشاهد: "${commentText}".

المطلوب:
اكتب رداً مختصراً، ذكياً، وودوداً جداً باللغة العربية:
1. اشكر المشاهد بالاسم.
2. إذا ذكر إجابته أو نتيجته (مثلاً 8/10 أو حل الفزورة)، شجعه على ذكائه وسرعة بديهته.
3. الرد يجب أن يكون سطرين كحد أقصى مع إيموجي تفاعلية مناسبة (مثل: 👏⚡🧠🏆).
4. لا تكتب أي مقدمات خارج نص الرد المباشر.`
        }]
      }]
    });

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const req = https.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.candidates && json.candidates[0] && json.candidates[0].content) {
            const reply = json.candidates[0].content.parts[0].text.trim();
            resolve(reply);
          } else {
            resolve(`أحسنت يا ${authorName}! شكراً لمشاركتك معنا في تحدي لَـمْـحَـة 🧠⚡`);
          }
        } catch (e) {
          resolve(`شكراً لك يا ${authorName} على تفاعلك الرائع! استمر معنا في التحديات القادمة 🏆`);
        }
      });
    });

    req.on('error', (err) => {
      console.error('Gemini API Error:', err);
      resolve(`شكراً لك يا ${authorName} على تفاعلك الجميل! 👏`);
    });

    req.write(payload);
    req.end();
  });
}

module.exports = { generateReplyWithGemini };
