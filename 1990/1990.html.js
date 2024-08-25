#!/usr/bin/env node
"use strict";var H=Object.create;var x=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var Q=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty;var U=(t,e,n,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of I(e))!W.call(t,r)&&r!==n&&x(t,r,{get:()=>e[r],enumerable:!(c=R(e,r))||c.enumerable});return t};var G=(t,e,n)=>(n=t!=null?H(Q(t)):{},U(e||!t||!t.__esModule?x(n,"default",{value:t,enumerable:!0}):n,t));var g=G(require("fs")),m=(t,e)=>g.writeFileSync(t,e,{encoding:"utf8"}),f=t=>g.readFileSync(t,{encoding:"utf8"});var S=new Date,$=`v3.1.0-${S.toJSON()}`,i=btoa(`${Number(S)}`).slice(10,18);var T=t=>t.replace(/[&<"']/g,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}});var J=f("./src/pages/1990/styles.css"),Y=Object.entries({"script-src":[`'nonce-${i}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://js.sentry-cdn.com"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/","https://o171820.ingest.sentry.io/"],"style-src":[`'nonce-${i}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/"]}).reduce((t,[e,n])=>`${t};${e} ${n.join(" ")}`,"default-src 'self'"),d="Art&#363;rs Jansons",v="Full-stack Developer",y="10+ year exp.",Z=`${d} | ${v} [${y}]`,k="Mobile / Web Developer &amp; JavaScript Consultant",X="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",C=()=>`<p>
                        1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#" bgcolor="red">DOS</a>
                    </p>`,E=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,F=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,b=({src:t})=>`<pre><font size=1>${T(f(t))}</font></pre>`,p=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`,a=[{image:{ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],P=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],A=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],D="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",s=t=>`<center>${b({src:t.image.ascii})}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,n)=>`${n?" | ":""}${p(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,L=()=>"<p>Time Zone: EEST</p>",M=()=>"<p>Work Time: 10:00 - 20:00</p>",N=()=>"<p>Current Location: Earth</p>",_=({src:t,title:e})=>`<div bgcolor="green">
                                            <fieldset>
                                                <legend>${e}</legend>
                                                <code>${b({src:t})}</code>
                                            </fieldset>
                                        </div>`,O={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},V={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I' m not a robot"},h=t=>V[t]||t,K=()=>t=>e=>{let{name:n}=e,{kind:c,type:r}=O[n]||{};if(r==="hidden")return t(e);if(r==="submit")return`<input type="submit" name="${n}" value="${h(n)}" />`;let l=h(n);return c==="vertical"?`<label for="${n}">${l}</label>
                                                        <br>
                                                        <br>
                                                        ${t(e)}`:`<label for="${n}">${l}</label>&nbsp;${t(e)}`},tt=({name:t,rows:e,cols:n})=>{let{data:c,type:r,value:l="",required:B}=O[t]||{},w=t,u=B?"required":"";return c?`<select id="${w}" name="${t}" ${u}>
                                                                <option></option>
                                                                ${c.map(j=>`<option value="${j}">${h(j)}</option>`).join(`
`)}
                                                            </select>`:e||n?`<table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <textarea id="${w}" name="${t}" rows="${e}" cols="${n}" ${u}>${l}</textarea>
                                                        </table>`:`<input type="${r||"text"}" name="${t}" value="${l}" ${u} />`},o=K()(tt),q=({name:t})=>`<input id="bot" name="${t}" nonce="${i}" value="This shouldn't be here" /><p><a id="${t}" href="#bot">[_] ${h(t)}</a></p><script nonce="${i}">bot.style.display='none';${t}.addEventListener("click", () => {${t}.innerText=${t}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${t}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,et=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <div bgcolor="gray">
                                            <fieldset>
                                                <legend>Feedback</legend>
                                                <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                    <tr>
                                                        <td>
                                                            ${o({name:"email"})}
                                                            ${o({name:"to"})}
                                                            ${o({name:"access_key"})}
                                                            ${o({name:"redirect"})}
                                                        <td width="100%">
                                                            ${o({name:"subject"})}
                                                    <tr>
                                                        <td colspan="2">
                                                            <br>
                                                            ${o({name:"message",rows:5,cols:44})}
                                                            ${q({name:"botcheck"})}
                                                            <p align="right">
                                                                ${o({name:"send"})}
                                                </table>
                                            </fieldset>
                                        </div>
                                    </form>`,nt=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset>
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${o({name:"email"})}
                                                        ${o({name:"to"})}
                                                        ${o({name:"access_key"})}
                                                        ${o({name:"redirect"})}
                                                </tr>
                                                <tr>
                                                    <td width="100%">
                                                        ${o({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        ${o({name:"message",rows:5,cols:36})}
                                                        ${q({name:"botcheck"})}
                                                        <p align="left">
                                                            ${o({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,ot=()=>`<font face="${D}" size="3">
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
                                <p>${d}
                                <h1><font size="5"><b>${v}</b></font><font size="2">[${y}]</font></h1>
                                <p><em><font color="gray">${k}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${E()}
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
                                            ${s(a[0])}
                                        <td valign="top">
                                            ${s(a[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${s(a[2])}
                                        <td valign="top">
                                            ${s(a[3])}
                                    </tr>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${et()}
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
                                    <br>
                                    ${L()}
                                    ${M()}
                                    ${N()}
                                </font>
                            <td valign="bottom" align="right">
                                
                            <td valign="top" align="right">
                                <table border="0" cellpadding="0" cellspacing="8">
                                    <tr>
                                        <td valign="top">
                                            <font size="2">
                                                ${_({src:"./src/pages/1990/assets/slotmachine.ascii",title:"Code of the day"})}
                                            </font>
                                </table>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${A.map((t,e)=>`${e?" | ":""}${p(t)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${d} | All rights reserved</font>
                    </table>
        </table>
    </font>`,it=()=>`<font face="${D}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${C()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${b({src:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${d}
                                <h1>
                                    <font size="5"><b>${v}</b></font>
                                    <br>
                                    <font size="2">[${y}]</font></h1>
                                <p><em>${k}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${E()}
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
                                            ${s(a[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${s(a[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${s(a[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${s(a[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${nt()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${P.map(t=>`<li><p>${p(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${L()}
                                    ${M()}
                                    ${N()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%" align="right">
                                <font size="2">
                                    ${_({src:"./src/pages/1990/assets/slotmachine.ascii",title:"Code of the day"})}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${A.map((t,e)=>`${e?" | ":""}${p(t)}`).join("")}</p>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${d} | All rights reserved</font>
                    </table>
        </table>
    </font>`,z=t=>`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="${Y}">
    <title>${Z}</title>
    <meta name="description" content="${k}" />
    <meta name="keywords" content="${X}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    <style nonce="${i}" id="/1990/styles.min.css">${J}</style>
</head>
<body>
    ${t}
    
    <script async nonce="${i}" src="https://www.googletagmanager.com/gtag/js?id=G-5ZY8Y6X2C4"></script>
    <script nonce="${i}">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5ZY8Y6X2C4');
    </script>
    <!-- DOS Theme Code for https://iegik.github.io -->
    <script nonce="${i}">
        (function (D, O, S, theme = "", _) {
        _ = document.getElementById(S);
        theme = _.innerHTML;
        O.onclick = remove;
        function add() {
            O.innerText = "EXIT";
            O.onclick = remove;
            _ = D.createElement("style");
            _.id = S;
            _.innerHTML = theme;
            _.setAttribute("nonce", "${i}");
            D.head.appendChild(_);
            [].forEach.call(
                document.getElementsByTagName("img"),
                toggleAttr("src", "data-src")
            );
        }
        const reDataAttr = /^data-/;
        [].forEach.call(
            document.getElementsByTagName("img"),
            toggleAttr("src", "data-src")
        );
        function remove() {
            O.innerText = "DOS";
            O.onclick = add;
            _.remove();
            [].forEach.call(
            document.getElementsByTagName("img"),
            toggleAttr("data-src", "src")
            );
        }
        function toggleAttr(a, b) {
            return function (el) {
                setAttribute(el, b, getAttribute(el, a) || "");
                removeAttribute(el, a);
            };
        }
        function getAttribute(el, attr) {
            if (reDataAttr.test(attr)) {
                return el.dataset[attr.replace("data-", "")];
            } else {
                return el.getAttribute(attr);
            }
        }
        function setAttribute(el, attr, value) {
            if (reDataAttr.test(attr)) {
                el.dataset[attr.replace("data-", "")] = value;
            } else {
                el.setAttribute(attr, value);
            }
        }
        function removeAttribute(el, attr) {
            if (reDataAttr.test(attr)) {
                delete el.dataset[attr.replace("data-", "")];
            } else {
                el.removeAttribute(attr);
            }
        }
        // @ts-ignore
        })(document, toggleDosStyle, "/1990/styles.min.css");
    </script>
    <!-- Hotjar Tracking Code for https://iegik.github.io -->
    <script nonce="${i}">
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2660383,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    <script nonce="${i}" src="https://browser.sentry-cdn.com/7.54.0/bundle.min.js" integrity="sha384-EmlJLN9Q0yu0/2UUCIYnEM88jpQ7xUhtNI2ZeXb/ci3cwoAoIQl350N4PQPlMbP5" crossorigin="anonymous"></script>
    <script nonce="${i}">
    document.addEventListener('DOMContentLoaded', () => {
      typeof Sentry !== 'undefined' && Sentry.init({
        dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
        release: "1250596@${$}",
        environment: "production",
      });
    });
    </script>
`;m("public/1990/desktop/index.html",z(ot()));m("public/1990/mobile/index.html",z(it()));var rt=`
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
`;m("public/manifest.appcache",rt);
