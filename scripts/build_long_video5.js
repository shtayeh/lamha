const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'long_quiz5_audio');

const logoB64 = fs.readFileSync(path.join(baseDir, 'lamha_official_logo.jpg')).toString('base64');
const logoUrl = 'data:image/jpeg;base64,' + logoB64;

const clipNames = ['intro'];
for (let i = 1; i <= 10; i++) {
  clipNames.push(`q${i}_ask`, `q${i}_ans`);
}
clipNames.push('outro');

const audioData = {};
for (const c of clipNames) {
  const p = path.join(audioDir, c + '.mp3');
  if (fs.existsSync(p)) {
    const b = fs.readFileSync(p).toString('base64');
    audioData[c] = 'data:audio/mp3;base64,' + b;
  }
}

const questions = [
  {
    category: "علم الأحياء وجسم الإنسان 🧬",
    question: "ما هو العضو الوحيد في جسم الإنسان الذي يعيد نمو نفسه إذا قُطع جزء منه؟",
    options: ["القلب", "الرئة", "الكبد", "الكلية"],
    correctIdx: 2,
    fact: "الكبد يمتلك قدرة فريدة على التجدد واستعادة حجمه الطبيعي خلال أسابيع!"
  },
  {
    category: "الجغرافيا وعواصم العالم 🌍",
    question: "ما هي عاصمة أستراليا الحقيقية؟",
    options: ["سيدني", "ملبورن", "كانبيرا", "بيرث"],
    correctIdx: 2,
    fact: "اختيرت كانبيرا كعاصمة وسطية لإنهاء الخلاف التنافسي بين سيدني وملبورن عام 1913!"
  },
  {
    category: "التاريخ والعلماء المسلمون 🏛️",
    question: "من هو العالم المسلم الملقب بـ «أبو الجبر» ومؤسس علم الخوارزميات؟",
    options: ["ابن الهيثم", "محمد بن موسى الخوارزمي", "ابن سينا", "البيروني"],
    correctIdx: 1,
    fact: "تعد الخوارزميات (Algorithms) أساس علوم الحاسوب والذكاء الاصطناعي اليوم!"
  },
  {
    category: "عجائب الطبيعة والمحيطات 🌊",
    question: "ما هو أعمق مكان على سطح كوكب الأرض في المحيطات؟",
    options: ["خندق ماريانا", "خندق بورتوريكو", "خندق جاوا", "خندق تونغا"],
    correctIdx: 0,
    fact: "يصل عمق خندق ماريانا إلى قرابة 11,034 متراً تحت سطح المحيط الهادئ!"
  },
  {
    category: "الفيزياء والكيمياء 🧪",
    question: "ما هو المعدن الوحيد الذي يكون سائلاً في درجة حرارة الغرفة الطبيعية؟",
    options: ["الرصاص", "الزئبق", "القصدير", "الغاليوم"],
    correctIdx: 1,
    fact: "الزئبق يحتفظ بحالته السائلة حتى درجة انصهار تبلغ 38.8- مئوية!"
  },
  {
    category: "الثقافة الإسلامية والقرآن الكريم 🕌",
    question: "ما هي أطول سورة في القرآن الكريم؟",
    options: ["سورة آل عمران", "سورة البقرة", "سورة النساء", "سورة المائدة"],
    correctIdx: 1,
    fact: "تحتوي سورة البقرة على 286 آية وتتضمن آية الدين وهي أطول آية في القرآن!"
  },
  {
    category: "عالم الحيوان والغرائب 🐬",
    question: "ما هو الحيوان الذي يستطيع النوم وإحدى عينيه مفتوحة ونصف دماغه مستيقظ؟",
    options: ["الدلفين", "الفيل", "الصقر", "الخفاش"],
    correctIdx: 0,
    fact: "يسمى النوم أحادي نصف الكرة المخية لتمكين الدلفين من التنفس وتفادي المفترسات!"
  },
  {
    category: "الفضاء والنظام الشمسي 🪐",
    question: "ما هو الكوكب الأكثر حرارة في مجموعتنا الشمسية؟",
    options: ["عطارد", "الزهرة", "المريخ", "المشتري"],
    correctIdx: 1,
    fact: "تصل حرارة الزهرة إلى 465° مئوية بسبب غلافه الجوي الكثيف وغاز ثاني أكسيد الكربون!"
  },
  {
    category: "العلوم والفيزياء الممتعة 🍳",
    question: "ما هو الشيء الذي إذا قمت بغليه تجمّد؟",
    options: ["الماء", "البيض", "الحليب", "الزيت"],
    correctIdx: 1,
    fact: "يتصلب البيض بالحرارة بسبب تفكك وتخثر سلاسل البروتين في الزلال والصفار!"
  },
  {
    category: "نادي الـ 1% للأذكياء 🧠",
    question: "كم عدد الأشهر في السنة التي تحتوي على 28 يوماً؟",
    options: ["شهر واحد فقط", "شهران", "ستة أشهر", "كل الأشهر (12 شهراً)"],
    correctIdx: 3,
    fact: "كل شهر من أشهر السنة يحتوي على 28 يوماً على الأقل!"
  }
];

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>التحدي المعرفي الكبير (10 أسئلة ثقافة عامة) - فيديو طويل 16:9 HD | قناة لَـمْـحَـة</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif; }
    .glow-gold { box-shadow: 0 0 35px rgba(245, 158, 11, 0.35); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-3xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
      🏆 فيديو طويل جديد 16:9 HD (سلسلة التحدي المعرفي الكبير)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      التحدي المعرفي الكبير: <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">10 أسئلة ثقافة عامة للعباقرة! 🧠⚡</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      فيديو احترافي كامل 16:9 بالصوت البشري والمؤقت وكشف الإجابات الذكية لزيادة ساعات المشاهدة على يوتيوب
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">

    <!-- Screen Mockup Frame (16:9 Widescreen) -->
    <div class="relative w-full max-w-3xl aspect-video bg-slate-900 rounded-[32px] p-3 border-4 border-amber-500/40 glow-gold flex flex-col overflow-hidden select-none">
      <div id="videoContainer" class="relative w-full h-full bg-slate-950 rounded-[22px] overflow-hidden flex flex-col">
        <canvas id="videoCanvas" width="1280" height="720" class="w-full h-full object-cover"></canvas>
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
          فيديو طويل متكامل (10 أسئلة) يجمع بين العلوم، التاريخ، الجغرافيا، والثقافة الإسلامية لتحقيق أعلى معدل احتفاظ بالجمهور وساعات مشاهدة.
        </p>
      </div>

      <div class="space-y-3">
        <button id="btnPlay" onclick="startPlayback()" class="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/25 transition flex items-center justify-center gap-2 text-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          تشغيل المعاينة والصوت المنطوق
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2 text-sm animate-pulse">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          بدء التسجيل وتنزيل الفيديو كاملاً (WebM / MP4)
        </button>
      </div>

      <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-950/60 py-2.5 px-3 rounded-xl border border-slate-800">
        جاهز للتشغيل والتصدير
      </div>

      <div class="border-t border-slate-800/80 pt-4">
        <h3 class="text-xs font-bold text-slate-400 mb-2">أقسام الأسئلة (10 أسئلة):</h3>
        <div class="space-y-1.5 text-xs text-slate-300 max-h-48 overflow-y-auto pr-1">
          ${questions.map((q, idx) => `
          <div class="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-slate-800/80">
            <span class="text-amber-400 font-bold text-[11px]">${idx+1}. ${q.category}</span>
            <span class="text-emerald-400 font-bold text-[11px]">${q.options[q.correctIdx]}</span>
          </div>`).join('')}
        </div>
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
      intro: { start: 0, end: 11.0 },
      questions: [],
      outro: { start: 160, end: 175 },
      totalDuration: 175
    };

    function buildDynamicTimeline() {
      let cur = 0;
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 10.5;
      const introEnd = cur + introDur + 1.0;
      timeline.intro = { start: cur, end: introEnd };
      cur = introEnd;

      timeline.questions = [];
      for (let i = 0; i < questions.length; i++) {
        const askKey = 'q' + (i + 1) + '_ask';
        const ansKey = 'q' + (i + 1) + '_ans';
        const askDur = (audioBuffers[askKey] && audioBuffers[askKey].duration) ? audioBuffers[askKey].duration : 5.0;
        const ansDur = (audioBuffers[ansKey] && audioBuffers[ansKey].duration) ? audioBuffers[ansKey].duration : 6.5;

        const askStart = cur;
        const askEnd = askStart + askDur + 0.3;

        const timerStart = askEnd;
        const timerDuration = 7.0; // 7 seconds countdown for long video
        const timerEnd = timerStart + timerDuration;

        const ansStart = timerEnd;
        const chimeStart = ansStart;
        const ansAudioStart = ansStart + 0.3;
        const ansEnd = ansAudioStart + ansDur + 1.5;

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

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 8.5;
      timeline.outro = {
        start: cur,
        audioStart: cur + 0.5,
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
      if (destination) src.connect(destination);
      src.start(time);
      scheduledSources.push(src);
    }

    function playTick(time, destination) {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, time);
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
        osc.frequency.setValueAtTime(freq, time + i * 0.09);
        gain.gain.setValueAtTime(0.22, time + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, time + i * 0.09 + 0.45);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        if (destination) gain.connect(destination);
        osc.start(time + i * 0.09);
        osc.stop(time + i * 0.09 + 0.45);
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

        for (let t = 0; t < 7; t++) {
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

      // Deep rich background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#0a0d1a');
      bgGrad.addColorStop(0.5, '#12182d');
      bgGrad.addColorStop(1, '#060814');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.direction = 'rtl';

      if (curTime < timeline.intro.end) {
        // INTRO SCENE
        ctx.save();
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 220, 85, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 85, 135, 170, 170);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 220, 85, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.save();
        ctx.font = '900 48px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.9)';
        ctx.shadowBlur = 25;
        ctx.fillText('🏆 التَّحَدِّي المَعْرِفِيُّ الكَبِير 🏆', canvas.width / 2, 380);

        ctx.font = 'bold 30px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.shadowBlur = 10;
        ctx.fillText('10 أسئلة ثقافة عامة ومعلومات شيقة للعباقرة!', canvas.width / 2, 440);

        ctx.font = '600 24px Cairo, sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.shadowBlur = 0;
        ctx.fillText('علوم • تاريخ • جغرافيا • فضاء • ثقافة إسلامية • ألغاز ذكاء', canvas.width / 2, 510);

        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 200, 560, 400, 60, 30);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 22px Cairo, sans-serif';
        ctx.fillStyle = '#fde68a';
        ctx.fillText('⚡ جهز عقلك.. التحدي يبدأ الآن! ⚡', canvas.width / 2, 598);
        ctx.restore();

      } else if (curTime < timeline.outro.start) {
        // QUESTION SCENE
        const curQItem = timeline.questions.find(q => curTime >= q.start && curTime < q.end) 
                         || timeline.questions[timeline.questions.length - 1];
        const qIndex = curQItem.index;
        const curQ = questions[qIndex];

        // Top Navigation Header
        ctx.save();
        // Category Badge
        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(60, 35, 340, 46, 23);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 19px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.textAlign = 'center';
        ctx.fillText(curQ.category, 230, 65);

        // Center Logo & Brand
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 58, 28, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 28, 30, 56, 56);
          ctx.restore();
        }

        // Question Progress Badge (e.g. السؤال 1 من 10)
        ctx.save();
        ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(canvas.width - 320, 35, 260, 46, 23);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 19px Cairo, sans-serif';
        ctx.fillStyle = '#34d399';
        ctx.textAlign = 'center';
        ctx.fillText(\`السؤال \${qIndex + 1} من 10 🎯\`, canvas.width - 190, 65);
        ctx.restore();

        // Main Question Box
        ctx.save();
        ctx.fillStyle = 'rgba(18, 24, 46, 0.9)';
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
        ctx.lineWidth = 3;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.2)';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.roundRect(60, 110, canvas.width - 120, 150, 24);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 32px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
        ctx.shadowBlur = 10;
        
        // Wrap question if long
        const words = curQ.question.split(' ');
        if (words.length > 8) {
          const mid = Math.ceil(words.length / 2);
          ctx.fillText(words.slice(0, mid).join(' '), canvas.width / 2, 170);
          ctx.fillText(words.slice(mid).join(' '), canvas.width / 2, 225);
        } else {
          ctx.fillText(curQ.question, canvas.width / 2, 195);
        }
        ctx.restore();

        // 7-Second Timer Bar & Text
        let timerProgress = 1;
        let secText = "7 ثوانٍ";
        let revealed = false;

        if (curTime < curQItem.timerStart) {
          timerProgress = 1;
          secText = "7 ثوانٍ";
          revealed = false;
        } else if (curTime >= curQItem.timerStart && curTime < curQItem.timerEnd) {
          const tElapsed = curTime - curQItem.timerStart;
          timerProgress = Math.max(0, 1 - (tElapsed / 7.0));
          secText = Math.ceil(7 - tElapsed) + " ثوانٍ";
          revealed = false;
        } else {
          timerProgress = 0;
          secText = "انتهى الوقت!";
          revealed = true;
        }

        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.beginPath();
        ctx.roundRect(60, 280, canvas.width - 120, 14, 7);
        ctx.fill();

        if (timerProgress > 0) {
          const barGrad = ctx.createLinearGradient(60, 0, canvas.width - 60, 0);
          barGrad.addColorStop(0, '#ef4444');
          barGrad.addColorStop(0.5, '#f59e0b');
          barGrad.addColorStop(1, '#10b981');
          ctx.fillStyle = barGrad;
          ctx.beginPath();
          ctx.roundRect(60, 280, (canvas.width - 120) * timerProgress, 14, 7);
          ctx.fill();
        }

        ctx.font = 'bold 20px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = revealed ? '#10b981' : '#f59e0b';
        ctx.fillText(secText, canvas.width / 2, 325);
        ctx.restore();

        // 4 Options Grid (2 columns x 2 rows)
        const letters = ['أ', 'ب', 'ج', 'د'];
        const cardW = 560;
        const cardH = 80;
        const col1X = 60;
        const col2X = canvas.width - 60 - cardW;
        const row1Y = 350;
        const row2Y = 450;

        const coords = [
          { x: col2X, y: row1Y }, // أ (top right in RTL)
          { x: col1X, y: row1Y }, // ب (top left in RTL)
          { x: col2X, y: row2Y }, // ج (bottom right in RTL)
          { x: col1X, y: row2Y }  // د (bottom left in RTL)
        ];

        curQ.options.forEach((opt, oIdx) => {
          const pos = coords[oIdx];
          const isCorrect = oIdx === curQ.correctIdx;

          ctx.save();
          if (revealed && isCorrect) {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 3.5;
            ctx.shadowColor = 'rgba(16, 185, 129, 0.8)';
            ctx.shadowBlur = 20;
          } else {
            ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.lineWidth = 2;
          }

          ctx.beginPath();
          ctx.roundRect(pos.x, pos.y, cardW, cardH, 18);
          ctx.fill();
          ctx.stroke();

          // Letter Badge
          ctx.fillStyle = (revealed && isCorrect) ? '#10b981' : 'rgba(245, 158, 11, 0.2)';
          ctx.beginPath();
          ctx.arc(pos.x + cardW - 45, pos.y + cardH / 2, 22, 0, Math.PI * 2);
          ctx.fill();

          ctx.font = 'bold 22px Cairo, sans-serif';
          ctx.fillStyle = (revealed && isCorrect) ? '#ffffff' : '#fbbf24';
          ctx.textAlign = 'center';
          ctx.fillText(letters[oIdx], pos.x + cardW - 45, pos.y + cardH / 2 + 8);

          // Option Text
          ctx.font = 'bold 24px Cairo, sans-serif';
          ctx.textAlign = 'right';
          ctx.fillStyle = (revealed && isCorrect) ? '#34d399' : '#ffffff';
          ctx.fillText(opt, pos.x + cardW - 85, pos.y + cardH / 2 + 8);
          ctx.restore();
        });

        // Fact Banner (when revealed)
        if (revealed && curQ.fact) {
          ctx.save();
          ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(60, 560, canvas.width - 120, 85, 18);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 18px Cairo, sans-serif';
          ctx.fillStyle = '#38bdf8';
          ctx.textAlign = 'center';
          ctx.fillText('💡 معلومة تفصيلية سريعة:', canvas.width / 2, 592);

          ctx.font = '600 20px Cairo, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.fillText(curQ.fact, canvas.width / 2, 625);
          ctx.restore();
        }

      } else {
        // OUTRO SCENE
        ctx.save();
        ctx.font = '900 52px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText('🎉 اكتمل التحدي المعرفي الكبير! 🎉', canvas.width / 2, 240);

        ctx.font = 'bold 36px Cairo, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('كم إجابة صحيحة حققت من 10؟ 🏆', canvas.width / 2, 320);

        ctx.font = 'bold 26px Cairo, sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('اكتب درجتك الآن في التعليقات وشارك الفيديو مع أصدقائك 💬', canvas.width / 2, 385);

        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 250, 440, 500, 110, 24);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 32px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('اشترك في قناة «لَـمْـحَـة» وفعل الجرس 🔔', canvas.width / 2, 490);

        ctx.font = 'bold 20px Cairo, sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText('مسابقات يومية وتحديات ثقافية متجددة!', canvas.width / 2, 530);
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
      statusText.innerText = '🔴 جاري تسجيل وتصدير الفيديو الطويل كاملاً... يرجى الانتظار';

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
        a.download = 'Lamha_Long_Video5_Grand_Trivia.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          statusText.innerText = '✅ تم تنزيل الفيديو الطويل #5 بنجاح! جاهز للنشر على يوتيوب';
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

const outPath = path.join(baseDir, 'lamha_long_video5.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Saved lamha_long_video5.html, size:', fs.statSync(outPath).size);
