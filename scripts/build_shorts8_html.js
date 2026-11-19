const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts8_audio');

const logoB64 = fs.readFileSync(path.join(baseDir, 'lamha_official_logo.jpg')).toString('base64');
const logoUrl = 'data:image/jpeg;base64,' + logoB64;

const clipNames = ['intro', 'q1_ask', 'q1_ans', 'q2_ask', 'q2_ans', 'q3_ask', 'q3_ans', 'outro'];
const audioData = {};
for (const c of clipNames) {
  const filePath = path.join(audioDir, c + '.mp3');
  if (fs.existsSync(filePath)) {
    const b = fs.readFileSync(filePath).toString('base64');
    audioData[c] = 'data:audio/mp3;base64,' + b;
  }
}

const questions = [
  {
    num: "اللغز الأول 🧠",
    question: "يمشي بأربع أرجل في الصباح، واثنتين في الظهر، وثلاث في المساء.. فما هو؟",
    options: ["الإنسان 🚶‍♂️", "الوقت ⏳", "الظل 👤"],
    correctIdx: 0,
    answer: "الإنسان 🚶‍♂️",
    fact: "يحبو طفلاً صغيراً، يمشي شاباً، ويتوكأ على عصا شيخاً!"
  },
  {
    num: "اللغز الثاني 🔥",
    question: "أنت في سباق وتجاوزت الشخص في المركز الثاني.. في أي مركز أصبحت الآن؟",
    options: ["المركز الأول 🥇", "المركز الثاني 🥈", "المركز الثالث 🥉"],
    correctIdx: 1,
    answer: "المركز الثاني 🥈",
    fact: "خدعة شهيرة! أنت أخذت مكان صاحب المركز الثاني فقط، وليس الأول!"
  },
  {
    num: "اللغز الثالث 👑",
    question: "شيء يملكه الجميع، ولا يمكنك لمسه، وإذا كشفته زال وانتهى.. فما هو؟",
    options: ["السر 🤫", "الحلم 💭", "النوم 😴"],
    correctIdx: 0,
    answer: "السر 🤫",
    fact: "السر يملكه الإنسان وحده، فإذا أفشاه وكشفه للناس لم يعد سراً!"
  }
];

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>فيديو شورتس #8 (3 ألغاز ذكاء خادعة) | قناة لَـمْـحَـة</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif; }
    .glow-gold { box-shadow: 0 0 35px rgba(245, 158, 11, 0.45); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-2xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
      🧠 شورتس جديد 9:16 (صوت بشري ناطق Neural Voice)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      تحدي الذكاء السريع: <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400">3 ألغاز خادعة تكشف حدة عقلك! ⚡</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      فيديو شورتس عمودي عالي التفاعل مدمج بصوت استوديو واقعي ومؤقت تنازلي ذكي
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl">

    <!-- Phone Mockup Frame (9:16 Shorts) -->
    <div class="relative w-[340px] sm:w-[380px] h-[670px] sm:h-[720px] bg-slate-900 rounded-[48px] p-3.5 border-4 border-amber-500/40 glow-gold flex flex-col overflow-hidden select-none">
      
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
          <span class="text-[11px] font-semibold text-cyan-400 bg-black/50 px-2.5 py-1 rounded-full border border-cyan-500/30">
            تحدي الـ 35 ثانية ⏱️
          </span>
        </div>

        <!-- Watermark CTA -->
        <div class="absolute bottom-9 left-0 right-0 z-30 px-6 text-center pointer-events-none">
          <span class="inline-block px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[11px] text-amber-300 font-bold border border-amber-500/40 shadow">
            ✍️ شاركنا نتيجتك (؟/3) في التعليقات!
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
            <p class="text-xs text-amber-400 font-semibold">@lamha_quiz</p>
          </div>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed mt-2">
          فيديو شورتس جديد 9:16 مصمم خصيصاً ليوتيوب وتيك توك مع صوت بشري احترافي استوديو (Neural Voice) ومؤقت ذكي لكشف الإجابات.
        </p>
      </div>

      <div class="space-y-3">
        <button id="btnPlay" onclick="startPlayback()" class="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 text-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          تشغيل المعاينة والصوت البشري
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
        <h3 class="text-xs font-bold text-slate-400 mb-2">ألغاز هذا التحدي:</h3>
        <ul class="text-xs text-slate-300 space-y-2">
          ${questions.map((q, idx) => `
          <li class="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
            <div class="flex items-center justify-between mb-1">
              <span class="text-amber-400 font-bold text-[11px]">${q.num}</span>
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
      intro: { start: 0, end: 5.5 },
      questions: [],
      outro: { start: 35, audioStart: 35.5, end: 42 },
      totalDuration: 42
    };

    function buildDynamicTimeline() {
      let cur = 0;
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 5.0;
      const introEnd = cur + introDur + 0.6;
      timeline.intro = { start: cur, end: introEnd };
      cur = introEnd;

      timeline.questions = [];
      for (let i = 0; i < questions.length; i++) {
        const askKey = 'q' + (i + 1) + '_ask';
        const ansKey = 'q' + (i + 1) + '_ans';
        const askDur = (audioBuffers[askKey] && audioBuffers[askKey].duration) ? audioBuffers[askKey].duration : 4.5;
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

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 5.0;
      timeline.outro = {
        start: cur,
        audioStart: cur + 0.3,
        end: cur + outroDur + 1.5
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
      bgGrad.addColorStop(0, '#0a0d18');
      bgGrad.addColorStop(0.5, '#131b2e');
      bgGrad.addColorStop(1, '#05070e');
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
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 380, 110, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.save();
        ctx.font = '900 58px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.9)';
        ctx.shadowBlur = 25;
        ctx.fillText('تحدي الألغاز الخادعة 🧠⚡', canvas.width / 2, 580);

        ctx.font = 'bold 36px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.shadowBlur = 10;
        ctx.fillText('3 ألغاز تكشف حدة عقلك!', canvas.width / 2, 650);

        ctx.font = '72px sans-serif';
        ctx.fillText('🚶‍♂️ 🥈 🤫 ⏱️ 💡', canvas.width / 2, 750);

        ctx.font = 'bold 28px Cairo, sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.shadowBlur = 0;
        ctx.fillText('هل تستطيع حلها قبل رنة الجرس؟', canvas.width / 2, 850);
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
        ctx.roundRect(canvas.width / 2 - 140, 210, 280, 56, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 30px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText(curQ.num, canvas.width / 2, 248);
        ctx.restore();

        // Question Text Card
        ctx.save();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(50, 300, 620, 190, 24);
        ctx.fill();
        ctx.stroke();

        ctx.font = '800 32px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        wrapText(ctx, curQ.question, canvas.width / 2, 365, 560, 48);
        ctx.restore();

        // Countdown Timer
        const isTimerActive = curTime >= curQItem.timerStart && curTime < curQItem.timerEnd;
        const isAnswerRevealed = curTime >= curQItem.ansStart;

        ctx.save();
        const timerCenterX = canvas.width / 2;
        const timerCenterY = 550;
        const timerRadius = 50;

        ctx.beginPath();
        ctx.arc(timerCenterX, timerCenterY, timerRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.fill();
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#334155';
        ctx.stroke();

        if (isTimerActive) {
          const timerProgress = (curTime - curQItem.timerStart) / 4.0;
          const remainingSecs = Math.max(1, Math.ceil(4.0 - (curTime - curQItem.timerStart)));

          ctx.beginPath();
          ctx.arc(timerCenterX, timerCenterY, timerRadius, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * (1 - timerProgress)), false);
          ctx.strokeStyle = remainingSecs <= 2 ? '#ef4444' : '#f59e0b';
          ctx.lineWidth = 8;
          ctx.stroke();

          ctx.font = '900 44px Cairo, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = remainingSecs <= 2 ? '#ef4444' : '#fbbf24';
          ctx.fillText(remainingSecs.toString(), timerCenterX, timerCenterY + 14);
        } else if (isAnswerRevealed) {
          ctx.font = '900 40px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#10b981';
          ctx.fillText('✓', timerCenterX, timerCenterY + 12);
        } else {
          ctx.font = 'bold 28px Cairo, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#64748b';
          ctx.fillText('⏳', timerCenterX, timerCenterY + 10);
        }
        ctx.restore();

        // Options List
        const optionYStarts = [640, 750, 860];
        curQ.options.forEach((opt, idx) => {
          const y = optionYStarts[idx];
          const isCorrect = idx === curQ.correctIdx;

          ctx.save();
          if (isAnswerRevealed && isCorrect) {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 4;
            ctx.shadowColor = 'rgba(16, 185, 129, 0.8)';
            ctx.shadowBlur = 20;
          } else {
            ctx.fillStyle = 'rgba(30, 41, 59, 0.7)';
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 2;
            ctx.shadowBlur = 0;
          }

          ctx.beginPath();
          ctx.roundRect(60, y, 600, 90, 20);
          ctx.fill();
          ctx.stroke();

          // Option Text
          ctx.font = 'bold 32px Cairo, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = (isAnswerRevealed && isCorrect) ? '#34d399' : '#f8fafc';
          ctx.fillText(opt, canvas.width / 2, y + 55);
          ctx.restore();
        });

        // Answer Fact Reveal
        if (isAnswerRevealed) {
          ctx.save();
          ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(60, 980, 600, 100, 18);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 24px Cairo, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#a7f3d0';
          wrapText(ctx, curQ.fact, canvas.width / 2, 1025, 560, 32);
          ctx.restore();
        }

      } else {
        // OUTRO SCENE
        ctx.save();
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 380, 110, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 110, 270, 220, 220);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 380, 110, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.save();
        ctx.font = '900 54px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(16, 185, 129, 0.8)';
        ctx.shadowBlur = 20;
        ctx.fillText('كم لغزاً حزرت؟ 🧠🎯', canvas.width / 2, 570);

        ctx.font = 'bold 36px Cairo, sans-serif';
        ctx.fillStyle = '#34d399';
        ctx.shadowBlur = 10;
        ctx.fillText('اكتب نتيجتك (؟/3) في التعليقات!', canvas.width / 2, 640);

        ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(80, 720, 560, 130, 24);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 32px Cairo, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 0;
        ctx.fillText('🔔 اشترك في قناة «لَـمْـحَـة»', canvas.width / 2, 775);
        ctx.font = '24px Cairo, sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText('لتحديات يومية جديدة وألغاز للعباقرة', canvas.width / 2, 815);
        ctx.restore();
      }
    }

    function wrapText(context, text, x, y, maxWidth, lineHeight) {
      const words = text.split(' ');
      let line = '';
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line.trim(), x, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      context.fillText(line.trim(), x, y);
    }

    function renderLoop() {
      if (!isPlaying) return;
      const elapsed = audioCtx ? (audioCtx.currentTime - startTime) : 0;
      drawFrame(elapsed);

      if (elapsed < timeline.totalDuration) {
        animId = requestAnimationFrame(renderLoop);
      } else {
        isPlaying = false;
        document.getElementById('statusText').innerText = 'انتهى العرض!';
        document.getElementById('btnPlay').classList.remove('opacity-50');
      }
    }

    async function startPlayback() {
      await initAudioEngine();
      isPlaying = true;
      startTime = audioCtx.currentTime;
      scheduleAllAudio(startTime, null);
      document.getElementById('statusText').innerText = 'جاري التشغيل والعرض...';
      document.getElementById('btnPlay').classList.add('opacity-50');
      if (animId) cancelAnimationFrame(animId);
      renderLoop();
    }

    async function recordAndExportVideo() {
      await initAudioEngine();
      const statusEl = document.getElementById('statusText');
      const btnRecord = document.getElementById('btnRecord');

      statusEl.innerText = 'جاري تهيئة مسجل الفيديو...';
      btnRecord.disabled = true;
      btnRecord.classList.add('opacity-50');

      const canvasStream = canvas.captureStream(30);
      const combinedStream = new MediaStream([
        ...canvasStream.getVideoTracks(),
        ...audioDest.stream.getAudioTracks()
      ]);

      let mimeType = 'video/webm;codecs=vp9,opus';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm';
      }

      mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType: mimeType,
        videoBitsPerSecond: 6000000
      });

      recordedChunks = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) recordedChunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Lamha_Shorts8_Tricky_Riddles.webm';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        statusEl.innerText = '✅ تم تنزيل الفيديو بنجاح!';
        btnRecord.disabled = false;
        btnRecord.classList.remove('opacity-50');
      };

      isPlaying = true;
      startTime = audioCtx.currentTime;
      scheduleAllAudio(startTime, audioDest);
      mediaRecorder.start();

      const totalMs = (timeline.totalDuration + 0.5) * 1000;
      statusEl.innerText = 'جاري التسجيل الحي للفيديو والصوت...';

      if (animId) cancelAnimationFrame(animId);
      renderLoop();

      setTimeout(() => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
          mediaRecorder.stop();
        }
      }, totalMs);
    }

    // Initial poster frame
    window.onload = () => {
      drawFrame(0);
    };
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'lamha_shorts8.html'), html);
console.log('✅ Generated lamha_shorts8.html successfully! Size:', fs.statSync(path.join(baseDir, 'lamha_shorts8.html')).size, 'bytes');
