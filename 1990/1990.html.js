#!/usr/bin/env node
"use strict";var M=Object.create;var u=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var A=(t,e,o,$)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of N(e))!D.call(t,r)&&r!==o&&u(t,r,{get:()=>e[r],enumerable:!($=F(e,r))||$.enumerable});return t};var H=(t,e,o)=>(o=t!=null?M(z(t)):{},A(e||!t||!t.__esModule?u(o,"default",{value:t,enumerable:!0}):o,t));var l=H(require("fs")),p=(t,e)=>l.writeFileSync(t,e,{encoding:"utf8"}),g=t=>l.readFileSync(t,{encoding:"utf8"});var w=new Date,d=`v3.1.0-${w.toJSON()}`,n=btoa(`${Number(w)}`).slice(10,18);var q=g("./src/pages/1990/styles.css"),B=Object.entries({"script-src":[`'nonce-${n}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://js.sentry-cdn.com","'unsafe-inline'"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","https://static.hotjar.com","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/","https://o171820.ingest.sentry.io/"],"style-src":[`'nonce-${n}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/"]}).reduce((t,[e,o])=>`${t};${e} ${o.join(" ")}`,"default-src 'self'"),c="Art&#363;rs Jansons",m="Full-stack Developer",f="10+ year exp.",I=`${c} | ${m} [${f}]`,b="Mobile / Web Developer &amp; JavaScript Consultant",Q="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",k=()=>`<p>
                        1990 |
                        <!-- <a href="/2000/">2000</a> |
                        <a href="/2010/">2010</a> |
                        <a href="/2020/">2020</a> | -->
                        <a href="/next/">BETA</a>
                    </p>`,y=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2f74c0">TypeScript</font>,
                                        <font color="#5fd3f3">React / React Native</font>`,v=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683cb">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008ddb">Docker</font>,
                                        <font color="#dd34a6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#da214c">Nest</font>`,h=({src:t})=>`<pre><font size=1>${g(t)}</font></pre>`,a=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`,i=[{image:{ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],j=[{link:{href:"mailto:a.jansons@gmail.com",title:"a.jansons@gmail.com"}},{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],x=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],S="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",s=t=>`<center>${h({src:t.image.ascii})}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,o)=>`${o?" | ":""}${a(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,C=()=>"<p>Time Zone: EEST</p>",E=()=>"<p>Work Time: 10:00 - 20:00</p>",L=()=>"<p>Current Location: Earth</p>",P=()=>`<form align="left" method="get" action="/1990/mailto/">
                                            <fieldset>
                                                <legend>Bonus Code</legend>
                                                ${h({src:"./src/pages/1990/assets/slotmachine.ascii"})}
                                            </fieldset>
                                        </form>
                                    </font>`,R=()=>`<font face="${S}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${k()}
                    <hr/>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td>
                                ${h({src:"./src/pages/1990/assets/photo.ascii"})}
                            <td width="80%">
                                <p>${c}
                                <h1><font color="#ffff58" size="5"><b>${m}</b></font><font size="2">[${f}]</font></h1>
                                <p><em>${b}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${y()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${v()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td colspan="2">
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${s(i[0])}
                                        <td valign="top">
                                            ${s(i[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${s(i[2])}
                                        <td valign="top">
                                            ${s(i[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${j.map(t=>`<li><p>${a(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br/>
                                    ${C()}
                                    ${E()}
                                    ${L()}
                                </font>
                            <td align="right">
                                <font size="2">
                                    ${P()}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr/>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${x.map((t,e)=>`${e?" | ":""}${a(t)}`).join("")}</p>
                                <br/>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${c} | All rights reserved</font>
                    </table>
        </table>
    </font>`,U=()=>`<font face="${S}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${k()}
                    <hr/>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${h({src:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${c}
                                <h1>
                                    <font color="#ffff58" size="5"><b>${m}</b></font>
                                    <br/>
                                    <font size="2">[${f}]</font></h1>
                                <p><em>${b}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${y()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${v()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td>
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${s(i[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${s(i[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${s(i[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${s(i[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${j.map(t=>`<li><p>${a(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br/>
                                    ${C()}
                                    ${E()}
                                    ${L()}
                                </font>
                        </tr>
                        <tr>
                            <td width="60%" align="right">
                                <font size="2">
                                    ${P()}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr/>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${x.map((t,e)=>`${e?" | ":""}${a(t)}`).join("")}</p>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${c} | All rights reserved</font>
                    </table>
        </table>
    </font>`,T=t=>`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="${B}">
    <title>${I}</title>
    <meta name="description" content="${b}" />
    <meta name="keywords" content="${Q}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    <style nonce="${n}">${q}</style>
</head>
<body>
    ${t}
    
    <script async nonce="${n}" src="https://www.googletagmanager.com/gtag/js?id=G-5ZY8Y6X2C4"></script>
    <script nonce="${n}">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5ZY8Y6X2C4');
    </script>
    <!-- Hotjar Tracking Code for https://iegik.github.io -->
    <script nonce="${n}">
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2660383,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    <script nonce="${n}" src="https://browser.sentry-cdn.com/7.54.0/bundle.min.js" integrity="sha384-EmlJLN9Q0yu0/2UUCIYnEM88jpQ7xUhtNI2ZeXb/ci3cwoAoIQl350N4PQPlMbP5" crossorigin="anonymous"></script>
    <script nonce="${n}">
    document.addEventListener('DOMContentLoaded', () => {
      typeof Sentry !== 'undefined' && Sentry.init({
        dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
        release: "1250596@${d}",
        environment: "production",
      });
    });
    </script>
`;p("public/1990/desktop/index.html",T(R()));p("public/1990/mobile/index.html",T(U()));var W=`
CACHE MANIFEST
# rev ${d}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`;p("public/manifest.appcache",W);
