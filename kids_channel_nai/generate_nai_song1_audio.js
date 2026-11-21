globalThis.crypto = require('crypto').webcrypto;
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'nai_song1_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const clips = [
  {
    name: 'intro.mp3',
    text: "Hey friends! It is time to sing, dance, and move with Nai! Stand up and get ready to jump!"
  },
  {
    name: 'chorus1.mp3',
    text: "Clap, clap, clap your hands! Clap, clap, clap! Wiggle, wiggle your happy nose! Hop like a bunny, hop, hop, hop! Jump in the air and do not stop!"
  },
  {
    name: 'verse1.mp3',
    text: "Show me your kitty paws! Meow, meow, meow! Spin around in a circle now! Wheeee! You are doing amazing!"
  },
  {
    name: 'verse2.mp3',
    text: "Wag your little tail like a puppy dog! Woof, woof, woof! Stomp, stomp your happy feet! Stomp, stomp, stomp! Dance to the beat!"
  },
  {
    name: 'verse3.mp3',
    text: "Now roar like a mighty lion, big and proud! Roaaar! Reach for the stars and touch the cloud! Jump up high!"
  },
  {
    name: 'chorus2.mp3',
    text: "Clap, clap, clap your hands! Wiggle, wiggle all around! Jump, jump, touch the ground! Hooray! You did the animal dance today!"
  },
  {
    name: 'outro.mp3',
    text: "That was so much fun! Subscribe to Channel Nai for more original songs and adventures! Bye-bye!"
  }
];

async function generateClip(tts, clip) {
  const dest = path.join(audioDir, clip.name);
  console.log(`🎙️ Recording song part: ${clip.name}...`);
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
  console.log('--- 🎵 Generating Energetic Kids Dance Vocals (en-US-AnaNeural) for Channel Nai ---');
  const tts = new MsEdgeTTS();
  await tts.setMetadata('en-US-AnaNeural', OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  for (const c of clips) {
    await generateClip(tts, c);
    await new Promise(r => setTimeout(r, 350));
  }

  tts.close();
  console.log('\n🎉 All song vocal stems generated successfully!');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
