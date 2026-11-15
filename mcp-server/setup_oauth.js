const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const configPath = path.join(__dirname, 'config.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=====================================================');
console.log('🤖 أداة تهيئة الربط بقناة يوتيوب وجيميني (OAuth Setup)');
console.log('=====================================================\n');

rl.question('1. أدخل Google Client ID: ', (clientId) => {
  rl.question('2. أدخل Google Client Secret: ', (clientSecret) => {
    rl.question('3. أدخل Gemini API Key (أو اضغط Enter للتخطي): ', (geminiKey) => {
      startAuthFlow(clientId.trim(), clientSecret.trim(), geminiKey.trim());
    });
  });
});

function startAuthFlow(clientId, clientSecret, geminiKey) {
  const redirectUri = 'http://localhost:3000/oauth2callback';
  const scope = encodeURIComponent('https://www.googleapis.com/auth/youtube.force-ssl');
  
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;

  const server = http.createServer(async (req, res) => {
    const urlObj = new URL(req.url, 'http://localhost:3000');
    if (urlObj.pathname === '/oauth2callback') {
      const code = urlObj.searchParams.get('code');
      if (code) {
        try {
          const tokenData = await exchangeCodeForTokens(clientId, clientSecret, code, redirectUri);
          const config = {
            clientId,
            clientSecret,
            refreshToken: tokenData.refresh_token,
            geminiApiKey: geminiKey || process.env.GEMINI_API_KEY || ''
          };
          fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');

          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(`
            <div style="font-family: sans-serif; text-align: center; padding: 40px;">
              <h1 style="color: #10b981;">🎉 تم ربط قناة يوتيوب بنجاح!</h1>
              <p>تم حفظ مفاتيح التوثيق (Refresh Token) في ملف config.json.</p>
              <p>يمكنك الآن إغلاق هذه النافذة وتشغيل خادم الـ MCP.</p>
            </div>
          `);
          console.log('\n✅ تم الحصول على التوكن وحفظ ملف config.json بنجاح!');
          console.log('يمكنك الآن تشغيل خادم MCP أو جدولته كل ساعة.\n');
          server.close();
          process.exit(0);
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('خطأ أثناء تبادل التوكن: ' + err.message);
        }
      }
    }
  });

  server.listen(3000, () => {
    console.log('\n🔗 افتح الرابط التالي في متصفحك وسجّل الدخول بحساب قناتك على يوتيوب:');
    console.log('------------------------------------------------------------------');
    console.log(authUrl);
    console.log('------------------------------------------------------------------\n');
    console.log('⏳ في انتظار موافقتك في المتصفح...');
  });
}

function exchangeCodeForTokens(clientId, clientSecret, code, redirectUri) {
  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    }).toString();

    const req = https.request({
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.refresh_token) {
            resolve(json);
          } else {
            reject(new Error(json.error_description || JSON.stringify(json)));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}
