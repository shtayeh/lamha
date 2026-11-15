const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(dir, 'long_quiz4_audio');

const logoB64 = fs.readFileSync(path.join(dir, 'lamha_official_logo.jpg')).toString('base64');
const logoUrl = 'data:image/jpeg;base64,' + logoB64;

const clipNames = [
  'intro',
  'q1_ask', 'q1_ans',
  'q2_ask', 'q2_ans',
  'q3_ask', 'q3_ans',
  'q4_ask', 'q4_ans',
  'q5_ask', 'q5_ans',
  'q6_ask', 'q6_ans',
  'q7_ask', 'q7_ans',
  'q8_ask', 'q8_ans',
  'q9_ask', 'q9_ans',
  'q10_ask', 'q10_ans',
  'outro'
];

const audioData = {};
for (const c of clipNames) {
  const b = fs.readFileSync(path.join(audioDir, c + '.mp3')).toString('base64');
  audioData[c] = 'data:audio/mp3;base64,' + b;
}

const questions = [
  {
    num: 1,
    q: "شيء تملكه أنت، لكن الناس يستخدمونه أكثر منك، فما هو؟",
    options: ["أ) هاتفك الذكي", "ب) اسمك الشخصي", "ج) أموالك في البنك", "د) بيتك ومفتاحك"],
    correct: 1,
    fact: "اسمك يناديك به الجميع طوال الوقت بينما أنت نادراً ما تذكره!"
  },
  {
    num: 2,
    q: "ما هي عاصمة أستراليا الرسمية؟",
    options: ["أ) سيدني", "ب) كانبيرا", "ج) ملبورن", "د) بيرث"],
    correct: 1,
    fact: "كانبيرا هي العاصمة الفيدرالية وليست سيدني كما يظن الكثيرون!"
  },
  {
    num: 3,
    q: "ما هو الكوكب الأكثر حرارة في مجموعتنا الشمسية؟",
    options: ["أ) عطارد", "ب) المريخ", "ج) كوكب الزهرة", "د) المشتري"],
    correct: 2,
    fact: "الزهرة أشد حرارة بسبب ظاهرة الاحتباس الحراري الشديدة بغلافه!"
  },
  {
    num: 4,
    q: "يتحدث جميع لغات العالم ولكنه لا يملك لساناً؟",
    options: ["أ) الراديو والمذياع", "ب) صدى الصوت", "ج) المترجم الفوري", "د) الهاتف المحمول"],
    correct: 1,
    fact: "صدى الصوت يعكس ويردد كل الكلمات بأي لغة فور صدورها!"
  },
  {
    num: 5,
    q: "أي دولة أهدت تمثال الحرية الشهير للولايات المتحدة؟",
    options: ["أ) بريطانيا", "ب) جمهورية فرنسا", "ج) ألمانيا", "د) إيطاليا"],
    correct: 1,
    fact: "قدمت فرنسا تمثال الحرية عام 1886 كهدية توطيداً للصداقة التاريخية!"
  },
  {
    num: 6,
    q: "ما هو أثقل عضو داخلي في جسم الإنسان؟",
    options: ["أ) القلب", "ب) الكبد", "ج) الرئتان", "د) الدماغ البشري"],
    correct: 1,
    fact: "الكبد يزن نحو 1.5 كجم ويؤدي أكثر من 500 وظيفة حيوية بالجسم!"
  },
  {
    num: 7,
    q: "ما هو الشيء الذي يخترق أعماق الماء ولا يبتل أبداً؟",
    options: ["أ) الضوء والشعاع", "ب) الأسماك", "ج) الإسفنج", "د) الحصى الملساء"],
    correct: 0,
    fact: "الضوء يخترق جزيئات الماء الشفافة ويضيئها دون أن يصيبه البلل!"
  },
  {
    num: 8,
    q: "ما هي الدولة التي تمتلك أكبر عدد من الجزر في العالم؟",
    options: ["أ) إندونيسيا", "ب) الفلبين", "ج) مملكة السويد", "د) اليونان"],
    correct: 2,
    fact: "السويد تضم أكثر من 267 ألف جزيرة، متفوقة على كل دول العالم!"
  },
  {
    num: 9,
    q: "ما هو الكائن الذي يستطيع النوم لثلاث سنوات متواصلة؟",
    options: ["أ) الدب القطبي", "ب) الضفدع البري", "ج) الحلزون", "د) الخفاش"],
    correct: 2,
    fact: "الحلزون يدخل في سبات عميق قد يمتد لـ 3 سنوات عند قلة الرطوبة والجفاف!"
  },
  {
    num: 10,
    q: "ما هو الشيء الذي كلما أخذت منه كَبُر وازداد حجمه؟",
    options: ["أ) الحفرة", "ب) الوقت والزمن", "ج) الظل الطويل", "د) شمعة مشتعلة"],
    correct: 0,
    fact: "الحفرة كلما أخذت منها تراباً زاد عمقها واتسع حجمها!"
  }
];

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>فيديو يوتيوب طويل #4 (التحدي الثقافي والألغاز الكبرى) | قناة لَـمْـحَـة</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', system-ui, sans-serif; }
    .glow-gold { box-shadow: 0 0 45px rgba(245, 158, 11, 0.4); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-3xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 shadow">
      🏆 فيديو يوتيوب طويل ناطق (16:9 Widescreen HD)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      التحدي الثقافي والألغاز الكبرى: <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-yellow-300">10 أسئلة وألغاز للأذكياء</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      فيديو كامل 16:9 HD مدمج بالصوت البشري الحقيقي لكل سؤال، مع تكتكة المؤقت وكشف الإجابات بدون أي تداخل
    </p>
  </div>

  <!-- Video Container -->
  <div class="w-full max-w-5xl flex flex-col items-center gap-6">

    <!-- 16:9 Screen Frame -->
    <div class="relative w-full aspect-video bg-slate-900 rounded-3xl p-3 border-4 border-amber-500/40 glow-gold flex flex-col overflow-hidden shadow-2xl">
      <div class="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden flex flex-col">
        
        <!-- Video Canvas (1280x720) -->
        <canvas id="videoCanvas" width="1280" height="720" class="w-full h-full object-contain"></canvas>

        <!-- Top Corner Watermark -->
        <div class="absolute top-4 left-6 z-30 flex items-center gap-3 pointer-events-none">
          <img src="${logoUrl}" class="w-10 h-10 rounded-full border border-amber-400 shadow">
          <div>
            <p class="text-xs font-black text-white drop-shadow">لَـمْـحَـة | Lamha Quiz</p>
            <p class="text-[10px] text-amber-400 font-bold drop-shadow">@LamhaQuiz</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Controls Panel -->
    <div class="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
      <div class="flex items-center gap-4">
        <img src="${logoUrl}" class="w-14 h-14 rounded-full border-2 border-amber-400 shadow">
        <div>
          <h3 class="text-lg font-black text-white">التحدي الثقافي الشامل (10 أسئلة وألغاز كاملة)</h3>
          <p class="text-xs text-slate-400">المدة: نحو 3 دقائق ونصف بالصوت البشري المنطوق المتسلسل والمؤقت والمؤثرات</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3 w-full sm:w-auto">
        <button id="btnPlay" onclick="startPlayback()" class="flex-1 sm:flex-none py-3 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          تشغيل المعاينة والصوت
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="flex-1 sm:flex-none py-3.5 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 text-white font-black text-sm flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/30">
          <span class="w-3.5 h-3.5 rounded-full bg-white animate-ping"></span>
          تسجيل وتنزيل الفيديو كاملاً (16:9)
        </button>
      </div>
    </div>

    <!-- Status Text -->
    <div id="statusBox" class="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
      <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
      <span id="statusText">الفيديو جاهز للمعاينة أو التصدير المباشر بصيغة WebM / MP4</span>
    </div>

  </div>

  <script>
    const canvas = document.getElementById('videoCanvas');
    const ctx = canvas.getContext('2d');

    const logoImg = new Image();
    logoImg.src = '${logoUrl}';

    const audioSources = ${JSON.stringify(audioData)};
    const audioBuffers = {};
    let audioCtx = null;
    let audioDest = null;

    const questions = ${JSON.stringify(questions)};

    let timeline = {
      intro: { start: 0, end: 12 },
      questions: [],
      outro: { start: 190, audioStart: 190.5, end: 215 },
      totalDuration: 215
    };

    function buildDynamicTimeline() {
      let cur = 0;
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 10.0;
      const introEnd = cur + introDur + 1.0;
      timeline.intro = { start: cur, end: introEnd };
      cur = introEnd;

      timeline.questions = [];
      for (let i = 0; i < questions.length; i++) {
        const askKey = 'q' + (i + 1) + '_ask';
        const ansKey = 'q' + (i + 1) + '_ans';
        const askDur = (audioBuffers[askKey] && audioBuffers[askKey].duration) ? audioBuffers[askKey].duration : 5.5;
        const ansDur = (audioBuffers[ansKey] && audioBuffers[ansKey].duration) ? audioBuffers[ansKey].duration : 5.0;

        const askStart = cur;
        const askEnd = askStart + askDur + 0.5;

        const timerStart = askEnd;
        const timerDuration = 5.0;
        const timerEnd = timerStart + timerDuration;

        const ansStart = timerEnd;
        const chimeStart = ansStart;
        const ansAudioStart = ansStart + 0.4;
        const ansEnd = ansAudioStart + ansDur + 1.8;

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

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 9.5;
      timeline.outro = {
        start: cur,
        audioStart: cur + 0.5,
        end: cur + outroDur + 3.0
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

        for (let t = 0; t < 5; t++) {
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

      // Background Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGrad.addColorStop(0, '#090817');
      bgGrad.addColorStop(0.5, '#13112c');
      bgGrad.addColorStop(1, '#060511');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (curTime < timeline.intro.end) {
        // INTRO SCENE
        ctx.save();
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 230, 90, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 90, 140, 180, 180);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 230, 90, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.font = '900 52px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.shadowBlur = 25;
        ctx.fillText('تحدي لَـمْـحَـة الثقافي والألغاز الكبرى 🏆', canvas.width / 2, 400);

        ctx.font = 'bold 32px Cairo, sans-serif';
        ctx.fillStyle = '#10b981';
        ctx.shadowBlur = 10;
        ctx.fillText('10 أسئلة وألغاز منوعة للأذكياء فقط', canvas.width / 2, 465);

        ctx.font = 'bold 24px Cairo, sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.shadowBlur = 0;
        ctx.fillText('لديك 5 ثوانٍ للإجابة على كل سؤال قبل انتهاء الوقت!', canvas.width / 2, 540);
        ctx.restore();

      } else if (curTime < timeline.outro.start) {
        // QUESTION SCENE
        const curQItem = timeline.questions.find(q => curTime >= q.start && curTime < q.end) 
                         || timeline.questions[timeline.questions.length - 1];
        const qIndex = curQItem.index;
        const curQ = questions[qIndex];

        // Top Header Info
        ctx.save();
        ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 130, 40, 260, 46, 23);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 22px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('السؤال ' + (qIndex + 1) + ' من 10', canvas.width / 2, 72);
        ctx.restore();

        // Question Card
        ctx.save();
        ctx.fillStyle = 'rgba(26, 21, 56, 0.9)';
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(140, 110, canvas.width - 280, 140, 24);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 34px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(curQ.q, canvas.width / 2, 192);
        ctx.restore();

        // Timer Progress
        let timerProgress = 1;
        let secText = "5";
        let revealed = false;

        if (curTime < curQItem.timerStart) {
          timerProgress = 1;
          secText = "5";
          revealed = false;
        } else if (curTime >= curQItem.timerStart && curTime < curQItem.timerEnd) {
          const tElapsed = curTime - curQItem.timerStart;
          timerProgress = Math.max(0, 1 - (tElapsed / 5.0));
          secText = Math.ceil(5 - tElapsed) + "";
          revealed = false;
        } else {
          timerProgress = 0;
          secText = "انتهى الوقت!";
          revealed = true;
        }

        // Timer Bar
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.roundRect(240, 275, canvas.width - 480, 14, 7);
        ctx.fill();

        if (timerProgress > 0) {
          const barGrad = ctx.createLinearGradient(240, 0, canvas.width - 240, 0);
          barGrad.addColorStop(0, '#ef4444');
          barGrad.addColorStop(0.5, '#f59e0b');
          barGrad.addColorStop(1, '#10b981');
          ctx.fillStyle = barGrad;
          ctx.beginPath();
          ctx.roundRect(240, 275, (canvas.width - 480) * timerProgress, 14, 7);
          ctx.fill();
        }

        ctx.font = 'bold 20px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = revealed ? '#10b981' : '#f59e0b';
        ctx.fillText(secText, canvas.width / 2, 318);
        ctx.restore();

        // Options 2x2 Grid
        const gridPositions = [
          { x: 140, y: 345 }, // A (Top Right in RTL)
          { x: 670, y: 345 }, // B (Top Left in RTL)
          { x: 140, y: 445 }, // C (Bottom Right in RTL)
          { x: 670, y: 445 }  // D (Bottom Left in RTL)
        ];

        curQ.options.forEach((opt, idx) => {
          const pos = gridPositions[idx];
          const isCorrect = idx === curQ.correct;

          ctx.save();
          if (revealed && isCorrect) {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 3;
          } else if (revealed && !isCorrect) {
            ctx.fillStyle = 'rgba(20, 15, 45, 0.4)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1.5;
          } else {
            ctx.fillStyle = 'rgba(30, 24, 66, 0.85)';
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
            ctx.lineWidth = 2;
          }

          ctx.beginPath();
          ctx.roundRect(pos.x, pos.y, 470, 76, 18);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 26px Cairo, sans-serif';
          ctx.textAlign = 'right';
          ctx.fillStyle = (revealed && isCorrect) ? '#34d399' : (revealed && !isCorrect ? '#64748b' : '#ffffff');
          ctx.fillText(opt, pos.x + 440, pos.y + 48);

          if (revealed && isCorrect) {
            ctx.font = 'bold 30px Cairo, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('✔️', pos.x + 25, pos.y + 50);
          }
          ctx.restore();
        });

        // Fact Box (at bottom)
        if (revealed && curQ.fact) {
          ctx.save();
          ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(140, 545, canvas.width - 280, 80, 18);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 20px Cairo, sans-serif';
          ctx.fillStyle = '#38bdf8';
          ctx.textAlign = 'center';
          ctx.fillText('💡 معلومة وتوضيح: ' + curQ.fact, canvas.width / 2, 594);
          ctx.restore();
        }

      } else {
        // OUTRO SCENE
        ctx.save();
        ctx.font = '900 52px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText('انتهى التحدي الكبير! 🏆', canvas.width / 2, 260);

        ctx.font = 'bold 36px Cairo, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('كم إجابة صحيحة استطعت معرفتها من 10؟', canvas.width / 2, 340);

        ctx.font = 'bold 26px Cairo, sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('اكتب نتيجتك الآن في التعليقات 💬', canvas.width / 2, 410);

        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 280, 470, 560, 110, 24);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 32px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('اشترك في قناة «لَـمْـحَـة» 🔔', canvas.width / 2, 520);

        ctx.font = 'bold 22px Cairo, sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('تحديات ومسابقات ذكاء جديدة يومياً!', canvas.width / 2, 558);
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
      statusText.innerText = '🔴 جاري تسجيل وتصدير الفيديو كاملاً بالصوت والمؤقت... يرجى الانتظار (نحو 3 دقائق)';

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
        a.download = 'Lamha_Master_Culture_Quiz_Long_Video.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          statusText.innerText = '✅ تم تنزيل الفيديو كاملاً بنجاح! جاهز للنشر على يوتيوب';
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
    };
  </script>
</body>
</html>`;

const outPath = path.join(dir, 'lamha_long_video4.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Saved lamha_long_video4.html, size:', fs.statSync(outPath).size);
