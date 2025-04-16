"use strict";var T=Object.create;var g=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var M=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of k(t))!D.call(e,s)&&s!==r&&g(e,s,{get:()=>t[s],enumerable:!(n=x(t,s))||n.enumerable});return e};var G=(e,t,r)=>(r=e!=null?T(v(e)):{},M(t||!e||!e.__esModule?g(r,"default",{value:e,enumerable:!0}):r,e));var c=G(require("fs")),f=(e,t)=>c.writeFileSync(e,t,{encoding:"utf8"}),a=e=>c.readFileSync(e,{encoding:"utf8"});var h=new Date,A=`v3.1.4-${h.toJSON()}`,i=btoa(`${Number(h)}`).slice(10,18);var o=({srcDoc:e,src:t,nonce:r,async:n,prefix:s,postfix:w,iife:p,crossorigin:b="",integrity:m})=>{let d=e?a(e):"";return`<script ${n?"async":""} crossorigin="${b}" ${m?`integrity="${m}"`:""} nonce="${r}" ${t?`src="${t}"`:""}>${s||""}${p?`(${d})(${p});`:d}${w||""}</script>`};var $=({nonce:e,gtmId:t})=>`
    ${o({nonce:e,srcDoc:"./src/lib/gtm.js",iife:`window,document,'script','dataLayer','${t}','${e}'`})}
`,S=({nonce:e,gtmId:t})=>`<noscript><iframe nonce="${e}" src="https://www.googletagmanager.com/ns.html?id=${t}"
height="0" width="0"></iframe></noscript>`;var u=({nonce:e,gtmId:t})=>`
    ${o({async:!0,nonce:e,src:`https://www.googletagmanager.com/gtag/js?id=${t}`})}
    ${o({srcDoc:"./src/lib/gtag.js",nonce:e,postfix:`gtag('config', '${t}');
`})}
`;var l=e=>`<a ${/^http/.test(e.href)?' rel="noopener noreferrer"':""} href="${e.href}" title="${e.title}" bgcolor="${e.bgcolor}" id="${e.id}">${e.title}</a>`;var y={fullName:"Art&#363;rs Jansons",position:"Senior Frontend Developer",experience:"10+ year exp.",priorities:"Security & Performance Focused",description:"Experienced Software Developer with over fifteen years specializing in building high-load, scalable, and secure applications",keywords:"HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",contacts:[{link:{href:"callto:0037126262109",title:"+371 26262109"},comment:"EU"},{link:{href:"mailto:a.jansons@gmail.com",title:"a.jansons@gmail.com"}}],links:[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],actions:[{href:"#gdpr",title:"\u{1F36A}"},{href:"#clean",title:"\u{1F5D1}\uFE0F"},{href:"/1980/",title:"Text mode"},{href:"/1990/",title:"DOS mode"},{href:"/next/",title:"Normal mode"}]};var I=a("./src/pages/1980/styles.css"),pe=Object.entries({"script-src":[`'nonce-${i}'`,"'strict-dynamic'"],"connect-src":["https://github.com/"],"style-src":[`'nonce-${i}'`],"object-src":["'none'"],"base-uri":["'none'"]}).reduce((e,[t,r])=>`${e};${t} ${r.join(" ")}`,"default-src 'self'"),{fullName:N,position:C,experience:de,description:E,keywords:F,priorities:L,contacts:ge,links:j,actions:B}=y,O=`${C} | ${L}`,H=()=>`${B.map((e,t)=>`${t?" | ":""}${/\/1980\//.test(e.href)?e.title:l(e)}`).join("")}`,V=`A\u{1D5B1}\u{1D5B3}\u{1D5A7}\u{1D5B4}\u{1D5B1} J\u{1D5A0}\u{1D5AD}\u{1D5B2}\u{1D5AE}\u{1D5AD}
\u{1D61A}\u{1D626}\u{1D62F}\u{1D62A}\u{1D630}\u{1D633} \u{1D60D}\u{1D633}\u{1D630}\u{1D62F}\u{1D635}\u{1D626}\u{1D62F}\u{1D625} \u{1D60B}\u{1D626}\u{1D637}\u{1D626}\u{1D62D}\u{1D630}\u{1D631}\u{1D626}\u{1D633} | \u{1D61A}\u{1D626}\u{1D624}\u{1D636}\u{1D633}\u{1D62A}\u{1D635}\u{1D63A} & \u{1D617}\u{1D626}\u{1D633}\u{1D627}\u{1D630}\u{1D633}\u{1D62E}\u{1D622}\u{1D62F}\u{1D624}\u{1D626} \u{1D60D}\u{1D630}\u{1D624}\u{1D636}\u{1D634}\u{1D626}\u{1D625}

Experienced Software Developer with over fifteen years specializing in building high-load, scalable, and secure applications. My expertise spans modern frontend frameworks like \u{1D674}\u{1D6A1}\u{1D699}\u{1D698}, and \u{1D67D}\u{1D68E}\u{1D6A1}\u{1D69D}\u{1D679}\u{1D682}, as well as backend technologies such as \u{1D683}\u{1D6A2}\u{1D699}\u{1D68E}\u{1D682}\u{1D68C}\u{1D69B}\u{1D692}\u{1D699}\u{1D69D} and \u{1D673}\u{1D68E}\u{1D697}\u{1D698}.

\u{1D40A}\u{1D41E}\u{1D432} \u{1D42D}\u{1D41E}\u{1D41C}\u{1D421}\u{1D427}\u{1D422}\u{1D41C}\u{1D41A}\u{1D425} \u{1D42C}\u{1D424}\u{1D422}\u{1D425}\u{1D425}\u{1D42C} \u{1D422}\u{1D427}\u{1D41C}\u{1D425}\u{1D42E}\u{1D41D}\u{1D41E}:

 \u30FB Frontend: React/Next, React Native/Expo, Angular, Vue/Nuxt, CSS/HTML (Styled, CSS modules, BEM, 12/24GS, UI kits, etc.)
 \u30FB Backend: Node, Deno, Express, Nest, GraphQL, REST, Serverless
 \u30FB DevOps: Virtualization (Docker, K8s, VMware, Qemu, etc.), CI/CD (GitLab, GitHub, DevOps, Travis, Heroku, etc.), CLI Tools (Vercel, Bash, Webpack, Gradle, Makefile, msbuild, etc.)
 \u30FB Databases: MySQL, Postgres, Sqlite, MongoDB
 \u30FB Testing: Jest, Cypress (unit & e2e)

    \u{1D610} \u{1D635}\u{1D629}\u{1D633}\u{1D62A}\u{1D637}\u{1D626} \u{1D630}\u{1D62F} \u{1D634}\u{1D630}\u{1D62D}\u{1D637}\u{1D62A}\u{1D62F}\u{1D628} \u{1D624}\u{1D630}\u{1D62E}\u{1D631}\u{1D62D}\u{1D626}\u{1D639} \u{1D631}\u{1D633}\u{1D630}\u{1D623}\u{1D62D}\u{1D626}\u{1D62E}\u{1D634}, \u{1D62E}\u{1D626}\u{1D62F}\u{1D635}\u{1D630}\u{1D633}\u{1D62A}\u{1D62F}\u{1D628} \u{1D635}\u{1D626}\u{1D622}\u{1D62E}\u{1D634}, \u{1D622}\u{1D62F}\u{1D625} \u{1D626}\u{1D639}\u{1D631}\u{1D62D}\u{1D630}\u{1D633}\u{1D62A}\u{1D62F}\u{1D628} \u{1D626}\u{1D62E}\u{1D626}\u{1D633}\u{1D628}\u{1D62A}\u{1D62F}\u{1D628} \u{1D635}\u{1D626}\u{1D624}\u{1D629}\u{1D62F}\u{1D630}\u{1D62D}\u{1D630}\u{1D628}\u{1D62A}\u{1D626}\u{1D634} \u{1D62D}\u{1D62A}\u{1D62C}\u{1D626} \u{1D624}\u{1D63A}\u{1D623}\u{1D626}\u{1D633}\u{1D634}\u{1D626}\u{1D624}\u{1D636}\u{1D633}\u{1D62A}\u{1D635}\u{1D63A} \u{1D622}\u{1D62F}\u{1D625} \u{1D623}\u{1D62D}\u{1D630}\u{1D624}\u{1D62C}\u{1D624}\u{1D629}\u{1D622}\u{1D62A}\u{1D62F}. \u{1D613}\u{1D626}\u{1D635}\u2019\u{1D634} \u{1D624}\u{1D630}\u{1D62F}\u{1D62F}\u{1D626}\u{1D624}\u{1D635} \u{1D635}\u{1D630} \u{1D625}\u{1D62A}\u{1D634}\u{1D624}\u{1D636}\u{1D634}\u{1D634} \u{1D629}\u{1D630}\u{1D638} \u{1D610} \u{1D624}\u{1D622}\u{1D62F} \u{1D623}\u{1D633}\u{1D62A}\u{1D62F}\u{1D628} \u{1D637}\u{1D622}\u{1D62D}\u{1D636}\u{1D626} \u{1D635}\u{1D630} \u{1D63A}\u{1D630}\u{1D636}\u{1D633} \u{1D635}\u{1D626}\u{1D622}\u{1D62E}!

\u{1D402}\u{1D428}\u{1D427}\u{1D42D}\u{1D41A}\u{1D41C}\u{1D42D}\u{1D42C}:

\u2070\u2070 \u23D0  \u{1D672}\u{1D69E}\u{1D69B}\u{1D69B}\u{1D68E}\u{1D697}\u{1D69D} \u{1D67B}\u{1D698}\u{1D68C}\u{1D68A}\u{1D69D}\u{1D692}\u{1D698}\u{1D697}: \u{1D674}\u{1D68A}\u{1D69B}\u{1D69D}\u{1D691}
\u2070\xB9 \u23D0  \u{1D683}\u{1D692}\u{1D696}\u{1D68E} \u{1D689}\u{1D698}\u{1D697}\u{1D68E}: \u{1D674}\u{1D674}\u{1D682}\u{1D683}
\u2070\xB2 \u23D0  \u{1D686}\u{1D698}\u{1D69B}\u{1D694} \u{1D683}\u{1D692}\u{1D696}\u{1D68E}: 10:00 \u2013 20:00
\u2070\xB3 \u23D0  \u{1D674}\u{1D696}\u{1D68A}\u{1D692}\u{1D695}: <a href="mailto:a.jansons+web@gmail.com">\u{1D68A}.\u{1D693}\u{1D68A}\u{1D697}\u{1D69C}\u{1D698}\u{1D697}\u{1D69C}@\u{1D690}\u{1D696}\u{1D68A}\u{1D692}\u{1D695}.\u{1D68C}\u{1D698}\u{1D696}</a>
\u2070\u2074 \u23D0  \u{1D67F}\u{1D691}\u{1D698}\u{1D697}\u{1D68E}: <a href="tel:0037126262109">+371 26262109</a>`,J=()=>`${j.map((e,t)=>`${t?" | ":""}${l(e)}`).join("")}`,R=process.env.IS_VITE==="true"?"<!DOCTYPE html>":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`;f("public/1980/index.html",`${R}
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="google" content="notranslate">
<meta name="description" content="${E}">
<meta name="author" content="${N}">
<meta name="keywords" content="${F}">
<title>${O}</title>
<style nonce="${i}" id="/1980/styles.min.css">${I}</style>
${process.env.IS_VITE==="true"?"":$({nonce:i,gtmId:"GTM-MBG56M"})}    ${o({srcDoc:"./src/lib/gdpr.js",nonce:i})}${o({srcDoc:"./src/lib/sw.js",nonce:i})}
</head>
<body id="root">${process.env.IS_VITE==="true"?"":u({nonce:i,gtmId:"G-5ZY8Y6X2C4"})}${process.env.IS_VITE==="true"?"":S({nonce:i,gtmId:"GTM-MBG56M"})}<nav>${H()}</nav><main>${V}</main><nav>${J()}</nav></body>`);
