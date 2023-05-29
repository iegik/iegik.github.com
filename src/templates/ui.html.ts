#!/usr/bin/env node
// @deno-types='@app/types.d'
import { writeFileSync, readFileSync, release, nonce } from '@app/utils';
import Sprite from '@app/components/sprite/sprite';
import UI from '@app/pages/ui/ui'
const style = readFileSync('./public/styles.min.css');
const CSP = ({ nonce }) => `<meta http-equiv="Content-Security-Policy" content="${Object.entries({
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
}).reduce((acc, [key, val]) => `${acc};${key} ${val.join(' ')}`, `default-src 'self'`)}">`;

const title = 'Artūrs Jansons :: UI kit';
const description = 'My UI Kit'
const html = `<!DOCTYPE html>
<html lang="en" manifest="manifest.appcache">
  <head>
    ${CSP({ nonce })}
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
    <div id="root">${UI()}</div>
  </body>
</html>
`;

writeFileSync('public/ui/index.html', html);

const manifest = `
CACHE MANIFEST
# rev ${release}

CACHE:
index.html

NETWORK:
*
`

writeFileSync('public/ui/manifest.appcache', manifest);
