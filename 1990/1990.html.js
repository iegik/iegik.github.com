#!/usr/bin/env node
"use strict";var I=Object.create;var S=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var Y=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty;var Q=(t,e,o,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of U(e))!W.call(t,r)&&r!==o&&S(t,r,{get:()=>e[r],enumerable:!(l=H(e,r))||l.enumerable});return t};var J=(t,e,o)=>(o=t!=null?I(Y(t)):{},Q(e||!t||!t.__esModule?S(o,"default",{value:t,enumerable:!0}):o,t));var h=J(require("fs")),c=(t,e)=>h.writeFileSync(t,e,{encoding:"utf8"}),u=t=>h.readFileSync(t,{encoding:"utf8"});var T=new Date,$=`v3.1.0-${T.toJSON()}`,i=btoa(`${Number(T)}`).slice(10,18);var C=t=>t.replace(/[&<"']/g,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}});var V=u("./src/pages/1990/styles.css"),G=Object.entries({"script-src":[`'nonce-${i}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://js.sentry-cdn.com"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/","https://o171820.ingest.sentry.io/"],"style-src":[`'nonce-${i}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/"]}).reduce((t,[e,o])=>`${t};${e} ${o.join(" ")}`,"default-src 'self'"),p="Art&#363;rs Jansons",y="Full-stack Developer",w="10+ year exp.",Z=`${p} | ${y} [${w}]`,v="Mobile / Web Developer &amp; JavaScript Consultant",X="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",E=()=>`<p>
                        1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#" bgcolor="red">DOS</a>
                    </p>`,F=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,P=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,b=({src:t})=>`<pre><font size=1>${C(u(t))}</font></pre>`,g=t=>`<a ${/^http/.test(t.href)?' rel="noopener noreferrer"':""} href="${t.href}" title="${t.title}">${t.title}</a>`,a=[{image:{ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],D=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],L=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],M="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",s=t=>`<center>${b({src:t.image.ascii})}</center>
                                            <p>${t.description}
                                            <p>
                                                ${t.links.map((e,o)=>`${o?" | ":""}${g(e)}`).join("")}
                                            ${t.comment?`<p><em><font color="gray">${t.comment}</font></em>`:""}`,A=()=>"<p>Time Zone: EEST</p>",_=()=>"<p>Work Time: 10:00 - 20:00</p>",z=()=>"<p>Current Location: Earth</p>",O=({src:t,title:e})=>`<fieldset bgcolor="green">
                                                <legend>${e}</legend>
                                                <code>${b({src:t})}</code>
                                            </fieldset>`,q={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},K={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I' m not a robot"},m=t=>K[t]||t,tt=()=>t=>e=>{let{name:o}=e,{kind:l,type:r}=q[o]||{};if(r==="hidden")return t(e);if(r==="submit")return`<input type="submit" name="${o}" value="${m(o)}" />`;let d=m(o);return l==="vertical"?`<label for="${o}">${d}</label>
                                                        <br>
                                                        <br>
                                                        ${t(e)}`:`<label for="${o}">${d}</label>&nbsp;${t(e)}`},et=({name:t,rows:e,cols:o})=>{let{data:l,type:r,value:d="",required:B}=q[t]||{},x=t,f=B?"required":"";return l?`<select id="${x}" name="${t}" ${f}>
                                                                <option></option>
                                                                ${l.map(j=>`<option value="${j}">${m(j)}</option>`).join(`
`)}
                                                            </select>`:e||o?`<table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <textarea id="${x}" name="${t}" rows="${e}" cols="${o}" ${f}>${d}</textarea>
                                                        </table>`:`<input type="${r||"text"}" name="${t}" value="${d}" ${f} />`},n=tt()(et),N=({name:t})=>`<input id="bot" name="${t}" nonce="${i}" value="This shouldn't be here" /><p><a id="${t}" href="#bot">[_] ${m(t)}</a></p><script nonce="${i}">bot.style.display='none';${t}.addEventListener("click", () => {${t}.innerText=${t}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${t}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,ot=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
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
                                                        ${N({name:"botcheck"})}
                                                        <p align="right">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,nt=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
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
                                                        ${N({name:"botcheck"})}
                                                        <p align="left">
                                                            ${n({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,it=()=>`<font face="${M}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${E()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td>
                                ${b({src:"./src/pages/1990/assets/photo.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${p}
                                <h1><font size="5"><b>${y}</b></font><font size="2">[${w}]</font></h1>
                                <p><em><font color="gray">${v}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${F()}
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
                                    ${ot()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${D.map(t=>`<li><p>${g(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${A()}
                                    ${_()}
                                    ${z()}
                                </font>
                            <td valign="bottom" align="right">
                                
                            <td valign="top" align="right">
                                <table border="0" cellpadding="0" cellspacing="8">
                                    <tr>
                                        <td valign="top">
                                            <font size="2">
                                                ${O({src:"./src/pages/1990/assets/code_of_a_day/git_du.ascii",title:"Code of the day"})}
                                            </font>
                                </table>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${L.map((t,e)=>`${e?" | ":""}${g(t)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${p} | All rights reserved</font>
                    </table>
        </table>
    </font>`,rt=()=>`<font face="${M}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${E()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${b({src:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${p}
                                <h1>
                                    <font size="5"><b>${y}</b></font>
                                    <br>
                                    <font size="2">[${w}]</font></h1>
                                <p><em>${v}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${F()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
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
                                        ${D.map(t=>`<li><p>${g(t.link)}${t.comment?` [${t.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${A()}
                                    ${_()}
                                    ${z()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%">
                                <font size="2">
                                    ${O({src:"./src/pages/1990/assets/code_of_a_day/git_du.ascii",title:"Code of the day"})}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${L.map((t,e)=>`${e?" | ":""}${g(t)}`).join("")}</p>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${p} | All rights reserved</font>
                    </table>
        </table>
    </font>`,k=process.env.IS_VITE?"<!DOCTYPE html>":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`,R=t=>`${k}
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="${G}">
    <title>${Z}</title>
    <meta name="description" content="${v}" />
    <meta name="keywords" content="${X}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    <style nonce="${i}" id="/1990/styles.min.css">${V}</style>
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
`;c("public/index.html",`${k}
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
`);c("public/1990/index.html",`${k}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    <link rel="stylesheet" href="/1990/styles.min.css">
</head>
<body onload='setTimeout((e=>window.location.href.includes(e)||(window.location.href=e))(url.href=window.innerWidth<800?"/1990/mobile/":"/1990/desktop/"),1e3)'>
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
`);c("public/1990/desktop/index.html",R(it()));c("public/1990/mobile/index.html",R(rt()));var at=`
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
`;c("public/manifest.appcache",at);
