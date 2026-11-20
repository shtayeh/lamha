globalThis.crypto = require('crypto').webcrypto;
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts10_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const clips = [
  { name: 'intro.mp3', text: 'تحدي لمحة للعباقرة! ثلاثة ألغاز خادعة تكشف قوة ملاحظتك وسرعة ذكائك.. هل عقلك مستعد للتحدي؟' },
  { name: 'q1_ask.mp3', text: 'اللغز الأول: ما هو الشيء الذي كلما أخذت منه كَبُر، وكلما وضعت فيه صَغُر؟ معك خمس ثوانٍ!' },
  { name: 'q1_ans.mp3', text: 'الإجابة هي: الحُـفْـرة! برافو إذا حزرتها.' },
  { name: 'q2_ask.mp3', text: 'اللغز الثاني الخادع: لديك ثلاث تفاحات وأخذت منها تفاحتين.. كم تفاحة معك الآن؟ فكّر قبل أن تجيب!' },
  { name: 'q2_ans.mp3', text: 'معك تفاحتان! لأنك أنت من أخذتهما.. هل تسرعت وقلت تفاحة واحدة؟' },
  { name: 'q3_ask.mp3', text: 'اللغز الثالث للأذكياء فقط: شيء تراه في الدقيقة مرتين، وفي القرن مرة واحدة، ولا تراه في الساعة أبداً.. فما هو؟' },
  { name: 'q3_ans.mp3', text: 'الإجابة العبقرية هي: حرف القاف! رائع إن كشفت اللغز.' },
  { name: 'outro.mp3', text: 'كم لغزاً حزرت اليوم؟ اكتب نتيجتك في التعليقات، وتابع قناة لمحة لتحديات جديدة كل يوم!' }
];

async function generateClip(tts, clip) {
  const dest = path.join(audioDir, clip.name);
  console.log(`🎙️ جاري توليد صوت أنثوي: ${clip.name}...`);
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
  console.log('--- 🌸 توليد أصوات بشرية أنثوية طبيعية فائقة الواقعية (ar-SA-ZariyahNeural) ---');
  const tts = new MsEdgeTTS();
  await tts.setMetadata('ar-SA-ZariyahNeural', OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);
  
  for (const c of clips) {
    await generateClip(tts, c);
    await new Promise(r => setTimeout(r, 350));
  }
  
  tts.close();
  console.log('\n🎉 اكتمل توليد كافة المقاطع الصوتية الأنثوية بنجاح!');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
