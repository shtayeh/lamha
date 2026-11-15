const https = require('https');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const s4AudioDir = path.join(baseDir, 'shorts4_audio');

if (!fs.existsSync(s4AudioDir)) fs.mkdirSync(s4AudioDir);

const s4Clips = [
  { name: 'intro.mp3', text: 'تحدي فوازير الأذكياء من قناة لمحة! ثلاثة فوازير صعبة ستحير عقلك، هل تستطيع حلها قبل انتهاء الوقت؟' },
  { name: 'q1_ask.mp3', text: 'الفزورة الأولى: شيء تملكه أنت، لكن الناس يستخدمونه أكثر منك، فما هو؟' },
  { name: 'q1_ans.mp3', text: 'الإجابة الصحيحة هي: اسمك! يناديك به الجميع أكثر مما تستخدمه أنت!' },
  { name: 'q2_ask.mp3', text: 'الفزورة الثانية: يتحدث جميع لغات العالم ولا يملك لساناً، فما هو؟' },
  { name: 'q2_ans.mp3', text: 'الإجابة الصحيحة هي: صدى الصوت! يردد كل الكلمات بأي لغة دون لسان!' },
  { name: 'q3_ask.mp3', text: 'الفزورة الثالثة: ما هو الشيء الذي يخترق أعماق الماء ولا يبتل أبداً؟' },
  { name: 'q3_ans.mp3', text: 'الإجابة الصحيحة هي: الضوء! ينفذ في الماء دون أن يصيبه البلل!' },
  { name: 'outro.mp3', text: 'كم فزورة استطعت حلها؟ اكتب نتيجتك في التعليقات واشترك في قناة لمحة للمزيد!' }
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
        console.log(`Saved ${path.basename(dir)}/${clip.name} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error on ${clip.name}:`, err);
      reject(err);
    });
  });
}

async function run() {
  console.log('--- Generating Shorts 4 Audio ---');
  for (const c of s4Clips) {
    await downloadClip(s4AudioDir, c);
    await new Promise(r => setTimeout(r, 250));
  }
  console.log('Shorts 4 audio generation complete!');
}

run();
