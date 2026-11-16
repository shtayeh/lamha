const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/hp/Downloads/اعمالي';
const audioDir = path.join(baseDir, 'poetry_audio');

const logoB64 = fs.readFileSync(path.join(baseDir, 'lamha_official_logo.jpg')).toString('base64');
const logoUrl = 'data:image/jpeg;base64,' + logoB64;

// Read audio clips
const clipNames = ['verse1', 'verse2', 'verse3', 'verse4'];
const audioData = {};
for (const c of clipNames) {
  const p = path.join(audioDir, c + '.mp3');
  if (fs.existsSync(p)) {
    const b = fs.readFileSync(p).toString('base64');
    audioData[c] = 'data:audio/mp3;base64,' + b;
  }
}

const verses = [
  {
    num: "البيت الأول",
    line1: "وَتَضِيقُ دُنْيَانَا فَنَحْسَبُ أَنَّنَا",
    line2: "سَنَمُوتُ يَأْسًا أَوْ نَمُوتُ نَحِيبَا",
    meaning: "مهما اشتدت الكروب وظننت أن لا مخرج منها..."
  },
  {
    num: "البيت الثاني",
    line1: "وَإِذَا بِلُطْفِ اللهِ يَهْطُلُ فَجْأَةً",
    line2: "يُرْبِي مِنَ اليَبَسِ الفُتَاتِ قُلُوبَا",
    meaning: "يأتي فرج الله العظيم كالغيث فيحيي القلوب بعد مواتها"
  },
  {
    num: "البيت الثالث",
    line1: "قُلْ لِلَّذِي مَلأَ التَّشَاؤُمُ قَلْبَهُ",
    line2: "وَمَضَى يُضَيِّقُ حَوْلَنَا الآفَاقَا",
    meaning: "رسالة لكل مهموم غلب عليه القنوط وضيق الأمل"
  },
  {
    num: "البيت الرابع",
    line1: "سِرُّ السَّعَادَةِ حُسْنُ ظَنِّكَ بِالَّذِي",
    line2: "خَلَقَ الحَيَاةَ وَقَسَّمَ الأَرْزَاقَا",
    meaning: "أعظم أبواب الطمأنينة: حسن الظن بالله وتفويض الأمر إليه"
  }
];

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>فيديو روائع الشعر (حسن الظن بالله) - بصوت بشري بدون موسيقى | قناة لَـمْـحَـة</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif; }
    .font-amiri { font-family: 'Amiri', serif; }
    .glow-gold { box-shadow: 0 0 35px rgba(245, 158, 11, 0.35); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">

  <!-- Header -->
  <div class="text-center max-w-2xl mb-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 shadow">
      <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
      🎙️ فيديو شورتس شعري بصوت بشري (بدون موسيقى)
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      من روائع الشعر: <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">«سِرُّ السَّعَادَةِ حُسْنُ ظَنِّكَ بِالَّذِي» 📜✨</span>
    </h1>
    <p class="text-slate-400 text-xs sm:text-sm">
      فيديو شورتس رأسي (9:16) فائق النقاء بالخط الكوفي والأميري مع إلقاء صوتي بشري وقور وخالٍ تماماً من الموسيقى
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
        
        <!-- Video Canvas (720x1280 native 9:16 HD) -->
        <canvas id="videoCanvas" width="720" height="1280" class="w-full h-full object-cover"></canvas>

        <!-- Top Progress Header -->
        <div class="absolute top-12 left-0 right-0 z-30 px-4 flex items-center justify-between pointer-events-none">
          <div class="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span class="text-xs font-bold text-amber-300">لَـمْـحَـة | Lamha</span>
          </div>
          <span class="text-[11px] font-semibold text-emerald-400 bg-black/50 px-2.5 py-1 rounded-full border border-emerald-500/30">
            🎙️ صوت بشري فقط
          </span>
        </div>

        <!-- Watermark CTA -->
        <div class="absolute bottom-9 left-0 right-0 z-30 px-6 text-center pointer-events-none">
          <span class="inline-block px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[11px] text-amber-300 font-bold border border-amber-500/40 shadow">
            ✨ شاركها لمن تحب وكن سبباً في تفريج همه
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
            <h2 class="text-lg font-bold text-white">لَـمْـحَـة | Lamha Poetry</h2>
            <p class="text-xs text-amber-400 font-semibold">@LamhaQuiz</p>
          </div>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed mt-2">
          فيديو شورتس وتيك توك من روائع الشعر العربي في الأمل واليقين، مصمم بخط عربي فاخر وبصوت بشري نقي دون أي مؤثرات موسيقية.
        </p>
      </div>

      <div class="space-y-3">
        <button id="btnPlay" onclick="startPlayback()" class="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/25 transition flex items-center justify-center gap-2 text-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          تشغيل المعاينة والإلقاء الصوتي
        </button>

        <button id="btnRecord" onclick="recordAndExportVideo()" class="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2 text-sm animate-pulse">
          <span class="w-3 h-3 rounded-full bg-white"></span>
          بدء التسجيل وتنزيل فيديو الشورتس (WebM / MP4)
        </button>
      </div>

      <div id="statusText" class="text-center text-xs text-slate-400 font-semibold bg-slate-950/60 py-2.5 px-3 rounded-xl border border-slate-800">
        جاهز للتشغيل والتصدير
      </div>

      <div class="border-t border-slate-800/80 pt-4">
        <h3 class="text-xs font-bold text-slate-400 mb-2">أبيات القصيدة المتضمنة:</h3>
        <div class="space-y-2 text-xs text-slate-300 max-h-56 overflow-y-auto pr-1">
          ${verses.map((v, idx) => `
          <div class="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/80">
            <div class="flex items-center gap-2 text-amber-400 font-bold text-[11px] mb-1">
              <span class="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px]">${idx+1}</span>
              <span>${v.num}</span>
            </div>
            <p class="font-amiri text-slate-200 text-sm leading-relaxed">${v.line1}</p>
            <p class="font-amiri text-amber-300/90 text-sm leading-relaxed">${v.line2}</p>
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
    const verses = ${JSON.stringify(verses)};

    let audioCtx = null;
    let audioDest = null;
    const audioBuffers = {};

    let timeline = {
      intro: { start: 0, end: 4.5 },
      verses: [],
      outro: { start: 32, end: 40 },
      totalDuration: 40
    };

    // Stardust floating particles
    const particles = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * 720,
        y: Math.random() * 1280,
        radius: Math.random() * 2.2 + 0.6,
        alpha: Math.random() * 0.7 + 0.2,
        speedY: - (Math.random() * 0.4 + 0.15),
        speedX: (Math.random() - 0.5) * 0.25
      });
    }

    function buildDynamicTimeline() {
      let cur = 0;
      const introDuration = 4.2;
      timeline.intro = { start: cur, end: cur + introDuration };
      cur += introDuration;

      timeline.verses = [];
      for (let i = 0; i < verses.length; i++) {
        const key = 'verse' + (i + 1);
        const dur = (audioBuffers[key] && audioBuffers[key].duration) ? audioBuffers[key].duration : 5.8;
        const vStart = cur;
        const audioStart = cur + 0.4;
        const vEnd = audioStart + dur + 1.2;

        timeline.verses.push({
          index: i,
          start: vStart,
          audioStart: audioStart,
          end: vEnd,
          duration: vEnd - vStart
        });

        cur = vEnd;
      }

      timeline.outro = {
        start: cur,
        end: cur + 5.5
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

    // Absolutely NO music, NO chimes, NO background noise. Only clean voice.
    function scheduleAllAudio(startNow, dest) {
      scheduledSources.forEach(s => { try { s.stop(); } catch(e){} });
      scheduledSources.length = 0;

      timeline.verses.forEach((v, i) => {
        const key = 'verse' + (i + 1);
        playBuffer(audioBuffers[key], startNow + v.audioStart, dest);
      });
    }

    function drawOrnaments() {
      // Golden corner frames
      ctx.save();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
      ctx.lineWidth = 2.5;

      // Top-Left
      ctx.beginPath();
      ctx.moveTo(35, 75);
      ctx.lineTo(35, 35);
      ctx.lineTo(75, 35);
      ctx.stroke();

      // Top-Right
      ctx.beginPath();
      ctx.moveTo(canvas.width - 35, 75);
      ctx.lineTo(canvas.width - 35, 35);
      ctx.lineTo(canvas.width - 75, 35);
      ctx.stroke();

      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(35, canvas.height - 75);
      ctx.lineTo(35, canvas.height - 35);
      ctx.lineTo(75, canvas.height - 35);
      ctx.stroke();

      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(canvas.width - 35, canvas.height - 75);
      ctx.lineTo(canvas.width - 35, canvas.height - 35);
      ctx.lineTo(canvas.width - 75, canvas.height - 35);
      ctx.stroke();

      ctx.restore();
    }

    function drawParticles() {
      ctx.save();
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < 0) p.y = canvas.height;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.fillStyle = \`rgba(251, 191, 36, \${p.alpha})\`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    function drawFrame(elapsed) {
      const curTime = elapsed % timeline.totalDuration;

      // Background gradient (Nocturnal aesthetic deep obsidian & cosmic midnight navy)
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#040714');
      bgGrad.addColorStop(0.3, '#0b1129');
      bgGrad.addColorStop(0.7, '#131b38');
      bgGrad.addColorStop(1, '#050814');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle ambient golden radial glow
      const radialGlow = ctx.createRadialGradient(canvas.width / 2, 640, 50, canvas.width / 2, 640, 500);
      radialGlow.addColorStop(0, 'rgba(245, 158, 11, 0.08)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawParticles();
      drawOrnaments();

      ctx.direction = 'rtl';

      if (curTime < timeline.intro.end) {
        // INTRO SCENE
        ctx.save();
        if (logoImg.complete) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 380, 100, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(logoImg, canvas.width / 2 - 100, 280, 200, 200);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, 380, 100, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.save();
        ctx.font = 'bold 32px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.shadowBlur = 18;
        ctx.fillText('✨ قَنَاةُ لَـمْـحَـة تُقَدِّمْ ✨', canvas.width / 2, 550);

        ctx.font = '700 52px "Amiri", serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 25;
        ctx.fillText('مِنْ رَوَائِـعِ الشِّـعْـرِ', canvas.width / 2, 640);

        ctx.font = 'bold 36px "Amiri", serif';
        ctx.fillStyle = '#fcd34d';
        ctx.shadowBlur = 10;
        ctx.fillText('فِي حُسْنِ الظَّنِّ بِاللهِ 🌿', canvas.width / 2, 720);

        // Calligraphic divider
        ctx.font = '28px "Amiri", serif';
        ctx.fillStyle = '#94a3b8';
        ctx.shadowBlur = 0;
        ctx.fillText('— ❖ ❖ ❖ —', canvas.width / 2, 800);

        ctx.font = '600 26px Cairo, sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText('صَوْتٌ بَشَرِيٌّ وَقُورٌ بِدُونِ مُوسِيقَى', canvas.width / 2, 870);
        ctx.restore();

      } else if (curTime < timeline.outro.start) {
        // VERSE SCENE
        const curVItem = timeline.verses.find(v => curTime >= v.start && curTime < v.end)
                         || timeline.verses[timeline.verses.length - 1];
        const vIndex = curVItem.index;
        const curVerse = verses[vIndex];

        // Verse Badge
        ctx.save();
        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 120, 220, 240, 52, 26);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 26px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText(curVerse.num, canvas.width / 2, 256);
        ctx.restore();

        // Main Verse Card with rich golden glassmorphism
        ctx.save();
        ctx.fillStyle = 'rgba(10, 15, 35, 0.88)';
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.lineWidth = 3;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.35)';
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.roundRect(45, 340, canvas.width - 90, 480, 36);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // Decorative corner arches inside the card
        ctx.save();
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(65, 360, 15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(canvas.width - 65, 360, 15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(65, 800, 15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(canvas.width - 65, 800, 15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // First Hemistich (الصدر)
        ctx.save();
        ctx.font = '700 48px "Amiri", "Segoe UI", serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        ctx.shadowBlur = 15;
        ctx.fillText(curVerse.line1, canvas.width / 2, 470);
        ctx.restore();

        // Calligraphic Golden Divider
        ctx.save();
        ctx.font = '32px "Amiri", serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.shadowBlur = 20;
        ctx.fillText('— ✦ ✦ ✦ —', canvas.width / 2, 570);
        ctx.restore();

        // Second Hemistich (العجز)
        ctx.save();
        ctx.font = '700 48px "Amiri", "Segoe UI", serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.7)';
        ctx.shadowBlur = 15;
        ctx.fillText(curVerse.line2, canvas.width / 2, 690);
        ctx.restore();

        // Poetic Reflection / Meaning Card
        ctx.save();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(50, 890, canvas.width - 100, 110, 22);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 22px Cairo, sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.textAlign = 'center';
        ctx.fillText('💡 ومضة تأمل:', canvas.width / 2, 925);

        ctx.font = '600 23px Cairo, sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText(curVerse.meaning, canvas.width / 2, 965);
        ctx.restore();

        // Verse progress indicators
        ctx.save();
        const totalV = verses.length;
        const dotSpacing = 30;
        const startDotX = (canvas.width / 2) - ((totalV - 1) * dotSpacing / 2);
        for (let d = 0; d < totalV; d++) {
          ctx.beginPath();
          ctx.arc(startDotX + d * dotSpacing, 1060, d === vIndex ? 7 : 4, 0, Math.PI * 2);
          ctx.fillStyle = d === vIndex ? '#fbbf24' : 'rgba(255, 255, 255, 0.25)';
          ctx.fill();
        }
        ctx.restore();

      } else {
        // OUTRO SCENE
        ctx.save();
        ctx.font = 'bold 36px Cairo, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.shadowBlur = 20;
        ctx.fillText('🌿 حُسْنُ الظَّنِّ بِاللهِ 🌿', canvas.width / 2, 430);

        ctx.font = '700 50px "Amiri", serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 25;
        ctx.fillText('«سِرُّ السَّعَادَةِ حُسْنُ ظَنِّكَ بِالَّذِي»', canvas.width / 2, 520);

        ctx.font = '700 50px "Amiri", serif';
        ctx.fillStyle = '#fde68a';
        ctx.fillText('«خَلَقَ الحَيَاةَ وَقَسَّمَ الأَرْزَاقَا»', canvas.width / 2, 600);

        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(70, 680, canvas.width - 140, 150, 28);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 38px Cairo, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('اشترك في قناة «لَـمْـحَـة» 🔔', canvas.width / 2, 745);

        ctx.font = 'bold 26px Cairo, sans-serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('روائع الشعر، الحكم، والمسابقات الثقافية', canvas.width / 2, 795);
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
      document.getElementById('statusText').innerText = 'جاري تشغيل المعاينة والإلقاء الصوتي...';
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(renderLoop);
    }

    async function recordAndExportVideo() {
      await initAudioEngine();
      const statusText = document.getElementById('statusText');
      statusText.innerText = '🔴 جاري تسجيل وتصدير فيديو الأبيات كاملاً بالإلقاء الصوتي البشري... يرجى الانتظار';

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
        a.download = 'Lamha_Poetry_Husn_AlDhann.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          statusText.innerText = '✅ تم تنزيل فيديو الأبيات الشعرية بنجاح! جاهز للنشر على يوتيوب شورتس وتيك توك';
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

const outPath = path.join(baseDir, 'lamha_poetry_video.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Saved lamha_poetry_video.html, size:', fs.statSync(outPath).size);
