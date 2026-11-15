const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const logoB64 = fs.readFileSync(path.join(baseDir, 'lamha_official_logo.jpg')).toString('base64');
const logoUrl = 'data:image/jpeg;base64,' + logoB64;

function createShortsHTML(config) {
  const audioDir = path.join(baseDir, config.audioFolder);
  const clipNames = ['intro', 'q1_ask', 'q1_ans', 'q2_ask', 'q2_ans', 'q3_ask', 'q3_ans', 'outro'];
  const audioData = {};
  for (const c of clipNames) {
    const b = fs.readFileSync(path.join(audioDir, c + '.mp3')).toString('base64');
    audioData[c] = 'data:audio/mp3;base64,' + b;
  }

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.pageTitle} | قناة لَـمْـحَـة</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', system-ui, sans-serif; }
    .glow-amber { box-shadow: 0 0 35px rgba(245, 158, 11, 0.4); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-2xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
      ${config.badge} ⚡
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      ${config.titlePrefix}: <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">${config.titleHighlight}</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      فيديو شورتس 9:16 احترافي بالصوت المنطوق العربي، وتكتكة المؤقت، والإجابات التفاعلية
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl">

    <!-- Phone Mockup Frame (9:16 Shorts) -->
    <div class="relative w-[340px] sm:w-[380px] h-[670px] sm:h-[720px] bg-slate-900 rounded-[48px] p-3.5 border-4 border-amber-500/40 glow-amber flex flex-col overflow-hidden select-none">
      
      <!-- Top Island -->
      <div class="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-end px-3">
        <span class="w-2 h-2 rounded-full bg-slate-800"></span>
      </div>

      <!-- Inside Phone Screen -->
      <div id="phoneScreen" class="relative w-full h-full bg-slate-950 rounded-[38px] overflow-hidden flex flex-col">
        
        <!-- Video Canvas -->
        <canvas id="videoCanvas" width="720" height="1280" class="w-full h-full object-cover"></canvas>

        <!-- Top Progress Header -->
        <div class="absolute top-12 left-0 right-0 z-30 px-4 flex items-center justify-between pointer-events-none">
          <div class="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span class="text-xs font-bold text-amber-300">لَـمْـحَـة | Lamha Quiz</span>
          </div>
          <span class="text-[11px] font-semibold text-slate-400 bg-black/50 px-2.5 py-1 rounded-full border border-slate-800">
            تحدي الفوازير
          </span>
        </div>

        <!-- Watermark CTA -->
        <div class="absolute bottom-9 left-0 right-0 z-30 px-6 text-center pointer-events-none">
          <span class="inline-block px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[11px] text-amber-300 font-bold border border-amber-500/40 shadow">
            ✍️ كم فزورة عرفت؟ اكتب نتيجتك في التعليقات
          </span>
        </div>

      </div>
    </div>

    <!-- Controls Panel -->
    <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <img src="${logoUrl}" alt="Logo" class="w-10 h-10 rounded-full border border-amber-500/50 shadow object-cover">
          <div>
            <h2 class="text-lg font-bold text-white">لَـمْـحَـة | Lamha Quiz</h2>
            <p class="text-xs text-amber-400 font-semibold">@LamhaQuiz</p>
          </div>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed mt-2">
          فيديو شورتس فوازير 9:16 رأسي متكامل مدمج بالصوت البشري الحقيقي لكل فزورة وحلها، مع تكتكة مؤقت الـ 4 ثوانٍ ومؤثرات كشف الفائز.
        </p>
      </div>

      <div class="space-y-3">
        <button id="btnPlay" onclick="startPlayback()" class="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 text-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          تشغيل المعاينة والصوت المنطوق
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="w-full py-3.5 px-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold rounded-2xl shadow-lg shadow-red-600/30 transition flex items-center justify-center gap-2 text-sm animate-pulse">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          بدء التسجيل وتنزيل الفيديو كاملاً (WebM / MP4)
        </button>
      </div>

      <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-950/60 py-2.5 px-3 rounded-xl border border-slate-800">
        جاهز للتشغيل والتصدير
      </div>

      <div class="border-t border-slate-800/80 pt-4">
        <h3 class="text-xs font-bold text-slate-400 mb-2">الفوازير المتضمنة في هذا الفيديو:</h3>
        <ul class="text-xs text-slate-300 space-y-2">
          ${config.questions.map((q, idx) => `
          <li class="flex items-start gap-2">
            <span class="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">${idx+1}</span>
            <span>${q.q} <strong class="text-amber-400">(${q.options[q.correct].replace(/^[أ-د]\)\s*/, '')})</strong></span>
          </li>`).join('')}
        </ul>
      </div>
    </div>

  </div>

  <script>
    const canvas = document.getElementById('videoCanvas');
    const ctx = canvas.getContext('2d');

    const logoImg = new Image();
    logoImg.src = "${logoUrl}";

    const audioSources = ${JSON.stringify(audioData)};

    let audioCtx = null;
    let audioDest = null;
    const audioBuffers = {};

    let timeline = {
      intro: { start: 0, end: 6.5 },
      questions: [],
      outro: { start: 45, audioStart: 45.5, end: 54 },
      totalDuration: 54
    };

    const questions = ${JSON.stringify(config.questions)};

    function buildDynamicTimeline() {
      let cur = 0;
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 5.5;
      const introEnd = cur + introDur + 0.8;
      timeline.intro = { start: cur, end: introEnd };
      cur = introEnd;

      timeline.questions = [];
      for (let i = 0; i < questions.length; i++) {
        const askKey = 'q' + (i + 1) + '_ask';
        const ansKey = 'q' + (i + 1) + '_ans';
        const askDur = (audioBuffers[askKey] && audioBuffers[askKey].duration) ? audioBuffers[askKey].duration : 5.0;
        const ansDur = (audioBuffers[ansKey] && audioBuffers[ansKey].duration) ? audioBuffers[ansKey].duration : 4.0;

        const askStart = cur;
        const askEnd = askStart + askDur + 0.4;

        const timerStart = askEnd;
        const timerDuration = 4.0;
        const timerEnd = timerStart + timerDuration;

        const ansStart = timerEnd;
        const chimeStart = ansStart;
        const ansAudioStart = ansStart + 0.3;
        const ansEnd = ansAudioStart + ansDur + 1.2;

        timeline.questions.push({
          index: i,
          start: askStart,
          end: ansEnd,
          askStart: askStart,
          askEnd: askEnd,
          timerStart: timerStart,
          timerEnd: timerEnd,
          ansStart: ansStart,
          chimeStart: chimeStart,
          ansAudioStart: ansAudioStart,
          ansEnd: ansEnd
        });

        cur = ansEnd;
      }

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 7.0;
      timeline.outro = {
        start: cur,
        audioStart: cur + 0.4,
        end: cur + outroDur + 2.5
      };
      timeline.totalDuration = timeline.outro.end;
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
      if (destination) {
        src.connect(destination);
      }
      src.start(time);
      scheduledSources.push(src);
    }

    function playTick(time, destination) {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, time);
      gain.gain.setValueAtTime(0.3, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      if (destination) gain.connect(destination);
      osc.start(time);
      osc.stop(time + 0.08);
      scheduledSources.push(osc);
    }

    function playSuccessChime(time, destination) {
      if (!audioCtx) return;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, time + i * 0.08);
        gain.gain.setValueAtTime(0.2, time + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, time + i * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        if (destination) gain.connect(destination);
        osc.start(time + i * 0.08);
        osc.stop(time + i * 0.08 + 0.4);
        scheduledSources.push(osc);
      });
    }

    function scheduleAllAudio(startNow, dest) {
      scheduledSources.forEach(s => { try { s.stop(); } catch(e){} });
      scheduledSources.length = 0;

      // 1. Intro
      playBuffer(audioBuffers['intro'], startNow + timeline.intro.start, dest);

      // 2. Questions loop (zero audio overlap)
      timeline.questions.forEach((q, i) => {
        const askClip = 'q' + (i + 1) + '_ask';
        const ansClip = 'q' + (i + 1) + '_ans';

        playBuffer(audioBuffers[askClip], startNow + q.askStart, dest);

        for (let t = 0; t < 4; t++) {
          playTick(startNow + q.timerStart + t, dest);
        }

        playSuccessChime(startNow + q.chimeStart, dest);
        playBuffer(audioBuffers[ansClip], startNow + q.ansAudioStart, dest);
      });

      // 3. Outro
      playBuffer(audioBuffers['outro'], startNow + timeline.outro.audioStart, dest);
    }

    function drawFrame(elapsed) {
      const curTime = elapsed % timeline.totalDuration;

      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#0f0c29');
      bgGrad.addColorStop(0.5, '#1e1645');
      bgGrad.addColorStop(1, '#0a071d');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (curTime < timeline.intro.end) {
        // INTRO SCENE
        ctx.save();
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 400, 110, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 110, 290, 220, 220);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 400, 110, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.font = '900 64px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.shadowBlur = 20;
        ctx.fillText('تحدي لَـمْـحَـة ⚡', canvas.width / 2, 600);

        ctx.font = 'bold 36px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.shadowBlur = 10;
        ctx.fillText('${config.introSubtitle}', canvas.width / 2, 670);

        ctx.font = 'bold 30px Cairo, sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.shadowBlur = 0;
        ctx.fillText('هل تستطيع حل الفوازير قبل انتهاء الوقت؟', canvas.width / 2, 750);
        ctx.restore();

      } else if (curTime < timeline.outro.start) {
        // QUESTION SCENE
        const curQItem = timeline.questions.find(q => curTime >= q.start && curTime < q.end) 
                         || timeline.questions[timeline.questions.length - 1];
        const qIndex = curQItem.index;
        const curQ = questions[qIndex];

        // Question Badge
        ctx.save();
        ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 130, 230, 260, 54, 27);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 28px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText(curQ.num, canvas.width / 2, 268);
        ctx.restore();

        // Question Box
        ctx.save();
        ctx.fillStyle = 'rgba(30, 22, 69, 0.85)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(40, 310, canvas.width - 80, 200, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 38px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        
        const words = curQ.q.split(' ');
        let l1 = '', l2 = '';
        for (let i = 0; i < words.length; i++) {
          if (i < 6) l1 += words[i] + ' ';
          else l2 += words[i] + ' ';
        }
        ctx.fillText(l1.trim(), canvas.width / 2, 395);
        if (l2.trim()) ctx.fillText(l2.trim(), canvas.width / 2, 455);
        ctx.restore();

        // Countdown Timer
        let timerProgress = 1;
        let secText = "4";
        let revealed = false;

        if (curTime < curQItem.timerStart) {
          timerProgress = 1;
          secText = "4";
          revealed = false;
        } else if (curTime >= curQItem.timerStart && curTime < curQItem.timerEnd) {
          const tElapsed = curTime - curQItem.timerStart;
          timerProgress = Math.max(0, 1 - (tElapsed / 4.0));
          secText = Math.ceil(4 - tElapsed) + "";
          revealed = false;
        } else {
          timerProgress = 0;
          secText = "انتهى الوقت!";
          revealed = true;
        }

        // Timer bar
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.roundRect(80, 540, canvas.width - 160, 16, 8);
        ctx.fill();

        if (timerProgress > 0) {
          const barGrad = ctx.createLinearGradient(80, 0, canvas.width - 80, 0);
          barGrad.addColorStop(0, '#ef4444');
          barGrad.addColorStop(0.5, '#f59e0b');
          barGrad.addColorStop(1, '#10b981');
          ctx.fillStyle = barGrad;
          ctx.beginPath();
          ctx.roundRect(80, 540, (canvas.width - 160) * timerProgress, 16, 8);
          ctx.fill();
        }

        ctx.font = 'bold 26px Cairo, sans-serif';
        ctx.fillStyle = revealed ? '#10b981' : '#f59e0b';
        ctx.fillText(secText, canvas.width / 2, 595);
        ctx.restore();

        // Options List (4 vertical options)
        const optY = [640, 740, 840, 940];
        curQ.options.forEach((opt, idx) => {
          ctx.save();
          const isCorrect = idx === curQ.correct;

          if (revealed && isCorrect) {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 4;
          } else if (revealed && !isCorrect) {
            ctx.fillStyle = 'rgba(20, 15, 45, 0.5)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1.5;
          } else {
            ctx.fillStyle = 'rgba(30, 22, 69, 0.7)';
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
            ctx.lineWidth = 2;
          }

          ctx.beginPath();
          ctx.roundRect(50, optY[idx], canvas.width - 100, 78, 20);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 32px Cairo, sans-serif';
          ctx.textAlign = 'right';
          ctx.fillStyle = (revealed && isCorrect) ? '#34d399' : (revealed && !isCorrect ? '#64748b' : '#ffffff');
          ctx.fillText(opt, canvas.width - 90, optY[idx] + 50);

          if (revealed && isCorrect) {
            ctx.font = 'bold 36px Cairo, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('✔️', 80, optY[idx] + 52);
          }
          ctx.restore();
        });

        // Fact Banner (when revealed)
        if (revealed && curQ.fact) {
          ctx.save();
          ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(50, 1045, canvas.width - 100, 100, 20);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 22px Cairo, sans-serif';
          ctx.fillStyle = '#38bdf8';
          ctx.textAlign = 'center';
          ctx.fillText('💡 حل الفزورة:', canvas.width / 2, 1080);

          ctx.font = '600 22px Cairo, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.fillText(curQ.fact, canvas.width / 2, 1120);
          ctx.restore();
        }

      } else {
        // OUTRO SCENE
        ctx.save();
        ctx.font = '900 60px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText('انتهى التحدي! ⚡', canvas.width / 2, 450);

        ctx.font = 'bold 40px Cairo, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('كم فزورة استطعت حلها؟', canvas.width / 2, 530);

        ctx.font = 'bold 30px Cairo, sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('اكتب نتيجتك الآن في التعليقات 💬', canvas.width / 2, 600);

        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(80, 680, canvas.width - 160, 130, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 36px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('اشترك في قناة «لَـمْـحَـة» 🔔', canvas.width / 2, 740);

        ctx.font = 'bold 26px Cairo, sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('فوازير وتحديات جديدة يومياً!', canvas.width / 2, 785);
        ctx.restore();
      }
    }

    function renderLoop(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      drawFrame(elapsed);

      if (elapsed < timeline.totalDuration && isPlaying) {
        animId = requestAnimationFrame(renderLoop);
      } else {
        isPlaying = false;
        document.getElementById('statusText').innerText = 'انتهى تشغيل الفيديو';
      }
    }

    async function startPlayback() {
      await initAudioEngine();
      isPlaying = true;
      startTime = 0;
      scheduleAllAudio(audioCtx.currentTime, null);
      document.getElementById('statusText').innerText = 'جاري تشغيل المعاينة والصوت المنطوق...';
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(renderLoop);
    }

    async function recordAndExportVideo() {
      await initAudioEngine();
      const statusText = document.getElementById('statusText');
      statusText.innerText = '🔴 جاري تسجيل وتصدير الفيديو كاملاً بالصوت والمؤقت... يرجى الانتظار';

      recordedChunks = [];
      const stream = canvas.captureStream(30);

      const audioTrack = audioDest.stream.getAudioTracks()[0];
      if (audioTrack) {
        stream.addTrack(audioTrack);
      }

      scheduleAllAudio(audioCtx.currentTime, audioDest);

      try {
        mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });
      } catch (e) {
        mediaRecorder = new MediaRecorder(stream);
      }

      mediaRecorder.ondataavailable = function(e) {
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      };

      mediaRecorder.onstop = function() {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = '${config.downloadFileName}';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          statusText.innerText = '✅ تم تنزيل فيديو الشورتس بنجاح! جاهز للنشر على يوتيوب';
        }, 100);
      };

      isPlaying = true;
      startTime = 0;
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(renderLoop);

      mediaRecorder.start();

      setTimeout(() => {
        mediaRecorder.stop();
        isPlaying = false;
        if (animId) cancelAnimationFrame(animId);
      }, (timeline.totalDuration + 1.0) * 1000);
    }

    window.onload = function() {
      drawFrame(0);
      if (window.location.search.indexOf('autorecord=true') !== -1) {
        setTimeout(function() {
          recordAndExportVideo();
        }, 1500);
      }
    };
  </script>
</body>
</html>`;
}

// Build Shorts 4 Config
const s4Config = {
  pageTitle: 'فيديو شورتس #4 (فوازير الأذكياء)',
  badge: 'فيديو شورتس فوازير 9:16',
  titlePrefix: 'تحدي الفوازير',
  titleHighlight: '3 فوازير صعبة للأذكياء',
  introSubtitle: 'اختبار الفوازير وسرعة البديهة',
  downloadFileName: 'Lamha_Shorts4_Fawazeer_Quiz.webm',
  audioFolder: 'shorts4_audio',
  questions: [
    {
      num: "الفزورة الأولى",
      q: "شيء تملكه أنت، لكن الناس يستخدمونه أكثر منك؟",
      options: ["أ) هاتفك الذكي", "ب) اسمك الشخصي", "ج) أموالك في البنك", "د) بيتك ومفتاحك"],
      correct: 1,
      fact: "اسمك يناديك به الآخرون طوال اليوم بينما أنت نادراً ما تذكره!"
    },
    {
      num: "الفزورة الثانية",
      q: "يتحدث جميع لغات العالم ولكنه لا يملك لساناً؟",
      options: ["أ) الراديو والمذياع", "ب) صدى الصوت", "ج) المترجم الفوري", "د) هاتف محمول"],
      correct: 1,
      fact: "صدى الصوت يعكس ويردد أي صوت وبأي لغة فور صدوره!"
    },
    {
      num: "الفزورة الثالثة",
      q: "ما هو الشيء الذي يخترق أعماق الماء ولا يبتل أبداً؟",
      options: ["أ) الضوء والشعاع", "ب) السمك والحيتان", "ج) الإسفنج البحري", "د) الحصى الملساء"],
      correct: 0,
      fact: "الضوء يخترق جزيئات الماء الشفافة ويضيئها دون أن يبتل!"
    }
  ]
};

const s4Html = createShortsHTML(s4Config);
const destPath = path.join(baseDir, 'lamha_shorts4.html');
fs.writeFileSync(destPath, s4Html, 'utf8');
console.log('Saved lamha_shorts4.html, size:', fs.statSync(destPath).size);
