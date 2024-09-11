#!/usr/bin/env node
"use strict";var Q=Object.create;var M=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var X=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty;var et=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of K(e))!tt.call(t,n)&&n!==o&&M(t,n,{get:()=>e[n],enumerable:!(r=Z(e,n))||r.enumerable});return t};var ot=(t,e,o)=>(o=t!=null?Q(X(t)):{},et(e||!t||!t.__esModule?M(o,"default",{value:t,enumerable:!0}):o,t));var u=ot(require("fs")),f=(t,e)=>u.writeFileSync(t,e,{encoding:"utf8"}),l=t=>u.readFileSync(t,{encoding:"utf8"});var L=new Date,x=`v3.1.0-${L.toJSON()}`,s=btoa(`${Number(L)}`).slice(10,18);var b=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`;var y=t=>t.replace(/[&<"']/g,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}});var w=({src:t})=>`<pre><font size=1>${y(l(t))}</font></pre>`;var P=({src:t,title:e})=>`<fieldset bgcolor="green">
                                                <legend>${e}</legend>
                                                <code width="120px">${y(l(t))}</code>
                                            </fieldset>`;var a=({srcDoc:t,src:e,nonce:o,async:r,prefix:n,postfix:c,iife:g,crossorigin:v="",integrity:m})=>{let h=`${n||""}${t?l(t):""}${c||""}`;return`<script ${r?"async":""} crossorigin="${v}" ${m?`integrity="${m}"`:""} nonce="${o}" ${e?`src="${e}"`:""}>${g?`(${h})(${g})`:h}</script>`};var E=({nonce:t,gtmId:e})=>`
    ${a({nonce:t,srcDoc:"./src/lib/gtm.js",iife:`window,document,'script','dataLayer','${e}','${t}'`})}
`,D=({nonce:t,gtmId:e})=>`<noscript><iframe nonce="${t}" src="https://www.googletagmanager.com/ns.html?id=${e}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;var z=({nonce:t,gtmId:e})=>`
    ${a({async:!0,nonce:t,src:`https://www.googletagmanager.com/gtag/js?id=${e}`})}
    ${a({srcDoc:"./src/lib/gtag.js",nonce:t,postfix:`gtag('config', '${e}');
`})}
`;var I=({nonce:t,integrity:e,projectId:o,...r})=>`
    ${a({async:!0,nonce:t,src:"https://browser.sentry-cdn.com/8.29.0/bundle.tracing.min.js",integrity:e})}
    ${a({srcDoc:"./src/lib/sentry.js",nonce:t,iife:JSON.stringify(r)})}
`;var G=({name:t,rows:e,cols:o,data:r,type:n,value:c="",required:g,l10n:v})=>{let m=t,h=g?"required":"";return r?`<select id="${m}" name="${t}" ${h}>
                                                              <option></option>
                                                              ${r.map(T=>`<option value="${T}">${v(T)}</option>`).join(`
`)}
                                                          </select>`:e||o?`<table width="100%">
                                                          <tr>
                                                              <td>
                                                                  <textarea id="${m}" name="${t}" rows="${e}" cols="${o}" ${h}>${c}</textarea>
                                                      </table>`:`<input type="${n||"text"}" id="${m}" name="${t}" value="${c}" ${h} />`};var it=({nonce:t})=>Object.entries({"script-src":[`'nonce-${t}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://js.sentry-cdn.com"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","wss://ws.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/","https://o171820.ingest.sentry.io/"],"style-src":[`'nonce-${t}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/"],"script-src-elem":[`'nonce-${t}'`,"'self'","https://script.hotjar.com/modules.8da33a8f469c3b5ffcec.js","https://script.hotjar.com/browser-perf.8417c6bba72228fa2e29.js","https://script.hotjar.com/sentry.58c81e3e25532810f6fd.js"]}).reduce((e,[o,r])=>`${e};${o} ${r.join(" ")}`,"default-src 'self'"),R=({nonce:t})=>`<meta http-equiv="Content-Security-Policy" content="${it({nonce:t})}">`;var rt=l("./src/pages/1990/styles.css"),$="Art&#363;rs Jansons",S="Full-stack Developer",F="10+ year exp.",nt=`${$} | ${S} [${F}]`,j="Mobile / Web Developer &amp; JavaScript Consultant",st="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",A=()=>`<p>
                        1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#exit" bgcolor="red">DOS</a>
                    </p>`,_=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,B=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,p=[{image:{ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],N=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],O=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],H="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",d=t=>`<center>${w({src:t.image.ascii})}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,o)=>`${o?" | ":""}${b(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,U=()=>"<p>Time Zone: EEST</p>",W=()=>"<p>Work Time: 10:00 - 20:00</p>",J=()=>"<p>Current Location: Earth</p>",q={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},at={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I' m not a robot"},k=t=>at[t]||t,ct=()=>t=>e=>{let{name:o}=e,{kind:r,type:n}=q[o]||{},c={...e,...q[o]||{},l10n:k};if(n==="hidden")return t(c);if(n==="submit")return`<input type="submit" name="${o}" value="${k(o)}" />`;let g=k(o);return r==="vertical"?`<label for="${o}">${g}</label>
                                                        <br>
                                                        <br>
                                                        ${t(c)}`:`<label for="${o}">${g}</label>&nbsp;${t(c)}`},i=ct()(G),Y=({name:t})=>`<input id="bot" name="${t}" nonce="${s}" value="This shouldn't be here" /><p><a id="${t}" href="#bot">[_] ${k(t)}</a></p><script nonce="${s}">bot.style.display='none';${t}.addEventListener("click", () => {${t}.innerText=${t}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${t}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,lt=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${i({name:"email"})}
                                                        ${i({name:"to"})}
                                                        ${i({name:"access_key"})}
                                                        ${i({name:"redirect"})}
                                                    <td width="100%">
                                                        ${i({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        <br>
                                                        ${i({name:"message",rows:5,cols:44})}
                                                        ${Y({name:"botcheck"})}
                                                        <p align="right">
                                                            ${i({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,pt=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${i({name:"email"})}
                                                        ${i({name:"to"})}
                                                        ${i({name:"access_key"})}
                                                        ${i({name:"redirect"})}
                                                </tr>
                                                <tr>
                                                    <td width="100%">
                                                        ${i({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        ${i({name:"message",rows:5,cols:36})}
                                                        ${Y({name:"botcheck"})}
                                                        <p align="left">
                                                            ${i({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,dt=()=>`<font face="${H}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${A()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                ${w({src:"./src/pages/1990/assets/photo.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${$}
                                <h1><font size="5"><b>${S}</b></font><font size="2">[${F}]</font></h1>
                                <p><em><font color="gray">${j}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${_()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${B()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td colspan="2">
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${d(p[0])}
                                        <td valign="top">
                                            ${d(p[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${d(p[2])}
                                        <td valign="top">
                                            ${d(p[3])}
                                    </tr>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${lt()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${N.map(t=>`<li><p>${b(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${U()}
                                    ${W()}
                                    ${J()}
                                </font>
                            <td valign="bottom" align="right">
                                
                            <td valign="top" align="right">
                                <table border="0" cellpadding="0" cellspacing="8">
                                    <tr>
                                        <td valign="top">
                                            <font size="2">
                                                ${P({src:"./src/pages/1990/assets/code_of_a_day/git_du.gitconfig",title:"Code of the day"})}
                                            </font>
                                </table>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${O.map((t,e)=>`${e?" | ":""}${b(t)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${$} | All rights reserved</font>
                    </table>
        </table>
    </font>`,gt=()=>`<font face="${H}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${A()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${w({src:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${$}
                                <h1>
                                    <font size="5"><b>${S}</b></font>
                                    <br>
                                    <font size="2">[${F}]</font></h1>
                                <p><em>${j}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${_()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
                                        ${B()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td>
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${d(p[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${d(p[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${d(p[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${d(p[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${pt()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${N.map(t=>`<li><p>${b(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${U()}
                                    ${W()}
                                    ${J()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%">
                                <font size="2">
                                    ${P({src:"./src/pages/1990/assets/code_of_a_day/git_du.gitconfig",title:"Code of the day"})}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${O.map((t,e)=>`${e?" | ":""}${b(t)}`).join("")}</p>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${$} | All rights reserved</font>
                    </table>
        </table>
    </font>`,C=process.env.IS_VITE==="true"?"<!DOCTYPE html>":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`,V=t=>`${C}
<html lang="en">
<head>
    ${R({nonce:s})}
    <title>${nt}</title>
    <meta name="description" content="${j}" />
    <meta name="keywords" content="${st}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    
    <style nonce="${s}" id="/1990/styles.min.css">${rt}</style>
    
    ${E({nonce:s,gtmId:"GTM-MBG56M"})}
    
    
</head>
<body>
    
    ${z({nonce:s,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${D({nonce:s,gtmId:"GTM-MBG56M"})}
    ${t}
    
    ${a({srcDoc:"./src/lib/dosTheme.js",nonce:s,prefix:`const nonce = '${s}';
`})}
    ${I({nonce:s,projectId:"179618f1f04d4d9dac08acc750d5736c",dsn:"https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",release:`1250596@${x}`,environment:"production",integrity:"sha384-6yzL+SsRi1vefLAU9+yqKb0YIeAiJ6GsCob5LxN8Af29Ze1Q5iCg0Ur2fwFroEqa"})}
`;f("public/index.html",`${C}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    <meta http-equiv="REFRESH" content="0;URL=1990/">
    <link rel="stylesheet" href="/1990/style.css">
</head>
<body>
  <font face="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace" size="3">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
        <tr align="center">
            <td valign="top">
              <table border="0" cellpadding="0" cellspacing="8">
                <tr>
                    <td>
                      <table align="center" cellpadding="0" cellspacing="8">
                        <tr>
                          <td width="1px" valign="bottom"><font size="1"><marquee scrollamount="5" behavior="scroll"><pre>\u2581\u2581\u2583\u2583\u2585\u2585\u2586\u2586\u2587\u2587\u2588\u2588</pre></marquee></font>
                          <td><font size="3" weight="bold">Loading...</font>
                      </table>
                      <font size="1" color="lightgray">301 Redirect</font><br>
                      <font size="1" color="gray">You will be redirected to the new page shortly. If not, click <a id="url" href="1990">here</a>.</font>
`);f("public/1990/index.html",`${C}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    <link rel="stylesheet" href="/1990/styles.min.css">
</head>
<body onload='setTimeout((e=>window.location.href.includes(e)||(window.location.href=e))(url.href=window.innerWidth<768?"/1990/mobile/":"/1990/desktop/"),1e3)'>
  <font face="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace" size="3">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
        <tr align="center">
            <td valign="top">
              <table border="0" cellpadding="0" cellspacing="8">
                <tr>
                    <td>
                      <table align="center" cellpadding="0" cellspacing="8">
                        <tr>
                          <td width="1px" valign="bottom"><font size="1"><marquee scrollamount="5" behavior="scroll"><pre>\u2581\u2581\u2583\u2583\u2585\u2585\u2586\u2586\u2587\u2587\u2588\u2588</pre></marquee></font>
                          <td><font size="3" weight="bold">Loading...</font>
                      </table>
                      <font size="1" color="lightgray">301 Redirect</font><br>
                      <font size="1" color="gray">You will be redirected to the new page shortly. If not, click <a id="url" href="/1990/mobile">here</a>.</font>
                      <p>
                        <a href="/1990/desktop">DESKTOP</a> |
                        <a href="/1990/mobile">MOBILE</a>
`);f("public/1990/desktop/index.html",V(dt()));f("public/1990/mobile/index.html",V(gt()));var mt=`
CACHE MANIFEST
# rev ${x}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`;f("public/manifest.appcache",mt);
