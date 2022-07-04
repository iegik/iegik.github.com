const https = require('https');
const request = (body, options) => new Promise((resolve, reject) => {
  const req = https.request(options, (res) => {
    let rawData = '';

    res.on('data', (chunk) => {
      rawData += chunk;
    });

    res.on('end', () => {
      try {
        resolve(JSON.parse(rawData));
      } catch (err) {
        reject(new Error(err));
      }
    });
  });

  req.on('error', (err) => {
    reject(new Error(err));
  });

  req.write(body);
  req.end();
})

function getAccessToken(req) {
  const code = req.queryStringParameters?.code;
  const client_id = req.queryStringParameters?.client_id;
  const body = {
    client_id,
    client_secret,
    redirect_uri,
    code,
  }
  const options = {
    hostname: 'github.com',
    path: '/login/oauth/access_token',
    method: 'POST',
    port: 443,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return request(JSON.stringify(body), options);
}

function postGraphQL(req) {
  const options = {
    hostname: 'api.github.com',
    path: 'graphql',
    method: 'POST',
    port: 443,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  if (req.headers.authorization) options.headers.authorization = req.headers.authorization;

  return request(req.body ? JSON.stringify(req.body) : '', options);
}

const client_secret = process.env.GITHUB_CLIENT_SECRET;
const redirect_uri = process.env.GITHUB_REDIRECT_URI;

const handleGetRequests = async (req, res) => {
  const result = await getAccessToken(req);

  return {
    ...res,
    statusCode: 200,
    body: result && JSON.stringify(result),
  };
}

const handlePostRequests = async (req, res) => {
  const result = await postGraphQL(req);

  return {
    ...res,
    statusCode: 200,
    body: result && JSON.stringify(result),
  };
}

exports.handler = async (event) => {
  const res = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    switch (event.requestContext.http.method) {
      case 'GET':
        return await handleGetRequests(event, res);
      case 'POST':
        return await handlePostRequests(event, res);
      default: throw new Error(`Unsupported method "${event.requestContext.method}"\n${event?.requestContext && JSON.stringify(event.requestContext)}`);
    }
  } catch (error) {
    return {
      ...res,
      statusCode: 400,
      body: JSON.stringify({ errors: [error.message] }),
    };
  }
};
