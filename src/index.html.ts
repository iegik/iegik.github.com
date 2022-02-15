#!/usr/bin/env node
import * as fs from 'fs';
import style from '@assets/styles.min.css';
import app from '@assets/lib/router.min.js';
import ga from '@assets/lib/ga.min.js';
import clouds from '@assets/lib/clouds.min.js';
import Sprite from '@app/components/sprite';
import Home from '@app/pages/home'
const nonce = btoa(Math.random(20)).slice(2,8) + btoa(Math.random(20)).slice(3,6)
const csp = Object.entries({
  'script-src': `'nonce-${nonce}' 'strict-dynamic' https://www.google-analytics.com https://ssl.google-analytics.com`,
  'img-src': `'self' https://www.google-analytics.com`,
  'connect-src': `https://www.google-analytics.com`,
  'style-src': `'nonce-${nonce}'`,
  'object-src': `'none'`,
  'base-uri': `'none'`,
}).reduce((acc, [key, val]) => `${acc};${key} ${val}`, `default-src 'self'`)

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
    <div id="root">${Home()}</div>
    <script defer nonce="${nonce}" src="/lib/router.min.js"></script>
    <script async nonce="${nonce}" src="/lib/ga.min.js"></script>
    <script async nonce="${nonce}" src="/lib/clouds.min.js"></script>
    ${Sprite()}
  </body>
</html>
`;

fs.writeFileSync('public/index.html', html, { encoding: 'utf8' });

const manifest = `
CACHE MANIFEST
# rev v3.0.0 - ${(new Date).toJSON()}

CACHE:
index.html
home/images/Riga_Piter.webp
home/images/Riga_Piter.png
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

NETWORK:
*
`

fs.writeFileSync('public/manifest.appcache', manifest, { encoding: 'utf8' });
