#!/usr/bin/env node
"use strict";var J=Object.create;var G=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var K=Object.getPrototypeOf,X=Object.prototype.hasOwnProperty;var tt=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of Z(e))!X.call(t,c)&&c!==o&&G(t,c,{get:()=>e[c],enumerable:!(s=Q(e,c))||s.enumerable});return t};var et=(t,e,o)=>(o=t!=null?J(K(t)):{},tt(e||!t||!t.__esModule?G(o,"default",{value:t,enumerable:!0}):o,t));var $=et(require("fs")),g=(t,e)=>$.writeFileSync(t,e,{encoding:"utf8"}),l=t=>$.readFileSync(t,{encoding:"utf8"});var z=new Date,x=`v3.1.0-${z.toJSON()}`,i=btoa(`${Number(z)}`).slice(10,18);var h=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`;var u=t=>t.replace(/[&<"']/g,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}});var y=({src:t,ascii:e})=>`<pre><font size=1><img width="128" height="128" src="${t}" alt="${u(l(e))}" /></font></pre>`;var P=({src:t,title:e})=>`<fieldset bgcolor="green">
                                                <legend>${e}</legend>
                                                <code width="120px">${u(l(t))}</code>
                                            </fieldset>`;var r=({srcDoc:t,src:e,nonce:o,async:s,prefix:c,postfix:a,iife:m,crossorigin:v="",integrity:f})=>{let b=t?l(t):"";return`<script ${s?"async":""} crossorigin="${v}" ${f?`integrity="${f}"`:""} nonce="${o}" ${e?`src="${e}"`:""}>${c||""}${m?`(${b})(${m});`:b}${a||""}</script>`};var S=({nonce:t,gtmId:e})=>`
    ${r({nonce:t,srcDoc:"./src/lib/gtm.js",iife:`window,document,'script','dataLayer','${e}','${t}'`})}
`,F=({nonce:t,gtmId:e})=>`<noscript><iframe nonce="${t}" src="https://www.googletagmanager.com/ns.html?id=${e}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;var T=({nonce:t,gtmId:e})=>`
    ${r({async:!0,nonce:t,src:`https://www.googletagmanager.com/gtag/js?id=${e}`})}
    ${r({srcDoc:"./src/lib/gtag.js",nonce:t,postfix:`gtag('config', '${e}');
`})}
`;var _=({nonce:t,integrity:e,projectId:o,...s})=>`
    ${r({async:!0,nonce:t,src:"https://browser.sentry-cdn.com/8.29.0/bundle.tracing.min.js",integrity:e})}
    ${r({srcDoc:"./src/lib/sentry.js",nonce:t,iife:JSON.stringify(s)})}
`;var R=({name:t,rows:e,cols:o,data:s,type:c,value:a="",required:m,l10n:v})=>{let f=t,b=m?"required":"";return s?`<select id="${f}" name="${t}" ${b}>
                                                              <option></option>
                                                              ${s.map(D=>`<option value="${D}">${v(D)}</option>`).join(`
`)}
                                                          </select>`:e||o?`<table width="100%">
                                                          <tr>
                                                              <td>
                                                                  <textarea id="${f}" name="${t}" rows="${e}" cols="${o}" ${b}>${a}</textarea>
                                                      </table>`:`<input type="${c||"text"}" id="${f}" name="${t}" value="${a}" ${b} />`};var ot=({nonce:t})=>Object.entries({"script-src":[`'nonce-${t}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://script.hotjar.com","https://js.sentry-cdn.com","'unsafe-inline'"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/","https://static.hotjar.com","https://survey-images.hotjar.com"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","wss://ws.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://o171820.ingest.sentry.io/"],"style-src":["'self'",`'nonce-${t}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/"],"script-src-elem":["'self'",`'nonce-${t}'`,"https://script.hotjar.com"]}).reduce((e,[o,s])=>`${e};${o} ${s.join(" ")}`,"default-src 'self'"),q=({nonce:t})=>`<meta http-equiv="Content-Security-Policy" content="${ot({nonce:t})}">`;var j=l("./src/pages/1990/styles.css"),k="Art&#363;rs Jansons",C="Full-stack Developer",M="10+ year exp.",it=`${k} | ${C} [${M}]`,L="Mobile / Web Developer &amp; JavaScript Consultant",rt="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",nt=()=>`<p>
                        1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#exit" bgcolor="red">DOS</a>
                    </p>`,O=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,A=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,p=[{image:{src:"/images/categories/website-thumb.png",ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{src:"/images/categories/mobile-thumb.png",ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{src:"/images/categories/clock-thumb.png",ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{src:"/images/categories/wordpress-thumb.png",ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],N=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],st=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],ct="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",d=t=>`<center>${y(t.image)}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,o)=>`${o?" | ":""}${h(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,H=()=>"<p>Time Zone: EEST</p>",V=()=>"<p>Work Time: 10:00 - 20:00</p>",U=()=>"<p>Current Location: Earth</p>",B={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},at={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I'm not a robot"},w=t=>at[t]||t,lt=()=>t=>e=>{let{name:o}=e,{kind:s,type:c}=B[o]||{},a={...e,...B[o]||{},l10n:w};if(c==="hidden")return t(a);if(c==="submit")return`<input type="submit" name="${o}" value="${w(o)}" />`;let m=w(o);return s==="vertical"?`<label for="${o}">${m}</label>
                                                        <br>
                                                        ${t(a)}`:`<label for="${o}">${m}</label>&nbsp;${t(a)}`},n=lt()(R),Y=({name:t})=>`<input id="bot" name="${t}" nonce="${i}" value="Type 'true' here" /><a id="${t}" href="#bot" style="display:none;">[_] ${w(t)}</a><script nonce="${i}">bot.style.display='none';${t}.style.display='inline-block';${t}.addEventListener("click", () => {${t}.innerText=${t}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${t}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,pt=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${n({name:"email"})}
                                                        ${n({name:"to"})}
                                                        ${n({name:"access_key"})}
                                                        ${n({name:"redirect"})}
                                                    <td width="100%">
                                                        ${n({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        <br>
                                                        ${n({name:"message",rows:5,cols:44})}
                                                        ${Y({name:"botcheck"})}
                                                        <p align="right">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,dt=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${n({name:"email"})}
                                                        ${n({name:"to"})}
                                                        ${n({name:"access_key"})}
                                                        ${n({name:"redirect"})}
                                                </tr>
                                                <tr>
                                                    <td width="100%">
                                                        ${n({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        ${n({name:"message",rows:5,cols:36})}
                                                        ${Y({name:"botcheck"})}
                                                        <p align="left">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,mt=()=>`
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                ${y({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/me.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${k}
                                <h1><font size="5"><b>${C}</b></font><font size="2">[${M}]</font></h1>
                                <p><em><font color="gray">${L}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${O()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${A()}
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
                        <tr>
                            <td colspan="2">
                                <my-portfolio theme="1990/desktop" />
                        <tr>
                            <td colspan="2" align="center">
                                <noscript>${h({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${pt()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${N.map(t=>`<li><p>${h(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${H()}
                                    ${V()}
                                    ${U()}
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
                    `,gt=()=>`
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${y({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${k}
                                <h1>
                                    <font size="5"><b>${C}</b></font>
                                    <br>
                                    <font size="2">[${M}]</font></h1>
                                <p><em>${L}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${O()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
                                        ${A()}
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
                            <td>
                                <my-portfolio theme="1990/mobile" />
                        <tr>
                            <td align="center">
                                <noscript>${h({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${dt()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${N.map(t=>`<li><p>${h(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${H()}
                                    ${V()}
                                    ${U()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%">
                                <font size="2">
                                    ${P({src:"./src/pages/1990/assets/code_of_a_day/git_du.gitconfig",title:"Code of the day"})}
                                </font>
                    </table>
                    `,I=process.env.IS_VITE==="true"?"<!DOCTYPE html>":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`,W=t=>`<font face="${ct}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${nt()}
                    <hr>
                    ${t}
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${st.map((e,o)=>`${o?" | ":""}${h(e)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${k} | All rights reserved</font>
                    </table>
        </table>
    </font>`,E=t=>`${I}
<html lang="en">
<head>
    ${q({nonce:i})}
    <title>${it}</title>
    <meta name="description" content="${L}" />
    <meta name="keywords" content="${rt}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    
    <style nonce="${i}" id="/1990/styles.min.css">${j}</style>
    
    ${r({srcDoc:"./src/lib/console-game.js",nonce:i})}
    ${r({srcDoc:"./src/lib/guard.js",nonce:i})}
    ${process.env.IS_VITE==="true"?"":S({nonce:i,gtmId:"GTM-MBG56M"})}
    
    
</head>
<body>
    
    ${process.env.IS_VITE==="true"?"":T({nonce:i,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${process.env.IS_VITE==="true"?"":F({nonce:i,gtmId:"GTM-MBG56M"})}
    ${t}
    
    ${r({srcDoc:"./src/lib/dos-theme.js",iife:'document, toggleDosStyle, "/1990/styles.min.css"',nonce:i,prefix:`const nonce = '${i}';
`})}
    ${r({srcDoc:"./src/lib/my-portfolio.js",nonce:i})}
    ${_({nonce:i,projectId:"179618f1f04d4d9dac08acc750d5736c",dsn:"https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",release:`1250596@${x}`,environment:"production",integrity:"sha384-6yzL+SsRi1vefLAU9+yqKb0YIeAiJ6GsCob5LxN8Af29Ze1Q5iCg0Ur2fwFroEqa"})}
`;g("public/index.html",`${I}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    <!--meta http-equiv="REFRESH" content="0;URL=1990/"-->
    
    <style nonce="${i}" id="/1990/styles.min.css">${j}</style>
    ${r({srcDoc:"./src/lib/router-1990.min.js",nonce:i})}
    
    ${process.env.IS_VITE==="true"?"":S({nonce:i,gtmId:"GTM-MBG56M"})}
</head>
<body id="root">
    
    ${process.env.IS_VITE==="true"?"":T({nonce:i,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${process.env.IS_VITE==="true"?"":F({nonce:i,gtmId:"GTM-MBG56M"})}
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
`);g("public/1990/index.html",`${I}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    
    <style nonce="${i}" id="/1990/styles.min.css">${j}</style>
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
`);var ht=()=>"<my-portfolio></my-portfolio>";g("public/1990/desktop/index.html",E(W(mt())));g("public/1990/mobile/index.html",E(W(gt())));g("public/portfolio/index.html",E(ht()));var ft=`
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
`;g("public/manifest.appcache",ft);
