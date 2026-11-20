const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts11_audio');

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

const situations = [
  {
    num: "الموقف النفسي 1 🧱",
    question: "أنت تمشي في طريق ووجدت جداراً عالياً.. ماذا تفعل؟",
    options: ["أتسلق الجدار 🧗‍♂️", "أبحث عن باب جانبي 🚪", "أتوقف وأفكر 🛑"],
    correctIdx: 1, // Any choice is analyzed
    answerTitle: "🧠 التحليل النفسي (الجدار يمثل الصعوبات):",
    analysis: [
      { opt: "🧗‍♂️ التسلق", desc: "شجاعة وإصرار لا يعرف المستحيل" },
      { opt: "🚪 البحث عن باب", desc: "ذكاء ودبلوماسية في حل الأزمات" },
      { opt: "🛑 التوقف", desc: "حكمة وتأنٍّ قبل اتخاذ القرارات" }
    ]
  },
  {
    num: "الموقف النفسي 2 🕯️",
    question: "غرفة مظلمة ومعك عود ثقاب واحد.. أمامك: شمعة، موقد، ومصباح زيت.. ماذا تشعل أولاً؟",
    options: ["الشمعة 🕯️", "موقد الحطب 🪵", "عُود الثِّقاب 🔥"],
    correctIdx: 2,
    answerTitle: "🎯 التحليل الذكي للبديهة:",
    fact: "تشعل عود الثقاب أولاً! إذا انتبهت لها فعقلك سريع البديهة ودقيق الملاحظة!"
  },
  {
    num: "الموقف النفسي 3 🔮",
    question: "صندوق سحري يفتح لمرة واحدة.. ماذا تتمنى داخله؟",
    options: ["ثروة طائلة 💰", "جواب لكل أسئلتك 📜", "رسالة من شخص تحبه 💌"],
    correctIdx: 0,
    answerTitle: "🧠 التحليل النفسي لرغباتك الباطنة:",
    analysis: [
      { opt: "💰 الثروة", desc: "شخصية عملية، طموحة، وتبحث عن الأمان" },
      { opt: "📜 الجواب", desc: "عقل مفكر وفيلسوف يبحث عن الحكمة" },
      { opt: "💌 الرسالة", desc: "قلب وفيّ وعاطفي يقدّر الحب الحقيقي" }
    ]
  }
];

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>شورتس #11 - اختبارات علم النفس والشخصية | قناة لَـمْـحَـة</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif; }
    .glow-violet { box-shadow: 0 0 45px rgba(168, 85, 247, 0.45); }
    .glow-cyan { box-shadow: 0 0 35px rgba(6, 182, 212, 0.4); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-2xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping"></span>
      🔮 قسم جديد: اختبارات علم النفس والشخصية (بصوت فيد البشري الحيوي)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      اختبار علم النفس: <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">3 مواقف تكشف ما يخفيه عقلك الباطن! 🧠✨</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      فيديو شورتس عمودي عالي التفاعل 9:16 بقراءة صحيحة 100% بالتشكيل وصوت بشري مميز
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl">

    <!-- Phone Mockup Frame (9:16 Shorts) -->
    <div class="relative w-[340px] sm:w-[380px] h-[670px] sm:h-[720px] bg-slate-900 rounded-[48px] p-3.5 border-4 border-purple-500/50 glow-violet flex flex-col overflow-hidden select-none">
      
      <!-- Top Island -->
      <div class="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-end px-3">
        <span class="w-2 h-2 rounded-full bg-purple-950 border border-purple-800"></span>
      </div>

      <!-- Inside Phone Screen -->
      <div id="phoneScreen" class="relative w-full h-full bg-slate-950 rounded-[38px] overflow-hidden flex flex-col">
        
        <!-- Video Canvas -->
        <canvas id="videoCanvas" width="720" height="1280" class="w-full h-full object-cover"></canvas>

        <!-- Top Progress Header -->
        <div class="absolute top-12 left-0 right-0 z-30 px-4 flex items-center justify-between pointer-events-none">
          <div class="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-500/30">
            <span class="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span class="text-xs font-bold text-purple-200">لَـمْـحَـة | اختبار شخصية</span>
          </div>
          <span class="text-[11px] font-semibold text-cyan-300 bg-black/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
            علم النفس 🧠
          </span>
        </div>

        <!-- Watermark CTA -->
        <div class="absolute bottom-9 left-0 right-0 z-30 px-6 text-center pointer-events-none">
          <span class="inline-block px-4 py-1.5 bg-black/85 backdrop-blur-md rounded-full text-[11px] text-purple-200 font-bold border border-purple-500/40 shadow">
            ✍️ ما كانت اختياراتك؟ شاركنا في التعليقات!
          </span>
        </div>

      </div>
    </div>

    <!-- Controls Panel -->
    <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <img src="${logoUrl}" alt="Logo" class="w-10 h-10 rounded-full border border-purple-500/50 shadow object-cover">
          <div>
            <h2 class="text-lg font-bold text-white">لَـمْـحَـة | Lamha Quiz</h2>
            <p class="text-xs text-purple-400 font-semibold">@lamha_quiz</p>
          </div>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed mt-2">
          فيديو شورتس جديد كلياً في قسم <b>«اختبارات علم النفس والشخصية»</b> لكسر التكرار ومضاعفة التفاعل والتعليقات. الصوت بشري حيوي ومميز (صوت فاطمة الإماراتي من VEED) مع تشكيل لغوي دقيق 100%.
        </p>
      </div>

      <div class="space-y-3">
        <button id="btnPlay" onclick="startPlayback()" class="w-full py-3.5 px-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/25 transition flex items-center justify-center gap-2 text-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          تشغيل المعاينة والصوت البشري المميز
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="w-full py-3.5 px-4 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 text-white font-bold rounded-2xl shadow-lg shadow-cyan-600/30 transition flex items-center justify-center gap-2 text-sm animate-pulse">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          بدء التسجيل وتنزيل الفيديو (WebM / MP4)
        </button>
      </div>

      <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-950/60 py-2.5 px-3 rounded-xl border border-slate-800">
        جاهز للتشغيل والتصدير
      </div>

      <div class="border-t border-slate-800/80 pt-4">
        <h3 class="text-xs font-bold text-purple-300 mb-2">مواقف هذا الاختبار النفسي:</h3>
        <ul class="text-xs text-slate-300 space-y-2">
          ${situations.map((q, idx) => `
          <li class="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
            <div class="flex items-center justify-between mb-1">
              <span class="text-purple-400 font-bold text-[11px]">${q.num}</span>
            </div>
            <p class="text-slate-200 text-[11px] font-semibold">${q.question}</p>
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
    const situations = ${JSON.stringify(situations)};

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
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 5.5;
      const introEnd = cur + introDur + 0.6;
      timeline.intro = { start: cur, end: introEnd };
      cur = introEnd;

      timeline.questions = [];
      for (let i = 0; i < situations.length; i++) {
        const askKey = 'q' + (i + 1) + '_ask';
        const ansKey = 'q' + (i + 1) + '_ans';
        const askDur = (audioBuffers[askKey] && audioBuffers[askKey].duration) ? audioBuffers[askKey].duration : 5.0;
        const ansDur = (audioBuffers[ansKey] && audioBuffers[ansKey].duration) ? audioBuffers[ansKey].duration : 5.5;

        const askStart = cur;
        const askEnd = askStart + askDur + 0.3;

        const timerStart = askEnd;
        const timerDuration = 4.0; // 4s countdown
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

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 4.5;
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
      osc.frequency.setValueAtTime(950, time);
      gain.gain.setValueAtTime(0.25, time);
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
        gain.gain.setValueAtTime(0.22, time + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, time + i * 0.08 + 0.45);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        if (destination) gain.connect(destination);
        osc.start(time + i * 0.08);
        osc.stop(time + i * 0.08 + 0.45);
        scheduledSources.push(osc);
      });
    }

    function scheduleAllAudio(startNow, dest) {
      scheduledSources.forEach(s => { try { s.stop(); } catch(e){} });
      scheduledSources.length = 0;

      playBuffer(audioBuffers['intro'], startNow + timeline.intro.start, dest);

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

      playBuffer(audioBuffers['outro'], startNow + timeline.outro.audioStart, dest);
    }

    function drawFrame(elapsed) {
      const curTime = elapsed % timeline.totalDuration;

      // Mystical Violet Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#090314');
      bgGrad.addColorStop(0.5, '#17092c');
      bgGrad.addColorStop(1, '#06010d');
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
          ctx.strokeStyle = '#c084fc';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 380, 110, 0, Math.PI * 2);
          ctx.stroke();

          ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
          ctx.lineWidth = 14;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 380, 122, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.textAlign = 'center';
        ctx.fillStyle = '#a855f7';
        ctx.font = 'bold 30px Cairo';
        ctx.fillText('لَـمْـحَـة | قِسْمُ عِلْمِ النَّفْس 🔮', canvas.width / 2, 570);

        ctx.fillStyle = '#ffffff';
        ctx.font = '900 52px Cairo';
        ctx.fillText('اخْتِبَارُ العَقْلِ البَاطِن 🧠', canvas.width / 2, 645);

        ctx.fillStyle = '#22d3ee';
        ctx.font = 'bold 36px Cairo';
        ctx.fillText('3 مَوَاقِفَ تَكْشِفُ حَقِيقَتَك!', canvas.width / 2, 715);

        // Sub card
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.35)';
        ctx.lineWidth = 2;
        roundRect(ctx, 80, 780, canvas.width - 160, 140, 24, true, true);

        ctx.fillStyle = '#e2e8f0';
        ctx.font = '600 24px Cairo';
        ctx.fillText('✨ إِجَابَاتُكَ سَتَكْشِفُ مَا تَخْفِيهِ عَنْ نَفْسِك', canvas.width / 2, 835);
        ctx.fillStyle = '#c084fc';
        ctx.font = 'bold 26px Cairo';
        ctx.fillText('هَلْ أَنْتَ مُسْتَعِدٌّ لِلْمُوَاجَهَة؟ 🔮', canvas.width / 2, 885);
        return;
      }

      // CHECK QUESTIONS
      let activeQ = null;
      for (const q of timeline.questions) {
        if (curTime >= q.start && curTime < q.end) {
          activeQ = q;
          break;
        }
      }

      if (activeQ) {
        const qData = situations[activeQ.index];

        // Question Category Badge
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(168, 85, 247, 0.2)';
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 2;
        roundRect(ctx, canvas.width / 2 - 190, 110, 380, 56, 28, true, true);

        ctx.fillStyle = '#f3e8ff';
        ctx.font = 'bold 26px Cairo';
        ctx.fillText(qData.num, canvas.width / 2, 148);

        // Main Question Box
        ctx.fillStyle = 'rgba(23, 9, 44, 0.85)';
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
        ctx.lineWidth = 3;
        roundRect(ctx, 45, 195, canvas.width - 90, 220, 28, true, true);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 36px Cairo';
        wrapText(ctx, qData.question, canvas.width / 2, 275, canvas.width - 130, 48);

        // Options List
        const startY = 445;
        const optHeight = 84;
        const gap = 20;

        const isAnswerRevealed = curTime >= activeQ.ansStart;

        qData.options.forEach((opt, idx) => {
          const y = startY + idx * (optHeight + gap);

          let bg = 'rgba(255, 255, 255, 0.05)';
          let border = 'rgba(255, 255, 255, 0.15)';
          let textColor = '#cbd5e1';

          if (isAnswerRevealed) {
            if (idx === qData.correctIdx && qData.fact) {
              bg = 'rgba(16, 185, 129, 0.25)';
              border = '#10b981';
              textColor = '#34d399';
            } else if (!qData.fact) {
              // Psychological personality options: highlight all with soft violet/cyan
              bg = 'rgba(168, 85, 247, 0.18)';
              border = 'rgba(168, 85, 247, 0.5)';
              textColor = '#ffffff';
            }
          }

          ctx.fillStyle = bg;
          ctx.strokeStyle = border;
          ctx.lineWidth = 2.5;
          roundRect(ctx, 50, y, canvas.width - 100, optHeight, 20, true, true);

          ctx.textAlign = 'right';
          ctx.fillStyle = textColor;
          ctx.font = '700 30px Cairo';
          ctx.fillText(opt, canvas.width - 90, y + 54);
        });

        // TIMER OR REVEAL SECTION
        if (curTime >= activeQ.timerStart && curTime < activeQ.timerEnd) {
          const timerProgress = (curTime - activeQ.timerStart) / 4.0;
          const timeLeft = Math.ceil(4.0 - (curTime - activeQ.timerStart));

          // Glowing countdown circle
          ctx.save();
          const cx = canvas.width / 2;
          const cy = 840;
          const r = 62;

          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.3)';
          ctx.lineWidth = 8;
          ctx.stroke();

          // Animated arc
          ctx.beginPath();
          ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + (1 - timerProgress) * Math.PI * 2);
          ctx.strokeStyle = '#06b6d4';
          ctx.lineWidth = 8;
          ctx.lineCap = 'round';
          ctx.stroke();

          ctx.textAlign = 'center';
          ctx.fillStyle = '#ffffff';
          ctx.font = '900 48px Cairo';
          ctx.fillText(timeLeft.toString(), cx, cy + 18);

          ctx.fillStyle = '#a5f3fc';
          ctx.font = 'bold 22px Cairo';
          ctx.fillText('فَكِّرْ وَاخْتَرْ بِصِدْق ⏳', cx, cy + 110);
          ctx.restore();
        } else if (isAnswerRevealed) {
          // PSYCHOLOGICAL ANALYSIS REVEAL
          ctx.save();
          const cardY = 780;
          const cardH = 360;

          ctx.fillStyle = 'rgba(15, 6, 30, 0.95)';
          ctx.strokeStyle = '#a855f7';
          ctx.lineWidth = 3.5;
          roundRect(ctx, 45, cardY, canvas.width - 90, cardH, 28, true, true);

          ctx.textAlign = 'center';
          ctx.fillStyle = '#22d3ee';
          ctx.font = '800 28px Cairo';
          ctx.fillText(qData.answerTitle, canvas.width / 2, cardY + 48);

          if (qData.fact) {
            // Trick / logic answer
            ctx.fillStyle = '#34d399';
            ctx.font = '900 38px Cairo';
            ctx.fillText(qData.options[qData.correctIdx], canvas.width / 2, cardY + 120);

            ctx.fillStyle = '#f1f5f9';
            ctx.font = '600 25px Cairo';
            wrapText(ctx, qData.fact, canvas.width / 2, cardY + 185, canvas.width - 130, 38);
          } else if (qData.analysis) {
            // Detailed breakdown of choices
            qData.analysis.forEach((item, aIdx) => {
              const ay = cardY + 95 + aIdx * 78;

              ctx.textAlign = 'right';
              ctx.fillStyle = '#c084fc';
              ctx.font = 'bold 24px Cairo';
              ctx.fillText(item.opt + ':', canvas.width - 80, ay);

              ctx.textAlign = 'right';
              ctx.fillStyle = '#f8fafc';
              ctx.font = '600 22px Cairo';
              ctx.fillText(item.desc, canvas.width - 80, ay + 32);
            });
          }
          ctx.restore();
        }
        return;
      }

      // OUTRO SCENE
      if (curTime >= timeline.outro.start) {
        ctx.save();
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 420, 115, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 115, 305, 230, 230);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = '#a855f7';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 420, 115, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.textAlign = 'center';
        ctx.fillStyle = '#22d3ee';
        ctx.font = 'bold 32px Cairo';
        ctx.fillText('كَيْفَ كَانَتْ نَتِيجَتُك؟ 🌟', canvas.width / 2, 620);

        ctx.fillStyle = '#ffffff';
        ctx.font = '900 44px Cairo';
        ctx.fillText('شَارِكْنَا خِيَارَاتِكَ فِي التَّعْلِيقَات! ✍️', canvas.width / 2, 690);

        ctx.fillStyle = 'rgba(168, 85, 247, 0.25)';
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 2;
        roundRect(ctx, 70, 750, canvas.width - 140, 130, 26, true, true);

        ctx.fillStyle = '#f3e8ff';
        ctx.font = 'bold 28px Cairo';
        ctx.fillText('اشْتَرِكْ فِي قَنَاةِ لَـمْـحَـة 🔔', canvas.width / 2, 805);

        ctx.fillStyle = '#38bdf8';
        ctx.font = '600 24px Cairo';
        ctx.fillText('لِلْمَزِيدِ مِنِ اخْتِبَارَاتِ الشَّخْصِيَّةِ يَوْمِيّاً ✨', canvas.width / 2, 850);
      }
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
      status.innerText = '⏳ جاري تجهيز محرك الصوت البشري وتشغيل الاختبار...';
      
      await initAudioEngine();
      isPlaying = true;
      startTime = performance.now();

      scheduleAllAudio(audioCtx.currentTime, null);
      status.innerText = '▶️ المعاينة قيد التشغيل بالصوت البشري المميز (Fatima)';

      function loop() {
        if (!isPlaying) return;
        const elapsed = (performance.now() - startTime) / 1000;
        drawFrame(elapsed);
        if (elapsed < timeline.totalDuration) {
          animId = requestAnimationFrame(loop);
        } else {
          isPlaying = false;
          status.innerText = '✅ اكتملت المعاينة! جاهز للتسجيل والتصدير';
        }
      }
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(loop);
    }

    async function recordAndExportVideo() {
      const status = document.getElementById('statusText');
      const btn = document.getElementById('btnRecord');
      btn.disabled = true;
      status.innerText = '🔴 جاري تسجيل الفيديو بدقة 720x1280 والصوت البشري...';

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
        a.download = 'Lamha_Shorts11_Psychology_Test.webm';
        a.click();
        status.innerHTML = '🎉 <b>تم تنزيل الفيديو بنجاح!</b> (Lamha_Shorts11_Psychology_Test.webm)';
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

const outPath = path.join(baseDir, 'lamha_shorts11.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('✅ تم بنجاح إنشاء lamha_shorts11.html في:', outPath);
console.log('حجم الملف:', (fs.statSync(outPath).size / 1024).toFixed(2), 'KB');
