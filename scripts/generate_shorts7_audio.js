const https = require('https');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts7_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const clips = [
  { name: 'intro.mp3', text: 'تحدي نادي الواحد بالمئة من قناة لمحة! ثلاثة أسئلة ذكاء خادعة، هل تستطيع حلها في أربع ثوانٍ؟' },
  { name: 'q1_ask.mp3', text: 'السؤال الأول: ما هو الشيء الذي له أسنان كثيرة ولكنه لا يعض؟' },
  { name: 'q1_ans.mp3', text: 'الإجابة الصحيحة هي: المُـشْـط!' },
  { name: 'q2_ask.mp3', text: 'السؤال الثاني: ما هو الشيء الذي تذبحه وتبكي عليه؟' },
  { name: 'q2_ans.mp3', text: 'الإجابة الصحيحة هي: البصل!' },
  { name: 'q3_ask.mp3', text: 'السؤال الثالث والأخير: شيء يسير أمامك دائماً لكنك لا تستطيع رؤيته أو لمسه؟' },
  { name: 'q3_ans.mp3', text: 'الإجابة الصحيحة هي: المستقبل!' },
  { name: 'outro.mp3', text: 'كم سؤالاً استطعت حله قبل انتهاء الوقت؟ اكتب نتيجتك في التعليقات واشترك في قناة لمحة للمزيد!' }
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
  console.log('--- Generating Shorts #7 Audio Clips ---');
  for (const c of clips) {
    await downloadClip(audioDir, c);
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('All Shorts #7 audio clips generated successfully!');
}

run();
