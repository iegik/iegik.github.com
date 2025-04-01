#!/usr/bin/env node
"use strict";var tt=Object.create;var E=Object.defineProperty;var et=Object.getOwnPropertyDescriptor;var ot=Object.getOwnPropertyNames;var rt=Object.getPrototypeOf,it=Object.prototype.hasOwnProperty;var nt=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of ot(e))!it.call(t,c)&&c!==r&&E(t,c,{get:()=>e[c],enumerable:!(s=et(e,c))||s.enumerable});return t};var st=(t,e,r)=>(r=t!=null?tt(rt(t)):{},nt(e||!t||!t.__esModule?E(r,"default",{value:t,enumerable:!0}):r,t));var y=st(require("fs")),h=(t,e)=>y.writeFileSync(t,e,{encoding:"utf8"}),p=t=>y.readFileSync(t,{encoding:"utf8"});var R=new Date,k=`v3.1.4-${R.toJSON()}`,o=btoa(`${Number(R)}`).slice(10,18);var a=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`;var $=t=>t.replace(/[&<"']/g,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}});var w=({src:t,ascii:e})=>`<pre><font size=1><img width="128" height="128" src="${t}" alt="${$(p(e))}" /></font></pre>`;var z=({src:t,title:e})=>`<fieldset bgcolor="green">
                                                <legend>${e}</legend>
                                                <code width="120px">${$(p(t))}</code>
                                            </fieldset>`;var i=({srcDoc:t,src:e,nonce:r,async:s,prefix:c,postfix:l,iife:g,crossorigin:S="",integrity:f})=>{let b=t?p(t):"";return`<script ${s?"async":""} crossorigin="${S}" ${f?`integrity="${f}"`:""} nonce="${r}" ${e?`src="${e}"`:""}>${c||""}${g?`(${b})(${g});`:b}${l||""}</script>`};var v=({nonce:t,gtmId:e})=>`
    ${i({nonce:t,srcDoc:"./src/lib/gtm.js",iife:`window,document,'script','dataLayer','${e}','${t}'`})}
`,P=({nonce:t,gtmId:e})=>`<noscript><iframe nonce="${t}" src="https://www.googletagmanager.com/ns.html?id=${e}"
height="0" width="0"></iframe></noscript>`;var F=({nonce:t,gtmId:e})=>`
    ${i({async:!0,nonce:t,src:`https://www.googletagmanager.com/gtag/js?id=${e}`})}
    ${i({srcDoc:"./src/lib/gtag.js",nonce:t,postfix:`gtag('config', '${e}');
`})}
`;var G=({nonce:t,integrity:e,projectId:r,...s})=>`
    ${i({async:!0,nonce:t,src:"https://browser.sentry-cdn.com/8.51.0/bundle.tracing.replay.debug.min.js",integrity:e,crossorigin:"anonymous"})}
    ${i({srcDoc:"./src/lib/sentry.js",nonce:t,iife:JSON.stringify(s)})}
`;var O=({name:t,rows:e,cols:r,data:s,type:c,value:l="",required:g,l10n:S})=>{let f=t,b=g?"required":"";return s?`<select id="${f}" name="${t}" ${b}>
                                                              <option></option>
                                                              ${s.map(L=>`<option value="${L}">${S(L)}</option>`).join(`
`)}
                                                          </select>`:e||r?`<table width="100%">
                                                          <tr>
                                                              <td>
                                                                  <textarea id="${f}" name="${t}" rows="${e}" cols="${r}" ${b}>${l}</textarea>
                                                      </table>`:`<input type="${c||"text"}" id="${f}" name="${t}" value="${l}" ${b} />`};var ct=({nonce:t})=>Object.entries({"script-src":[`'nonce-${t}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://script.hotjar.com","https://js.sentry-cdn.com","'unsafe-inline'"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/","https://static.hotjar.com","https://survey-images.hotjar.com"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","wss://ws.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://o171820.ingest.sentry.io/"],"style-src":["'self'",`'nonce-${t}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/","https://www.googletagmanager.com/"],"script-src-elem":["'self'",`'nonce-${t}'`,"https://script.hotjar.com"]}).reduce((e,[r,s])=>`${e};${r} ${s.join(" ")}`,"default-src 'self'"),q=({nonce:t})=>`<meta http-equiv="Content-Security-Policy" content="${ct({nonce:t})}">`;var B={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I`m not a robot"};var u=t=>$(B[t]||t);var j=p("./src/pages/1990/styles.css"),x="Art&#363;rs Jansons",T="Full-stack Developer",M="10+ year exp.",lt=`${x} | ${T} [${M}]`,C="Mobile / Web Developer &amp; JavaScript Consultant",pt="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",H=()=>`<p>
                        ${dt.map((t,e)=>`${e?" | ":""}${a(t)}`).join("")}
                        | 1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#exit" bgcolor="red">DOS</a>
                    </p>`,N=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,V=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,d=[{image:{src:"/images/categories/website-thumb.png",ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{src:"/images/categories/mobile-thumb.png",ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{src:"/images/categories/clock-thumb.png",ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{src:"/images/categories/wordpress-thumb.png",ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],A=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],dt=[{href:"#gdpr",title:"\u{1F36A}"},{href:"#clean",title:"\u{1F5D1}\uFE0F"}],W=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],mt="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",m=t=>`<center>${w(t.image)}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,r)=>`${r?" | ":""}${a(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,U=()=>"<p>Time Zone: EEST</p>",Y=()=>"<p>Work Time: 10:00 - 20:00</p>",J=()=>"<p>Current Location: Earth</p>",_={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},gt=()=>t=>e=>{let{name:r}=e,{kind:s,type:c}=_[r]||{},l={...e,..._[r]||{},l10n:u};if(c==="hidden")return t(l);if(c==="submit")return`<input type="submit" name="${r}" value="${u(r)}" />`;let g=u(r);return s==="vertical"?`<label for="${r}">${g}</label>
                                                        <br>
                                                        ${t(l)}`:`<label for="${r}">${g}</label>&nbsp;${t(l)}`},n=gt()(O),Z=({name:t})=>`<input id="bot" name="${t}" nonce="${o}" value="Type 'true' here" /><a id="${t}" href="#bot"></a><script nonce="${o}">bot.style.display='none';${t}.innerText='[_] ${u(t)}';${t}.addEventListener("click", () => {${t}.innerText=${t}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${t}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,ht=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
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
                                                        ${Z({name:"botcheck"})}
                                                        <p align="right">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,Q=()=>z({src:"./src/pages/1990/assets/code_of_a_day/whitelist.sh",title:"Code of the day"}),ft=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
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
                                                        ${Z({name:"botcheck"})}
                                                        <p align="left">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,bt=()=>`
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                ${w({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/me.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${x}
                                <h1><font size="5"><b>${T}</b></font><font size="2">[${M}]</font></h1>
                                <p><em><font color="gray">${C}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${N()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${V()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                <p>${W.map((t,e)=>`${e?" | ":""}${a(t)}`).join("")}</p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td colspan="2">
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${m(d[0])}
                                        <td valign="top">
                                            ${m(d[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${m(d[2])}
                                        <td valign="top">
                                            ${m(d[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td colspan="2">
                                <my-portfolio theme="1990/desktop" />
                        <tr>
                            <td colspan="2" align="center">
                                <noscript>${a({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${ht()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${A.map(t=>`<li><p>${a(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${U()}
                                    ${Y()}
                                    ${J()}
                                </font>
                            <td valign="bottom" align="right">
                                
                            <td valign="top" align="right">
                                <table border="0" cellpadding="0" cellspacing="8">
                                    <tr>
                                        <td valign="top">
                                            <font size="2">
                                                ${Q()}
                                            </font>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td align="center">
                                
                    </table>
                    `,$t=()=>`
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${w({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${x}
                                <h1>
                                    <font size="5"><b>${T}</b></font>
                                    <br>
                                    <font size="2">[${M}]</font></h1>
                                <p><em>${C}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${N()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
                                        ${V()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td>
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${m(d[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${m(d[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${m(d[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${m(d[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td>
                                <my-portfolio theme="1990/mobile" />
                        <tr>
                            <td align="center">
                                <noscript>${a({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${ft()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${A.map(t=>`<li><p>${a(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${U()}
                                    ${Y()}
                                    ${J()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%">
                                <font size="2">
                                    ${Q()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                
                    </table>
                    `,K=()=>`<p>${W.map((t,e)=>`${e?" | ":""}${a(t)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${x} | All rights reserved</font>
                                    `,D=process.env.IS_VITE==="true"?"<!DOCTYPE html>":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`,X=t=>`<font face="${mt}" size="3">
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
`,I=t=>`${D}
<html lang="en">
<head>
    ${q({nonce:o})}
    <title>${lt}</title>
    <meta name="description" content="${C}" />
    <meta name="keywords" content="${pt}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    
    <style nonce="${o}" id="/1990/styles.min.css">${j}</style>
    
    ${i({srcDoc:"./src/lib/dialogs.dos.js",nonce:o})}
    ${i({srcDoc:"./src/lib/gdpr.js",nonce:o})}
    ${i({srcDoc:"./src/lib/sw.js",nonce:o})}
    ${i({srcDoc:"./src/lib/console-game.js",nonce:o})}
    ${i({srcDoc:"./src/lib/guard.js",nonce:o})}
    ${process.env.IS_VITE==="true"?"":v({nonce:o,gtmId:"GTM-MBG56M"})}
    
    
</head>
<body>
    
    ${process.env.IS_VITE==="true"?"":F({nonce:o,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${process.env.IS_VITE==="true"?"":P({nonce:o,gtmId:"GTM-MBG56M"})}
    ${t}
    
    ${i({srcDoc:"./src/lib/dos-theme.js",iife:'document, toggleDosStyle, "/1990/styles.min.css"',nonce:o,prefix:`const nonce = '${o}';
`})}
    ${i({srcDoc:"./src/lib/my-portfolio.js",nonce:o})}
    ${G({nonce:o,projectId:"179618f1f04d4d9dac08acc750d5736c",dsn:"https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.us.sentry.io/1250596",tracesSampleRate:1,replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1,release:`1250596@${k}`,environment:"production",integrity:"sha384-qnTptFNLKIQmPtZ6hk6eVXm1vZjnCzyt/KrWLwvzn4wI+ehVnDRWPgkfwHu9fc6o"})}
    ${i({srcDoc:"./src/lib/highlighter.js",nonce:o})}
`;h("public/index.html",`${D}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    <!--meta http-equiv="REFRESH" content="0;URL=1990/"-->
    
    <style nonce="${o}" id="/1990/styles.min.css">${j}</style>
    ${i({srcDoc:"./src/lib/router-1990.min.js",nonce:o})}
    
    ${process.env.IS_VITE==="true"?"":v({nonce:o,gtmId:"GTM-MBG56M"})}
</head>
<body id="root">
    
    ${process.env.IS_VITE==="true"?"":F({nonce:o,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${process.env.IS_VITE==="true"?"":P({nonce:o,gtmId:"GTM-MBG56M"})}
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
`);h("public/1990/index.html",`${D}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    
    <style nonce="${o}" id="/1990/styles.min.css">${j}</style>
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
`);var ut=()=>"<my-portfolio></my-portfolio>";h("public/1990/desktop/index.html",I(X([H(),bt(),K()])));h("public/1990/mobile/index.html",I(X([H(),$t(),K()])));h("public/portfolio/index.html",I(ut()));var yt=`
CACHE MANIFEST
# rev ${k}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`;h("public/manifest.appcache",yt);
