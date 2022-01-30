#!/usr/bin/env node
import * as fs from 'fs';
import style from '@assets/styles.min.css';
import app from '@assets/lib/home.min.js';
import ga from '@assets/lib/ga.min.js';
import clouds from '@assets/lib/clouds.min.js';
import Sprite from '@app/components/sprite/sprite';

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
    <div id="root">Loading...</div>
    <script>${app}</script>
    <script>${ga}</script>
    <!--script>${clouds}</script-->
    ${Sprite()}
  </body>
</html>
`;

fs.writeFileSync('public/index.html', data, { encoding: 'utf8' });
