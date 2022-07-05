#!/usr/bin/env node
// @deno-types='@app/types.d.ts'
import { writeFileSync, readFileSync, release, nonce } from '@app/utils.ts';
import Sprite from '@app/components/sprite/sprite.ts';
import Home from '@app/pages/home/home.ts'
const style = readFileSync('./public/styles.min.css');
const csp = Object.entries({
  'script-src': [
    `'nonce-${nonce}'`,
    `'strict-dynamic'`,
    `https://www.google-analytics.com`,
    `https://ssl.google-analytics.com`,
    `https://static.hotjar.com`,
    `https://js.sentry-cdn.com`,
  ],
  'img-src': [
    `'self'`,
    `https://www.google-analytics.com`,
    `https://avatars.githubusercontent.com/`,
  ],
  'connect-src': [
    `https://www.google-analytics.com`,
    `https://in.hotjar.com`,
    `https://github.com/login/oauth/access_token`,
    `https://api.github.com/graphql`,
    `https://api.github.com/user`,
    `https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/`,
    `https://o171820.ingest.sentry.io/`,
  ],
  'style-src': [
    `'nonce-${nonce}'`,
    `https://static.hotjar.com`,
  ],
  'object-src': [`'none'`],
  'base-uri': [`'none'`],
  'frame-src': [`https://vars.hotjar.com/`],
}).reduce((acc, [key, val]) => `${acc};${key} ${val.join(' ')}`, `default-src 'self'`);

const title = 'Artūrs Jansons :: Web Developer';
const description = 'Experienced web developer with a passion for innovation, automation and optimization'
const html = `<!DOCTYPE html>
<html lang="en" manifest="manifest.appcache">
  <head>
    <meta http-equiv="Content-Security-Policy" content="${csp}">
    <link rel="preload" as="font" href="/fonts/AlinaScript.woff" crossorigin>
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#3b94d4"/>
    <style nonce="${nonce}">${style}</style>
  </head>
  <body>
    <noscript>This page uses JavaScript to play the slot machine game.</noscript>
    ${Sprite()}
    <div id="root">${Home()}</div>
    <script defer nonce="${nonce}" src="/lib/router.min.js"></script>
    <script async nonce="${nonce}" src="/lib/ga.min.js"></script>
    <script async nonce="${nonce}" src="/lib/clouds.min.js"></script>
    <script async nonce="${nonce}" src="/lib/hot-jar.min.js"></script>
    <script nonce="${nonce}" src="https://js.sentry-cdn.com/179618f1f04d4d9dac08acc750d5736c.min.js" crossorigin="anonymous"></script>
    <script nonce="${nonce}">
    Sentry.init({
      dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
      release: "1250596@${release}",
      environment: "production",
    });
    </script>
  </body>
</html>
`;

writeFileSync('public/index.html', html);

const manifest = `
CACHE MANIFEST
# rev ${release}

CACHE:
index.html
home/images/bg.webp
home/images/bg.png
home/images/artursjansons.jpg
home/images/artursjansons.webp
home/images/artursjansons_432.webp
home/images/clouds.webp
home/images/clouds.png
fonts/AlinaScript.woff
fonts/AlinaScript.ttf
fonts/AlinaScript.svg
lib/router.min.js
lib/ga.min.js
EULA.md

NETWORK:
*
`

writeFileSync('public/manifest.appcache', manifest);