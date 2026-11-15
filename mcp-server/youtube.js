const https = require('https');

function httpsRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });
    req.on('error', reject);
    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function refreshAccessToken(config) {
  if (!config.refreshToken || !config.clientId || !config.clientSecret) {
    throw new Error('Missing OAuth2 credentials (clientId, clientSecret, or refreshToken)');
  }

  const postData = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    refresh_token: config.refreshToken,
    grant_type: 'refresh_token'
  }).toString();

  const res = await httpsRequest({
    hostname: 'oauth2.googleapis.com',
    path: '/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }, postData);

  if (res.data && res.data.access_token) {
    return res.data.access_token;
  } else {
    throw new Error('Failed to refresh token: ' + JSON.stringify(res.data));
  }
}

async function getRecentChannelComments(accessToken, maxResults = 20) {
  // Lists comment threads directly for the channel
  const path = `/youtube/v3/commentThreads?part=snippet,replies&allThreadsRelatedToChannelId=mine&maxResults=${maxResults}&order=time`;
  const res = await httpsRequest({
    hostname: 'www.googleapis.com',
    path: path,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    }
  });

  if (res.status === 200 && res.data && res.data.items) {
    return res.data.items;
  }
  return [];
}

async function likeComment(accessToken, commentId) {
  const path = `/youtube/v3/comments/rate?id=${commentId}&rating=like`;
  const res = await httpsRequest({
    hostname: 'www.googleapis.com',
    path: path,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Length': 0
    }
  });
  return res.status === 204 || res.status === 200;
}

async function replyToComment(accessToken, parentCommentId, text) {
  const payload = JSON.stringify({
    snippet: {
      parentId: parentCommentId,
      textOriginal: text
    }
  });

  const res = await httpsRequest({
    hostname: 'www.googleapis.com',
    path: '/youtube/v3/comments?part=snippet',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  }, payload);

  return res.status === 200 || res.status === 201;
}

module.exports = {
  refreshAccessToken,
  getRecentChannelComments,
  likeComment,
  replyToComment
};
