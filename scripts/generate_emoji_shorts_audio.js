const https = require('https');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts_emoji_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir);

const clips = [
  { name: 'intro.mp3', text: 'تحدي الإيموجي السريع من قناة لمحة! خمن اسم الدولة من خلال الإيموجي، هل تستطيع معرفتها في ثلاث ثوانٍ؟' },
  { name: 'q1_ask.mp3', text: 'الدولة الأولى: خمن هذه الدولة العربية الشهيرة!' },
  { name: 'q1_ans.mp3', text: 'الإجابة الصحيحة هي: جمهورية مصر العربية!' },
  { name: 'q2_ask.mp3', text: 'الدولة الثانية: خمن اسم هذه الدولة الأوروبية!' },
  { name: 'q2_ans.mp3', text: 'الإجابة الصحيحة هي: فرنسا، عاصمة الموضة والجمال!' },
  { name: 'q3_ask.mp3', text: 'الدولة الثالثة والأخيرة: ما هي هذه الدولة الآسيوية المدهشة؟' },
  { name: 'q3_ans.mp3', text: 'الإجابة الصحيحة هي: اليابان، كوكب اليابان!' },
  { name: 'outro.mp3', text: 'كم دولة استطعت تخمينها قبل انتهاء الوقت؟ اكتب نتيجتك في التعليقات واشترك في قناة لمحة للمزيد!' }
];

function downloadClip(dir, clip) {
  return new Promise((resolve, reject) => {
    const textEncoded = encodeURIComponent(clip.text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${textEncoded}&tl=ar&client=tw-ob`;
    const dest = path.join(dir, clip.name);
    const file = fs.createWriteStream(dest);

    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved ${clip.name} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error on ${clip.name}:`, err);
      reject(err);
    });
  });
}

async function run() {
  console.log('--- Generating Emoji Shorts Audio ---');
  for (const c of clips) {
    await downloadClip(audioDir, c);
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('All Emoji Shorts audio clips generated successfully!');
}

run();
