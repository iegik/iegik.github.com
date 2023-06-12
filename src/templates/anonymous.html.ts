#!/usr/bin/env node
// @deno-types='@app/types.d'
import { writeFileSync, readFileSync, release, nonce } from '@app/utils';
import { Sprite } from '@app/components/sprite/sprite.ts';
import { Login } from '@app/pages/login/login.ts';
const style = readFileSync('./public/styles.min.css');
const csp = Object.entries({
  'script-src': [
    `'nonce-${nonce}'`,
    `'strict-dynamic'`,
  ],
  // 'img-src': [],
  // 'connect-src': [],
  'style-src': [
    `'nonce-${nonce}'`,
  ],
  'object-src': [`'none'`],
  'base-uri': [`'none'`],
  // 'frame-src': [],
}).reduce((acc, [key, val]) => `${acc};${key} ${val.join(' ')}`, `default-src 'self'`)

const title = 'Artūrs Jansons :: Web Developer';
const description = 'Experienced web developer with a passion for innovation, automation and optimization'
const html = `<!DOCTYPE html>
<html lang="en" manifest="manifest.appcache">
  <head>
    <meta http-equiv="Content-Security-Policy" content="${csp}">
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-primary-light)" />
    <style nonce="${nonce}">${style}</style>
  </head>
  <body>
    <noscript>This page uses JavaScript to proper work.</noscript>
    ${Sprite()}
    <div id="root">${Login()}</div>
    <script defer nonce="${nonce}" src="/lib/router.min.js"></script>
  </body>
</html>
`;

writeFileSync('public/login/index.html', html);

const manifest = `
CACHE MANIFEST
# rev ${release}

CACHE:
index.html
images/bg.webp
images/bg.png
images/clouds.webp
images/clouds.png
lib/router.min.js

NETWORK:
*
`

writeFileSync('public/login/manifest.appcache', manifest);
