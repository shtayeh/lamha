const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const imgPath = path.join(baseDir, 'nai_song1', 'stage.jpg');
const audioDir = path.join(baseDir, 'nai_song1_audio');
const logoPath = path.join(baseDir, 'nai_channel_logo.png');

// Load Assets
const stageB64 = 'data:image/jpeg;base64,' + fs.readFileSync(imgPath).toString('base64');
const logoB64 = 'data:image/png;base64,' + fs.readFileSync(logoPath).toString('base64');

const audioClips = ['intro', 'chorus1', 'verse1', 'verse2', 'verse3', 'chorus2', 'outro'];
const audioData = {};
for (const c of audioClips) {
  const p = path.join(audioDir, c + '.mp3');
  if (fs.existsSync(p)) {
    audioData[c] = 'data:audio/mp3;base64,' + fs.readFileSync(p).toString('base64');
  }
}

const songSections = [
  {
    key: "chorus1",
    title: "The Animal Hop & Clap! 🐾",
    action: "CLAP YOUR HANDS & HOP! 👏🐰",
    actionColor: "#f43f5e",
    lyrics: "Clap, clap, clap your hands! Wiggle your happy nose! Hop like a bunny! Jump in the air!"
  },
  {
    key: "verse1",
    title: "Kitty Cat Spin 🐱",
    action: "MEOW & SPIN AROUND! 🐱💫",
    actionColor: "#ec4899",
    lyrics: "Show me your kitty paws! Meow, meow, meow! Spin around in a circle now! Wheeee!"
  },
  {
    key: "verse2",
    title: "Puppy Dog Stomp 🐶",
    action: "WAG YOUR TAIL & STOMP! 🐶🦶",
    actionColor: "#38bdf8",
    lyrics: "Wag your tail like a puppy dog! Woof, woof, woof! Stomp, stomp your happy feet!"
  },
  {
    key: "verse3",
    title: "Mighty Lion Roar 🦁",
    action: "ROAR & JUMP HIGH! 🦁⭐",
    actionColor: "#f59e0b",
    lyrics: "Roar like a lion, big and proud! Roaaar! Reach for the stars, touch the cloud!"
  },
  {
    key: "chorus2",
    title: "Big Dance Finale! 🎉",
    action: "DANCE, JUMP & CELEBRATE! 🥳💃",
    actionColor: "#10b981",
    lyrics: "Clap, clap, clap your hands! Wiggle all around! Jump, touch the ground! HOORAY!"
  }
];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Animal Dance & Clap! 🐾 (Interactive Kids Action Song) | Channel Nai</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700;800;900&family=Nunito:wght@700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Fredoka', 'Nunito', sans-serif; }
    .glow-rainbow { box-shadow: 0 0 50px rgba(244, 63, 94, 0.4); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-3xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-pink-400 animate-ping"></span>
      🎵 Original Copyrighted Interactive Song • 16:9 Full HD 1080p
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-['Nunito']">
      The Animal Hop & Clap! <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-300">🐾🐰🐶🐱🦁</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      100% original lyrics & interactive movement music for Channel Nai • Complete Copyright Ownership (© 2026 Nai Kids)
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col items-center justify-center gap-8 w-full max-w-5xl">

    <!-- 16:9 Widescreen Cinema Frame -->
    <div class="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-3xl p-3 border-4 border-pink-500/40 glow-rainbow shadow-2xl overflow-hidden select-none">
      
      <!-- Inside Screen -->
      <div id="cinemaScreen" class="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden flex flex-col">
        
        <!-- Video Canvas 1920x1080 Full HD -->
        <canvas id="videoCanvas" width="1920" height="1080" class="w-full h-full object-cover"></canvas>

        <!-- Official Nai Watermark (Top Right) -->
        <div class="absolute top-5 right-6 z-30 flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-pink-500/30 pointer-events-none">
          <img src="${logoB64}" alt="Nai Logo" class="w-7 h-7 rounded-full shadow object-cover">
          <span class="text-xs font-bold text-pink-200 font-['Nunito']">Nai • Feel Every Story</span>
        </div>

        <!-- Copyright Badge (Bottom Left) -->
        <div class="absolute bottom-5 left-6 z-30 pointer-events-none">
          <span class="text-[11px] font-semibold text-white/70 bg-black/50 px-3 py-1 rounded-full border border-white/10">
            © 2026 Nai Kids • All Rights Reserved
          </span>
        </div>

      </div>
    </div>

    <!-- Controls Panel -->
    <div class="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl">
      <div class="flex items-center gap-4">
        <img src="${logoB64}" alt="Nai Channel Logo" class="w-14 h-14 rounded-full border-2 border-pink-500/60 shadow-lg object-cover">
        <div>
          <h2 class="text-lg font-bold text-white font-['Nunito']">Channel Nai — Interactive Kids Action Song</h2>
          <p class="text-xs text-pink-400 font-semibold">16:9 Widescreen • Full HD 1080p • 100% Original Copyright</p>
          <p class="text-[11px] text-emerald-400 mt-1 font-bold">✓ 100% Exclusive Copyright Owned by You</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <button id="btnPlay" onclick="startPlayback()" class="py-3 px-6 bg-gradient-to-r from-pink-500 via-amber-400 to-emerald-400 hover:from-pink-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-pink-500/25 transition flex items-center justify-center gap-2 text-sm font-['Nunito'] whitespace-nowrap">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          Play Song Preview
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="py-3 px-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/30 transition flex items-center justify-center gap-2 text-sm animate-pulse font-['Nunito'] whitespace-nowrap">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          Export Video File (MP4 / WebM)
        </button>
      </div>
    </div>

    <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-900 py-2.5 px-6 rounded-xl border border-slate-800">
      Ready to sing, dance, and export
    </div>

  </div>

  <script>
    const canvas = document.getElementById('videoCanvas');
    const ctx = canvas.getContext('2d');

    const stageImg = new Image(); stageImg.src = "${stageB64}";
    const logoImg = new Image(); logoImg.src = "${logoB64}";

    const audioSources = ${JSON.stringify(audioData)};
    const sections = ${JSON.stringify(songSections)};

    let audioCtx = null;
    let audioDest = null;
    const audioBuffers = {};

    let timeline = {
      intro: { start: 0, end: 5.5 },
      sections: [],
      outro: { start: 80, audioStart: 80.5, end: 90 },
      totalDuration: 90
    };

    function buildDynamicTimeline() {
      let cur = 0;
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 5.2;
      timeline.intro = { start: cur, end: cur + introDur + 0.5 };
      cur = timeline.intro.end;

      timeline.sections = [];
      for (let i = 0; i < sections.length; i++) {
        const key = sections[i].key;
        const dur = (audioBuffers[key] && audioBuffers[key].duration) ? audioBuffers[key].duration : 12.0;
        const start = cur;
        const end = start + dur + 0.8;

        timeline.sections.push({
          index: i,
          key: key,
          start: start,
          end: end,
          dur: end - start,
          audioStart: start + 0.2,
          data: sections[i]
        });

        cur = end;
      }

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 5.0;
      timeline.outro = {
        start: cur,
        audioStart: cur + 0.3,
        end: cur + outroDur + 1.5
      };
      timeline.totalDuration = timeline.outro.end;
    }

    // 100 Joyful Confetti & Musical Notes
    const confetti = [];
    const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#facc15'];
    for (let i = 0; i < 90; i++) {
      confetti.push({
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        w: Math.random() * 14 + 8,
        h: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: Math.random() * 4 + 2,
        vx: (Math.random() - 0.5) * 3,
        rot: Math.random() * Math.PI * 2,
        drot: (Math.random() - 0.5) * 0.12
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

    // Upbeat kids dance drum & synth rhythm synthesizer (100% Original Melody)
    function playDanceBeat(time, destination, freq = 523.25) {
      if (!audioCtx) return;
      // Kick drum
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, time);
      osc.frequency.exponentialRampToValueAtTime(30, time + 0.12);
      gain.gain.setValueAtTime(0.4, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      if (destination) gain.connect(destination);
      osc.start(time);
      osc.stop(time + 0.12);
      scheduledSources.push(osc);

      // Cheerful synth marimba note
      const mOsc = audioCtx.createOscillator();
      const mGain = audioCtx.createGain();
      mOsc.type = 'sine';
      mOsc.frequency.setValueAtTime(freq, time + 0.05);
      mGain.gain.setValueAtTime(0.18, time + 0.05);
      mGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.35);
      mOsc.connect(mGain);
      mGain.connect(audioCtx.destination);
      if (destination) mGain.connect(destination);
      mOsc.start(time + 0.05);
      mOsc.stop(time + 0.35);
      scheduledSources.push(mOsc);
    }

    function scheduleAllAudio(startNow, dest) {
      scheduledSources.forEach(s => { try { s.stop(); } catch(e){} });
      scheduledSources.length = 0;

      // Play Intro
      playBuffer(audioBuffers['intro'], startNow + timeline.intro.start, dest);

      // Play continuous upbeat background dance beat (BPM ~ 120 = beat every 0.5s)
      const totalSec = timeline.totalDuration;
      const notes = [523.25, 659.25, 783.99, 880.00, 1046.50];
      for (let t = 0; t < totalSec; t += 0.5) {
        const note = notes[Math.floor((t * 2) % notes.length)];
        playDanceBeat(startNow + t, dest, note);
      }

      // Schedule all song vocal sections
      timeline.sections.forEach((sec) => {
        playBuffer(audioBuffers[sec.key], startNow + sec.audioStart, dest);
      });

      // Play Outro
      playBuffer(audioBuffers['outro'], startNow + timeline.outro.audioStart, dest);
    }

    function drawFrame(elapsed) {
      const curTime = elapsed % timeline.totalDuration;

      // Rhythmic Beat Pulse (Synced to 120 BPM = 2 beats per second)
      const beatProgress = (elapsed * 2) % 1;
      const beatScale = 1.0 + Math.sin(beatProgress * Math.PI) * 0.025;

      // Draw Main Stage Background
      ctx.save();
      if (stageImg.complete) {
        const w = canvas.width * beatScale;
        const h = canvas.height * beatScale;
        const x = (canvas.width - w) / 2;
        const y = (canvas.height - h) / 2;
        ctx.drawImage(stageImg, x, y, w, h);
      } else {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Subtle vignette / darkening gradient
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
      grad.addColorStop(0.2, 'rgba(0, 0, 0, 0.0)');
      grad.addColorStop(0.65, 'rgba(0, 0, 0, 0.2)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.85)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Watermark in canvas (Top Right)
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
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.textAlign = 'right';
      ctx.fillStyle = '#fde047';
      ctx.font = 'bold 22px Nunito';
      ctx.fillText('Nai Kids • Original Song', lcx - lr - 15, lcy + 7);
      ctx.restore();

      // Copyright declaration on bottom left
      ctx.save();
      ctx.textAlign = 'left';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = 'bold 18px Quicksand';
      ctx.fillText('© 2026 Channel Nai • All Rights Reserved', 50, canvas.height - 35);
      ctx.restore();

      // INTERACTIVE ACTION HEADER BANNER
      if (curTime < timeline.intro.end) {
        // INTRO BANNER
        ctx.save();
        ctx.textAlign = 'center';

        ctx.fillStyle = 'rgba(244, 63, 94, 0.9)';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        roundRect(ctx, 360, 60, canvas.width - 720, 110, 30, true, true);

        ctx.fillStyle = '#ffffff';
        ctx.font = '900 48px Nunito';
        ctx.fillText('STAND UP & DANCE! 🎵💃', canvas.width / 2, 135);

        // Subtitle
        ctx.fillStyle = '#fde047';
        ctx.font = 'bold 32px Fredoka';
        ctx.fillText('Get ready to clap, hop, and roar! 🐾', canvas.width / 2, 940);
        ctx.restore();

      } else {
        // FIND ACTIVE SECTION
        let activeSec = null;
        for (const s of timeline.sections) {
          if (curTime >= s.start && curTime < s.end) {
            activeSec = s;
            break;
          }
        }

        if (activeSec) {
          ctx.save();
          ctx.textAlign = 'center';

          // Bouncing Action Pill
          const pillBounce = Math.sin(elapsed * 6) * 10;
          const py = 60 + pillBounce;

          ctx.fillStyle = activeSec.data.actionColor;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 4.5;
          roundRect(ctx, 320, py, canvas.width - 640, 120, 32, true, true);

          ctx.fillStyle = '#ffffff';
          ctx.font = '900 52px Nunito';
          ctx.fillText(activeSec.data.action, canvas.width / 2, py + 78);

          // Lower Lyrics Karaoke Box
          ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
          ctx.strokeStyle = activeSec.data.actionColor;
          ctx.lineWidth = 3;
          roundRect(ctx, 240, canvas.height - 180, canvas.width - 480, 110, 26, true, true);

          ctx.fillStyle = '#fde047';
          ctx.font = 'bold 24px Nunito';
          ctx.fillText(activeSec.data.title, canvas.width / 2, canvas.height - 142);

          ctx.fillStyle = '#ffffff';
          ctx.font = '700 32px Fredoka';
          ctx.fillText(activeSec.data.lyrics, canvas.width / 2, canvas.height - 98);

          ctx.restore();
        } else if (curTime >= timeline.outro.start) {
          // OUTRO CELEBRATION
          ctx.save();
          ctx.textAlign = 'center';

          ctx.fillStyle = '#10b981';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 4;
          roundRect(ctx, 400, 60, canvas.width - 800, 110, 30, true, true);

          ctx.fillStyle = '#ffffff';
          ctx.font = '900 52px Nunito';
          ctx.fillText('HOORAY! YOU DID IT! 🎉🥳', canvas.width / 2, 135);

          ctx.fillStyle = '#fde047';
          ctx.font = 'bold 36px Fredoka';
          ctx.fillText('Subscribe to Channel Nai for more original kids songs! 🔔', canvas.width / 2, 940);
          ctx.restore();
        }
      }

      // Render Floating Confetti
      ctx.save();
      confetti.forEach(c => {
        c.y += c.vy;
        c.x += c.vx;
        c.rot += c.drot;
        if (c.y > 1080) { c.y = -20; c.x = Math.random() * 1920; }

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rot);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
        ctx.restore();
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
      status.innerText = '⏳ Loading energetic dance music and audio stems...';
      
      await initAudioEngine();
      isPlaying = true;
      startTime = performance.now();

      scheduleAllAudio(audioCtx.currentTime, null);
      status.innerText = '▶️ Playing The Animal Hop & Clap! Dance along!';

      function loop() {
        if (!isPlaying) return;
        const elapsed = (performance.now() - startTime) / 1000;
        drawFrame(elapsed);
        if (elapsed < timeline.totalDuration) {
          animId = requestAnimationFrame(loop);
        } else {
          isPlaying = false;
          status.innerText = '✅ Song completed! Ready to export';
        }
      }
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(loop);
    }

    async function recordAndExportVideo() {
      const status = document.getElementById('statusText');
      const btn = document.getElementById('btnRecord');
      btn.disabled = true;
      status.innerText = '🔴 Recording 1920x1080 Interactive Kids Song Video...';

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
        a.download = 'Nai_Animal_Hop_And_Clap_Song.webm';
        a.click();
        status.innerHTML = '🎉 <b>Video downloaded successfully!</b> (Nai_Animal_Hop_And_Clap_Song.webm)';
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

const outPath = path.join(baseDir, 'nai_interactive_song1.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('✅ Generated nai_interactive_song1.html successfully at:', outPath);
console.log('File size:', (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2), 'MB');
