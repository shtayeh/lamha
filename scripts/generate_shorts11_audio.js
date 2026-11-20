globalThis.crypto = require('crypto').webcrypto;
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts11_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

// Script with 100% accurate Arabic Tashkeel & lively pacing
const clips = [
  { 
    name: 'intro.mp3', 
    text: 'اخْتِبَارٌ نَفْسِيٌّ سَرِيعٌ مِنْ لَمْحَة! ثَلَاثَةُ مَوَاقِفَ غَرِيبَةٍ سَتَكْشِفُ مَا يُخْفِيهِ عَقْلُكَ البَاطِن.. هَلْ أَنْتَ مُسْتَعِدٌّ لِمَعْرِفَةِ الحَقِيقَة؟' 
  },
  { 
    name: 'q1_ask.mp3', 
    text: 'المَوْقِفُ الأَوَّل: أَنْتَ تَمْشِي فِي طَرِيقٍ طَوِيلٍ وَوَجَدْتَ جِدَاراً عَالِياً يَسُدُّ طَرِيقَك.. مَاذَا تَفْعَل؟ أَتَتَسَلَّقُهُ، أَمْ تَبْحَثُ عَنْ بَابٍ جَانِبِيّ، أَمْ تَتَوَقَّفُ؟ مَعَكَ خَمْسُ ثَوَانٍ!' 
  },
  { 
    name: 'q1_ans.mp3', 
    text: 'التَّحْلِيلُ النَّفْسِيّ: الجِدَارُ يُمَثِّلُ مَشَاكِلَك! التَّسَلُّقُ يَعْنِي شَجَاعَةً جَرِيئَة، وَالبَحْثُ عَنْ بَابٍ يَدُلُّ عَلَى الذَّكَاءِ والدِّبْلُومَاسِيَّة، أَمَّا التَّوَقُّفُ فَيَعْنِي الحِكْمَةَ وَالتَّأَنِّي.' 
  },
  { 
    name: 'q2_ask.mp3', 
    text: 'المَوْقِفُ الثَّانِي: دَخَلْتَ غُرْفَةً مُظْلِمَةً وَمَعَكَ عُودُ ثِقَابٍ وَاحِد.. وَأَمَامَكَ شَمْعَة، وَمَوْقِدُ حَطَب، وَمِصْبَاحُ زَيْت.. مَاذَا تُشْعِلُ أَوَّلًا؟' 
  },
  { 
    name: 'q2_ans.mp3', 
    text: 'التَّحْلِيلُ الذَّكِيّ: أَنْتَ تُشْعِلُ عُودَ الثِّقَابِ أَوَّلًا! إِذَا انْتَبَهْتَ لَهَا فَعَقْلُكَ سَرِيعُ البَدِيهَةِ وَدَقِيقُ المُلَاحَظَة.' 
  },
  { 
    name: 'q3_ask.mp3', 
    text: 'المَوْقِفُ الثَّالِث: لَوْ وَجَدْتَ صُنْدُوقاً سِحْرِيّاً يُفْتَحُ مَرَّةً وَاحِدَة، مَاذَا تَتَمَنَّى دَاخِلَهُ؟ ثَرْوَةً طَائِلَة، أَمْ إِجَابَةً لِأَسْئِلَتِك، أَمْ رِسَالَةً مِنْ شَخْصٍ تُحِبُّه؟' 
  },
  { 
    name: 'q3_ans.mp3', 
    text: 'التَّحْلِيلُ النَّفْسِيّ: الثَّرْوَةُ تَعْنِي طُمُوحاً عَمَلِيّاً. وَالإِجَابَةُ تَدُلُّ عَلَى حِكْمَةٍ وَعَقْلٍ بَاحِثٍ عَنِ المَعْرِفَة. أَمَّا الرِّسَالَةُ فَتَكْشِفُ قَلْباً وَفِيّاً وَعَاطِفِيّاً جِدّاً!' 
  },
  { 
    name: 'outro.mp3', 
    text: 'أَيُّ نَتِيجَةٍ كَانَتْ أَقْرَبَ لِشَخْصِيَّتِك؟ اكْتُبْ فِي التَّعْلِيقَاتِ خِيَارَاتِك، وَاشْتَرِكْ فِي لَمْحَة لِتَكْتَشِفَ المَزِيد!' 
  }
];

async function generateClip(tts, clip) {
  const dest = path.join(audioDir, clip.name);
  console.log(`🎙️ توليد مقطع: ${clip.name}...`);
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
  console.log('--- 🔮 توليد الصوت البشري الحيوي المميز (Fatima - ar-AE-FatimaNeural) لقسم علم النفس ---');
  const tts = new MsEdgeTTS();
  await tts.setMetadata('ar-AE-FatimaNeural', OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);
  
  for (const c of clips) {
    await generateClip(tts, c);
    await new Promise(r => setTimeout(r, 350));
  }
  
  tts.close();
  console.log('\n🎉 اكتمل توليد كافة مقاطع اختبار علم النفس بنجاح!');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
