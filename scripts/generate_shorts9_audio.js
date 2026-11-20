globalThis.crypto = require('crypto').webcrypto;
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts9_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const clips = [
  { name: 'intro.mp3', text: 'تحدي الأذكياء الجزء الثاني! ثلاثة ألغاز خادعة تخدع تسعين بالمئة من الناس.. هل سينتبه عقلك هذه المرة؟' },
  { name: 'q1_ask.mp3', text: 'اللغز الأول: ما هو الشيء الذي يمتلئ بالثقوب، لكنه يحتفظ بالماء بداخله؟ معك خمس ثوانٍ!' },
  { name: 'q1_ans.mp3', text: 'الإجابة هي: الإسفنج! برافو إذا عرفتها.' },
  { name: 'q2_ask.mp3', text: 'اللغز الثاني الخادع جداً: مزارع يملك سبعة عشر خروفاً، ماتت جميعها إلا تسعة.. كم خروفاً بقي معه؟ فكر قبل أن تطرح!' },
  { name: 'q2_ans.mp3', text: 'بقي تسعة خراف! السؤال قال ماتت جميعها إلا تسعة.. هل تسرعت؟' },
  { name: 'q3_ask.mp3', text: 'اللغز الثالث للأذكياء فقط: أتحدث بلا فم، وأسمع بلا أذنين، ولا أملك جسداً.. فما أنا؟' },
  { name: 'q3_ans.mp3', text: 'الإجابة الصحيحة هي: صدى الصوت! رائع إن كشفتها.' },
  { name: 'outro.mp3', text: 'كم لغزاً حزرت اليوم؟ اكتب نتيجتك في التعليقات، وتابع لمحة لتبدأ معنا!' }
];

async function generateClip(tts, clip) {
  const dest = path.join(audioDir, clip.name);
  console.log(`🎙️ جاري توليد: ${clip.name}...`);
  return new Promise((resolve, reject) => {
    try {
      const { audioStream } = tts.toStream(clip.text);
      const file = fs.createWriteStream(dest);
      audioStream.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ تم حفظ ${clip.name} (${fs.statSync(dest).size} بايت)`);
        resolve();
      });
      audioStream.on('error', (err) => {
        console.error(`❌ خطأ في ${clip.name}:`, err);
        reject(err);
      });
    } catch (e) {
      reject(e);
    }
  });
}

async function run() {
  console.log('--- 🚀 توليد أصوات الجزء الثاني عبر Neural Voice (ar-SA-HamedNeural) ---');
  const tts = new MsEdgeTTS();
  await tts.setMetadata('ar-SA-HamedNeural', OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);
  
  for (const c of clips) {
    await generateClip(tts, c);
    await new Promise(r => setTimeout(r, 400));
  }
  
  tts.close();
  console.log('\n🎉 اكتمل توليد جميع مقاطع الصوت البشري للشورتس 9 بنجاح!');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
