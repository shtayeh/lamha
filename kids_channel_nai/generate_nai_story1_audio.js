globalThis.crypto = require('crypto').webcrypto;
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'nai_story1_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const clips = [
  {
    name: 'scene1.mp3',
    text: "Deep in the cozy Whispering Woods, little Barnaby the bunny loved watching the night sky twinkle. But tonight... a soft golden light was glowing right on the forest floor."
  },
  {
    name: 'scene2.mp3',
    text: "Hiding beneath the dewy leaves was a tiny, trembling star. 'Don't be afraid,' Barnaby whispered with a warm smile, 'I am here to help you get back home.'"
  },
  {
    name: 'scene3.mp3',
    text: "Barnaby climbed to the very top of the tallest mossy hill. He held the warm little star up high... and with a brave little hop, tossed her gently into the midnight breeze!"
  },
  {
    name: 'scene4.mp3',
    text: "The night sky lit up with a sparkling burst of pure joy! The little star winked from above, and Barnaby smiled... knowing that when you help someone shine, you brighten the whole world."
  },
  {
    name: 'outro.mp3',
    text: "Feel every story with Nai. Subscribe for more magical bedtime adventures."
  }
];

async function generateClip(tts, clip) {
  const dest = path.join(audioDir, clip.name);
  console.log(`🎙️ Recording voice for ${clip.name}...`);
  return new Promise((resolve, reject) => {
    try {
      const { audioStream } = tts.toStream(clip.text);
      const file = fs.createWriteStream(dest);
      audioStream.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Saved ${clip.name} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
      audioStream.on('error', (err) => {
        console.error(`❌ Error in ${clip.name}:`, err);
        reject(err);
      });
    } catch (e) {
      reject(e);
    }
  });
}

async function run() {
  console.log('--- 🌟 Generating English Bedtime Storyteller Voice (en-US-JennyNeural) for Channel Nai ---');
  const tts = new MsEdgeTTS();
  await tts.setMetadata('en-US-JennyNeural', OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  for (const c of clips) {
    await generateClip(tts, c);
    await new Promise(r => setTimeout(r, 400));
  }

  tts.close();
  console.log('\n🎉 All audio clips for Barnaby the Bunny generated successfully!');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
