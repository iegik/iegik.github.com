// server.js
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { handler } from './serverless/auth.ts';
import { type APIGatewayProxyEventHeaders } from 'aws-lambda';

// Create a server
const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  const { method, url, headers } = req;

  if (url === '/' && (method === 'GET' || method === 'POST')) {
    let body = '';

    const event = {
      httpMethod: method,
      version: '',
      routeKey: '',
      rawPath: '',
      rawQueryString: '',
      headers: headers as APIGatewayProxyEventHeaders,
      requestContext: { http: req },
      isBase64Encoded: false
    }

    // Handle POST request to read the body
    if (method === 'POST') {
      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', async () => {
        // Invoke the Lambda function
        const result = await handler(event);
        res.writeHead(result.statusCode, { 'Content-Type': 'application/json' });
        res.end(result.body);
      });
    }

    // Handle GET request
    if (method === 'GET') {
      const result = await handler(event);
      res.writeHead(result.statusCode, { 'Content-Type': 'application/json' });
      res.end(result.body);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});