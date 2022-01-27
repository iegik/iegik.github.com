#!/usr/bin/env node
import * as fs from 'fs';
import style from '@assets/styles.min.css';
import app from '@assets/lib/home.min.js';
import ga from '@assets/lib/ga.min.js';
import clouds from '@assets/lib/clouds.min.js';

const data = `<!DOCTYPE html>
<html lang="en" manifest="manifest.appcache~">
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <style>${style}</style>
  </head>
  <body>
    <div id="root">Loading...</div>
    <script>${app}</script>
    <script>${ga}</script>
    <!--script>${clouds}</script-->
  </body>
</html>
`;

fs.writeFileSync('public/index.html', data, { encoding: 'utf8' });
