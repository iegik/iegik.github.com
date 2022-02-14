#!/usr/bin/env node
import * as fs from 'fs';
import style from '@assets/styles.min.css';
import app from '@assets/lib/router.min.js';
import ga from '@assets/lib/ga.min.js';
import clouds from '@assets/lib/clouds.min.js';
import Sprite from '@app/components/sprite';
import Home from '@app/pages/home'

const title = 'Artūrs Jansons :: Web Developer';
const description = 'Experienced web developer with a passion for innovation, automation and optimization'
const data = `<!DOCTYPE html>
<html lang="en" manifest="manifest.appcache">
  <head>
    <link rel="preload" as="font" href="fonts/AlinaScript.woff" crossorigin>
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#E7D2CC"/>
    <style>${style}</style>
  </head>
  <body>
    <noscript>This page uses JavaScript to play the slot machine game.</noscript>
    <div id="root">${Home()}</div>
    <script defer src="/lib/router.min.js"></script>
    <script async src="/lib/ga.min.js"></script>
    <script async src="/lib/clouds.min.js"></script>
    ${Sprite()}
  </body>
</html>
`;

fs.writeFileSync('public/index.html', data, { encoding: 'utf8' });
