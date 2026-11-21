const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const imgDir = path.join(baseDir, 'nai_long1');
const audioDir = path.join(baseDir, 'nai_long1_audio');
const logoPath = path.join(baseDir, 'nai_channel_logo.png');

// Load Logo
const logoB64 = 'data:image/png;base64,' + fs.readFileSync(logoPath).toString('base64');

// Load 6 Images as Base64
const scenesB64 = [];
for (let i = 1; i <= 6; i++) {
  const p = path.join(imgDir, `scene${i}.jpg`);
  scenesB64.push('data:image/jpeg;base64,' + fs.readFileSync(p).toString('base64'));
}

// Load Audio as Base64
const audioClips = ['intro', 'chap1', 'chap2', 'chap3', 'chap4', 'chap5', 'chap6', 'outro'];
const audioData = {};
for (const c of audioClips) {
  const p = path.join(audioDir, c + '.mp3');
  if (fs.existsSync(p)) {
    audioData[c] = 'data:audio/mp3;base64,' + fs.readFileSync(p).toString('base64');
  }
}

const chapters = [
  {
    id: 1,
    title: "The Golden Twilight",
    text: "Deep in the heart of the Whispering Woods, where the ancient moss smells sweet and cool, lived Oliver, a tiny fox cub with the softest red fur and the biggest, curious hazel eyes. Every evening when the sun melted into warm honey gold, Oliver loved listening to the gentle rustle of the trees, wondering what magical secrets the night would bring.",
    subtitles: [
      { text: "Deep in the heart of the Whispering Woods lived little Oliver...", at: 0.0 },
      { text: "A tiny fox cub with the softest red fur and curious hazel eyes.", at: 6.5 },
      { text: "Every evening, Oliver loved listening to the gentle rustling trees...", at: 13.0 }
    ]
  },
  {
    id: 2,
    title: "The Song of the Whispering Tree",
    text: "As twilight painted the forest canopy in shades of soft lavender, Oliver heard a melody as sweet as a silver bell. Walking softly along a carpet of wild ferns, he found the legendary Whispering Tree. Its grand branches sparkled with luminous turquoise and golden leaves, glowing like thousands of tiny lanterns in the evening breeze.",
    subtitles: [
      { text: "As twilight fell, Oliver heard a melody as sweet as a silver bell.", at: 0.0 },
      { text: "Walking softly through the ferns, he found the legendary Whispering Tree.", at: 6.8 },
      { text: "Its grand branches sparkled with glowing turquoise and golden leaves.", at: 13.5 }
    ]
  },
  {
    id: 3,
    title: "The Shivering Baby Bluebird",
    text: "Beneath the tree's giant, winding roots, Oliver noticed a soft flutter. Tucked between two velvety leaves was a tiny baby bluebird, trembling with cold. She had tumbled from her nest high above and didn't know how to get back to her mother. 'Don't worry, little one,' Oliver whispered gently, 'I am here to help you.'",
    subtitles: [
      { text: "Beneath the giant roots, Oliver noticed a soft flutter...", at: 0.0 },
      { text: "A tiny baby bluebird, trembling with cold, had tumbled from her nest.", at: 6.0 },
      { text: "'Don't worry, little one,' Oliver whispered, 'I will help you.'", at: 13.0 }
    ]
  },
  {
    id: 4,
    title: "The Climb of Courage",
    text: "Nudging the little bird safely onto his soft, fluffy back, Oliver took a brave step onto the mossy bark. One step, two steps, higher and higher he climbed. A swirl of friendly golden fireflies drifted around him, lighting up every winding branch like a glowing stairway to the sky.",
    subtitles: [
      { text: "Nudging the little bird safely onto his soft fluffy back...", at: 0.0 },
      { text: "Oliver took a brave step onto the mossy bark. Higher and higher he climbed!", at: 6.0 },
      { text: "A swirl of golden fireflies lit the winding path like a stairway to the stars.", at: 12.5 }
    ]
  },
  {
    id: 5,
    title: "The Starfall Celebration",
    text: "At last, high in the sturdy branches, Oliver safely placed the little bluebird back into her cozy woven nest, right into her mother's joyful wings! In that moment, the entire Whispering Tree burst into brilliant starlight! Golden glowing blossoms opened their petals, showering warm sparkling stardust over Oliver, celebrating his courage and kindness.",
    subtitles: [
      { text: "At last, Oliver placed the baby bird safely back into her cozy nest!", at: 0.0 },
      { text: "In that moment, the entire Whispering Tree burst into brilliant starlight!", at: 6.5 },
      { text: "Golden blossoms showered stardust, celebrating his courage and kindness. ✨", at: 13.0 }
    ]
  },
  {
    id: 6,
    title: "Sweet Dreams Under The Stars",
    text: "With a full and happy heart, Oliver climbed down to his cozy sleeping spot beneath the roots. He curled into a warm little ball, wrapping his fluffy white-tipped tail around his paws. As the Whispering Tree hummed a soothing bedtime lullaby beneath the stars, Oliver closed his eyes, knowing that kindness makes every heart shine.",
    subtitles: [
      { text: "With a full, happy heart, Oliver curled into a cozy little ball...", at: 0.0 },
      { text: "Wrapping his fluffy white-tipped tail around his sleepy paws.", at: 6.5 },
      { text: "Knowing that kindness makes every heart shine. Goodnight, Oliver. 🌙", at: 13.0 }
    ]
  }
];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oliver the Little Fox & The Whispering Tree | Channel Nai (16:9 Long Bedtime Story)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Quicksand', 'Nunito', sans-serif; }
    .glow-gold { box-shadow: 0 0 50px rgba(245, 158, 11, 0.4); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-3xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
      🌙 Channel Nai • Long 16:9 Widescreen Bedtime Story (Full HD 1080p)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-['Nunito']">
      Oliver the Little Fox & The Whispering Tree <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-teal-300">🦊🌳✨</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      A 3.5-minute cinematic 3D Pixar bedtime tale featuring your official Channel Nai logo, soothing voiceover, and stardust effects
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col items-center justify-center gap-8 w-full max-w-5xl">

    <!-- 16:9 Widescreen Cinema Frame -->
    <div class="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-3xl p-3 border-4 border-amber-500/30 glow-gold shadow-2xl overflow-hidden select-none">
      
      <!-- Inside Screen -->
      <div id="cinemaScreen" class="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden flex flex-col">
        
        <!-- Video Canvas 1920x1080 Full HD -->
        <canvas id="videoCanvas" width="1920" height="1080" class="w-full h-full object-cover"></canvas>

        <!-- Official Nai Watermark Overlay (Top Right) -->
        <div class="absolute top-5 right-6 z-30 flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/30 pointer-events-none">
          <img src="${logoB64}" alt="Nai Logo" class="w-7 h-7 rounded-full shadow object-cover">
          <span class="text-xs font-bold text-amber-200 font-['Nunito']">Nai • Feel Every Story</span>
        </div>

      </div>
    </div>

    <!-- Controls Panel -->
    <div class="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl">
      <div class="flex items-center gap-4">
        <img src="${logoB64}" alt="Nai Channel Logo" class="w-14 h-14 rounded-full border-2 border-amber-500/60 shadow-lg object-cover">
        <div>
          <h2 class="text-lg font-bold text-white font-['Nunito']">Channel Nai — Long Bedtime Story Video</h2>
          <p class="text-xs text-amber-400 font-semibold">16:9 Widescreen • Full HD 1080p • 3.5 Minutes</p>
          <p class="text-[11px] text-slate-400 mt-1">Official channel logo branded throughout the entire video</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <button id="btnPlay" onclick="startPlayback()" class="py-3 px-6 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 hover:from-amber-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/25 transition flex items-center justify-center gap-2 text-sm font-['Nunito'] whitespace-nowrap">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          Play Story Preview
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="py-3 px-6 bg-gradient-to-r from-teal-500 via-emerald-600 to-cyan-600 hover:from-teal-400 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/30 transition flex items-center justify-center gap-2 text-sm animate-pulse font-['Nunito'] whitespace-nowrap">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          Export Video File (MP4 / WebM)
        </button>
      </div>
    </div>

    <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-900 py-2.5 px-6 rounded-xl border border-slate-800">
      Ready to preview and export
    </div>

  </div>

  <script>
    const canvas = document.getElementById('videoCanvas');
    const ctx = canvas.getContext('2d');

    const logoImg = new Image(); logoImg.src = "${logoB64}";

    const sceneImages = [];
    const scenesB64 = ${JSON.stringify(scenesB64)};
    scenesB64.forEach((b64) => {
      const img = new Image();
      img.src = b64;
      sceneImages.push(img);
    });

    const audioSources = ${JSON.stringify(audioData)};
    const chapters = ${JSON.stringify(chapters)};

    let audioCtx = null;
    let audioDest = null;
    const audioBuffers = {};

    let timeline = {
      intro: { start: 0, end: 8.5 },
      chapters: [],
      outro: { start: 190, audioStart: 190.5, end: 205 },
      totalDuration: 205
    };

    function buildDynamicTimeline() {
      let cur = 0;
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 8.0;
      timeline.intro = { start: cur, end: cur + introDur + 1.0 };
      cur = timeline.intro.end;

      timeline.chapters = [];
      for (let i = 0; i < chapters.length; i++) {
        const clipKey = 'chap' + (i + 1);
        const dur = (audioBuffers[clipKey] && audioBuffers[clipKey].duration) ? audioBuffers[clipKey].duration : 22.0;
        const start = cur;
        const end = start + dur + 1.5;

        timeline.chapters.push({
          index: i,
          start: start,
          end: end,
          dur: end - start,
          audioStart: start + 0.5,
          clipKey: clipKey,
          chapData: chapters[i]
        });

        cur = end;
      }

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 8.0;
      timeline.outro = {
        start: cur,
        audioStart: cur + 0.5,
        end: cur + outroDur + 2.0
      };
      timeline.totalDuration = timeline.outro.end;
    }

    // 80 Floating Stardust & Fairy Lights Particles
    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        r: Math.random() * 3.5 + 1.5,
        vx: (Math.random() - 0.5) * 0.9,
        vy: -Math.random() * 0.7 - 0.2,
        alpha: Math.random(),
        da: (Math.random() - 0.5) * 0.02,
        color: Math.random() > 0.4 ? 'rgba(253, 224, 71, ' : 'rgba(45, 212, 191, '
      });
    }

    let isPlaying = false;
    let startTime = 0;
    let animId = null;
    let mediaRecorder = null;
    let recordedChunks = [];
    const scheduledSources = [];

    async function initAudioEngine() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        audioDest = audioCtx.createMediaStreamDestination();
        
        for (const [key, base64Url] of Object.entries(audioSources)) {
          const res = await fetch(base64Url);
          const buf = await res.arrayBuffer();
          audioBuffers[key] = await audioCtx.decodeAudioData(buf);
        }
        buildDynamicTimeline();
      }
      if (audioCtx.state === 'suspended') {
        await audioCtx.resume();
      }
    }

    function playBuffer(buf, time, destination) {
      if (!buf || !audioCtx) return;
      const src = audioCtx.createBufferSource();
      src.buffer = buf;
      src.connect(audioCtx.destination);
      if (destination) src.connect(destination);
      src.start(time);
      scheduledSources.push(src);
    }

    // Gentle bedtime harp/celesta ambient chords
    function playBedtimeChime(time, destination) {
      if (!audioCtx) return;
      [392.00, 493.88, 587.33, 783.99, 987.77].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time + i * 0.15);
        gain.gain.setValueAtTime(0.06, time + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + i * 0.15 + 1.8);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        if (destination) gain.connect(destination);
        osc.start(time + i * 0.15);
        osc.stop(time + i * 0.15 + 1.8);
        scheduledSources.push(osc);
      });
    }

    function scheduleAllAudio(startNow, dest) {
      scheduledSources.forEach(s => { try { s.stop(); } catch(e){} });
      scheduledSources.length = 0;

      playBuffer(audioBuffers['intro'], startNow + timeline.intro.start + 0.3, dest);
      playBedtimeChime(startNow + timeline.intro.start, dest);

      timeline.chapters.forEach((ch, i) => {
        playBuffer(audioBuffers[ch.clipKey], startNow + ch.audioStart, dest);
        playBedtimeChime(startNow + ch.start, dest);
      });

      playBuffer(audioBuffers['outro'], startNow + timeline.outro.audioStart, dest);
      playBedtimeChime(startNow + timeline.outro.start, dest);
    }

    function drawFrame(elapsed) {
      const curTime = elapsed % timeline.totalDuration;

      // INTRO SCENE
      if (curTime < timeline.intro.end) {
        const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        bgGrad.addColorStop(0, '#060a17');
        bgGrad.addColorStop(0.5, '#0f172a');
        bgGrad.addColorStop(1, '#020617');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Centered Big Glowing Logo
        ctx.save();
        const cx = canvas.width / 2;
        const cy = 420;
        const r = 110;

        // Glowing circle
        ctx.beginPath();
        ctx.arc(cx, cy, r + 15, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        if (logoImg.complete) {
          ctx.drawImage(logoImg, cx - r, cy - r, r * 2, r * 2);
        }
        ctx.restore();

        // Rings around logo
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.restore();

        // Intro Titles
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fde047';
        ctx.font = 'bold 36px Nunito';
        ctx.fillText('Nai • Feel Every Story Presents', canvas.width / 2, 620);

        ctx.fillStyle = '#ffffff';
        ctx.font = '900 68px Nunito';
        ctx.fillText('Oliver the Little Fox & The Whispering Tree', canvas.width / 2, 710);

        ctx.fillStyle = '#38bdf8';
        ctx.font = '600 32px Quicksand';
        ctx.fillText('A Calming Bedtime Adventure for Sweet Dreams 🌙✨', canvas.width / 2, 780);

        renderParticles();
        return;
      }

      // CHAPTER SCENES
      let curChapter = null;
      let chapProgress = 0;

      for (const ch of timeline.chapters) {
        if (curTime >= ch.start && curTime < ch.end) {
          curChapter = ch;
          chapProgress = (curTime - ch.start) / ch.dur;
          break;
        }
      }

      if (curChapter) {
        ctx.save();
        const img = sceneImages[curChapter.index];
        if (img && img.complete) {
          // Slow cinematic Ken Burns zoom and subtle pan
          const scale = 1.0 + chapProgress * 0.07;
          const panX = (chapProgress - 0.5) * 40;

          const w = canvas.width * scale;
          const h = canvas.height * scale;
          const x = (canvas.width - w) / 2 + panX;
          const y = (canvas.height - h) / 2;

          ctx.drawImage(img, x, y, w, h);
        }

        // Vignette & Subtitle Background Gradient
        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
        grad.addColorStop(0.2, 'rgba(0, 0, 0, 0.0)');
        grad.addColorStop(0.7, 'rgba(0, 0, 0, 0.25)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0.85)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Watermark in canvas (Top Right)
        ctx.save();
        const lcx = canvas.width - 90;
        const lcy = 80;
        const lr = 38;

        ctx.beginPath();
        ctx.arc(lcx, lcy, lr, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        if (logoImg.complete) {
          ctx.drawImage(logoImg, lcx - lr, lcy - lr, lr * 2, lr * 2);
        }
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.arc(lcx, lcy, lr, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.8)';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.textAlign = 'right';
        ctx.fillStyle = '#fde047';
        ctx.font = 'bold 22px Nunito';
        ctx.fillText('Nai • Feel Every Story', lcx - lr - 15, lcy + 7);
        ctx.restore();

        // Subtitles Box
        const subData = curChapter.chapData.subtitles;
        const chapElapsed = curTime - curChapter.start;
        let activeSub = subData[0].text;
        for (let s = subData.length - 1; s >= 0; s--) {
          if (chapElapsed >= subData[s].at) {
            activeSub = subData[s].text;
            break;
          }
        }

        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.lineWidth = 2.5;
        roundRect(ctx, 220, canvas.height - 180, canvas.width - 440, 110, 24, true, true);

        ctx.fillStyle = '#fde047';
        ctx.font = 'bold 22px Nunito';
        ctx.fillText('Chapter ' + curChapter.chapData.id + ': ' + curChapter.chapData.title, canvas.width / 2, canvas.height - 145);

        ctx.fillStyle = '#ffffff';
        ctx.font = '700 30px Quicksand';
        ctx.fillText(activeSub, canvas.width / 2, canvas.height - 100);

        ctx.restore();
        renderParticles();
        return;
      }

      // OUTRO SCENE
      if (curTime >= timeline.outro.start) {
        const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        bgGrad.addColorStop(0, '#020617');
        bgGrad.addColorStop(0.5, '#0f172a');
        bgGrad.addColorStop(1, '#020617');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Outro Centered Logo
        ctx.save();
        const ocx = canvas.width / 2;
        const ocy = 430;
        const or = 115;

        ctx.beginPath();
        ctx.arc(ocx, ocy, or, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        if (logoImg.complete) {
          ctx.drawImage(logoImg, ocx - or, ocy - or, or * 2, or * 2);
        }
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.arc(ocx, ocy, or, 0, Math.PI * 2);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 6;
        ctx.stroke();
        ctx.restore();

        ctx.textAlign = 'center';
        ctx.fillStyle = '#fde047';
        ctx.font = '900 52px Nunito';
        ctx.fillText('Sweet Dreams, Little Ones 🌙⭐', canvas.width / 2, 630);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px Quicksand';
        ctx.fillText('Subscribe to Channel Nai for more bedtime stories!', canvas.width / 2, 710);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        roundRect(ctx, 600, 780, 720, 110, 24, true, true);

        ctx.fillStyle = '#fde047';
        ctx.font = 'bold 32px Nunito';
        ctx.fillText('🔔 Nai • Feel Every Story 🔔', canvas.width / 2, 850);

        renderParticles();
      }
    }

    function renderParticles() {
      ctx.save();
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.da;
        if (p.alpha <= 0.2 || p.alpha >= 0.95) p.da = -p.da;
        if (p.y < 0) { p.y = 1080; p.x = Math.random() * 1920; }
        if (p.x < 0) p.x = 1920;
        if (p.x > 1920) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.shadowColor = '#fde047';
        ctx.shadowBlur = 10;
        ctx.fill();
      });
      ctx.restore();
    }

    function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
      if (typeof radius === 'undefined') radius = 5;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      if (fill) ctx.fill();
      if (stroke) ctx.stroke();
    }

    async function startPlayback() {
      const status = document.getElementById('statusText');
      status.innerText = '⏳ Loading soothing audio engine and 1080p artwork...';
      
      await initAudioEngine();
      isPlaying = true;
      startTime = performance.now();

      scheduleAllAudio(audioCtx.currentTime, null);
      status.innerText = '▶️ Playing Bedtime Story: Oliver the Little Fox & The Whispering Tree';

      function loop() {
        if (!isPlaying) return;
        const elapsed = (performance.now() - startTime) / 1000;
        drawFrame(elapsed);
        if (elapsed < timeline.totalDuration) {
          animId = requestAnimationFrame(loop);
        } else {
          isPlaying = false;
          status.innerText = '✅ Bedtime story completed! Ready to export';
        }
      }
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(loop);
    }

    async function recordAndExportVideo() {
      const status = document.getElementById('statusText');
      const btn = document.getElementById('btnRecord');
      btn.disabled = true;
      status.innerText = '🔴 Recording 1920x1080 Full HD Bedtime Story Video...';

      await initAudioEngine();
      const canvasStream = canvas.captureStream(30);
      const combinedStream = new MediaStream([
        ...canvasStream.getVideoTracks(),
        ...audioDest.stream.getAudioTracks()
      ]);

      recordedChunks = [];
      const options = { mimeType: 'video/webm;codecs=vp9,opus' };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options.mimeType = 'video/webm';
      }

      mediaRecorder = new MediaRecorder(combinedStream, options);
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) recordedChunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Nai_The_Brave_Little_Fox_Long_Story.webm';
        a.click();
        status.innerHTML = '🎉 <b>Video downloaded successfully!</b> (Nai_The_Brave_Little_Fox_Long_Story.webm)';
        btn.disabled = false;
      };

      mediaRecorder.start();
      isPlaying = true;
      startTime = performance.now();
      scheduleAllAudio(audioCtx.currentTime, audioDest);

      function loop() {
        const elapsed = (performance.now() - startTime) / 1000;
        drawFrame(elapsed);
        if (elapsed < timeline.totalDuration) {
          animId = requestAnimationFrame(loop);
        } else {
          isPlaying = false;
          mediaRecorder.stop();
        }
      }
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(loop);
    }

    window.onload = () => {
      drawFrame(0);
    };
  </script>
</body>
</html>`;

const outPath = path.join(baseDir, 'nai_long_story1.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('✅ Generated nai_long_story1.html successfully at:', outPath);
console.log('File size:', (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2), 'MB');
