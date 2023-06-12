#!/usr/bin/env node
// @deno-types='@app/types.d'
import { writeFileSync, readFileSync, release, nonce } from '@app/utils';
import Sprite from '@app/components/sprite/sprite';
import Home from '@app/pages/home/home'
const style = readFileSync('./public/styles.min.css');
const csp = Object.entries({
  'script-src': [
    `'nonce-${nonce}'`,
    `'strict-dynamic'`,
    `https://www.google-analytics.com`,
    `https://ssl.google-analytics.com`,
    `https://static.hotjar.com`,
    `https://js.sentry-cdn.com`,
    `'unsafe-inline'`, // (ignored by browsers supporting nonces/hashes) to be backward compatible with older browsers.
  ],
  'img-src': [
    `'self'`,
    `https://www.google-analytics.com`,
    `https://avatars.githubusercontent.com/`,
    `https://www.googletagmanager.com/`,
  ],
  'connect-src': [
    `'self'`,
    `https://www.google-analytics.com`,
    `https://region1.google-analytics.com`,
    // `https://in.hotjar.com`,
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
    <meta name="theme-color" content="var(--color-primary-light)" />
    <style nonce="${nonce}">${style}</style>
  </head>
  <body>
    <noscript>This page uses JavaScript to play the slot machine game.</noscript>
    ${Sprite()}
    <div id="root">${Home()}</div>
    <script defer nonce="${nonce}" src="/lib/router.min.js"></script>
    ${/* Google Analytics */''}
    <script async nonce="${nonce}" src="https://www.googletagmanager.com/gtag/js?id=G-5ZY8Y6X2C4"></script>
    <script nonce="${nonce}">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5ZY8Y6X2C4');
    </script>
    ${/*<script async nonce="${nonce}" src="/lib/hot-jar.min.js"></script>*/''}
    <script nonce="${nonce}" src="https://browser.sentry-cdn.com/7.54.0/bundle.min.js" integrity="sha384-EmlJLN9Q0yu0/2UUCIYnEM88jpQ7xUhtNI2ZeXb/ci3cwoAoIQl350N4PQPlMbP5" crossorigin="anonymous"></script>
    <script nonce="${nonce}">
    document.addEventListener('DOMContentLoaded', () => {
      typeof Sentry !== 'undefined' && Sentry.init({
        dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
        release: "1250596@${release}",
        environment: "production",
      });
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
images/bg.webp
images/bg.png
images/artursjansons.jpg
images/artursjansons.webp
images/artursjansons_432.webp
images/clouds.webp
images/clouds.png
fonts/AlinaScript.woff
fonts/AlinaScript.ttf
fonts/AlinaScript.svg
lib/router.min.js
EULA.md

NETWORK:
*
`

writeFileSync('public/manifest.appcache', manifest);
