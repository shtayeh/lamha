const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const imgDir = path.join(baseDir, 'nai_story1');
const audioDir = path.join(baseDir, 'nai_story1_audio');

// Load Images as Base64
const img1B64 = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(imgDir, 'scene1.jpg')).toString('base64');
const img2B64 = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(imgDir, 'scene2.jpg')).toString('base64');
const img3B64 = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(imgDir, 'scene3.jpg')).toString('base64');
const img4B64 = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(imgDir, 'scene4.jpg')).toString('base64');

// Load Audio as Base64
const audioClips = ['scene1', 'scene2', 'scene3', 'scene4', 'outro'];
const audioData = {};
for (const c of audioClips) {
  const p = path.join(audioDir, c + '.mp3');
  if (fs.existsSync(p)) {
    audioData[c] = 'data:audio/mp3;base64,' + fs.readFileSync(p).toString('base64');
  }
}

const storyScenes = [
  {
    id: 1,
    title: "Deep in the Whispering Woods",
    text: "Deep in the cozy Whispering Woods, little Barnaby the bunny loved watching the night sky twinkle. But tonight... a soft golden light was glowing right on the forest floor.",
    subtitles: [
      { text: "Deep in the cozy Whispering Woods...", at: 0.0 },
      { text: "Little Barnaby loved watching the sky twinkle.", at: 3.2 },
      { text: "Tonight, a soft golden light was glowing on the ground!", at: 6.8 }
    ]
  },
  {
    id: 2,
    title: "The Lost Little Star",
    text: "Hiding beneath the dewy leaves was a tiny, trembling star. 'Don't be afraid,' Barnaby whispered with a warm smile, 'I am here to help you get back home.'",
    subtitles: [
      { text: "Hiding beneath the leaves was a tiny, trembling star.", at: 0.0 },
      { text: "'Don't be afraid,' Barnaby whispered with a smile...", at: 4.0 },
      { text: "'I am here to help you get back home!'", at: 7.2 }
    ]
  },
  {
    id: 3,
    title: "The Leap of Kindness",
    text: "Barnaby climbed to the very top of the tallest mossy hill. He held the warm little star up high... and with a brave little hop, tossed her gently into the midnight breeze!",
    subtitles: [
      { text: "Barnaby climbed to the tallest mossy hill.", at: 0.0 },
      { text: "He held the warm little star up high...", at: 3.8 },
      { text: "And with a brave hop, tossed her into the midnight breeze!", at: 7.0 }
    ]
  },
  {
    id: 4,
    title: "When You Help Someone Shine",
    text: "The night sky lit up with a sparkling burst of pure joy! The little star winked from above, and Barnaby smiled... knowing that when you help someone shine, you brighten the whole world.",
    subtitles: [
      { text: "The night sky lit up with a sparkling burst of joy!", at: 0.0 },
      { text: "The little star winked from above...", at: 4.2 },
      { text: "When you help someone shine, you brighten the whole world. ✨", at: 7.5 }
    ]
  }
];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Barnaby and the Lost Little Star | Channel Nai (Kids Bedtime Story)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Quicksand', 'Nunito', sans-serif; }
    .glow-gold { box-shadow: 0 0 40px rgba(251, 191, 36, 0.45); }
    .glow-cyan { box-shadow: 0 0 35px rgba(56, 189, 248, 0.35); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-2xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
      ✨ Channel Nai • 3D Pixar Bedtime Story Shorts (9:16)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-['Nunito']">
      Barnaby & The Lost Little Star <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-300 to-sky-300">🐰⭐</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      A heartwarming kids story with cinematic 3D animation, soothing bedtime narrator, and stardust effects
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl">

    <!-- Phone Mockup Frame (9:16 Shorts) -->
    <div class="relative w-[340px] sm:w-[380px] h-[670px] sm:h-[720px] bg-slate-900 rounded-[48px] p-3.5 border-4 border-amber-500/40 glow-gold flex flex-col overflow-hidden select-none">
      
      <!-- Top Island -->
      <div class="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-end px-3">
        <span class="w-2 h-2 rounded-full bg-amber-950 border border-amber-700"></span>
      </div>

      <!-- Inside Phone Screen -->
      <div id="phoneScreen" class="relative w-full h-full bg-slate-950 rounded-[38px] overflow-hidden flex flex-col">
        
        <!-- Video Canvas -->
        <canvas id="videoCanvas" width="720" height="1280" class="w-full h-full object-cover"></canvas>

        <!-- Top Channel Header Overlay -->
        <div class="absolute top-12 left-0 right-0 z-30 px-4 flex items-center justify-between pointer-events-none">
          <div class="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span class="text-xs font-bold text-amber-200">Nai • Feel Every Story</span>
          </div>
          <span class="text-[11px] font-semibold text-sky-300 bg-black/60 px-2.5 py-1 rounded-full border border-sky-500/30">
            Bedtime Story ✨
          </span>
        </div>

        <!-- Watermark CTA -->
        <div class="absolute bottom-9 left-0 right-0 z-30 px-6 text-center pointer-events-none">
          <span class="inline-block px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[11px] text-amber-200 font-bold border border-amber-500/40 shadow">
            💖 Subscribe to Nai for more magical stories
          </span>
        </div>

      </div>
    </div>

    <!-- Controls Panel -->
    <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-pink-500 flex items-center justify-center font-bold text-slate-950 text-base shadow">
            Nai
          </div>
          <div>
            <h2 class="text-lg font-bold text-white font-['Nunito']">Nai - Feel Every Story</h2>
            <p class="text-xs text-amber-400 font-semibold">Kids Stories & Bedtime Tales</p>
          </div>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed mt-2">
          Ultra-cute 3D Pixar-style bedtime story video created specifically for <b>Channel Nai</b>. Features soothing American English storyteller voice (Jenny), dynamic Ken Burns panning, glowing stardust particles, and floating fireflies.
        </p>
      </div>

      <div class="space-y-3">
        <button id="btnPlay" onclick="startPlayback()" class="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 hover:from-amber-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/25 transition flex items-center justify-center gap-2 text-sm font-['Nunito']">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          Play Preview with Storyteller Voice
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="w-full py-3.5 px-4 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 text-white font-bold rounded-2xl shadow-lg shadow-sky-500/30 transition flex items-center justify-center gap-2 text-sm animate-pulse font-['Nunito']">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          Export & Download Video (WebM / MP4)
        </button>
      </div>

      <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-950/60 py-2.5 px-3 rounded-xl border border-slate-800">
        Ready to preview and export
      </div>

      <div class="border-t border-slate-800/80 pt-4">
        <h3 class="text-xs font-bold text-amber-300 mb-2 font-['Nunito']">Story Scenes Breakdown:</h3>
        <ul class="text-xs text-slate-300 space-y-2">
          ${storyScenes.map((s, idx) => `
          <li class="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
            <span class="text-amber-400 font-bold text-[11px]">Scene ${s.id}: ${s.title}</span>
            <p class="text-slate-300 text-[11px] mt-0.5 line-clamp-2">${s.text}</p>
          </li>`).join('')}
        </ul>
      </div>
    </div>

  </div>

  <script>
    const canvas = document.getElementById('videoCanvas');
    const ctx = canvas.getContext('2d');

    const sceneImages = [];
    const imgUrls = [
      "${img1B64}",
      "${img2B64}",
      "${img3B64}",
      "${img4B64}"
    ];

    imgUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      sceneImages.push(img);
    });

    const audioSources = ${JSON.stringify(audioData)};
    const scenes = ${JSON.stringify(storyScenes)};

    let audioCtx = null;
    let audioDest = null;
    const audioBuffers = {};

    let timeline = {
      scenes: [],
      outro: { start: 40, audioStart: 40.5, end: 46 },
      totalDuration: 46
    };

    function buildDynamicTimeline() {
      let cur = 0;
      timeline.scenes = [];

      for (let i = 0; i < scenes.length; i++) {
        const clipKey = 'scene' + (i + 1);
        const dur = (audioBuffers[clipKey] && audioBuffers[clipKey].duration) ? audioBuffers[clipKey].duration : 8.5;
        const start = cur;
        const end = start + dur + 1.2;

        timeline.scenes.push({
          index: i,
          start: start,
          end: end,
          dur: end - start,
          audioStart: start + 0.3,
          clipKey: clipKey,
          sceneData: scenes[i]
        });

        cur = end;
      }

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 4.5;
      timeline.outro = {
        start: cur,
        audioStart: cur + 0.3,
        end: cur + outroDur + 1.5
      };
      timeline.totalDuration = timeline.outro.end;
    }

    // Gentle particle system (Fireflies & Stardust)
    const particles = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * 720,
        y: Math.random() * 1280,
        r: Math.random() * 3 + 1.5,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -Math.random() * 0.8 - 0.2,
        alpha: Math.random(),
        da: (Math.random() - 0.5) * 0.03,
        color: Math.random() > 0.4 ? 'rgba(253, 224, 71, ' : 'rgba(56, 189, 248, '
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

    // Gentle magical chime chords for fairy tale mood
    function playMagicalChime(time, destination) {
      if (!audioCtx) return;
      [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time + i * 0.12);
        gain.gain.setValueAtTime(0.08, time + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + i * 0.12 + 1.2);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        if (destination) gain.connect(destination);
        osc.start(time + i * 0.12);
        osc.stop(time + i * 0.12 + 1.2);
        scheduledSources.push(osc);
      });
    }

    function scheduleAllAudio(startNow, dest) {
      scheduledSources.forEach(s => { try { s.stop(); } catch(e){} });
      scheduledSources.length = 0;

      timeline.scenes.forEach((sc, i) => {
        playBuffer(audioBuffers[sc.clipKey], startNow + sc.audioStart, dest);
        playMagicalChime(startNow + sc.start, dest);
      });

      playBuffer(audioBuffers['outro'], startNow + timeline.outro.audioStart, dest);
      playMagicalChime(startNow + timeline.outro.start, dest);
    }

    function drawFrame(elapsed) {
      const curTime = elapsed % timeline.totalDuration;

      // Find current scene
      let curScene = null;
      let sceneProgress = 0;

      for (const sc of timeline.scenes) {
        if (curTime >= sc.start && curTime < sc.end) {
          curScene = sc;
          sceneProgress = (curTime - sc.start) / sc.dur;
          break;
        }
      }

      ctx.save();
      if (curScene) {
        const img = sceneImages[curScene.index];
        if (img && img.complete) {
          // Ken Burns Effect: gentle zoom and slight pan
          const scale = 1.0 + sceneProgress * 0.08;
          const panY = (sceneProgress - 0.5) * 30;

          const w = canvas.width * scale;
          const h = canvas.height * scale;
          const x = (canvas.width - w) / 2;
          const y = (canvas.height - h) / 2 + panY;

          ctx.drawImage(img, x, y, w, h);
        }

        // Cinematic vignette / shadow overlay
        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
        grad.addColorStop(0.2, 'rgba(0, 0, 0, 0.0)');
        grad.addColorStop(0.65, 'rgba(0, 0, 0, 0.1)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0.85)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw Subtitles Box
        const subData = curScene.sceneData.subtitles;
        const sceneElapsed = curTime - curScene.start;
        let activeSub = subData[0].text;
        for (let s = subData.length - 1; s >= 0; s--) {
          if (sceneElapsed >= subData[s].at) {
            activeSub = subData[s].text;
            break;
          }
        }

        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
        ctx.lineWidth = 2;
        roundRect(ctx, 40, canvas.height - 290, canvas.width - 80, 150, 24, true, true);

        ctx.fillStyle = '#fef08a';
        ctx.font = 'bold 22px Nunito';
        ctx.fillText('✨ Barnaby & The Little Star', canvas.width / 2, canvas.height - 250);

        ctx.fillStyle = '#ffffff';
        ctx.font = '700 28px Quicksand';
        wrapText(ctx, activeSub, canvas.width / 2, canvas.height - 200, canvas.width - 120, 36);

      } else {
        // OUTRO SCENE
        const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        bgGrad.addColorStop(0, '#020617');
        bgGrad.addColorStop(0.5, '#0f172a');
        bgGrad.addColorStop(1, '#020617');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Channel Logo / Badge
        ctx.save();
        ctx.beginPath();
        ctx.arc(canvas.width / 2, 430, 110, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(251, 191, 36, 0.15)';
        ctx.fill();
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 6;
        ctx.stroke();

        ctx.textAlign = 'center';
        ctx.fillStyle = '#fef08a';
        ctx.font = '900 68px Nunito';
        ctx.fillText('Nai', canvas.width / 2, 445);
        ctx.restore();

        ctx.textAlign = 'center';
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 32px Quicksand';
        ctx.fillText('Feel Every Story ✨', canvas.width / 2, 600);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 42px Nunito';
        ctx.fillText('Sweet Dreams, Little Ones! 🌙', canvas.width / 2, 670);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
        ctx.lineWidth = 2;
        roundRect(ctx, 70, 740, canvas.width - 140, 120, 24, true, true);

        ctx.fillStyle = '#fef3c7';
        ctx.font = 'bold 26px Nunito';
        ctx.fillText('Subscribe to Channel Nai 🔔', canvas.width / 2, 795);
        ctx.fillStyle = '#bae6fd';
        ctx.font = '600 22px Quicksand';
        ctx.fillText('More magical bedtime adventures daily', canvas.width / 2, 835);
      }
      ctx.restore();

      // Render Floating Stardust & Fireflies
      ctx.save();
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.da;
        if (p.alpha <= 0.2 || p.alpha >= 0.95) p.da = -p.da;
        if (p.y < 0) { p.y = 1280; p.x = Math.random() * 720; }
        if (p.x < 0) p.x = 720;
        if (p.x > 720) p.x = 0;

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

    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(' ');
      let line = '';
      const lines = [];

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      const totalH = lines.length * lineHeight;
      let startY = y - (totalH / 2) + (lineHeight / 2);

      for (let k = 0; k < lines.length; k++) {
        ctx.fillText(lines[k].trim(), x, startY + (k * lineHeight));
      }
    }

    async function startPlayback() {
      const status = document.getElementById('statusText');
      status.innerText = '⏳ Loading bedtime audio engine and story...';
      
      await initAudioEngine();
      isPlaying = true;
      startTime = performance.now();

      scheduleAllAudio(audioCtx.currentTime, null);
      status.innerText = '▶️ Story preview playing with Jenny storytelling voice!';

      function loop() {
        if (!isPlaying) return;
        const elapsed = (performance.now() - startTime) / 1000;
        drawFrame(elapsed);
        if (elapsed < timeline.totalDuration) {
          animId = requestAnimationFrame(loop);
        } else {
          isPlaying = false;
          status.innerText = '✅ Story completed! Ready to export';
        }
      }
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(loop);
    }

    async function recordAndExportVideo() {
      const status = document.getElementById('statusText');
      const btn = document.getElementById('btnRecord');
      btn.disabled = true;
      status.innerText = '🔴 Recording 720x1280 Kids Bedtime Video...';

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
        a.download = 'Nai_Barnaby_And_The_Lost_Little_Star.webm';
        a.click();
        status.innerHTML = '🎉 <b>Video downloaded successfully!</b> (Nai_Barnaby_And_The_Lost_Little_Star.webm)';
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

const outPath = path.join(baseDir, 'nai_story1.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('✅ Generated nai_story1.html successfully at:', outPath);
console.log('File size:', (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2), 'MB');
