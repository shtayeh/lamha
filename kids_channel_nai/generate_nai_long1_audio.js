globalThis.crypto = require('crypto').webcrypto;
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'nai_long1_audio');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const clips = [
  {
    name: 'intro.mp3',
    text: "Welcome to Nai. Feel every story. Tonight, let us journey into the Whispering Woods with Oliver the brave little fox."
  },
  {
    name: 'chap1.mp3',
    text: "Deep in the heart of the Whispering Woods, where the ancient moss smells sweet and cool, lived Oliver, a tiny fox cub with the softest red fur and the biggest, curious hazel eyes. Every evening when the sun melted into warm honey gold, Oliver loved listening to the gentle rustle of the trees, wondering what magical secrets the night would bring."
  },
  {
    name: 'chap2.mp3',
    text: "As twilight painted the forest canopy in shades of soft lavender, Oliver heard a melody as sweet as a silver bell. Walking softly along a carpet of wild ferns, he found the legendary Whispering Tree. Its grand branches sparkled with luminous turquoise and golden leaves, glowing like thousands of tiny lanterns in the evening breeze."
  },
  {
    name: 'chap3.mp3',
    text: "Beneath the tree's giant, winding roots, Oliver noticed a soft flutter. Tucked between two velvety leaves was a tiny baby bluebird, trembling with cold. She had tumbled from her nest high above and didn't know how to get back to her mother. 'Don't worry, little one,' Oliver whispered gently, 'I am here to help you.'"
  },
  {
    name: 'chap4.mp3',
    text: "Nudging the little bird safely onto his soft, fluffy back, Oliver took a brave step onto the mossy bark. One step, two steps, higher and higher he climbed. A swirl of friendly golden fireflies drifted around him, lighting up every winding branch like a glowing stairway to the sky."
  },
  {
    name: 'chap5.mp3',
    text: "At last, high in the sturdy branches, Oliver safely placed the little bluebird back into her cozy woven nest, right into her mother's joyful wings! In that moment, the entire Whispering Tree burst into brilliant starlight! Golden glowing blossoms opened their petals, showering warm sparkling stardust over Oliver, celebrating his courage and kindness."
  },
  {
    name: 'chap6.mp3',
    text: "With a full and happy heart, Oliver climbed down to his cozy sleeping spot beneath the roots. He curled into a warm little ball, wrapping his fluffy white-tipped tail around his paws. As the Whispering Tree hummed a soothing bedtime lullaby beneath the stars, Oliver closed his eyes, knowing that kindness makes every heart shine."
  },
  {
    name: 'outro.mp3',
    text: "Sweet dreams, little ones. May your night be filled with peaceful wonder and love. Subscribe to Nai for more magical bedtime stories."
  }
];

async function generateClip(tts, clip) {
  const dest = path.join(audioDir, clip.name);
  console.log(`🎙️ Recording: ${clip.name}...`);
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
  console.log('--- 🌙 Generating Bedtime Storyteller Audio (en-US-JennyNeural) for Channel Nai ---');
  const tts = new MsEdgeTTS();
  await tts.setMetadata('en-US-JennyNeural', OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  for (const c of clips) {
    await generateClip(tts, c);
    await new Promise(r => setTimeout(r, 450));
  }

  tts.close();
  console.log('\n🎉 All audio chapters for Oliver the Little Fox generated successfully!');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
