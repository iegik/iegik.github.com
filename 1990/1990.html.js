#!/usr/bin/env node
"use strict";var U=Object.create;var T=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var Q=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty;var J=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of W(e))!Y.call(t,i)&&i!==o&&T(t,i,{get:()=>e[i],enumerable:!(s=G(e,i))||s.enumerable});return t};var V=(t,e,o)=>(o=t!=null?U(Q(t)):{},J(e||!t||!t.__esModule?T(o,"default",{value:t,enumerable:!0}):o,t));var b=V(require("fs")),p=(t,e)=>b.writeFileSync(t,e,{encoding:"utf8"}),a=t=>b.readFileSync(t,{encoding:"utf8"});var C=new Date,w=`v3.1.0-${C.toJSON()}`,r=btoa(`${Number(C)}`).slice(10,18);var d=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`;var h=t=>t.replace(/[&<"']/g,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}});var u=({src:t})=>`<pre><font size=1>${h(a(t))}</font></pre>`;var v=({src:t,title:e})=>`<fieldset bgcolor="green">
                                                <legend>${e}</legend>
                                                <code width="120px">${h(a(t))}</code>
                                            </fieldset>`;var m=({srcDoc:t,src:e,nonce:o,async:s,prefix:i})=>`<script ${s?"async":""} nonce="${o}" ${e?`src="${e}"`:""}>${i||""}${t?h(a(t)):""}</script>`;var M=({nonce:t,gtmId:e})=>`
    ${m({async:!0,nonce:t,src:`https://www.googletagmanager.com/gtag/js?id=${e}`})}
    ${m({srcDoc:"./src/lib/gtm.js",nonce:t,prefix:`gtag('config', '${e}');
`})}
`;var Z=a("./src/pages/1990/styles.css"),X=Object.entries({"script-src":[`'nonce-${r}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://js.sentry-cdn.com"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/","https://o171820.ingest.sentry.io/"],"style-src":[`'nonce-${r}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/"]}).reduce((t,[e,o])=>`${t};${e} ${o.join(" ")}`,"default-src 'self'"),f="Art&#363;rs Jansons",k="Full-stack Developer",x="10+ year exp.",K=`${f} | ${k} [${x}]`,S="Mobile / Web Developer &amp; JavaScript Consultant",tt="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",L=()=>`<p>
                        1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#" bgcolor="red">DOS</a>
                    </p>`,E=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,D=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,c=[{image:{ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],z=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],q=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],R="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",l=t=>`<center>${u({src:t.image.ascii})}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,o)=>`${o?" | ":""}${d(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,_=()=>"<p>Time Zone: EEST</p>",I=()=>"<p>Work Time: 10:00 - 20:00</p>",N=()=>"<p>Current Location: Earth</p>",O={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},et={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I' m not a robot"},$=t=>et[t]||t,ot=()=>t=>e=>{let{name:o}=e,{kind:s,type:i}=O[o]||{};if(i==="hidden")return t(e);if(i==="submit")return`<input type="submit" name="${o}" value="${$(o)}" />`;let g=$(o);return s==="vertical"?`<label for="${o}">${g}</label>
                                                        <br>
                                                        <br>
                                                        ${t(e)}`:`<label for="${o}">${g}</label>&nbsp;${t(e)}`},nt=({name:t,rows:e,cols:o})=>{let{data:s,type:i,value:g="",required:B}=O[t]||{},P=t,y=B?"required":"";return s?`<select id="${P}" name="${t}" ${y}>
                                                                <option></option>
                                                                ${s.map(F=>`<option value="${F}">${$(F)}</option>`).join(`
`)}
                                                            </select>`:e||o?`<table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <textarea id="${P}" name="${t}" rows="${e}" cols="${o}" ${y}>${g}</textarea>
                                                        </table>`:`<input type="${i||"text"}" name="${t}" value="${g}" ${y} />`},n=ot()(nt),A=({name:t})=>`<input id="bot" name="${t}" nonce="${r}" value="This shouldn't be here" /><p><a id="${t}" href="#bot">[_] ${$(t)}</a></p><script nonce="${r}">bot.style.display='none';${t}.addEventListener("click", () => {${t}.innerText=${t}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${t}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,it=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
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
                                                        ${A({name:"botcheck"})}
                                                        <p align="right">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,rt=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
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
                                                        ${A({name:"botcheck"})}
                                                        <p align="left">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,st=()=>`<font face="${R}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${L()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                ${u({src:"./src/pages/1990/assets/photo.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${f}
                                <h1><font size="5"><b>${k}</b></font><font size="2">[${x}]</font></h1>
                                <p><em><font color="gray">${S}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${E()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${D()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td colspan="2">
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${l(c[0])}
                                        <td valign="top">
                                            ${l(c[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${l(c[2])}
                                        <td valign="top">
                                            ${l(c[3])}
                                    </tr>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${it()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${z.map(t=>`<li><p>${d(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${_()}
                                    ${I()}
                                    ${N()}
                                </font>
                            <td valign="bottom" align="right">
                                
                            <td valign="top" align="right">
                                <table border="0" cellpadding="0" cellspacing="8">
                                    <tr>
                                        <td valign="top">
                                            <font size="2">
                                                ${v({src:"./src/pages/1990/assets/code_of_a_day/git_du.gitconfig",title:"Code of the day"})}
                                            </font>
                                </table>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${q.map((t,e)=>`${e?" | ":""}${d(t)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${f} | All rights reserved</font>
                    </table>
        </table>
    </font>`,at=()=>`<font face="${R}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${L()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${u({src:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${f}
                                <h1>
                                    <font size="5"><b>${k}</b></font>
                                    <br>
                                    <font size="2">[${x}]</font></h1>
                                <p><em>${S}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${E()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
                                        ${D()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td>
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${l(c[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${l(c[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${l(c[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${l(c[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${rt()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${z.map(t=>`<li><p>${d(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${_()}
                                    ${I()}
                                    ${N()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%">
                                <font size="2">
                                    ${v({src:"./src/pages/1990/assets/code_of_a_day/git_du.gitconfig",title:"Code of the day"})}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${q.map((t,e)=>`${e?" | ":""}${d(t)}`).join("")}</p>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${f} | All rights reserved</font>
                    </table>
        </table>
    </font>`,j=process.env.IS_VITE?"<!DOCTYPE html>":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`,H=t=>`${j}
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="${X}">
    <title>${K}</title>
    <meta name="description" content="${S}" />
    <meta name="keywords" content="${tt}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    <style nonce="${r}" id="/1990/styles.min.css">${Z}</style>
</head>
<body>
    ${t}
    
    ${M({nonce:r,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${m({srcDoc:"./src/lib/dosTheme.js",nonce:r,prefix:`const nonce = '${r}';
`})}
    <!-- Hotjar Tracking Code for https://iegik.github.io -->
    <script nonce="${r}">
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2660383,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    <script nonce="${r}" src="https://browser.sentry-cdn.com/7.54.0/bundle.min.js" integrity="sha384-EmlJLN9Q0yu0/2UUCIYnEM88jpQ7xUhtNI2ZeXb/ci3cwoAoIQl350N4PQPlMbP5" crossorigin="anonymous"></script>
    <script nonce="${r}">
    document.addEventListener('DOMContentLoaded', () => {
      typeof Sentry !== 'undefined' && Sentry.init({
        dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
        release: "1250596@${w}",
        environment: "production",
      });
    });
    </script>
`;p("public/index.html",`${j}
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
`);p("public/1990/index.html",`${j}
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
`);p("public/1990/desktop/index.html",H(st()));p("public/1990/mobile/index.html",H(at()));var ct=`
CACHE MANIFEST
# rev ${w}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`;p("public/manifest.appcache",ct);
