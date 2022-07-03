#!/usr/bin/env node
// @deno-types='@app/types.d.ts'
import fs from 'fs'
import Sprite from '@app/components/sprite/sprite.ts';
import Login from '@app/pages/login/login.ts'
import style from '@assets/styles.min.css';
const date = new Date();
const release = `v3.1.0-${date.toJSON()}`
const nonce = btoa(+date).slice(10,18)
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
    <meta name="theme-color" content="#3b94d4"/>
    <style nonce="${nonce}">${style}</style>
  </head>
  <body>
    <noscript>This page uses JavaScript to proper work.</noscript>
    ${Sprite()}
    <div id="root">${Login()}</div>
    <script defer nonce="${nonce}" src="/lib/router.min.js"></script>
    <script async nonce="${nonce}" src="/lib/clouds.min.js"></script>
  </body>
</html>
`;

fs.writeFileSync('public/login/index.html', html, { encoding: 'utf8' });

const manifest = `
CACHE MANIFEST
# rev ${release}

CACHE:
index.html
home/images/bg.webp
home/images/bg.png
home/images/clouds.webp
home/images/clouds.png
lib/router.min.js

NETWORK:
*
`

fs.writeFileSync('public/login/manifest.appcache', manifest, { encoding: 'utf8' });
