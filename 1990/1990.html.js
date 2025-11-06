#!/usr/bin/env node
"use strict";var ie=Object.create;var C=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var se=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var ce=(e,t,o,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of re(t))!ae.call(e,a)&&a!==o&&C(e,a,{get:()=>t[a],enumerable:!(s=ne(t,a))||s.enumerable});return e};var le=(e,t,o)=>(o=e!=null?ie(se(e)):{},ce(t||!e||!e.__esModule?C(o,"default",{value:e,enumerable:!0}):o,e));var y=le(require("fs")),b=(e,t)=>y.writeFileSync(e,t,{encoding:"utf8"}),p=e=>y.readFileSync(e,{encoding:"utf8"});var D=new Date,x=`v3.1.4-${D.toJSON()}`,i=btoa(`${Number(D)}`).slice(10,18);var c=e=>`<a ${/^http/.test(e.href)?' rel="noopener noreferrer"':""} href="${e.href}" title="${e.title}">${e.title}</a>`;var u=e=>e.replace(/[&<"']/g,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}});var w=({src:e,ascii:t})=>`<pre><font size=1><img width="128" height="128" src="${e}" alt="${u(p(t))}" /></font></pre>`;var E=({src:e,title:t})=>`<fieldset bgcolor="green">
                                                <legend>${t}</legend>
                                                <code width="120px">${u(p(e))}</code>
                                            </fieldset>`;var n=({srcDoc:e,src:t,nonce:o,async:s,prefix:a,postfix:l,iife:g,crossorigin:k="",integrity:h})=>{let f=e?p(e):"";return`<script ${s?"async":""} crossorigin="${k}" ${h?`integrity="${h}"`:""} nonce="${o}" ${t?`src="${t}"`:""}>${a||""}${g?`(${f})(${g});`:f}${l||""}</script>`};var M=({nonce:e,gtmId:t})=>`
    ${n({nonce:e,srcDoc:"./src/lib/gtm.js",iife:`window,document,'script','dataLayer','${t}','${e}'`})}
`,L=({nonce:e,gtmId:t})=>`<noscript><iframe nonce="${e}" src="https://www.googletagmanager.com/ns.html?id=${t}"
height="0" width="0"></iframe></noscript>`;var I=({nonce:e,gtmId:t})=>`${n({async:!0,nonce:e,src:`https://www.googletagmanager.com/gtag/js?id=${t}`})}${n({srcDoc:"./src/lib/gtag.js",nonce:e,postfix:`gtag('config', '${t}');
`})}`;var z=({nonce:e,integrity:t,projectId:o,...s})=>`
    ${n({async:!0,nonce:e,src:"https://browser.sentry-cdn.com/8.51.0/bundle.tracing.replay.debug.min.js",integrity:t,crossorigin:"anonymous"})}
    ${n({srcDoc:"./src/lib/sentry.js",nonce:e,iife:JSON.stringify(s)})}
`;var O=({name:e,rows:t,cols:o,data:s,type:a,value:l="",required:g,l10n:k})=>{let h=e,f=g?"required":"";return s?`<select id="${h}" name="${e}" ${f}>
                                                              <option></option>
                                                              ${s.map(F=>`<option value="${F}">${k(F)}</option>`).join(`
`)}
                                                          </select>`:t||o?`<table width="100%">
                                                          <tr>
                                                              <td>
                                                                  <textarea id="${h}" name="${e}" rows="${t}" cols="${o}" ${f}>${l}</textarea>
                                                      </table>`:`<input type="${a||"text"}" id="${h}" name="${e}" value="${l}" ${f} />`};var pe=({nonce:e})=>Object.entries({"script-src":[`'nonce-${e}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://script.hotjar.com","https://js.sentry-cdn.com","'unsafe-inline'"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/","https://static.hotjar.com","https://survey-images.hotjar.com"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","wss://ws.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://o171820.ingest.sentry.io/","https://browser.sentry-cdn.com/"],"style-src":["'self'",`'nonce-${e}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/","https://www.googletagmanager.com/"],"script-src-elem":["'self'",`'nonce-${e}'`,"https://script.hotjar.com"]}).reduce((t,[o,s])=>`${t};${o} ${s.join(" ")}`,"default-src 'self'"),R=({nonce:e})=>`<meta http-equiv="Content-Security-Policy" content="${pe({nonce:e})}">`;var G={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I`m not a robot"};var $=e=>u(G[e]||e);var N={fullName:"Art&#363;rs Jansons",position:"Senior Frontend Developer",experience:"10+ year exp.",priorities:"Security & Performance Focused",description:"Experienced Software Developer with over fifteen years specializing in building high-load, scalable, and secure applications",keywords:"HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",contacts:[{link:{href:"callto:0037126262109",title:"+371 26262109"},comment:"EU"},{link:{href:"mailto:a.jansons@gmail.com",title:"a.jansons@gmail.com"}}],links:[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/u/iegik/fiddles/",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],actions:[{href:"#gdpr",title:"\u{1F36A}"},{href:"#clean",title:"\u{1F5D1}\uFE0F"},{href:"/1980/",title:"Text mode"},{href:"/1990/",title:"DOS mode"},{href:"/next/",title:"Normal mode"}]};var A={"@context":"https://schema.org","@type":"Person",image:"https://xn--artrs-nfb.jansons.id.lv/images/artursjansons.jpg",name:"Art\u016Brs Jansons",jobTitle:"Senior Frontend Developer",url:"https://xn--artrs-nfb.jansons.id.lv/",email:"mailto:a.jansons+web@gmail.com",telephone:"+37126262109",description:"Experienced Software Developer with over fifteen years specializing in building high-load, scalable, and secure applications",worksFor:{"@type":"Organization",name:"Art\u016Brs Jansons",companyRegistration:"05128410715",url:"https://xn--artrs-nfb.jansons.id.lv/"},sameAs:["https://linkedin.com/in/iegik","https://github.com/iegik","https://profile.codersrank.io/user/iegik","https://codepen.io/iegik/","https://jsfiddle.net/u/iegik/fiddles/","https://stackoverflow.com/users/771471/iegik"],knowsAbout:[{"@type":"TechnicalSkill",name:"Web Application Development",description:"Expert in designing, building, and maintaining scalable, accessible, and high-performance web applications using React, TypeScript, and Next.js."},{"@type":"TechnicalSkill",name:"Software Development",description:"Deep understanding of software design principles, modular architecture, and agile development processes."},{"@type":"TechnicalSkill",name:"Search Engine Optimization (SEO)",description:"Advanced knowledge of SEO strategies, structured data, and web performance metrics to improve discoverability and ranking."},{"@type":"TechnicalSkill",name:"Automation Testing",description:"Proficient in writing unit and end-to-end tests using Jest and Cypress to ensure product reliability and maintainability."},{"@type":"TechnicalSkill",name:"Leadership",description:"Experienced in mentoring developers, conducting code reviews, and promoting best engineering practices in cross-functional teams."},{"@type":"TechnicalSkill",name:"Grid Systems & Responsive Design",description:"Advanced use of CSS Grid and Flexbox to create adaptive, pixel-perfect layouts across devices and viewports."},{"@type":"TechnicalSkill",name:"Virtualization Systems",description:"Proficient in Docker, QEMU, VirtualPC, VirtualBox and VMware for isolating environments and optimizing deployment workflows."},{"@type":"TechnicalSkill",name:"Networking",description:"Comprehensive understanding of TCP/IP, HTTP/2+, DNS, and web transport security (TLS/SSL)."},{"@type":"TechnicalSkill",name:"Entrepreneurship",description:"Driven by innovation and self-management; experienced in initiating projects from concept to delivery."},{"@type":"TechnicalSkill",name:"Web Performance Optimization",description:"Specialized in reducing bundle size, improving load time, and optimizing rendering pipelines for large-scale applications."},{"@type":"TechnicalSkill",name:"Open Source Collaboration",description:"Active contributor to open-source projects, focusing on reusable UI components, CI/CD improvements, and community-driven tooling."}]};var H=()=>`<script type="application/ld+json">${JSON.stringify(A)}</script>`;var V=p("./src/pages/1990/styles.css"),{fullName:S,position:v,experience:P,description:T,keywords:he,contacts:q,links:_,actions:fe}=N,be=`${S} | ${v} [${P}]`,W=()=>`<p>
                        ${fe.map((e,t)=>`${t?" | ":""}${/\/1990\//.test(e.href)?e.title:c(e)}`).join("")}
                        <a id="toggleDosStyle" href="#exit" bgcolor="red">DOS</a>
                    </p>`,J=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,U=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,d=[{image:{src:"/images/categories/website-thumb.png",ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{src:"/images/categories/mobile-thumb.png",ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{src:"/images/categories/clock-thumb.png",ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{src:"/images/categories/wordpress-thumb.png",ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],ue="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",m=e=>`<center>${w(e.image)}</center>
                                            <p>${e.description}
                                            <p>
                                                ${e.links.map((t,o)=>`${o?" | ":""}${c(t)}`).join("")}
                                            ${e.comment?`<p><em><font color="gray">${e.comment}</font></em>`:""}`,Q=()=>"<p>Time Zone: EEST</p>",Y=()=>"<p>Work Time: 10:00 - 20:00</p>",Z=()=>"<p>Current Location: Earth</p>",B={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},$e=()=>e=>t=>{let{name:o}=t,{kind:s,type:a}=B[o]||{},l={...t,...B[o]||{},l10n:$};if(a==="hidden")return e(l);if(a==="submit")return`<input type="submit" name="${o}" value="${$(o)}" />`;let g=$(o);return s==="vertical"?`<label for="${o}">${g}</label>
                                                        <br>
                                                        ${e(l)}`:`<label for="${o}">${g}</label>&nbsp;${e(l)}`},r=$e()(O),K=({name:e})=>`<input id="bot" name="${e}" nonce="${i}" value="Type 'true' here" /><a id="${e}" href="#bot"></a><script nonce="${i}">bot.style.display='none';${e}.innerText='[_] ${$(e)}';${e}.addEventListener("click", () => {${e}.innerText=${e}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${e}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,ye=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${r({name:"email"})}
                                                        ${r({name:"to"})}
                                                        ${r({name:"access_key"})}
                                                        ${r({name:"redirect"})}
                                                    <td width="100%">
                                                        ${r({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        <br>
                                                        ${r({name:"message",rows:5,cols:44})}
                                                        ${K({name:"botcheck"})}
                                                        <p align="right">
                                                            ${r({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,X=()=>E({src:"./src/pages/1990/assets/code_of_a_day/whitelist.sh",title:"Code of the day"}),we=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${r({name:"email"})}
                                                        ${r({name:"to"})}
                                                        ${r({name:"access_key"})}
                                                        ${r({name:"redirect"})}
                                                </tr>
                                                <tr>
                                                    <td width="100%">
                                                        ${r({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        ${r({name:"message",rows:5,cols:36})}
                                                        ${K({name:"botcheck"})}
                                                        <p align="left">
                                                            ${r({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,Se=()=>`
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                ${w({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/me.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${S}
                                <h1><font size="5"><b>${v}</b></font><font size="2">[${P}]</font></h1>
                                <p><em><font color="gray">${T}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${J()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${U()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                <p>${_.map((e,t)=>`${t?" | ":""}${c(e)}`).join("")}</p>
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
                                <noscript>${c({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${ye()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${q.map(e=>`<li><p>${c(e.link)}${e.comment?` [${e.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${Q()}
                                    ${Y()}
                                    ${Z()}
                                </font>
                            <td valign="bottom" align="right">
                                
                            <td valign="top" align="right">
                                <table border="0" cellpadding="0" cellspacing="8">
                                    <tr>
                                        <td valign="top">
                                            <font size="2">
                                                ${X()}
                                            </font>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td align="center">
                                
                    </table>
                    `,ke=()=>`
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${w({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${S}
                                <h1>
                                    <font size="5"><b>${v}</b></font>
                                    <br>
                                    <font size="2">[${P}]</font></h1>
                                <p><em>${T}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${J()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
                                        ${U()}
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
                                <noscript>${c({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${we()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${q.map(e=>`<li><p>${c(e.link)}${e.comment?` [${e.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${Q()}
                                    ${Y()}
                                    ${Z()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%">
                                <font size="2">
                                    ${X()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                
                    </table>
                    `,ee=()=>`<p>${_.map((e,t)=>`${t?" | ":""}${c(e)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${S} | All rights reserved</font>
                                    `,te=process.env.IS_VITE==="true"?"<!DOCTYPE html>":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`,oe=e=>`<font face="${ue}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${e[0]}
                    <hr>
                    ${e[1]}
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                ${e[2]}
                    </table>
        </table>
    </font>
`,j=e=>`${te}
<html lang="en">
<head>
    ${R({nonce:i})}
    <title>${be}</title>
    <meta name="description" content="${T}" />
    <meta name="keywords" content="${he}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    
    <style nonce="${i}" id="/1990/styles.min.css">${V}</style>
    
    ${n({srcDoc:"./src/lib/dialogs.dos.js",nonce:i})}
    ${n({srcDoc:"./src/lib/gdpr.js",nonce:i})}
    ${n({srcDoc:"./src/lib/sw.js",nonce:i})}
    ${n({srcDoc:"./src/lib/console-game.js",nonce:i})}
    ${n({srcDoc:"./src/lib/guard.js",nonce:i})}
    ${process.env.IS_VITE==="true"?"":M({nonce:i,gtmId:"GTM-MBG56M"})}
    
    
    ${H()}
</head>
<body>
    
    ${process.env.IS_VITE==="true"?"":I({nonce:i,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${process.env.IS_VITE==="true"?"":L({nonce:i,gtmId:"GTM-MBG56M"})}
    ${e}
    
    ${n({srcDoc:"./src/lib/dos-theme.js",iife:'document, toggleDosStyle, "/1990/styles.min.css"',nonce:i,prefix:`const nonce = '${i}';
`})}
    ${n({srcDoc:"./src/lib/my-portfolio.js",nonce:i})}
    ${z({nonce:i,projectId:"179618f1f04d4d9dac08acc750d5736c",dsn:"https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.us.sentry.io/1250596",tracesSampleRate:1,replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1,release:`1250596@${x}`,environment:"production",integrity:"sha384-qnTptFNLKIQmPtZ6hk6eVXm1vZjnCzyt/KrWLwvzn4wI+ehVnDRWPgkfwHu9fc6o"})}
    ${n({srcDoc:"./src/lib/highlighter.js",nonce:i})}
`;b("public/1990/index.html",`${te}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    
    <style nonce="${i}" id="/1990/styles.min.css">${V}</style>
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
`);var xe=()=>"<my-portfolio></my-portfolio>";b("public/1990/desktop/index.html",j(oe([W(),Se(),ee()])));b("public/1990/mobile/index.html",j(oe([W(),ke(),ee()])));b("public/portfolio/index.html",j(xe()));var ve=`
CACHE MANIFEST
# rev ${x}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html
text/index.html
text/minimal.css
text/monochrome.css
text/dos.css

NETWORK:
*
`;b("public/manifest.appcache",ve);
