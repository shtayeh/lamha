globalThis.crypto = require('crypto').webcrypto;
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'nai_kids_quiz1_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const clips = [
  {
    name: 'intro.mp3',
    text: "Hey little friends! Can you guess the animal by its funny sound? Let's play!"
  },
  {
    name: 'q1_ask.mp3',
    text: "Animal number one! It goes: Meow! Meow! What is it?"
  },
  {
    name: 'q1_ans.mp3',
    text: "Yay! It's a cute little kitty cat! Good job!"
  },
  {
    name: 'q2_ask.mp3',
    text: "Animal number two! It goes: Woof! Woof! Who makes this sound?"
  },
  {
    name: 'q2_ans.mp3',
    text: "Super! It's a happy puppy dog! Woof woof!"
  },
  {
    name: 'q3_ask.mp3',
    text: "Animal number three! It goes: Roaaar! Who is the king of the jungle?"
  },
  {
    name: 'q3_ans.mp3',
    text: "Hooray! It's a mighty baby lion! You are so smart!"
  },
  {
    name: 'outro.mp3',
    text: "Subscribe to Nai for more fun games every day! Bye-bye!"
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
  console.log('--- 🎈 Generating Cheerful Kids Voice (en-US-AnaNeural) for Channel Nai ---');
  const tts = new MsEdgeTTS();
  await tts.setMetadata('en-US-AnaNeural', OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  for (const c of clips) {
    await generateClip(tts, c);
    await new Promise(r => setTimeout(r, 350));
  }

  tts.close();
  console.log('\n🎉 All kids animal quiz clips generated successfully!');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
