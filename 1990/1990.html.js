#!/usr/bin/env node
"use strict";var R=Object.create;var x=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty;var W=(t,e,i,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of I(e))!Q.call(t,s)&&s!==i&&x(t,s,{get:()=>e[s],enumerable:!(r=B(e,s))||r.enumerable});return t};var U=(t,e,i)=>(i=t!=null?R(H(t)):{},W(e||!t||!t.__esModule?x(i,"default",{value:t,enumerable:!0}):i,t));var d=U(require("fs")),h=(t,e)=>d.writeFileSync(t,e,{encoding:"utf8"}),f=t=>d.readFileSync(t,{encoding:"utf8"});var S=new Date,$=`v3.1.0-${S.toJSON()}`,o=btoa(`${Number(S)}`).slice(10,18);var lt=f("./src/pages/1990/styles.css"),G=Object.entries({"script-src":[`'nonce-${o}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://js.sentry-cdn.com"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","https://static.hotjar.com","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/","https://o171820.ingest.sentry.io/"],"style-src":[`'nonce-${o}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/"]}).reduce((t,[e,i])=>`${t};${e} ${i.join(" ")}`,"default-src 'self'"),l="Art&#363;rs Jansons",u="Full-stack Developer",k="10+ year exp.",J=`${l} | ${u} [${k}]`,y="Mobile / Web Developer &amp; JavaScript Consultant",Y="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",C=()=>`<p>
                        1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#" bgcolor="red">DOS</a>
                    </p>`,T=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,F=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,m=({src:t})=>`<pre><font size=1>${f(t)}</font></pre>`,p=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`,a=[{image:{ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],P=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],E=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],D="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",c=t=>`<center>${m({src:t.image.ascii})}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,i)=>`${i?" | ":""}${p(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,L=()=>"<p>Time Zone: EEST</p>",M=()=>"<p>Work Time: 10:00 - 20:00</p>",_=()=>"<p>Current Location: Earth</p>",O=({src:t,title:e})=>`<form align="left" method="get" action="/1990/mailto/">
                                            <fieldset>
                                                <legend>${e}</legend>
                                                <code>${m({src:t})}</code>
                                            </fieldset>
                                        </form>
                                    </font>`,N={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0,rows:5,cols:44},send:{type:"submit"}},Z={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I' m not a robot"},g=t=>Z[t]||t,X=()=>t=>({name:e})=>{let{kind:i,type:r}=N[e]||{};if(r==="hidden")return t({name:e});if(r==="submit")return`<input type="submit" name="${e}" value="${g(e)}" />`;let s=g(e);return i==="vertical"?`<label for="${e}">${s}</label>
                                                        <br/>
                                                        <br/>
                                                        ${t({name:e})}`:`<label for="${e}">${s}</label>&nbsp;${t({name:e})}`},V=({name:t})=>{let{data:e,type:i,rows:r,cols:s,value:w="",required:A}=N[t]||{},v=t,b=A?"required":"";return e?`<select id="${v}" name="${t}" ${b}>
                                                                <option></option>
                                                                ${e.map(j=>`<option value="${j}">${g(j)}</option>`).join(`
`)}
                                                            </select>`:r||s?`<table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <textarea id="${v}" name="${t}" rows="${r}" cols="${s}" ${b}>${w}</textarea>
                                                        </table>`:`<input type="${i||"text"}" name="${t}" value="${w}" ${b} />`},n=X()(V),q=({name:t})=>`<input id="bot" name="${t}" nonce="${o}" value="This shouldn't be here" /><p><a id="${t}" href="#bot">[_] ${g(t)}</a></p><script nonce="${o}">bot.style.display='none';${t}.addEventListener("click", () => {${t}.innerText=${t}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${t}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,K=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset>
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
                                                        <br/>
                                                        ${n({name:"message"})}
                                                        ${q({name:"botcheck"})}
                                                        <p align="right">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,tt=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset>
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
                                                        ${n({name:"message"})}
                                                        ${q({name:"botcheck"})}
                                                        <p align="left">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,et=()=>`<font face="${D}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${C()}
                    <hr/>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td>
                                ${m({src:"./src/pages/1990/assets/photo.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${l}
                                <h1><font size="5"><b>${u}</b></font><font size="2">[${k}]</font></h1>
                                <p><em>${y}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${T()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${F()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td colspan="2">
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${c(a[0])}
                                        <td valign="top">
                                            ${c(a[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${c(a[2])}
                                        <td valign="top">
                                            ${c(a[3])}
                                    </tr>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${K()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${P.map(t=>`<li><p>${p(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br/>
                                    ${L()}
                                    ${M()}
                                    ${_()}
                                </font>
                            <td valign="bottom" align="right">
                                
                            <td valign="top" align="right">
                                <table border="0" cellpadding="0" cellspacing="8">
                                    <tr>
                                        <td valign="top">
                                            <font size="2">
                                                ${O({src:"./src/pages/1990/assets/slotmachine.ascii",title:"Code of the day"})}
                                            </font>
                                </table>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr/>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${E.map((t,e)=>`${e?" | ":""}${p(t)}`).join("")}</p>
                                <br/>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${l} | All rights reserved</font>
                    </table>
        </table>
    </font>`,nt=()=>`<font face="${D}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${C()}
                    <hr/>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${m({src:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${l}
                                <h1>
                                    <font size="5"><b>${u}</b></font>
                                    <br/>
                                    <font size="2">[${k}]</font></h1>
                                <p><em>${y}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br/>
                                        ${T()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br/>
                                        ${F()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td>
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${c(a[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${c(a[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${c(a[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${c(a[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${tt()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${P.map(t=>`<li><p>${p(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br/>
                                    ${L()}
                                    ${M()}
                                    ${_()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%" align="right">
                                <font size="2">
                                    ${O({src:"./src/pages/1990/assets/slotmachine.ascii",title:"Code of the day"})}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr/>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${E.map((t,e)=>`${e?" | ":""}${p(t)}`).join("")}</p>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${l} | All rights reserved</font>
                    </table>
        </table>
    </font>`,z=t=>`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="${G}">
    <title>${J}</title>
    <meta name="description" content="${y}" />
    <meta name="keywords" content="${Y}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    
</head>
<body>
    ${t}
    
    <script async nonce="${o}" src="https://www.googletagmanager.com/gtag/js?id=G-5ZY8Y6X2C4"></script>
    <script nonce="${o}">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5ZY8Y6X2C4');
    </script>
    <!-- DOS Theme Code for https://iegik.github.io -->
    <script nonce="${o}">
        (function(m,s,D,O,S,_){
            a();
            O.onclick=r;
            function a(){
                O.innerText=m;
                O.onclick=r;
                _=D.createElement('link');_.async=1;
                _.rel='stylesheet';_.href=S;_.setAttribute('nonce', '${o}');
                D.head.appendChild(_);
            };
            function r(){
                O.innerText=s;
                O.onclick=a;
                _.remove();
            };
        })('EXIT', 'DOS', document, toggleDosStyle,'/1990/styles.min.css');
    </script>
    <!-- Hotjar Tracking Code for https://iegik.github.io -->
    <script nonce="${o}">
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2660383,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    <script nonce="${o}" src="https://browser.sentry-cdn.com/7.54.0/bundle.min.js" integrity="sha384-EmlJLN9Q0yu0/2UUCIYnEM88jpQ7xUhtNI2ZeXb/ci3cwoAoIQl350N4PQPlMbP5" crossorigin="anonymous"></script>
    <script nonce="${o}">
    document.addEventListener('DOMContentLoaded', () => {
      typeof Sentry !== 'undefined' && Sentry.init({
        dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
        release: "1250596@${$}",
        environment: "production",
      });
    });
    </script>
`;h("public/1990/desktop/index.html",z(et()));h("public/1990/mobile/index.html",z(nt()));var it=`
CACHE MANIFEST
# rev ${$}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`;h("public/manifest.appcache",it);
