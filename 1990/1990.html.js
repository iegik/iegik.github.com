#!/usr/bin/env node
"use strict";var R=Object.create;var x=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var I=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty;var W=(t,e,n,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of B(e))!Q.call(t,s)&&s!==n&&x(t,s,{get:()=>e[s],enumerable:!(c=H(e,s))||c.enumerable});return t};var U=(t,e,n)=>(n=t!=null?R(I(t)):{},W(e||!t||!t.__esModule?x(n,"default",{value:t,enumerable:!0}):n,t));var h=U(require("fs")),g=(t,e)=>h.writeFileSync(t,e,{encoding:"utf8"}),$=t=>h.readFileSync(t,{encoding:"utf8"});var S=new Date,u=`v3.1.0-${S.toJSON()}`,o=btoa(`${Number(S)}`).slice(10,18);var pt=$("./src/pages/1990/styles.css"),G=Object.entries({"script-src":[`'nonce-${o}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://js.sentry-cdn.com"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/","https://o171820.ingest.sentry.io/"],"style-src":[`'nonce-${o}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/"]}).reduce((t,[e,n])=>`${t};${e} ${n.join(" ")}`,"default-src 'self'"),p="Art&#363;rs Jansons",k="Full-stack Developer",y="10+ year exp.",J=`${p} | ${k} [${y}]`,w="Mobile / Web Developer &amp; JavaScript Consultant",Y="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",C=()=>`<p>
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
                                        <font color="#DA214C">Nest</font>`,Z=t=>t.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)}`),b=({src:t})=>`<pre><font size=1>${Z($(t))}</font></pre>`,d=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`,r=[{image:{ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],P=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],E=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],L="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",a=t=>`<center>${b({src:t.image.ascii})}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,n)=>`${n?" | ":""}${d(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,D=()=>"<p>Time Zone: EEST</p>",M=()=>"<p>Work Time: 10:00 - 20:00</p>",_=()=>"<p>Current Location: Earth</p>",O=({src:t,title:e})=>`<form align="left" method="get" action="/1990/mailto/">
                                            <fieldset>
                                                <legend>${e}</legend>
                                                <code>${b({src:t})}</code>
                                            </fieldset>
                                        </form>`,N={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},X={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I' m not a robot"},m=t=>X[t]||t,V=()=>t=>e=>{let{name:n}=e,{kind:c,type:s}=N[n]||{};if(s==="hidden")return t(e);if(s==="submit")return`<input type="submit" name="${n}" value="${m(n)}" />`;let l=m(n);return c==="vertical"?`<label for="${n}">${l}</label>
                                                        <br>
                                                        <br>
                                                        ${t(e)}`:`<label for="${n}">${l}</label>&nbsp;${t(e)}`},K=({name:t,rows:e,cols:n})=>{let{data:c,type:s,value:l="",required:A}=N[t]||{},v=t,f=A?"required":"";return c?`<select id="${v}" name="${t}" ${f}>
                                                                <option></option>
                                                                ${c.map(j=>`<option value="${j}">${m(j)}</option>`).join(`
`)}
                                                            </select>`:e||n?`<table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <textarea id="${v}" name="${t}" rows="${e}" cols="${n}" ${f}>${l}</textarea>
                                                        </table>`:`<input type="${s||"text"}" name="${t}" value="${l}" ${f} />`},i=V()(K),q=({name:t})=>`<input id="bot" name="${t}" nonce="${o}" value="This shouldn't be here" /><p><a id="${t}" href="#bot">[_] ${m(t)}</a></p><script nonce="${o}">bot.style.display='none';${t}.addEventListener("click", () => {${t}.innerText=${t}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${t}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,tt=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset>
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
                                                        ${q({name:"botcheck"})}
                                                        <p align="right">
                                                            ${i({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,et=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset>
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
                                                        ${q({name:"botcheck"})}
                                                        <p align="left">
                                                            ${i({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,nt=()=>`<font face="${L}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${C()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td>
                                ${b({src:"./src/pages/1990/assets/photo.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${p}
                                <h1><font size="5"><b>${k}</b></font><font size="2">[${y}]</font></h1>
                                <p><em>${w}</em></p>
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
                                            ${a(r[0])}
                                        <td valign="top">
                                            ${a(r[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${a(r[2])}
                                        <td valign="top">
                                            ${a(r[3])}
                                    </tr>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${tt()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${P.map(t=>`<li><p>${d(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${D()}
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
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${E.map((t,e)=>`${e?" | ":""}${d(t)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${p} | All rights reserved</font>
                    </table>
        </table>
    </font>`,it=()=>`<font face="${L}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${C()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${b({src:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${p}
                                <h1>
                                    <font size="5"><b>${k}</b></font>
                                    <br>
                                    <font size="2">[${y}]</font></h1>
                                <p><em>${w}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${T()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
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
                                            ${a(r[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${a(r[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${a(r[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${a(r[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${et()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${P.map(t=>`<li><p>${d(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${D()}
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
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${E.map((t,e)=>`${e?" | ":""}${d(t)}`).join("")}</p>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${p} | All rights reserved</font>
                    </table>
        </table>
    </font>`,z=t=>`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="${G}">
    <title>${J}</title>
    <meta name="description" content="${w}" />
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
        release: "1250596@${u}",
        environment: "production",
      });
    });
    </script>
`;g("public/1990/desktop/index.html",z(nt()));g("public/1990/mobile/index.html",z(it()));var ot=`
CACHE MANIFEST
# rev ${u}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`;g("public/manifest.appcache",ot);
