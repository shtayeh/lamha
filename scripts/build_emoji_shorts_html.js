const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'shorts_emoji_audio');

const logoB64 = fs.readFileSync(path.join(baseDir, 'lamha_official_logo.jpg')).toString('base64');
const logoUrl = 'data:image/jpeg;base64,' + logoB64;

// High quality crisp SVG assets for items that Windows emoji fonts cannot render (Pyramid & Flags)
const pyramidSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,12 10,88 65,88" fill="%23f59e0b"/><polygon points="50,12 65,88 90,80" fill="%23b45309"/><polygon points="50,12 25,88 50,88" fill="%23fbbf24"/><polygon points="50,12 50,88 65,88" fill="%23d97706"/></svg>`;

const flagEgyptSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.33" fill="%23c8102e"/><rect y="13.33" width="60" height="13.33" fill="%23ffffff"/><rect y="26.66" width="60" height="13.33" fill="%23000000"/><circle cx="30" cy="20" r="3.5" fill="%23c69214"/></svg>`;

const flagFranceSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="20" height="40" fill="%23002395"/><rect x="20" width="20" height="40" fill="%23ffffff"/><rect x="40" width="20" height="40" fill="%23ed2939"/></svg>`;

const flagJapanSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="%23ffffff"/><circle cx="30" cy="20" r="11" fill="%23bc002d"/></svg>`;

const clipNames = ['intro', 'q1_ask', 'q1_ans', 'q2_ask', 'q2_ans', 'q3_ask', 'q3_ans', 'outro'];
const audioData = {};
for (const c of clipNames) {
  const b = fs.readFileSync(path.join(audioDir, c + '.mp3')).toString('base64');
  audioData[c] = 'data:audio/mp3;base64,' + b;
}

const rounds = [
  {
    num: "الجولة الأولى",
    hint: "دولة عربية عريقة",
    type: "pyramid", // uses camel + pyramid svg
    emojis: "🐪  ➕",
    answer: "مصر",
    flagSvg: flagEgyptSvg,
    fact: "أهرامات الجيزة ونهر النيل والحضارة الفرعونية!"
  },
  {
    num: "الجولة الثانية",
    hint: "دولة أوروبية شهيرة",
    type: "text",
    emojis: "🗼  ➕  🥐",
    answer: "فرنسا",
    flagSvg: flagFranceSvg,
    fact: "برج إيفل الشهير ومخبوزات الكرواسون وعاصمة الموضة!"
  },
  {
    num: "الجولة الثالثة",
    hint: "دولة آسيوية متطورة",
    type: "text",
    emojis: "🍣  ➕  🗻",
    answer: "اليابان",
    flagSvg: flagJapanSvg,
    fact: "السوشي الشهير وجبل فوجي الأسطوري وكوكب التكنولوجيا!"
  }
];

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>فيديو شورتس فايرال (تحدي خمن الدولة من الإيموجي) | قناة لَـمْـحَـة</title>
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
  <div class="text-center max-w-2xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
      🎯 شورتس فايرال مصحح 9:16
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      تحدي خمن الدولة: <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-yellow-300">من خلال الإيموجي في 3 ثوانٍ! 🌍⚡</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      نسخة منقحة ومصححة لغوياً وبصرياً بدقة 1080×1920 وبأعلى جودة خطوط وأعلام حقيقية
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
        
        <!-- Video Canvas (1080x1920 native shorts) -->
        <canvas id="videoCanvas" width="720" height="1280" class="w-full h-full object-cover"></canvas>

        <!-- Top Progress Header -->
        <div class="absolute top-12 left-0 right-0 z-30 px-4 flex items-center justify-between pointer-events-none">
          <div class="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span class="text-xs font-bold text-amber-300">لَـمْـحَـة | Lamha Quiz</span>
          </div>
          <span class="text-[11px] font-semibold text-rose-400 bg-black/50 px-2.5 py-1 rounded-full border border-rose-500/30">
            تحدي الإيموجي 🔥
          </span>
        </div>

        <!-- Watermark CTA -->
        <div class="absolute bottom-9 left-0 right-0 z-30 px-6 text-center pointer-events-none">
          <span class="inline-block px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[11px] text-amber-300 font-bold border border-amber-500/40 shadow">
            ✍️ كم دولة عرفت؟ اكتب نتيجتك في التعليقات
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
          فيديو شورتس فايرال مصحح بالكامل: تمت إزالة أعلام الحرق المسبق وتصحيح كتابة وتشكيل أسماء الدول وإضافة أعلام فيكتور فائقة الوضوح.
        </p>
      </div>

      <div class="space-y-3">
        <button id="btnPlay" onclick="startPlayback()" class="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 text-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          تشغيل المعاينة والصوت المنطوق
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="w-full py-3.5 px-4 bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:from-rose-500 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/30 transition flex items-center justify-center gap-2 text-sm animate-pulse">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          بدء التسجيل وتنزيل الفيديو المصحح (WebM / MP4)
        </button>
      </div>

      <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-950/60 py-2.5 px-3 rounded-xl border border-slate-800">
        جاهز للتشغيل والتصدير
      </div>

      <div class="border-t border-slate-800/80 pt-4">
        <h3 class="text-xs font-bold text-slate-400 mb-2">الدول المصححة في هذا التحدي:</h3>
        <ul class="text-xs text-slate-300 space-y-2">
          ${rounds.map((r, idx) => `
          <li class="flex items-center justify-between p-2 rounded-xl bg-slate-950/50 border border-slate-800">
            <span class="flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">${idx+1}</span>
              <span class="font-semibold text-slate-200">${r.num}</span>
            </span>
            <span class="font-bold text-emerald-400 text-sm flex items-center gap-2">
              <img src="${r.flagSvg}" class="w-5 h-3.5 rounded object-cover border border-slate-700 inline-block">
              <span>${r.answer}</span>
            </span>
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

    const pyramidImg = new Image();
    pyramidImg.src = "${pyramidSvg}";

    const flagImgs = {};
    const rounds = ${JSON.stringify(rounds)};
    rounds.forEach((r, idx) => {
      const img = new Image();
      img.src = r.flagSvg;
      flagImgs[idx] = img;
    });

    const audioSources = ${JSON.stringify(audioData)};

    let audioCtx = null;
    let audioDest = null;
    const audioBuffers = {};

    let timeline = {
      intro: { start: 0, end: 6.5 },
      questions: [],
      outro: { start: 38, audioStart: 38.5, end: 46 },
      totalDuration: 46
    };

    function buildDynamicTimeline() {
      let cur = 0;
      const introDur = (audioBuffers['intro'] && audioBuffers['intro'].duration) ? audioBuffers['intro'].duration : 6.0;
      const introEnd = cur + introDur + 0.8;
      timeline.intro = { start: cur, end: introEnd };
      cur = introEnd;

      timeline.questions = [];
      for (let i = 0; i < rounds.length; i++) {
        const askKey = 'q' + (i + 1) + '_ask';
        const ansKey = 'q' + (i + 1) + '_ans';
        const askDur = (audioBuffers[askKey] && audioBuffers[askKey].duration) ? audioBuffers[askKey].duration : 3.5;
        const ansDur = (audioBuffers[ansKey] && audioBuffers[ansKey].duration) ? audioBuffers[ansKey].duration : 3.5;

        const askStart = cur;
        const askEnd = askStart + askDur + 0.3;

        const timerStart = askEnd;
        const timerDuration = 3.0; // 3 seconds rapid countdown
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

      const outroDur = (audioBuffers['outro'] && audioBuffers['outro'].duration) ? audioBuffers['outro'].duration : 6.0;
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
      osc.frequency.setValueAtTime(850, time);
      gain.gain.setValueAtTime(0.35, time);
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

      // 2. Questions loop (zero audio overlap)
      timeline.questions.forEach((q, i) => {
        const askClip = 'q' + (i + 1) + '_ask';
        const ansClip = 'q' + (i + 1) + '_ans';

        playBuffer(audioBuffers[askClip], startNow + q.askStart, dest);

        for (let t = 0; t < 3; t++) {
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
      bgGrad.addColorStop(0, '#0f051d');
      bgGrad.addColorStop(0.5, '#220e3d');
      bgGrad.addColorStop(1, '#070210');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set canvas text direction to RTL for proper Arabic typography
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
        ctx.font = '900 62px Cairo, "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.9)';
        ctx.shadowBlur = 25;
        ctx.fillText('تحدي الإيموجي 🎯', canvas.width / 2, 580);

        ctx.font = 'bold 36px Cairo, "Segoe UI", sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.shadowBlur = 10;
        ctx.fillText('خمن اسم الدولة في 3 ثوانٍ! 🌍', canvas.width / 2, 650);

        // Big Emojis Showcase
        ctx.font = '72px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
        ctx.fillText('🐪 🗼 🍣 🥐 🗻', canvas.width / 2, 760);

        ctx.font = 'bold 30px Cairo, "Segoe UI", sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.shadowBlur = 0;
        ctx.fillText('هل تستطيع تخمينها جميعاً؟', canvas.width / 2, 850);
        ctx.restore();

      } else if (curTime < timeline.outro.start) {
        // QUESTION SCENE
        const curQItem = timeline.questions.find(q => curTime >= q.start && curTime < q.end) 
                         || timeline.questions[timeline.questions.length - 1];
        const qIndex = curQItem.index;
        const curR = rounds[qIndex];

        // Question Badge (Clean without spoiling flags)
        ctx.save();
        ctx.fillStyle = 'rgba(244, 63, 94, 0.2)';
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 140, 220, 280, 56, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 30px Cairo, "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fda4af';
        ctx.fillText(curR.num, canvas.width / 2, 260);
        ctx.restore();

        // Main Question Heading
        ctx.save();
        ctx.font = '900 44px Cairo, "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('ما هي هذه الدولة؟ 🌍', canvas.width / 2, 350);

        ctx.font = 'bold 28px Cairo, "Segoe UI", sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('💡 تلميح: ' + curR.hint, canvas.width / 2, 405);
        ctx.restore();

        // Big Emoji Display Card
        ctx.save();
        ctx.fillStyle = 'rgba(38, 17, 71, 0.9)';
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(50, 450, canvas.width - 100, 240, 36);
        ctx.fill();
        ctx.stroke();

        // Draw emojis & custom vector elements
        ctx.font = '85px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        if (curR.type === 'pyramid') {
          // Camel + Heavy Plus + Crisp Golden Pyramid
          ctx.fillText(curR.emojis, canvas.width / 2 - 45, 570);
          if (pyramidImg.complete) {
            ctx.drawImage(pyramidImg, canvas.width / 2 + 55, 525, 90, 90);
          }
        } else {
          ctx.fillText(curR.emojis, canvas.width / 2, 570);
        }
        ctx.restore();

        // 3-Second Rapid Timer
        let timerProgress = 1;
        let secText = "3";
        let revealed = false;

        if (curTime < curQItem.timerStart) {
          timerProgress = 1;
          secText = "3";
          revealed = false;
        } else if (curTime >= curQItem.timerStart && curTime < curQItem.timerEnd) {
          const tElapsed = curTime - curQItem.timerStart;
          timerProgress = Math.max(0, 1 - (tElapsed / 3.0));
          secText = Math.ceil(3 - tElapsed) + "";
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
        ctx.roundRect(80, 730, canvas.width - 160, 18, 9);
        ctx.fill();

        if (timerProgress > 0) {
          const barGrad = ctx.createLinearGradient(80, 0, canvas.width - 80, 0);
          barGrad.addColorStop(0, '#ef4444');
          barGrad.addColorStop(0.5, '#f59e0b');
          barGrad.addColorStop(1, '#10b981');
          ctx.fillStyle = barGrad;
          ctx.beginPath();
          ctx.roundRect(80, 730, (canvas.width - 160) * timerProgress, 18, 9);
          ctx.fill();
        }

        ctx.font = 'bold 34px Cairo, "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = revealed ? '#10b981' : '#f59e0b';
        ctx.fillText(secText, canvas.width / 2, 795);
        ctx.restore();

        // Answer Reveal Card
        ctx.save();
        if (revealed) {
          ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 4;
          ctx.shadowColor = 'rgba(16, 185, 129, 0.7)';
          ctx.shadowBlur = 25;
        } else {
          ctx.fillStyle = 'rgba(20, 10, 40, 0.6)';
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 2;
        }

        ctx.beginPath();
        ctx.roundRect(50, 840, canvas.width - 100, 150, 28);
        ctx.fill();
        ctx.stroke();

        ctx.textAlign = 'center';
        if (revealed) {
          // Draw Flag and Country Name with pristine typography
          const flag = flagImgs[qIndex];
          if (flag && flag.complete) {
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(canvas.width / 2 - 160, 885, 65, 45, 6);
            ctx.clip();
            ctx.drawImage(flag, canvas.width / 2 - 160, 885, 65, 45);
            ctx.restore();

            ctx.save();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(canvas.width / 2 - 160, 885, 65, 45, 6);
            ctx.stroke();
            ctx.restore();

            ctx.font = '900 60px Cairo, "Segoe UI", sans-serif';
            ctx.fillStyle = '#34d399';
            ctx.textAlign = 'right';
            ctx.fillText(curR.answer, canvas.width / 2 + 130, 928);
          } else {
            ctx.font = '900 62px Cairo, "Segoe UI", sans-serif';
            ctx.fillStyle = '#34d399';
            ctx.fillText(curR.answer, canvas.width / 2, 935);
          }
        } else {
          ctx.font = 'bold 38px Cairo, "Segoe UI", sans-serif';
          ctx.fillStyle = '#94a3b8';
          ctx.fillText('❓ خمن الآن...', canvas.width / 2, 930);
        }
        ctx.restore();

        // Fact Banner (when revealed)
        if (revealed && curR.fact) {
          ctx.save();
          ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(50, 1025, canvas.width - 100, 105, 22);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 22px Cairo, "Segoe UI", sans-serif';
          ctx.fillStyle = '#38bdf8';
          ctx.textAlign = 'center';
          ctx.fillText('💡 معلومة سريعة:', canvas.width / 2, 1060);

          ctx.font = '600 21px Cairo, "Segoe UI", sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.fillText(curR.fact, canvas.width / 2, 1100);
          ctx.restore();
        }

      } else {
        // OUTRO SCENE
        ctx.save();
        ctx.font = '900 64px Cairo, "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText('انتهى التحدي! 🔥', canvas.width / 2, 450);

        ctx.font = 'bold 42px Cairo, "Segoe UI", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('كم دولة استطعت تخمينها؟', canvas.width / 2, 530);

        ctx.font = 'bold 30px Cairo, "Segoe UI", sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('اكتب نتيجتك الآن في التعليقات 💬', canvas.width / 2, 600);

        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(80, 680, canvas.width - 160, 140, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 36px Cairo, "Segoe UI", sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('اشترك في قناة «لَـمْـحَـة» 🔔', canvas.width / 2, 745);

        ctx.font = 'bold 26px Cairo, "Segoe UI", sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('تحديات إيموجي ومسابقات يومية جديدة!', canvas.width / 2, 795);
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
      statusText.innerText = '🔴 جاري تسجيل وتصدير فيديو الإيموجي المصحح كاملاً بالصوت والمؤقت... يرجى الانتظار';

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
        a.download = 'Lamha_Emoji_Quiz_Shorts.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          statusText.innerText = '✅ تم تنزيل فيديو شورتس الإيموجي المصحح بنجاح! جاهز للنشر على يوتيوب وتيك توك';
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

const outPath = path.join(baseDir, 'lamha_shorts_emoji.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Saved corrected lamha_shorts_emoji.html, size:', fs.statSync(outPath).size);
