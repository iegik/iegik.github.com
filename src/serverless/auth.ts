import { ClientRequest, IncomingMessage } from 'http';
import https, { type RequestOptions } from 'https';
import { type APIGatewayProxyEventV2WithRequestContext } from 'aws-lambda';

// TODO: Determinate what is 'http' here
export type APIGatewayProxyContextUnknown = { http: (ClientRequest | IncomingMessage) }
export type APIGatewayProxyEvent = APIGatewayProxyEventV2WithRequestContext<APIGatewayProxyContextUnknown>

const request = (body: string, options: RequestOptions) => new Promise((resolve, reject) => {
  const req = https.request(options, (res: IncomingMessage) => {
    let rawData = '';

    res.on('data', (chunk: any) => {
      rawData += chunk;
    });

    res.on('end', () => {
      try {
        resolve(JSON.parse(rawData));
      } catch (err) {
        reject(new Error(`${err}`));
      }
    });
  });

  req.on('error', (err: string | undefined) => {
    reject(new Error(err));
  });

  req.write(body);
  req.end();
})

function getAccessToken(req: APIGatewayProxyEvent) {
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

function postGraphQL(req: { headers: { authorization: string; }; body: any; }) {
  const options = {
    hostname: 'api.github.com',
    path: 'graphql',
    method: 'POST',
    port: 443,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    } as Record<string, string>,
  };
  if (req.headers.authorization) options.headers.authorization = req.headers.authorization;

  return request(req.body ? JSON.stringify(req.body) : '', options);
}

const client_secret = process.env.GITHUB_CLIENT_SECRET;
const redirect_uri = process.env.GITHUB_REDIRECT_URI;

const handleGetRequests = async (req: APIGatewayProxyEvent, res: object) => {
  const result = await getAccessToken(req);

  return {
    ...res,
    statusCode: 200,
    body: result && JSON.stringify(result),
  };
}

const handlePostRequests = async (req: any, res: { headers: { 'Content-Type': string; Accept: string; }; }) => {
  const result = await postGraphQL(req);

  return {
    ...res,
    statusCode: 200,
    body: result && JSON.stringify(result),
  };
}

export const handler = async (event: APIGatewayProxyEvent) => {
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
      default: throw new Error(`Unsupported method "${event.requestContext.http.method}"\n${event?.requestContext && JSON.stringify(event.requestContext)}`);
    }
  } catch (error) {
    return {
      ...res,
      statusCode: 400,
      body: JSON.stringify({ errors: [`${error}`] }),
    };
  }
};
