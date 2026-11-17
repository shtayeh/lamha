const https = require('https');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'long_quiz5_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const clips = [
  { name: 'intro.mp3', text: 'مرحباً بكم في قناة لمحة! التحدي المعرفي الكبير، عشرة أسئلة ثقافة عامة متنوعة في العلوم والتاريخ والجغرافيا، هل تستطيع الإجابة عليها جميعاً؟ جهز عقلك ولنبدأ التحدي!' },

  { name: 'q1_ask.mp3', text: 'السؤال الأول: ما هو العضو الوحيد في جسم الإنسان الذي يعيد نمو نفسه إذا قُطع جزء منه؟' },
  { name: 'q1_ans.mp3', text: 'الإجابة الصحيحة هي: الكبد! فالكبد يستعيد حجمه الأصلي خلال أسابيع قليلة بفضل قدرة خلاياه المذهلة على التجدد.' },

  { name: 'q2_ask.mp3', text: 'السؤال الثاني: ما هي عاصمة أستراليا الحقيقية؟' },
  { name: 'q2_ans.mp3', text: 'الإجابة الصحيحة هي: كانبيرا! فقد بنيت خصيصاً كحل وسط لإنهاء النزاع التاريخي بين سيدني وملبورن.' },

  { name: 'q3_ask.mp3', text: 'السؤال الثالث: من هو العالم المسلم الملقب بـ «أبو الجبر» ومؤسس علم الخوارزميات؟' },
  { name: 'q3_ans.mp3', text: 'الإجابة الصحيحة هي: محمد بن موسى الخوارزمي! الذي اشتقت كلمة ألغوريثم من اسمه تخليداً لإنجازاته الرياضية.' },

  { name: 'q4_ask.mp3', text: 'السؤال الرابع: ما هو أعمق مكان على سطح كوكب الأرض في المحيطات؟' },
  { name: 'q4_ans.mp3', text: 'الإجابة الصحيحة هي: خندق ماريانا! بعمق مذهل يتجاوز أحد عشر ألف متر تحت سطح البحر.' },

  { name: 'q5_ask.mp3', text: 'السؤال الخامس: ما هو المعدن الوحيد الذي يكون سائلاً في درجة حرارة الغرفة الطبيعية؟' },
  { name: 'q5_ans.mp3', text: 'الإجابة الصحيحة هي: الزئبق! وهو المعدن الفريد الذي يحتفظ بحالته السائلة في الظروف المعتادة.' },

  { name: 'q6_ask.mp3', text: 'السؤال السادس: ما هي أطول سورة في القرآن الكريم؟' },
  { name: 'q6_ans.mp3', text: 'الإجابة الصحيحة هي: سورة البقرة! بعدد آيات يبلغ مئتين وست وثمانين آية، وتتضمن آية الدين أطول آية في القرآن.' },

  { name: 'q7_ask.mp3', text: 'السؤال السابع: ما هو الحيوان الذي يستطيع النوم وإحدى عينيه مفتوحة ونصف دماغه مستيقظ؟' },
  { name: 'q7_ans.mp3', text: 'الإجابة الصحيحة هي: الدلفين! لحماية نفسه من الغرق والمفترسات أثناء صعوده للتنفس.' },

  { name: 'q8_ask.mp3', text: 'السؤال الثامن: ما هو الكوكب الأكثر حرارة في مجموعتنا الشمسية؟' },
  { name: 'q8_ans.mp3', text: 'الإجابة الصحيحة هي: كوكب الزهرة! بسبب غلافه الجوي الكثيف الذي يحبس الحرارة كبيت زجاجي هائل.' },

  { name: 'q9_ask.mp3', text: 'السؤال التاسع: ما هو الشيء الذي إذا قمت بغليه تجمّد؟' },
  { name: 'q9_ans.mp3', text: 'الإجابة الصحيحة هي: البيض! بسبب تخثر وتصلب البروتينات عند تعرضها لحرارة الغليان.' },

  { name: 'q10_ask.mp3', text: 'السؤال العاشر والأخير لنادي العباقرة: كم عدد الأشهر في السنة التي تحتوي على ثمانية وعشرين يوماً؟' },
  { name: 'q10_ans.mp3', text: 'الإجابة الصحيحة هي: كل أشهر السنة الاثني عشر! فكل شهر يحتوي على ثمانية وعشرين يوماً على الأقل.' },

  { name: 'outro.mp3', text: 'انتهى التحدي الكبير! كم نقطة حققت من عشرة؟ اكتب نتيجتك في التعليقات واشترك في قناة لمحة وفعل الجرس للمزيد من المسابقات اليومية!' }
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
  console.log('--- Generating Long Video #5 Audio Clips ---');
  for (const c of clips) {
    await downloadClip(audioDir, c);
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('All 22 audio clips for Long Video #5 generated successfully!');
}

run();
