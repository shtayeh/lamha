globalThis.crypto = require('crypto').webcrypto;
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts8_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const clips = [
  { name: 'intro.mp3', text: 'تحدي لمحة السريع! ثلاثة ألغاز خادعة تكشف حدة ذكائك وسرعة بديهتك.. جهّز عقلك!' },
  { name: 'q1_ask.mp3', text: 'اللغز الأول: ما هو الشيء الذي يمشي بأربع أرجل في الصباح، واثنتين في الظهر، وثلاث في المساء؟ معك خمس ثوانٍ!' },
  { name: 'q1_ans.mp3', text: 'الإجابة هي: الإنسان! أحسنت إذا حزرتها.' },
  { name: 'q2_ask.mp3', text: 'اللغز الثاني الخادع: أنت في سباق وتجاوزت الشخص في المركز الثاني.. في أي مركز أصبحت الآن؟ فكّر جيداً!' },
  { name: 'q2_ans.mp3', text: 'أصبحت في المركز الثاني وليس الأول! خدعة سريعة، أليس كذلك؟' },
  { name: 'q3_ask.mp3', text: 'اللغز الثالث والأخير للأذكياء فقط: شيء يملكه الجميع، لا يمكنك لمسه، وإذا كشفته زال وانتهى.. فما هو؟' },
  { name: 'outro.mp3', text: 'إذا عرفت الإجابة اكتبها فوراً في التعليقات مع نتيجتك.. وتابع قناة لمحة لتبدأ معنا!' }
];

async function generateClip(tts, clip) {
  const dest = path.join(audioDir, clip.name);
  console.log(`🎙️ جاري توليد مقطع: ${clip.name}...`);
  return new Promise((resolve, reject) => {
    try {
      const { audioStream } = tts.toStream(clip.text);
      const file = fs.createWriteStream(dest);
      audioStream.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ تم حفظ ${clip.name} بنجاح (${fs.statSync(dest).size} بايت)`);
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
  console.log('--- 🚀 توليد أصوات بشرية فائقة الواقعية عبر Neural Voice (ar-SA-HamedNeural) ---');
  const tts = new MsEdgeTTS();
  await tts.setMetadata('ar-SA-HamedNeural', OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);
  
  for (const c of clips) {
    await generateClip(tts, c);
    await new Promise(r => setTimeout(r, 400));
  }
  
  tts.close();
  console.log('\n🎉 اكتمل توليد جميع مقاطع الصوت البشري بنجاح!');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
