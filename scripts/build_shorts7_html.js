const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts7_audio');

const logoB64 = fs.readFileSync(path.join(baseDir, 'lamha_official_logo.jpg')).toString('base64');
const logoUrl = 'data:image/jpeg;base64,' + logoB64;

const clipNames = ['intro', 'q1_ask', 'q1_ans', 'q2_ask', 'q2_ans', 'q3_ask', 'q3_ans', 'outro'];
const audioData = {};
for (const c of clipNames) {
  const b = fs.readFileSync(path.join(audioDir, c + '.mp3')).toString('base64');
  audioData[c] = 'data:audio/mp3;base64,' + b;
}

const questions = [
  {
    num: "السؤال الأول 🧠",
    question: "له أسنان كثيرة ولكنه لا يعض، فما هو؟",
    options: ["المفتاح 🗝️", "المُـشْـط 🪮", "المنشار 🪚"],
    correctIdx: 1,
    answer: "المُـشْـط 🪮",
    fact: "المشط اختراع فرعوني قديم يتجاوز عمره 5000 عام!"
  },
  {
    num: "السؤال الثاني 🔥",
    question: "ما هو الشيء الذي تذبحه وتبكي عليه؟",
    options: ["الحزن 🌧️", "البصل 🧅", "الوقت ⏳"],
    correctIdx: 1,
    answer: "البصل 🧅",
    fact: "البصل يفرز مادة كبريتية تحفز الغدد الدمعية عند تقطيعه!"
  },
  {
    num: "السؤال الثالث ⚡",
    question: "شيء يسير أمامك دائماً ولا تستطيع رؤيته أو لمسه؟",
    options: ["المستقبل 🔮", "الهواء 💨", "الظل 👤"],
    correctIdx: 0,
    answer: "المستقبل 🔮",
    fact: "المستقبل هو اللحظة القادمة التي لا نملك إلا التخطيط لها!"
  }
];

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>فيديو شورتس #7 (تحدي نادي الـ 1%) | قناة لَـمْـحَـة</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif; }
    .glow-cyan { box-shadow: 0 0 35px rgba(6, 182, 212, 0.4); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-2xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
      🧠 شورتس جديد 9:16 (سلسلة نادي الـ 1%)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      تحدي نادي الـ 1%: <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400">3 أسئلة خادعة للعباقرة! ⚡</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      فيديو شورتس رأسي فائق التفاعل بالصوت البشري والمؤقت وكشف الإجابات الذكية
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl">

    <!-- Phone Mockup Frame (9:16 Shorts) -->
    <div class="relative w-[340px] sm:w-[380px] h-[670px] sm:h-[720px] bg-slate-900 rounded-[48px] p-3.5 border-4 border-cyan-500/40 glow-cyan flex flex-col overflow-hidden select-none">
      
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
          <div class="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/30">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span class="text-xs font-bold text-cyan-300">لَـمْـحَـة | Lamha Quiz</span>
          </div>
          <span class="text-[11px] font-semibold text-amber-400 bg-black/50 px-2.5 py-1 rounded-full border border-amber-500/30">
            نادي الـ 1% 🧠
          </span>
        </div>

        <!-- Watermark CTA -->
        <div class="absolute bottom-9 left-0 right-0 z-30 px-6 text-center pointer-events-none">
          <span class="inline-block px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[11px] text-cyan-300 font-bold border border-cyan-500/40 shadow">
            ✍️ كم سؤال عرفت؟ اكتب نتيجتك في التعليقات
          </span>
        </div>

      </div>
    </div>

    <!-- Controls Panel -->
    <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <img src="${logoUrl}" alt="Logo" class="w-10 h-10 rounded-full border border-cyan-500/50 shadow object-cover">
          <div>
            <h2 class="text-lg font-bold text-white">لَـمْـحَـة | Lamha Quiz</h2>
            <p class="text-xs text-cyan-400 font-semibold">@lamha_quiz</p>
          </div>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed mt-2">
          فيديو شورتس جديد 9:16 مصمم خصيصاً ليوتيوب وتيك توك مع نظام مؤقت سريع وأسئلة ذكاء خادعة لمضاعفة التعليقات والمشاركات.
        </p>
      </div>

      <div class="space-y-3">
        <button id="btnPlay" onclick="startPlayback()" class="w-full py-3.5 px-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2 text-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          تشغيل المعاينة والصوت المنطوق
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="w-full py-3.5 px-4 bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:from-rose-500 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/30 transition flex items-center justify-center gap-2 text-sm animate-pulse">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          بدء التسجيل وتنزيل الفيديو (WebM / MP4)
        </button>
      </div>

      <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-950/60 py-2.5 px-3 rounded-xl border border-slate-800">
        جاهز للتشغيل والتصدير
      </div>

      <div class="border-t border-slate-800/80 pt-4">
        <h3 class="text-xs font-bold text-slate-400 mb-2">أسئلة هذا التحدي:</h3>
        <ul class="text-xs text-slate-300 space-y-2">
          ${questions.map((q, idx) => `
          <li class="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
            <div class="flex items-center justify-between mb-1">
              <span class="text-cyan-400 font-bold text-[11px]">${q.num}</span>
              <span class="text-emerald-400 font-bold">${q.answer}</span>
            </div>
            <p class="text-slate-300 text-[11px]">${q.question}</p>
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
    const questions = ${JSON.stringify(questions)};

    let audioCtx = null;
    let audioDest = null;
    const audioBuffers = {};

    let timeline = {
      intro: { start: 0, end: 6.0 },
      questions: [],
      outro: { start: 36, audioStart: 36.5, end: 44 },
      totalDuration: 44
    };

    function buildDynamicTimeline() {
      let cur = 0;
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 5.8;
      const introEnd = cur + introDur + 0.8;
      timeline.intro = { start: cur, end: introEnd };
      cur = introEnd;

      timeline.questions = [];
      for (let i = 0; i < questions.length; i++) {
        const askKey = 'q' + (i + 1) + '_ask';
        const ansKey = 'q' + (i + 1) + '_ans';
        const askDur = (audioBuffers[askKey] && audioBuffers[askKey].duration) ? audioBuffers[askKey].duration : 3.8;
        const ansDur = (audioBuffers[ansKey] && audioBuffers[ansKey].duration) ? audioBuffers[ansKey].duration : 2.5;

        const askStart = cur;
        const askEnd = askStart + askDur + 0.3;

        const timerStart = askEnd;
        const timerDuration = 4.0; // 4 seconds countdown
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

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 5.5;
      timeline.outro = {
        start: cur,
        audioStart: cur + 0.4,
        end: cur + outroDur + 2.0
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
      if (destination) src.connect(destination);
      src.start(time);
      scheduledSources.push(src);
    }

    function playTick(time, destination) {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, time);
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
      [587.33, 739.99, 880.00, 1174.66].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, time + i * 0.08);
        gain.gain.setValueAtTime(0.25, time + i * 0.08);
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

      // 2. Questions loop
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

      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#031326');
      bgGrad.addColorStop(0.5, '#071f3d');
      bgGrad.addColorStop(1, '#020b18');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.direction = 'rtl';

      if (curTime < timeline.intro.end) {
        // INTRO SCENE
        ctx.save();
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 380, 110, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 110, 270, 220, 220);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = '#06b6d4';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 380, 110, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.save();
        ctx.font = '900 60px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(6, 182, 212, 0.9)';
        ctx.shadowBlur = 25;
        ctx.fillText('نادي الـ 1% 🧠⚡', canvas.width / 2, 580);

        ctx.font = 'bold 36px Cairo, sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.shadowBlur = 10;
        ctx.fillText('3 أسئلة خادعة للعباقرة!', canvas.width / 2, 650);

        ctx.font = '72px sans-serif';
        ctx.fillText('🪮 🧅 🔮 ⏳ 💡', canvas.width / 2, 750);

        ctx.font = 'bold 28px Cairo, sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.shadowBlur = 0;
        ctx.fillText('هل تستطيع حلها في 4 ثوانٍ؟', canvas.width / 2, 850);
        ctx.restore();

      } else if (curTime < timeline.outro.start) {
        // QUESTION SCENE
        const curQItem = timeline.questions.find(q => curTime >= q.start && curTime < q.end) 
                         || timeline.questions[timeline.questions.length - 1];
        const qIndex = curQItem.index;
        const curQ = questions[qIndex];

        // Question Badge
        ctx.save();
        ctx.fillStyle = 'rgba(6, 182, 212, 0.2)';
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 140, 220, 280, 56, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 30px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#67e8f9';
        ctx.fillText(curQ.num, canvas.width / 2, 260);
        ctx.restore();

        // Main Question Heading Card
        ctx.save();
        ctx.fillStyle = 'rgba(10, 25, 47, 0.9)';
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.35)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(40, 310, canvas.width - 80, 190, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 36px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
        ctx.shadowBlur = 15;
        
        // Wrap question text if long
        const words = curQ.question.split(' ');
        if (words.length > 5) {
          const mid = Math.ceil(words.length / 2);
          ctx.fillText(words.slice(0, mid).join(' '), canvas.width / 2, 380);
          ctx.fillText(words.slice(mid).join(' '), canvas.width / 2, 440);
        } else {
          ctx.fillText(curQ.question, canvas.width / 2, 415);
        }
        ctx.restore();

        // 4-Second Timer
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

        // Timer Bar
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.beginPath();
        ctx.roundRect(80, 530, canvas.width - 160, 16, 8);
        ctx.fill();

        if (timerProgress > 0) {
          const barGrad = ctx.createLinearGradient(80, 0, canvas.width - 80, 0);
          barGrad.addColorStop(0, '#ef4444');
          barGrad.addColorStop(0.5, '#f59e0b');
          barGrad.addColorStop(1, '#06b6d4');
          ctx.fillStyle = barGrad;
          ctx.beginPath();
          ctx.roundRect(80, 530, (canvas.width - 160) * timerProgress, 16, 8);
          ctx.fill();
        }

        ctx.font = 'bold 32px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = revealed ? '#10b981' : '#38bdf8';
        ctx.fillText(secText, canvas.width / 2, 595);
        ctx.restore();

        // 3 Options Display
        const optYStarts = [640, 755, 870];
        curQ.options.forEach((opt, oIdx) => {
          const y = optYStarts[oIdx];
          const isCorrect = oIdx === curQ.correctIdx;

          ctx.save();
          if (revealed && isCorrect) {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 4;
            ctx.shadowColor = 'rgba(16, 185, 129, 0.8)';
            ctx.shadowBlur = 25;
          } else {
            ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.lineWidth = 2;
          }

          ctx.beginPath();
          ctx.roundRect(50, y, canvas.width - 100, 90, 22);
          ctx.fill();
          ctx.stroke();

          // Option text
          ctx.font = 'bold 34px Cairo, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = (revealed && isCorrect) ? '#34d399' : '#ffffff';
          ctx.fillText(opt, canvas.width / 2, y + 56);
          ctx.restore();
        });

        // Fact Banner (when revealed)
        if (revealed && curQ.fact) {
          ctx.save();
          ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(50, 1000, canvas.width - 100, 100, 20);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 22px Cairo, sans-serif';
          ctx.fillStyle = '#fbbf24';
          ctx.textAlign = 'center';
          ctx.fillText('💡 معلومة سريعة:', canvas.width / 2, 1035);

          ctx.font = '600 21px Cairo, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.fillText(curQ.fact, canvas.width / 2, 1075);
          ctx.restore();
        }

      } else {
        // OUTRO SCENE
        ctx.save();
        ctx.font = '900 64px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('انتهى التحدي! 🧠', canvas.width / 2, 450);

        ctx.font = 'bold 42px Cairo, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('كم سؤالاً عرفت حله؟', canvas.width / 2, 530);

        ctx.font = 'bold 30px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('اكتب نتيجتك الآن في التعليقات 💬', canvas.width / 2, 600);

        ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(80, 680, canvas.width - 160, 140, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 36px Cairo, sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('اشترك في قناة «لَـمْـحَـة» 🔔', canvas.width / 2, 745);

        ctx.font = 'bold 26px Cairo, sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('تحديات ذكاء ومسابقات يومية جديدة!', canvas.width / 2, 795);
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
      statusText.innerText = '🔴 جاري تسجيل وتصدير فيديو الشورتس كاملاً... يرجى الانتظار';

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
        a.download = 'Lamha_Shorts7_1Percent_Club.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          statusText.innerText = '✅ تم تنزيل فيديو الشورتس #7 بنجاح! جاهز للنشر على يوتيوب وتيك توك';
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
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => drawFrame(0));
      } else {
        drawFrame(0);
      }
    };
  </script>
</body>
</html>`;

const outPath = path.join(baseDir, 'lamha_shorts7.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Saved lamha_shorts7.html, size:', fs.statSync(outPath).size);
