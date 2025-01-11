#!/usr/bin/env node
"use strict";var et=Object.create;var _=Object.defineProperty;var ot=Object.getOwnPropertyDescriptor;var rt=Object.getOwnPropertyNames;var nt=Object.getPrototypeOf,it=Object.prototype.hasOwnProperty;var st=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of rt(e))!it.call(t,i)&&i!==o&&_(t,i,{get:()=>e[i],enumerable:!(r=ot(e,i))||r.enumerable});return t};var at=(t,e,o)=>(o=t!=null?et(nt(t)):{},st(e||!t||!t.__esModule?_(o,"default",{value:t,enumerable:!0}):o,t));var w=at(require("fs")),b=(t,e)=>w.writeFileSync(t,e,{encoding:"utf8"}),g=t=>w.readFileSync(t,{encoding:"utf8"});var A=new Date,S=`v3.1.0-${A.toJSON()}`,n=btoa(`${Number(A)}`).slice(10,18);var u=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`;var $=t=>t.replace(/[&<"']/g,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}});var x=({src:t,ascii:e})=>`<pre><font size=1><img width="128" height="128" src="${t}" alt="${$(g(e))}" /></font></pre>`;var P=({src:t,title:e})=>`<fieldset bgcolor="green">
                                                <legend>${e}</legend>
                                                <code width="120px">${$(g(t))}</code>
                                            </fieldset>`;var a=({srcDoc:t,src:e,nonce:o,async:r,prefix:i,postfix:s,iife:l,crossorigin:m="",integrity:p})=>{let d=t?g(t):"";return`<script ${r?"async":""} crossorigin="${m}" ${p?`integrity="${p}"`:""} nonce="${o}" ${e?`src="${e}"`:""}>${i||""}${l?`(${d})(${l});`:d}${s||""}</script>`};var F=({nonce:t,gtmId:e})=>`
    ${a({nonce:t,srcDoc:"./src/lib/gtm.js",iife:`window,document,'script','dataLayer','${e}','${t}'`})}
`,T=({nonce:t,gtmId:e})=>`<noscript><iframe nonce="${t}" src="https://www.googletagmanager.com/ns.html?id=${e}"
height="0" width="0"></iframe></noscript>`;var C=({nonce:t,gtmId:e})=>`
    ${a({async:!0,nonce:t,src:`https://www.googletagmanager.com/gtag/js?id=${e}`})}
    ${a({srcDoc:"./src/lib/gtag.js",nonce:t,postfix:`gtag('config', '${e}');
`})}
`;var R=({nonce:t,integrity:e,projectId:o,...r})=>`
    ${a({async:!0,nonce:t,src:"https://browser.sentry-cdn.com/8.29.0/bundle.tracing.min.js",integrity:e})}
    ${a({srcDoc:"./src/lib/sentry.js",nonce:t,iife:JSON.stringify(r)})}
`;var q=({name:t,rows:e,cols:o,data:r,type:i,value:s="",required:l,l10n:m})=>{let p=t,d=l?"required":"";return r?`<select id="${p}" name="${t}" ${d}>
                                                              <option></option>
                                                              ${r.map(y=>`<option value="${y}">${m(y)}</option>`).join(`
`)}
                                                          </select>`:e||o?`<table width="100%">
                                                          <tr>
                                                              <td>
                                                                  <textarea id="${p}" name="${t}" rows="${e}" cols="${o}" ${d}>${s}</textarea>
                                                      </table>`:`<input type="${i||"text"}" id="${p}" name="${t}" value="${s}" ${d} />`};var ct=({nonce:t})=>Object.entries({"script-src":[`'nonce-${t}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://script.hotjar.com","https://js.sentry-cdn.com","'unsafe-inline'"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/","https://static.hotjar.com","https://survey-images.hotjar.com"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","wss://ws.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://o171820.ingest.sentry.io/"],"style-src":["'self'",`'nonce-${t}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/","https://www.googletagmanager.com/"],"script-src-elem":["'self'",`'nonce-${t}'`,"https://script.hotjar.com"]}).reduce((e,[o,r])=>`${e};${o} ${r.join(" ")}`,"default-src 'self'"),N=({nonce:t})=>`<meta http-equiv="Content-Security-Policy" content="${ct({nonce:t})}">`;var B=({children:t})=>{if(typeof document>"u")return Array.isArray(t)?t.join(""):t;let e=document.createDocumentFragment();return Array.isArray(t)?[].forEach.call(t,o=>{e.appendChild(o)}):t!=null&&e.appendChild(t),e};var j=(t,...e)=>{let o=String.raw({raw:t},...e);if(typeof document>"u")return o;let r=document.createElement("div");return r.innerHTML=o,r.firstElementChild||""};var lt=({children:t,speed:e=1})=>j`
    <marquee
      direction="down"
      scrollamount="5"
      scrolldelay="${60*e}"
      class="snowCanvas"
    >
      <noscript><pre>${t}</pre></noscript>
    </marquee>
  `,pt=({width:t=1,height:e=1,avg:o=1,snowFlake:r="."}={})=>{let i=~~(t/6),s=~~(e/8),l=~~(i*s*o),m="";for(let p=0;p<s;p++){let d="";for(let y=0;y<i;y++)d+=Math.random()<l/(s*i)?r:"&nbsp;";m+=d+`
`}return m},O=({speed:t=1,count:e=1,step:o=.25,...r})=>[...new Array(e)].map((i,s)=>lt({children:pt(r),speed:t+(s+1)*o})),M=({width:t=800,height:e=600,avg:o=.01,snowFlake:r="*",nonce:i=""}={})=>{let s=~~(e/8*1e3*.5),l=B({children:O({width:t,height:e,avg:o,snowFlake:r,speed:1,count:3,step:.25})});return typeof window<"u"&&setTimeout((m=>()=>{O({width:t,height:e,avg:o,snowFlake:r,speed:1,count:3,step:.5}).forEach(p=>{p!=null&&m.append?.(p)})})(l),s),j`
  ${l}
  ${a({srcDoc:"./src/lib/snow.js",nonce:i})}
  <style nonce="${i}">
    .snowCanvas {
      position: absolute;top: 0;
      color:rgba(200,200,200,0.8);
      user-select: none;
      pointer-events: none;
      width: 424px;
      margin-left: -212px;
    }
    [width="768px"] .snowCanvas {
      width: 768px;
      margin-left: -384px;
    }
  </style>`};var E=g("./src/pages/1990/styles.css"),k="Art&#363;rs Jansons",L="Full-stack Developer",I="10+ year exp.",dt=`${k} | ${L} [${I}]`,D="Mobile / Web Developer &amp; JavaScript Consultant",mt="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",V=()=>`<p>
                        1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#exit" bgcolor="red">DOS</a>
                    </p>`,U=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,Y=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,h=[{image:{src:"/images/categories/website-thumb.png",ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{src:"/images/categories/mobile-thumb.png",ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{src:"/images/categories/clock-thumb.png",ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{src:"/images/categories/wordpress-thumb.png",ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],W=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],gt=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],ht="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",f=t=>`<center>${x(t.image)}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,o)=>`${o?" | ":""}${u(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,J=()=>"<p>Time Zone: EEST</p>",Q=()=>"<p>Work Time: 10:00 - 20:00</p>",Z=()=>"<p>Current Location: Earth</p>",H={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},ft={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I`m not a robot"},v=t=>$(ft[t]||t),bt=()=>t=>e=>{let{name:o}=e,{kind:r,type:i}=H[o]||{},s={...e,...H[o]||{},l10n:v};if(i==="hidden")return t(s);if(i==="submit")return`<input type="submit" name="${o}" value="${v(o)}" />`;let l=v(o);return r==="vertical"?`<label for="${o}">${l}</label>
                                                        <br>
                                                        ${t(s)}`:`<label for="${o}">${l}</label>&nbsp;${t(s)}`},c=bt()(q),K=({name:t})=>`<input id="bot" name="${t}" nonce="${n}" value="Type 'true' here" /><a id="${t}" href="#bot"></a><script nonce="${n}">bot.style.display='none';${t}.innerText='[_] ${v(t)}';${t}.addEventListener("click", () => {${t}.innerText=${t}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${t}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,ut=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${c({name:"email"})}
                                                        ${c({name:"to"})}
                                                        ${c({name:"access_key"})}
                                                        ${c({name:"redirect"})}
                                                    <td width="100%">
                                                        ${c({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        <br>
                                                        ${c({name:"message",rows:5,cols:44})}
                                                        ${K({name:"botcheck"})}
                                                        <p align="right">
                                                            ${c({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,$t=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${c({name:"email"})}
                                                        ${c({name:"to"})}
                                                        ${c({name:"access_key"})}
                                                        ${c({name:"redirect"})}
                                                </tr>
                                                <tr>
                                                    <td width="100%">
                                                        ${c({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        ${c({name:"message",rows:5,cols:36})}
                                                        ${K({name:"botcheck"})}
                                                        <p align="left">
                                                            ${c({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,yt=()=>`
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                ${x({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/me.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${k}
                                <h1><font size="5"><b>${L}</b></font><font size="2">[${I}]</font></h1>
                                <p><em><font color="gray">${D}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${U()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${Y()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td colspan="2">
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${f(h[0])}
                                        <td valign="top">
                                            ${f(h[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${f(h[2])}
                                        <td valign="top">
                                            ${f(h[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td colspan="2">
                                <my-portfolio theme="1990/desktop" />
                        <tr>
                            <td colspan="2" align="center">
                                <noscript>${u({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${ut()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${W.map(t=>`<li><p>${u(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${J()}
                                    ${Q()}
                                    ${Z()}
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
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td align="center">
                                ${M({width:768,height:1024,snowFlake:"*",nonce:n})}
                    </table>
                    `,wt=()=>`
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${x({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${k}
                                <h1>
                                    <font size="5"><b>${L}</b></font>
                                    <br>
                                    <font size="2">[${I}]</font></h1>
                                <p><em>${D}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${U()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
                                        ${Y()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td>
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${f(h[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${f(h[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${f(h[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${f(h[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td>
                                <my-portfolio theme="1990/mobile" />
                        <tr>
                            <td align="center">
                                <noscript>${u({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${$t()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${W.map(t=>`<li><p>${u(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${J()}
                                    ${Q()}
                                    ${Z()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%">
                                <font size="2">
                                    ${P({src:"./src/pages/1990/assets/code_of_a_day/git_du.gitconfig",title:"Code of the day"})}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${M({width:424,height:600,snowFlake:".",nonce:n})}
                    </table>
                    `,X=()=>`<p>${gt.map((t,e)=>`${e?" | ":""}${u(t)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${k} | All rights reserved</font>
                                    `,G=process.env.IS_VITE==="true"?"<!DOCTYPE html>":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`,tt=t=>`<font face="${ht}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${t[0]}
                    <hr>
                    ${t[1]}
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                ${t[2]}
                    </table>
        </table>
    </font>
`,z=t=>`${G}
<html lang="en">
<head>
    ${N({nonce:n})}
    <title>${dt}</title>
    <meta name="description" content="${D}" />
    <meta name="keywords" content="${mt}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    
    <style nonce="${n}" id="/1990/styles.min.css">${E}</style>
    
    ${a({srcDoc:"./src/lib/console-game.js",nonce:n})}
    ${a({srcDoc:"./src/lib/guard.js",nonce:n})}
    ${process.env.IS_VITE==="true"?"":F({nonce:n,gtmId:"GTM-MBG56M"})}
    
    
</head>
<body>
    
    ${process.env.IS_VITE==="true"?"":C({nonce:n,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${process.env.IS_VITE==="true"?"":T({nonce:n,gtmId:"GTM-MBG56M"})}
    ${t}
    
    ${a({srcDoc:"./src/lib/dos-theme.js",iife:'document, toggleDosStyle, "/1990/styles.min.css"',nonce:n,prefix:`const nonce = '${n}';
`})}
    ${a({srcDoc:"./src/lib/my-portfolio.js",nonce:n})}
    ${R({nonce:n,projectId:"179618f1f04d4d9dac08acc750d5736c",dsn:"https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",release:`1250596@${S}`,environment:"production",integrity:"sha384-6yzL+SsRi1vefLAU9+yqKb0YIeAiJ6GsCob5LxN8Af29Ze1Q5iCg0Ur2fwFroEqa"})}
`;b("public/index.html",`${G}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    <!--meta http-equiv="REFRESH" content="0;URL=1990/"-->
    
    <style nonce="${n}" id="/1990/styles.min.css">${E}</style>
    ${a({srcDoc:"./src/lib/router-1990.min.js",nonce:n})}
    
    ${process.env.IS_VITE==="true"?"":F({nonce:n,gtmId:"GTM-MBG56M"})}
</head>
<body id="root">
    
    ${process.env.IS_VITE==="true"?"":C({nonce:n,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${process.env.IS_VITE==="true"?"":T({nonce:n,gtmId:"GTM-MBG56M"})}
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
                      <font size="1" color="gray">You will be redirected to the new page shortly. If not, click <a id="url" href="1990/">here</a>.</font>
`);b("public/1990/index.html",`${G}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    
    <style nonce="${n}" id="/1990/styles.min.css">${E}</style>
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
                      <font size="1" color="gray">You will be redirected to the new page shortly. If not, click <a id="url" href="/1990/mobile/">here</a>.</font>
                      <p>
                        <a href="/1990/desktop/">DESKTOP</a> |
                        <a href="/1990/mobile/">MOBILE</a>
`);var xt=()=>"<my-portfolio></my-portfolio>";b("public/1990/desktop/index.html",z(tt([V(),yt(),X()])));b("public/1990/mobile/index.html",z(tt([V(),wt(),X()])));b("public/portfolio/index.html",z(xt()));var vt=`
CACHE MANIFEST
# rev ${S}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`;b("public/manifest.appcache",vt);
