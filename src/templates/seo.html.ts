#!/usr/bin/env node
// @deno-types='@app/types.d'
import { writeFileSync, readFileSync, release, nonce } from '@app/utils';
import Sprite from '@app/components/sprite/sprite';
import Home from '@app/pages/home/home'
import { CSP } from '@app/pages/1990/components/CSP';
import { GTag } from '@app/pages/1990/components/GTag';
import { GTMBody, GTMHead } from '@app/pages/1990/components/GTM';
import { Sentry } from '@app/pages/1990/components/Sentry';
import { Script } from '@app/pages/1990/components/ui/script';
const style = readFileSync('./public/next/styles.min.css');

const title = 'Artūrs Jansons :: Web Developer';
const description = 'Experienced web developer with a passion for innovation, automation and optimization'
const html = `<!DOCTYPE html>
<html lang="en" manifest="manifest.appcache">
  <head>
    ${CSP({ nonce })}
    <link rel="preload" as="font" href="/fonts/AlinaScript.woff" crossorigin>
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-primary-light)" />
    <style nonce="${nonce}">${style}</style>
    ${/* Google Tag Manager */''}
    ${GTMHead({ nonce, gtmId: 'GTM-MBG56M'})}
    ${Script({ srcDoc: './src/lib/router.min.js', nonce })}
  </head>
  <body>
    <noscript>This page uses JavaScript to play the slot machine game.</noscript>
    ${/* Google Analytics */''}
    ${GTag({ nonce, gtmId: 'G-5ZY8Y6X2C4'})}
    ${/* Google Tag Manager */''}
    ${GTMBody({ nonce, gtmId: 'GTM-MBG56M'})}
    ${Sprite()}
    <div id="root">${Home()}</div>
    ${/*<script defer nonce="${nonce}" src="lib/router.min.js"></script>*/''}
    ${Sentry({
      nonce,
      projectId: "179618f1f04d4d9dac08acc750d5736c",
      dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
      release: `1250596@${release}`,
      environment: "production",
      integrity: 'sha384-6yzL+SsRi1vefLAU9+yqKb0YIeAiJ6GsCob5LxN8Af29Ze1Q5iCg0Ur2fwFroEqa'
    })}
  </body>
</html>
`;

writeFileSync('public/next/index.html', html);

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

writeFileSync('public/next/manifest.appcache', manifest);
