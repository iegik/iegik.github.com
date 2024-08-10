#!/usr/bin/env node
"use strict";var A=Object.create;var j=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty;var Q=(t,e,i,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of B(e))!I.call(t,o)&&o!==i&&j(t,o,{get:()=>e[o],enumerable:!(r=R(e,o))||r.enumerable});return t};var W=(t,e,i)=>(i=t!=null?A(H(t)):{},Q(e||!t||!t.__esModule?j(i,"default",{value:t,enumerable:!0}):i,t));var d=W(require("fs")),g=(t,e)=>d.writeFileSync(t,e,{encoding:"utf8"}),f=t=>d.readFileSync(t,{encoding:"utf8"});var x=new Date,b=`v3.1.0-${x.toJSON()}`,s=btoa(`${Number(x)}`).slice(10,18);var ct=f("./src/pages/1990/styles.css"),U=Object.entries({"script-src":[`'nonce-${s}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://js.sentry-cdn.com","'unsafe-inline'"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","https://static.hotjar.com","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/","https://o171820.ingest.sentry.io/"],"style-src":[`'nonce-${s}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/"]}).reduce((t,[e,i])=>`${t};${e} ${i.join(" ")}`,"default-src 'self'"),l="Art&#363;rs Jansons",$="Full-stack Developer",u="10+ year exp.",G=`${l} | ${$} [${u}]`,k="Mobile / Web Developer &amp; JavaScript Consultant",J="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",S=()=>`<p>
                        1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#" bgcolor="red">DOS</a>
                    </p>`,C=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,P=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,h=({src:t})=>`<pre><font size=1>${f(t)}</font></pre>`,p=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`,a=[{image:{ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],F=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],T=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],E="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",c=t=>`<center>${h({src:t.image.ascii})}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,i)=>`${i?" | ":""}${p(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,D=()=>"<p>Time Zone: EEST</p>",L=()=>"<p>Work Time: 10:00 - 20:00</p>",M=()=>"<p>Current Location: Earth</p>",O=({src:t,title:e})=>`<form align="left" method="get" action="/1990/mailto/">
                                            <fieldset>
                                                <legend>${e}</legend>
                                                <code>${h({src:t})}</code>
                                            </fieldset>
                                        </form>
                                    </font>`,N={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0,rows:5,cols:44},send:{type:"submit"}},Y={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report"},_=t=>Y[t]||t,Z=()=>t=>({name:e})=>{let{kind:i,type:r}=N[e]||{};if(r==="hidden")return t({name:e});if(r==="submit")return t({name:e});let o=_(e);return i==="vertical"?`<label for="${e}">${o}</label>
                                                        <br/>
                                                        <br/>
                                                        ${t({name:e})}`:`<label for="${e}">${o}</label>&nbsp;${t({name:e})}`},X=({name:t})=>{let{data:e,type:i,rows:r,cols:o,value:w="",required:z}=N[t]||{},y=t,m=z?"required":"";return e?`<select id="${y}" name="${t}" ${m}>
                                                                <option></option>
                                                                ${e.map(v=>`<option value="${v}">${_(v)}</option>`).join(`
`)}
                                                            </select>`:r||o?`<table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <textarea id="${y}" name="${t}" rows="${r}" cols="${o}" ${m}>${w}</textarea>
                                                        </table>`:`<input type="${i||"text"}" name="${t} value="${w}" ${m} />`},n=Z()(X),V=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
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
                                                        <p align="right">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,K=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
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
                                                        <p align="left">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,tt=()=>`<font face="${E}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${S()}
                    <hr/>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td>
                                ${h({src:"./src/pages/1990/assets/photo.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${l}
                                <h1><font size="5"><b>${$}</b></font><font size="2">[${u}]</font></h1>
                                <p><em>${k}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${C()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${P()}
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
                                    ${V()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${F.map(t=>`<li><p>${p(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br/>
                                    ${D()}
                                    ${L()}
                                    ${M()}
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
                                <p>${T.map((t,e)=>`${e?" | ":""}${p(t)}`).join("")}</p>
                                <br/>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${l} | All rights reserved</font>
                    </table>
        </table>
    </font>`,et=()=>`<font face="${E}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${S()}
                    <hr/>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${h({src:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${l}
                                <h1>
                                    <font size="5"><b>${$}</b></font>
                                    <br/>
                                    <font size="2">[${u}]</font></h1>
                                <p><em>${k}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br/>
                                        ${C()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br/>
                                        ${P()}
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
                                    ${K()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${F.map(t=>`<li><p>${p(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br/>
                                    ${D()}
                                    ${L()}
                                    ${M()}
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
                                <p>${T.map((t,e)=>`${e?" | ":""}${p(t)}`).join("")}</p>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${l} | All rights reserved</font>
                    </table>
        </table>
    </font>`,q=t=>`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="${U}">
    <title>${G}</title>
    <meta name="description" content="${k}" />
    <meta name="keywords" content="${J}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    
</head>
<body>
    ${t}
    
    <script async nonce="${s}" src="https://www.googletagmanager.com/gtag/js?id=G-5ZY8Y6X2C4"></script>
    <script nonce="${s}">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5ZY8Y6X2C4');
    </script>
    <!-- DOS Theme Code for https://iegik.github.io -->
    <script nonce="${s}">
        (function(m,s,D,O,S,_){
            a();
            O.onclick=r;
            function a(){
                O.innerText=m;
                O.onclick=r;
                _=D.createElement('link');_.async=1;
                _.rel='stylesheet';_.href=S;_.nonce='${s}';
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
    <script nonce="${s}">
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2660383,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    <script nonce="${s}" src="https://browser.sentry-cdn.com/7.54.0/bundle.min.js" integrity="sha384-EmlJLN9Q0yu0/2UUCIYnEM88jpQ7xUhtNI2ZeXb/ci3cwoAoIQl350N4PQPlMbP5" crossorigin="anonymous"></script>
    <script nonce="${s}">
    document.addEventListener('DOMContentLoaded', () => {
      typeof Sentry !== 'undefined' && Sentry.init({
        dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
        release: "1250596@${b}",
        environment: "production",
      });
    });
    </script>
`;g("public/1990/desktop/index.html",q(tt()));g("public/1990/mobile/index.html",q(et()));var nt=`
CACHE MANIFEST
# rev ${b}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`;g("public/manifest.appcache",nt);
