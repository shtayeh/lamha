const https = require('https');
const fs = require('fs');
const path = require('path');

const audioDir = path.join('C:/Users/hp/Downloads/اعمالي', 'long_quiz4_audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir);
}

const clips = [
  { name: 'intro.mp3', text: 'مرحباً بكم في تحدي لمحة الثقافي الكبير! عشرة أسئلة وألغاز ذكية ومنوعة، هل تستطيع حلها جميعاً وتحقيق العلامة الكاملة؟' },
  { name: 'q1_ask.mp3', text: 'السؤال الأول: شيء تملكه أنت، لكن الناس يستخدمونه أكثر منك، فما هو؟' },
  { name: 'q1_ans.mp3', text: 'الإجابة الصحيحة هي: اسمك الشخصي، يناديك به الجميع أكثر مما تستخدمه أنت!' },
  { name: 'q2_ask.mp3', text: 'السؤال الثاني: ما هي عاصمة أستراليا الرسمية؟' },
  { name: 'q2_ans.mp3', text: 'الإجابة الصحيحة هي: مدينة كانبيرا، وليست سيدني كما يظن الكثيرون!' },
  { name: 'q3_ask.mp3', text: 'السؤال الثالث: ما هو الكوكب الأكثر حرارة في مجموعتنا الشمسية؟' },
  { name: 'q3_ans.mp3', text: 'الإجابة الصحيحة هي: كوكب الزهرة، بسبب ظاهرة الاحتباس الحراري الشديدة!' },
  { name: 'q4_ask.mp3', text: 'السؤال الرابع: يتحدث جميع لغات العالم ولا يملك لساناً، فما هو؟' },
  { name: 'q4_ans.mp3', text: 'الإجابة الصحيحة هي: صدى الصوت، يردد كل لغة فور صدورها!' },
  { name: 'q5_ask.mp3', text: 'السؤال الخامس: أي دولة أهدت تمثال الحرية الشهير للولايات المتحدة؟' },
  { name: 'q5_ans.mp3', text: 'الإجابة الصحيحة هي: جمهورية فرنسا عام ألف وثمانمائة وستة وثمانين!' },
  { name: 'q6_ask.mp3', text: 'السؤال السادس: ما هو أثقل عضو داخلي في جسم الإنسان؟' },
  { name: 'q6_ans.mp3', text: 'الإجابة الصحيحة هي: الكبد، ويزن نحو كيلوغرام ونصف!' },
  { name: 'q7_ask.mp3', text: 'السؤال السابع: ما هو الشيء الذي يخترق أعماق الماء ولا يبتل أبداً؟' },
  { name: 'q7_ans.mp3', text: 'الإجابة الصحيحة هي: الضوء والشعاع، ينفذ في الماء دون أن يصيبه البلل!' },
  { name: 'q8_ask.mp3', text: 'السؤال الثامن: ما هي الدولة التي تمتلك أكبر عدد من الجزر في العالم؟' },
  { name: 'q8_ans.mp3', text: 'الإجابة الصحيحة هي: مملكة السويد، بأكثر من مائتين وسبعة وستين ألف جزيرة!' },
  { name: 'q9_ask.mp3', text: 'السؤال التاسع: ما هو الكائن الذي يستطيع النوم لثلاث سنوات متواصلة؟' },
  { name: 'q9_ans.mp3', text: 'الإجابة الصحيحة هي: الحلزون، يدخل في سبات طويل عند الجفاف!' },
  { name: 'q10_ask.mp3', text: 'السؤال العاشر: ما هو الشيء الذي كلما أخذت منه كَبُر وازداد حجمه؟' },
  { name: 'q10_ans.mp3', text: 'الإجابة الصحيحة هي: الحفرة، كلما أخذت منها تراباً زاد حجمها!' },
  { name: 'outro.mp3', text: 'انتهى التحدي الكبير! كم إجابة صحيحة عرفت من عشرة؟ اكتب نتيجتك في التعليقات واشترك في قناة لمحة للمزيد من المسابقات اليومية!' }
];

function downloadClip(clip) {
  return new Promise((resolve, reject) => {
    const textEncoded = encodeURIComponent(clip.text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${textEncoded}&tl=ar&client=tw-ob`;
    const dest = path.join(audioDir, clip.name);
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
  console.log('Generating 22 clips for Long Video 4...');
  for (const c of clips) {
    await downloadClip(c);
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('All 22 audio clips for Long Video 4 generated successfully!');
}

run();
