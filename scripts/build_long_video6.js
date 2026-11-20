const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'long_quiz6_audio');

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

const cases = [
  {
    badge: "القضية 1: الهروب المستحيل 🚪",
    title: "سجين يهرب ولديه 3 أبواب: قناصة، أسود لم تأكل منذ 6 أشهر، أو ليزر حارق.. أي باب يختاره؟",
    options: ["الباب الأول (القناصة) 🎯", "الباب الثاني (الأسود) 🦁", "الباب الثالث (أشعة الليزر) ⚡"],
    correctIdx: 1,
    evidence: "الباب الثاني! الأسود التي لم تأكل منذ 6 أشهر ماتت من الجوع بالتأكيد!"
  },
  {
    badge: "القضية 2: كذبة التخييم ⛺",
    title: "ادعى شخص أن دباً هاجم خيمته وسرق طعامه وساعته الذهبية وهرب سريعاً.. كيف كشف المحقق كذبته؟",
    options: ["الدببة لا تسرق الساعات 🐻", "الدببة في بيات شتوي ❄️", "لا توجد آثار أقدام 🐾"],
    correctIdx: 0,
    evidence: "الحيوانات تبحث عن الطعام فقط، ولا تسرق المجوهرات أو الساعات الذهبية!"
  },
  {
    badge: "القضية 3: العصير المسموم 🧊",
    title: "شربت فتاتان نفس العصير المثلج، الأولى شربت 4 كؤوس بسرعة ونجت، والثانية شربت كأساً ببطء وماتت! أين كان السم؟",
    options: ["في قاع الكأس 🥃", "داخل مكعبات الثلج 🧊", "في قشة الشرب 🥤"],
    correctIdx: 1,
    evidence: "السم كان في الثلج! الأولى شربت قبل ذوبانه، بينما ذاب الثلج المسموم في كأس الثانية!"
  },
  {
    badge: "القضية 4: الماسة والليل العاصف 💎",
    title: "سُرقت ماسة في ليلة ماطرة موحلة، ادعى المشتبه به أنه اقتحم القصر من الخارج لإنقاذها.. فنظر المحقق لحذائه واعتقله، لماذا؟",
    options: ["حذاؤه كان نظيفاً وجافاً 👟", "حذاؤه مقاسه أصغر 📏", "ترك بصمات في الخزنة 👣"],
    correctIdx: 0,
    evidence: "حذاؤه كان جافاً ونظيفاً تماماً! لو كان بالخارج في ليلة ماطرة لكان موحلاً ومبللاً!"
  },
  {
    badge: "القضية 5: شريط الكاسيت 📼",
    title: "رجل ميت بطلقة ومسدس بيده ومسجل أمامه، ضغط المحقق تشغيل فسمع: 'سأنهي حياتي' ثم صوت طلقة.. كيف عرف أنها جريمة قتل؟",
    options: ["المسدس بيده اليمنى 🔫", "المسجل أُعيد لبداية الشريط 📼", "الرصاصة من زاوية بعيدة 📐"],
    correctIdx: 1,
    evidence: "المسجل كان معادا للبداية! إذا كان الرجل قد مات بالرصاصة فمن أوقف التسجيل وأعاد الشريط؟ شخص آخر!"
  },
  {
    badge: "القضية 6: التوائم الثلاثة 👥",
    title: "لص دخل منزلاً فيه 3 توائم: الأول قال أقرأ كتاباً في الظلام، الثاني يصلح المصباح، الثالث عائد من الحديقة.. من الكاذب؟",
    options: ["الأول (يقرأ في الظلام) 📖", "الثاني (يصلح المصباح) 💡", "الثالث (عائد من الحديقة) 🌳"],
    correctIdx: 0,
    evidence: "الأول بالطبع! فلا يمكن لأي إنسان في العالم القراءة في الظلام الدامس!"
  },
  {
    badge: "القضية 7: ساعة الحائط المتوقفة 🕰️",
    title: "ادعى رجل أن لصوصاً سرقوا منزله 4:00 عصراً وكسروا الساعة لتتوقف كإثبات.. فحص المحقق الساعة واعتقله فوراً، لماذا؟",
    options: ["الساعة تعمل بالبطارية 🔋", "العقرب كان مقلوباً ⏱️", "الغبار المتراكم خلف العقارب 🕸️"],
    correctIdx: 2,
    evidence: "الغبار المتراكم خلف العقرب! لو كانت الساعة تعمل حتى الرابعة لما كان هناك غبار قديم متراكم خلفه!"
  },
  {
    badge: "القضية 8: حبة الدواء القاتلة 💊",
    title: "مجرم يخير ضحاياه بين حبتين وكأسي ماء إحداهما قاتلة، فيبتلع المجرم حبة وينجو ويموت الضحية في كل مرة.. أين كان السم؟",
    options: ["في كأس ماء الضحية 💧", "المجرم معه مضاد سموم 💉", "الحبتان قاتلتان 🧪"],
    correctIdx: 0,
    evidence: "السم كان في كأس ماء الضحية مسبقاً! أما حبات الدواء فكانت سليمة تماماً!"
  },
  {
    badge: "القضية 9: أول يوم دراسي 🏫",
    title: "في أول يوم من العام الدراسي قُتل معلم: البستاني قال أجمع أوراق الشجر، الطباخ يعد الغداء، الحارس يوزع البريد.. من القاتل؟",
    options: ["البستاني 🍂", "الطباخ 👨‍🍳", "الحارس (توزيع البريد) 👮"],
    correctIdx: 2,
    evidence: "الحارس! ففي اليوم الأول من العام الدراسي لا يوجد أي بريد متراكم لتوزيعه على المعلمين بعد!"
  },
  {
    badge: "القضية 10: بخار زجاج النافذة ❄️",
    title: "ادعى لص أنه مسح بخار التنفس والجليد عن زجاج نافذة المتجر من الخارج ليرى الخزنة في ليلة مثلجة.. كيف كشف المحقق كذبته؟",
    options: ["البخار يتكثف من الداخل ❄️", "الزجاج كان عازلاً 🪟", "الجليد لا يذوب بالمسح 🧊"],
    correctIdx: 0,
    evidence: "في الشتاء البارد، البخار والضباب يتكثف على السطح الداخلي الدافئ، ولا يمكن مسحه من الخارج إطلاقاً!"
  }
];

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 ألغاز بوليسية غامضة للعباقرة (فيديو طويل 16:9 HD) | قناة لَـمْـحَـة</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif; }
    .glow-amber { box-shadow: 0 0 35px rgba(245, 158, 11, 0.4); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-3xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
      🕵️‍♂️ فيديو طويل جديد 16:9 HD (سلسلة ألغاز المحققين والغموض)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      10 ألغاز بوليسية غامضة: <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-400">هل تكشف الجاني قبل المحقق؟ 🔎⚡</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      فيديو احترافي كامل 16:9 بالصوت البشري والمؤقت وأدلة كشف القضايا لزيادة ساعات المشاهدة على يوتيوب
    </p>
  </div>

  <!-- Main Container -->
  <div class="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">

    <!-- Screen Mockup Frame (16:9 Widescreen) -->
    <div class="relative w-full max-w-3xl aspect-video bg-slate-900 rounded-[32px] p-3 border-4 border-amber-500/40 glow-amber flex flex-col overflow-hidden select-none">
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
          فيديو طويل مميز (10 قضايا بوليسية مشوقة) مصمم خصيصاً لمضاعفة متوسط مدة المشاهدة (Audience Retention) وتحقيق ساعات المشاهدة لشروط الدخل.
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
        <h3 class="text-xs font-bold text-slate-400 mb-2">قضايا هذا التحدي (10 قضايا):</h3>
        <div class="space-y-1.5 text-xs text-slate-300 max-h-48 overflow-y-auto pr-1">
          ${cases.map((c, idx) => `
          <div class="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-slate-800/80">
            <span class="text-amber-400 font-bold text-[11px]">${c.badge}</span>
            <span class="text-emerald-400 font-bold text-[11px]">${c.options[c.correctIdx]}</span>
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
    const cases = ${JSON.stringify(cases)};

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
      for (let i = 0; i < cases.length; i++) {
        const askKey = 'q' + (i + 1) + '_ask';
        const ansKey = 'q' + (i + 1) + '_ans';
        const askDur = (audioBuffers[askKey] && audioBuffers[askKey].duration) ? audioBuffers[askKey].duration : 8.0;
        const ansDur = (audioBuffers[ansKey] && audioBuffers[ansKey].duration) ? audioBuffers[ansKey].duration : 7.0;

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

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 10.0;
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

      // Noir Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGrad.addColorStop(0, '#040711');
      bgGrad.addColorStop(0.5, '#0b1324');
      bgGrad.addColorStop(1, '#02050b');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.direction = 'rtl';

      if (curTime < timeline.intro.end) {
        // INTRO SCENE
        ctx.save();
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 230, 85, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 85, 145, 170, 170);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 230, 85, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.save();
        ctx.font = '900 54px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.shadowBlur = 20;
        ctx.fillText('10 ألغاز وقضايا بوليسية غامضة 🕵️‍♂️🔍', canvas.width / 2, 385);

        ctx.font = 'bold 36px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.shadowBlur = 10;
        ctx.fillText('هل يمكنك كشف الجاني قبل المحقق؟', canvas.width / 2, 455);

        ctx.font = '54px sans-serif';
        ctx.fillText('🚪 ⛺ 🧊 💎 📼 👥 🕰️ 💊 🏫 ❄️', canvas.width / 2, 540);

        ctx.font = 'bold 24px Cairo, sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.shadowBlur = 0;
        ctx.fillText('اختبر مهاراتك وقوة ملاحظتك في عالم التحقيق الجنائي', canvas.width / 2, 620);
        ctx.restore();

      } else if (curTime < timeline.outro.start) {
        // CASE QUESTION SCENE
        const curQItem = timeline.questions.find(q => curTime >= q.start && curTime < q.end) 
                         || timeline.questions[timeline.questions.length - 1];
        const qIndex = curQItem.index;
        const curCase = cases[qIndex];

        // Top Header Info
        ctx.save();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(80, 25, 1120, 60, 18);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 24px Cairo, sans-serif';
        ctx.fillStyle = '#f59e0b';
        ctx.textAlign = 'right';
        ctx.fillText(curCase.badge, 1160, 64);

        ctx.fillStyle = '#94a3b8';
        ctx.textAlign = 'left';
        ctx.fillText('قناة لَـمْـحَـة | Lamha Quiz ⚡', 120, 64);
        ctx.restore();

        // Case Story Card
        ctx.save();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(80, 105, 1120, 140, 22);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 30px Cairo, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        wrapText(ctx, curCase.title, canvas.width / 2, 160, 1040, 44);
        ctx.restore();

        // Center Countdown Timer
        const isTimerActive = curTime >= curQItem.timerStart && curTime < curQItem.timerEnd;
        const isAnswerRevealed = curTime >= curQItem.ansStart;

        ctx.save();
        const timerCenterX = canvas.width / 2;
        const timerCenterY = 300;
        const timerRadius = 40;

        ctx.beginPath();
        ctx.arc(timerCenterX, timerCenterY, timerRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
        ctx.fill();
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#334155';
        ctx.stroke();

        if (isTimerActive) {
          const timerProgress = (curTime - curQItem.timerStart) / 7.0;
          const remainingSecs = Math.max(1, Math.ceil(7.0 - (curTime - curQItem.timerStart)));

          ctx.beginPath();
          ctx.arc(timerCenterX, timerCenterY, timerRadius, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * (1 - timerProgress)), false);
          ctx.strokeStyle = remainingSecs <= 3 ? '#ef4444' : '#f59e0b';
          ctx.lineWidth = 6;
          ctx.stroke();

          ctx.font = '900 36px Cairo, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = remainingSecs <= 3 ? '#ef4444' : '#fbbf24';
          ctx.fillText(remainingSecs.toString(), timerCenterX, timerCenterY + 12);
        } else if (isAnswerRevealed) {
          ctx.font = '900 36px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#10b981';
          ctx.fillText('✓', timerCenterX, timerCenterY + 11);
        } else {
          ctx.font = 'bold 24px Cairo, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#64748b';
          ctx.fillText('⏳', timerCenterX, timerCenterY + 8);
        }
        ctx.restore();

        // 3 Options Grid
        const optW = 345;
        const optH = 80;
        const optXs = [855, 467, 80]; // RTL layout for 3 columns

        curCase.options.forEach((opt, idx) => {
          const x = optXs[idx];
          const y = 375;
          const isCorrect = idx === curCase.correctIdx;

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
          ctx.roundRect(x, y, optW, optH, 18);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 22px Cairo, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = (isAnswerRevealed && isCorrect) ? '#34d399' : '#f8fafc';
          ctx.fillText(opt, x + optW / 2, y + 48);
          ctx.restore();
        });

        // Forensic Evidence Banner
        if (isAnswerRevealed) {
          ctx.save();
          ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(80, 485, 1120, 115, 18);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 24px Cairo, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#a7f3d0';
          wrapText(ctx, '🔍 الدليل والتحليل: ' + curCase.evidence, canvas.width / 2, 535, 1040, 34);
          ctx.restore();
        }

        // Bottom Progress Bar
        ctx.save();
        const progWidth = (qIndex + 1) / cases.length * 1120;
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.roundRect(80, 640, 1120, 12, 6);
        ctx.fill();

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.roundRect(80, 640, progWidth, 12, 6);
        ctx.fill();

        ctx.font = 'bold 16px Cairo, sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.textAlign = 'center';
        ctx.fillText('القضية ' + (qIndex + 1) + ' من ' + cases.length, canvas.width / 2, 678);
        ctx.restore();

      } else {
        // OUTRO SCENE (Detective Rank Assessment)
        ctx.save();
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 170, 75, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 75, 95, 150, 150);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 170, 75, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.save();
        ctx.font = '900 48px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(16, 185, 129, 0.8)';
        ctx.shadowBlur = 20;
        ctx.fillText('انتهت القضايا! ما هي رتبتك كمحقق؟ 🕵️‍♂️🏆', canvas.width / 2, 290);

        // Score Ranks Table
        const ranks = [
          { score: "1 - 4 قضايا", rank: "محقق مبتدئ 🔍", color: "#94a3b8" },
          { score: "5 - 7 قضايا", rank: "محقق ذكي وسريع البديهة 👮", color: "#38bdf8" },
          { score: "8 - 10 قضايا", rank: "شارلوك هولمز الحقيقي 👑🕵️‍♂️", color: "#fbbf24" }
        ];

        ranks.forEach((r, idx) => {
          const y = 345 + idx * 60;
          ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
          ctx.strokeStyle = r.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(280, y, 720, 50, 14);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 22px Cairo, sans-serif';
          ctx.textAlign = 'right';
          ctx.fillStyle = '#ffffff';
          ctx.fillText(r.score, 970, y + 33);

          ctx.textAlign = 'left';
          ctx.fillStyle = r.color;
          ctx.fillText(r.rank, 310, y + 33);
        });

        // CTA
        ctx.font = 'bold 28px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#34d399';
        ctx.fillText('اكتب نتيجتك ورتبتك في التعليقات واشترك في قناة «لَـمْـحَـة» للمزيد!', canvas.width / 2, 580);

        ctx.font = '20px Cairo, sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText('🔔 فعل زر الجرس لتصلك ألغازنا البوليسية الجديدة أسبوعياً', canvas.width / 2, 620);
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
        videoBitsPerSecond: 8000000
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
        a.download = 'Lamha_Long_Video6_Detective_Mystery.webm';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        statusEl.innerText = '✅ تم تنزيل الفيديو الطويل بنجاح!';
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

    window.onload = () => {
      drawFrame(0);
    };
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'lamha_long_video6.html'), html);
console.log('✅ Generated lamha_long_video6.html successfully! Size:', fs.statSync(path.join(baseDir, 'lamha_long_video6.html')).size, 'bytes');
