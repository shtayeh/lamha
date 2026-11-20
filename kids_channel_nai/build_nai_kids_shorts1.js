const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const imgDir = path.join(baseDir, 'nai_kids_quiz1');
const audioDir = path.join(baseDir, 'nai_kids_quiz1_audio');

// Load Images as Base64
const catB64 = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(imgDir, 'cat.jpg')).toString('base64');
const dogB64 = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(imgDir, 'dog.jpg')).toString('base64');
const lionB64 = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(imgDir, 'lion.jpg')).toString('base64');

// Load Audio as Base64
const audioClips = ['intro', 'q1_ask', 'q1_ans', 'q2_ask', 'q2_ans', 'q3_ask', 'q3_ans', 'outro'];
const audioData = {};
for (const c of audioClips) {
  const p = path.join(audioDir, c + '.mp3');
  if (fs.existsSync(p)) {
    audioData[c] = 'data:audio/mp3;base64,' + fs.readFileSync(p).toString('base64');
  }
}

const quizRounds = [
  {
    num: "Round 1 🐾",
    sound: "“Meow! Meow!” 🐱",
    question: "What animal makes this sound?",
    answer: "A Cute Kitty Cat! 🐱",
    image: catB64,
    color: "#f472b6"
  },
  {
    num: "Round 2 🐾",
    sound: "“Woof! Woof!” 🐶",
    question: "Who makes this sound?",
    answer: "A Happy Puppy Dog! 🐶",
    image: dogB64,
    color: "#38bdf8"
  },
  {
    num: "Round 3 🐾",
    sound: "“ROAAAR!” 🦁",
    question: "Who is the king of the jungle?",
    answer: "A Mighty Baby Lion! 🦁",
    image: lionB64,
    color: "#fbbf24"
  }
];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guess the Animal Sound! 🐾 | Channel Nai Kids Shorts</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Fredoka', 'Nunito', sans-serif; }
    .glow-rainbow { box-shadow: 0 0 45px rgba(244, 114, 182, 0.45); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-2xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-pink-400 animate-ping"></span>
      🎈 Channel Nai • Ultra-Fun Kids Guessing Game (9:16 Shorts)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-['Nunito']">
      Guess The Animal Sound! <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-300">🐾🦁🐱</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      High-engagement interactive kids video with joyful child voiceover, 3D Pixar animal reveals, and confetti
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl">

    <!-- Phone Mockup Frame (9:16 Shorts) -->
    <div class="relative w-[340px] sm:w-[380px] h-[670px] sm:h-[720px] bg-slate-900 rounded-[48px] p-3.5 border-4 border-pink-500/40 glow-rainbow flex flex-col overflow-hidden select-none">
      
      <!-- Top Island -->
      <div class="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-end px-3">
        <span class="w-2 h-2 rounded-full bg-pink-950 border border-pink-700"></span>
      </div>

      <!-- Inside Phone Screen -->
      <div id="phoneScreen" class="relative w-full h-full bg-slate-950 rounded-[38px] overflow-hidden flex flex-col">
        
        <!-- Video Canvas -->
        <canvas id="videoCanvas" width="720" height="1280" class="w-full h-full object-cover"></canvas>

        <!-- Top Channel Header Overlay -->
        <div class="absolute top-12 left-0 right-0 z-30 px-4 flex items-center justify-between pointer-events-none">
          <div class="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-pink-500/30">
            <span class="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
            <span class="text-xs font-bold text-pink-200">Nai Kids • Fun Games</span>
          </div>
          <span class="text-[11px] font-semibold text-amber-300 bg-black/60 px-2.5 py-1 rounded-full border border-amber-500/30">
            Ages 2-7 🎈
          </span>
        </div>

        <!-- Watermark CTA -->
        <div class="absolute bottom-9 left-0 right-0 z-30 px-6 text-center pointer-events-none">
          <span class="inline-block px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[11px] text-pink-200 font-bold border border-pink-500/40 shadow">
            🎉 Did you guess all 3? Subscribe to Nai!
          </span>
        </div>

      </div>
    </div>

    <!-- Controls Panel -->
    <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-amber-400 to-cyan-400 flex items-center justify-center font-bold text-slate-950 text-base shadow">
            Nai
          </div>
          <div>
            <h2 class="text-lg font-bold text-white font-['Nunito']">Nai - Kids Studio</h2>
            <p class="text-xs text-pink-400 font-semibold">@NaiKids • Shorts & Games</p>
          </div>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed mt-2">
          Ultra-fun interactive video tailored purely for young children. Uses cheerful child narrator voice (Ana), 3D Pixar character reveals, popping bubbles, and celebratory confetti.
        </p>
      </div>

      <div class="space-y-3">
        <button id="btnPlay" onclick="startPlayback()" class="w-full py-3.5 px-4 bg-gradient-to-r from-pink-500 via-amber-500 to-emerald-500 hover:from-pink-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-pink-500/25 transition flex items-center justify-center gap-2 text-sm font-['Nunito']">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          Play Preview with Cheerful Kids Voice
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="w-full py-3.5 px-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/30 transition flex items-center justify-center gap-2 text-sm animate-pulse font-['Nunito']">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          Export & Download Video (WebM / MP4)
        </button>
      </div>

      <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-950/60 py-2.5 px-3 rounded-xl border border-slate-800">
        Ready to play and export
      </div>

      <div class="border-t border-slate-800/80 pt-4">
        <h3 class="text-xs font-bold text-pink-300 mb-2 font-['Nunito']">Rounds in this Challenge:</h3>
        <ul class="text-xs text-slate-300 space-y-2">
          ${quizRounds.map((r, idx) => `
          <li class="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-between">
            <div>
              <span class="text-pink-400 font-bold text-[11px]">${r.num}</span>
              <p class="text-slate-300 text-[11px] font-semibold">${r.sound}</p>
            </div>
            <span class="text-emerald-400 font-bold text-xs">${r.answer}</span>
          </li>`).join('')}
        </ul>
      </div>
    </div>

  </div>

  <script>
    const canvas = document.getElementById('videoCanvas');
    const ctx = canvas.getContext('2d');

    const catImg = new Image(); catImg.src = "${catB64}";
    const dogImg = new Image(); dogImg.src = "${dogB64}";
    const lionImg = new Image(); lionImg.src = "${lionB64}";
    const animalImages = [catImg, dogImg, lionImg];

    const audioSources = ${JSON.stringify(audioData)};
    const rounds = ${JSON.stringify(quizRounds)};

    let audioCtx = null;
    let audioDest = null;
    const audioBuffers = {};

    let timeline = {
      intro: { start: 0, end: 4.2 },
      rounds: [],
      outro: { start: 30, audioStart: 30.3, end: 35 },
      totalDuration: 35
    };

    function buildDynamicTimeline() {
      let cur = 0;
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 3.8;
      const introEnd = cur + introDur + 0.4;
      timeline.intro = { start: cur, end: introEnd };
      cur = introEnd;

      timeline.rounds = [];
      for (let i = 0; i < rounds.length; i++) {
        const askKey = 'q' + (i + 1) + '_ask';
        const ansKey = 'q' + (i + 1) + '_ans';
        const askDur = (audioBuffers[askKey] && audioBuffers[askKey].duration) ? audioBuffers[askKey].duration : 3.8;
        const ansDur = (audioBuffers[ansKey] && audioBuffers[ansKey].duration) ? audioBuffers[ansKey].duration : 3.2;

        const askStart = cur;
        const askEnd = askStart + askDur + 0.2;

        const timerStart = askEnd;
        const timerDuration = 3.0; // 3 second countdown for kids!
        const timerEnd = timerStart + timerDuration;

        const ansStart = timerEnd;
        const ansAudioStart = ansStart + 0.2;
        const ansEnd = ansAudioStart + ansDur + 0.8;

        timeline.rounds.push({
          index: i,
          start: askStart,
          end: ansEnd,
          askStart: askStart,
          askEnd: askEnd,
          timerStart: timerStart,
          timerEnd: timerEnd,
          ansStart: ansStart,
          ansAudioStart: ansAudioStart,
          ansEnd: ansEnd
        });

        cur = ansEnd;
      }

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 3.2;
      timeline.outro = {
        start: cur,
        audioStart: cur + 0.3,
        end: cur + outroDur + 1.2
      };
      timeline.totalDuration = timeline.outro.end;
    }

    // Cheerful Confetti Particles
    const confetti = [];
    const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#f97316'];
    for (let i = 0; i < 60; i++) {
      confetti.push({
        x: Math.random() * 720,
        y: Math.random() * 1280,
        w: Math.random() * 12 + 6,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: Math.random() * 3 + 2,
        vx: (Math.random() - 0.5) * 2,
        rot: Math.random() * Math.PI * 2,
        drot: (Math.random() - 0.5) * 0.1
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

    // Playful cartoon boing/pop countdown sound
    function playCartoonPop(time, destination, freq = 650) {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, time + 0.08);
      gain.gain.setValueAtTime(0.3, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      if (destination) gain.connect(destination);
      osc.start(time);
      osc.stop(time + 0.12);
      scheduledSources.push(osc);
    }

    // Joyful celebration fanfare
    function playCelebrationFanfare(time, destination) {
      if (!audioCtx) return;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, time + i * 0.09);
        gain.gain.setValueAtTime(0.28, time + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, time + i * 0.09 + 0.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        if (destination) gain.connect(destination);
        osc.start(time + i * 0.09);
        osc.stop(time + i * 0.09 + 0.5);
        scheduledSources.push(osc);
      });
    }

    function scheduleAllAudio(startNow, dest) {
      scheduledSources.forEach(s => { try { s.stop(); } catch(e){} });
      scheduledSources.length = 0;

      playBuffer(audioBuffers['intro'], startNow + timeline.intro.start, dest);

      timeline.rounds.forEach((r, i) => {
        const askClip = 'q' + (i + 1) + '_ask';
        const ansClip = 'q' + (i + 1) + '_ans';

        playBuffer(audioBuffers[askClip], startNow + r.askStart, dest);

        // 3 cartoon countdown pops
        playCartoonPop(startNow + r.timerStart + 0.0, dest, 550);
        playCartoonPop(startNow + r.timerStart + 1.0, dest, 650);
        playCartoonPop(startNow + r.timerStart + 2.0, dest, 850);

        playCelebrationFanfare(startNow + r.ansStart, dest);
        playBuffer(audioBuffers[ansClip], startNow + r.ansAudioStart, dest);
      });

      playBuffer(audioBuffers['outro'], startNow + timeline.outro.audioStart, dest);
    }

    function drawFrame(elapsed) {
      const curTime = elapsed % timeline.totalDuration;

      // Cheerful Pastel Background Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#0c1b33');
      bgGrad.addColorStop(0.5, '#1e1b4b');
      bgGrad.addColorStop(1, '#0f172a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (curTime < timeline.intro.end) {
        // INTRO SCENE
        ctx.save();
        ctx.textAlign = 'center';

        // Floating Colorful Balloons / Title Card
        ctx.fillStyle = '#f43f5e';
        ctx.font = 'bold 36px Fredoka';
        ctx.fillText('🐾 GUESS THE SOUND! 🐾', canvas.width / 2, 380);

        ctx.fillStyle = '#ffffff';
        ctx.font = '900 64px Nunito';
        ctx.fillText('ANIMAL QUIZ!', canvas.width / 2, 460);

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 34px Fredoka';
        ctx.fillText('Listen & Shout The Answer! 🗣️', canvas.width / 2, 530);

        // Fun Big Question Bubble
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.strokeStyle = '#f472b6';
        ctx.lineWidth = 4;
        roundRect(ctx, 80, 590, canvas.width - 160, 260, 32, true, true);

        ctx.font = '900 110px Nunito';
        ctx.fillStyle = '#fde047';
        ctx.fillText('❓❓❓', canvas.width / 2, 740);

        ctx.fillStyle = '#a7f3d0';
        ctx.font = 'bold 28px Fredoka';
        ctx.fillText('Are you ready? Let\'s go! 🚀', canvas.width / 2, 810);
        ctx.restore();
        return;
      }

      // CHECK ROUNDS
      let activeRound = null;
      for (const r of timeline.rounds) {
        if (curTime >= r.start && curTime < r.end) {
          activeRound = r;
          break;
        }
      }

      if (activeRound) {
        const rData = rounds[activeRound.index];
        const isRevealed = curTime >= activeRound.ansStart;

        // Round Badge Header
        ctx.save();
        ctx.textAlign = 'center';
        ctx.fillStyle = rData.color;
        ctx.font = '900 36px Nunito';
        ctx.fillText(rData.num, canvas.width / 2, 175);

        // Sound Bubble Box
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.strokeStyle = rData.color;
        ctx.lineWidth = 3.5;
        roundRect(ctx, 45, 215, canvas.width - 90, 150, 28, true, true);

        ctx.fillStyle = '#fef08a';
        ctx.font = '900 52px Nunito';
        ctx.fillText(rData.sound, canvas.width / 2, 290);

        ctx.fillStyle = '#ffffff';
        ctx.font = '700 28px Fredoka';
        ctx.fillText(rData.question, canvas.width / 2, 335);

        // MAIN CENTER DISPLAY: COUNTDOWN VS REVEAL
        if (curTime >= activeRound.timerStart && curTime < activeRound.timerEnd) {
          // COUNTDOWN PHASE
          const timeLeft = Math.ceil(3.0 - (curTime - activeRound.timerStart));

          // Big Mystery Box
          ctx.fillStyle = 'rgba(30, 27, 75, 0.8)';
          ctx.strokeStyle = '#f472b6';
          ctx.lineWidth = 4;
          roundRect(ctx, 90, 420, canvas.width - 180, 480, 36, true, true);

          ctx.fillStyle = '#fde047';
          ctx.font = '900 130px Nunito';
          ctx.fillText('❓', canvas.width / 2, 630);

          // Animated Countdown Number
          ctx.fillStyle = '#38bdf8';
          ctx.font = '900 90px Nunito';
          ctx.fillText(timeLeft.toString(), canvas.width / 2, 780);

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 26px Fredoka';
          ctx.fillText('Guess quickly! ⏳', canvas.width / 2, 850);

        } else if (isRevealed) {
          // REVEAL PHASE: Pop in the 3D animal!
          const revealElapsed = curTime - activeRound.ansStart;
          const bounce = Math.min(1.0, revealElapsed * 3.5); // Fast cheerful pop

          ctx.save();
          const cx = canvas.width / 2;
          const cy = 640;
          const size = 440 * bounce;

          // Cute glowing circular frame
          ctx.beginPath();
          ctx.arc(cx, cy, size / 2 + 10, 0, Math.PI * 2);
          ctx.fillStyle = rData.color;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();

          const img = animalImages[activeRound.index];
          if (img && img.complete) {
            ctx.drawImage(img, cx - size / 2, cy - size / 2, size, size);
          }
          ctx.restore();

          // Big Answer Banner
          ctx.fillStyle = 'rgba(16, 185, 129, 0.9)';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 3;
          roundRect(ctx, 50, 920, canvas.width - 100, 110, 24, true, true);

          ctx.fillStyle = '#ffffff';
          ctx.font = '900 42px Nunito';
          ctx.fillText(rData.answer, canvas.width / 2, 990);
        }

        ctx.restore();
        return;
      }

      // OUTRO SCENE
      if (curTime >= timeline.outro.start) {
        ctx.save();
        ctx.textAlign = 'center';

        ctx.fillStyle = '#fde047';
        ctx.font = '900 52px Nunito';
        ctx.fillText('🎉 HOORAY! 🎉', canvas.width / 2, 420);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 40px Fredoka';
        ctx.fillText('You Are A Super Star! ⭐', canvas.width / 2, 490);

        // Big Nai Badge
        ctx.beginPath();
        ctx.arc(canvas.width / 2, 630, 95, 0, Math.PI * 2);
        ctx.fillStyle = '#f43f5e';
        ctx.fill();
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 6;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '900 56px Nunito';
        ctx.fillText('Nai', canvas.width / 2, 650);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        roundRect(ctx, 60, 780, canvas.width - 120, 130, 26, true, true);

        ctx.fillStyle = '#fef08a';
        ctx.font = 'bold 28px Nunito';
        ctx.fillText('Subscribe to Channel Nai! 🔔', canvas.width / 2, 835);
        ctx.fillStyle = '#bae6fd';
        ctx.font = '600 24px Fredoka';
        ctx.fillText('More fun games & bedtime tales! 💖', canvas.width / 2, 880);

        ctx.restore();
      }

      // Confetti Rain during reveals and outro
      ctx.save();
      confetti.forEach(c => {
        c.y += c.vy;
        c.x += c.vx;
        c.rot += c.drot;
        if (c.y > 1280) { c.y = -20; c.x = Math.random() * 720; }

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
      status.innerText = '⏳ Loading playful kids audio engine...';
      
      await initAudioEngine();
      isPlaying = true;
      startTime = performance.now();

      scheduleAllAudio(audioCtx.currentTime, null);
      status.innerText = '▶️ Playing Kids Animal Quiz with Ana child voice!';

      function loop() {
        if (!isPlaying) return;
        const elapsed = (performance.now() - startTime) / 1000;
        drawFrame(elapsed);
        if (elapsed < timeline.totalDuration) {
          animId = requestAnimationFrame(loop);
        } else {
          isPlaying = false;
          status.innerText = '✅ Challenge completed! Ready to export';
        }
      }
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(loop);
    }

    async function recordAndExportVideo() {
      const status = document.getElementById('statusText');
      const btn = document.getElementById('btnRecord');
      btn.disabled = true;
      status.innerText = '🔴 Recording 720x1280 Kids Shorts Video...';

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
        a.download = 'Nai_Kids_Guess_The_Animal_Sound.webm';
        a.click();
        status.innerHTML = '🎉 <b>Video downloaded successfully!</b> (Nai_Kids_Guess_The_Animal_Sound.webm)';
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

const outPath = path.join(baseDir, 'nai_kids_shorts1.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('✅ Generated nai_kids_shorts1.html successfully at:', outPath);
console.log('File size:', (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2), 'MB');
