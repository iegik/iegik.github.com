#!/usr/bin/env node
"use strict";var Re=Object.create;var I=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var De=Object.getOwnPropertyNames;var Oe=Object.getPrototypeOf,Ae=Object.prototype.hasOwnProperty;var _e=(e,t)=>{for(var o in t)I(e,o,{get:t[o],enumerable:!0})},Ne=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of De(t))!Ae.call(e,n)&&n!==o&&I(e,n,{get:()=>t[n],enumerable:!(r=Ie(t,n))||r.enumerable});return e};var Ge=(e,t,o)=>(o=e!=null?Re(Oe(e)):{},Ne(t||!e||!e.__esModule?I(o,"default",{value:e,enumerable:!0}):o,e));var F=Ge(require("fs")),y=(e,t)=>F.writeFileSync(e,t,{encoding:"utf8"}),u=e=>F.readFileSync(e,{encoding:"utf8"});var te=new Date,D=`v3.1.0-${te.toJSON()}`,s=btoa(`${Number(te)}`).slice(10,18);var g=e=>`<a ${/^http/.test(e.href)?' rel="noopener noreferrer"':""} href="${e.href}" title="${e.title}">${e.title}</a>`;var h=e=>e.replace(/[&<"']/g,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}});var M=({src:e,ascii:t})=>`<pre><font size=1><img width="128" height="128" src="${e}" alt="${h(u(t))}" /></font></pre>`;var O=({src:e,title:t})=>`<fieldset bgcolor="green">
                                                <legend>${t}</legend>
                                                <code width="120px">${h(u(e))}</code>
                                            </fieldset>`;var a=({srcDoc:e,src:t,nonce:o,async:r,prefix:n,postfix:i,iife:c,crossorigin:l="",integrity:p})=>{let m=e?u(e):"";return`<script ${r?"async":""} crossorigin="${l}" ${p?`integrity="${p}"`:""} nonce="${o}" ${t?`src="${t}"`:""}>${n||""}${c?`(${m})(${c});`:m}${i||""}</script>`};var A=({nonce:e,gtmId:t})=>`
    ${a({nonce:e,srcDoc:"./src/lib/gtm.js",iife:`window,document,'script','dataLayer','${t}','${e}'`})}
`,_=({nonce:e,gtmId:t})=>`<noscript><iframe nonce="${e}" src="https://www.googletagmanager.com/ns.html?id=${t}"
height="0" width="0"></iframe></noscript>`;var N=({nonce:e,gtmId:t})=>`
    ${a({async:!0,nonce:e,src:`https://www.googletagmanager.com/gtag/js?id=${t}`})}
    ${a({srcDoc:"./src/lib/gtag.js",nonce:e,postfix:`gtag('config', '${t}');
`})}
`;var oe=({nonce:e,integrity:t,projectId:o,...r})=>`
    ${a({async:!0,nonce:e,src:"https://browser.sentry-cdn.com/8.29.0/bundle.tracing.min.js",integrity:t})}
    ${a({srcDoc:"./src/lib/sentry.js",nonce:e,iife:JSON.stringify(r)})}
`;var re=({name:e,rows:t,cols:o,data:r,type:n,value:i="",required:c,l10n:l})=>{let p=e,m=c?"required":"";return r?`<select id="${p}" name="${e}" ${m}>
                                                              <option></option>
                                                              ${r.map(f=>`<option value="${f}">${l(f)}</option>`).join(`
`)}
                                                          </select>`:t||o?`<table width="100%">
                                                          <tr>
                                                              <td>
                                                                  <textarea id="${p}" name="${e}" rows="${t}" cols="${o}" ${m}>${i}</textarea>
                                                      </table>`:`<input type="${n||"text"}" id="${p}" name="${e}" value="${i}" ${m} />`};var Be=({nonce:e})=>Object.entries({"script-src":[`'nonce-${e}'`,"'strict-dynamic'","https://www.google-analytics.com","https://ssl.google-analytics.com","https://static.hotjar.com","https://script.hotjar.com","https://js.sentry-cdn.com","'unsafe-inline'"],"img-src":["'self'","https://www.google-analytics.com","https://avatars.githubusercontent.com/","https://www.googletagmanager.com/","https://static.hotjar.com","https://survey-images.hotjar.com"],"connect-src":["'self'","https://www.google-analytics.com","https://region1.google-analytics.com","https://in.hotjar.com","wss://ws.hotjar.com","https://static.hotjar.com","https://content.hotjar.io","https://github.com/login/oauth/access_token","https://api.github.com/graphql","https://api.github.com/user","https://o171820.ingest.sentry.io/"],"style-src":["'self'",`'nonce-${e}'`,"https://static.hotjar.com"],"object-src":["'none'"],"base-uri":["'none'"],"frame-src":["https://vars.hotjar.com/","https://www.googletagmanager.com/"],"script-src-elem":["'self'",`'nonce-${e}'`,"https://script.hotjar.com"]}).reduce((t,[o,r])=>`${t};${o} ${r.join(" ")}`,"default-src 'self'"),ne=({nonce:e})=>`<meta http-equiv="Content-Security-Policy" content="${Be({nonce:e})}">`;var k={};_e(k,{Action:()=>de,Icon:()=>j,SlotMachine:()=>fe,View:()=>pe});var ie="Access token not provided",se="Page not found";var x=process.env.NODE_ENV==="production",ce=e=>{if(console.error(e),!(typeof window>"u")){if(x&&typeof Sentry<"u"&&Sentry.captureException(e),x&&typeof window.dataLayer<"u"&&window.dataLayer.push({event:"issue",message:e.message,row:e.lineNumber||null,source:e.fileName||null,stack:e.stack}),e.message===se){window.location.href="/404";return}if(e.message===ie){window.location.href="/403";return}}},b=x?()=>{}:(...e)=>{console.debug(...e)};var T=x?()=>{}:(...e)=>{console.info(...e)},G=x?()=>{}:(...e)=>{console.log(...e)};var B=class{constructor(){this.id=null}toString(){let t=btoa(`${Math.ceil(Math.random()*1e13)+ +new Date}`).slice(10,18);return this.id=this.id||`ref-${t}`}get current(){return typeof window>"u"||typeof document>"u"?null:document.querySelector(`[ref=${this.id}]`)}},v=()=>new B,H=(e=void 0)=>typeof history>"u"?[]:[e||history.state||{},(t,o,r)=>history.pushState({...history.state,...t},o||"",r||location.href)],He={attributes:!0,childList:!0,subtree:!0},C=(e,t,o={component:"View"})=>r=>{let[n,i]=H(),{component:c="View"}=o;if(b("render",{eventType:t,component:c,state:n,props:o,event:r,typeof:typeof r,isArray:Array.isArray(r)}),r instanceof Error){ce(r);return}let l=k[c||"View"];if(Array.isArray(r)){for(let p of r)C(e,t,o)(p);return}if(r instanceof MutationRecord&&r.type==="childList"){let p=[];G("A child node has been added or removed.",{target:r.target});return}if(r instanceof MutationRecord&&r.type==="attributes"){G(`The ${r.attributeName} attribute was modified.`,{event:r}),e.current&&(e.current.innerHTML=l(n));return}if(!l)throw Error(`Component ${c} not found`);e?.current&&(e.current.innerHTML=l(n))},ze=async(e,t)=>{b("attachEvents",{ref:e,props:t});let o=new MutationObserver(C(e,"render",t));e.current&&o.observe(e.current,He),navigation?.addEventListener("navigate",C(e,"navigate",t)),e?.current?.addEventListener("DOMRemoved",()=>{globalThis.hasOwnProperty("navigation")&&(T("DOMRemoved"),navigation?.removeEventListener("navigate",C(e,"navigate",t)),o.disconnect())})},Ve=async(e,t)=>{b("runServices",{ref:e,props:t});let{services:o}=t,[r,n]=H();if(o){for(let i of o){let c=window.servicesMap?.[i];if(!c)throw Error(`Service ${i} not found`);await c(e)}n({services:null})}},qe=({children:e})=>Array.isArray(e)?e.map(t=>t instanceof Object?le(t??{}):`${t}`).join?.(""):h(`${e}`),le=(e={})=>{b({props:e});let{tag:t="div",className:o="",children:r=[],services:n=[],component:i="View",...c}=e,l=v(),[p,m]=H();setTimeout(async()=>{l.current&&(n?.length&&ze(l,e),n?.length&&Ve(l,e))});let f=qe({children:r}),ee=Object.entries(c)?.reduce?.((Ee,[je,Le=""])=>`${Ee} ${je}="${Le}"`,"");return b("Rendering",{content:f,restProps:ee}),`
    <${t} class="${o}" ref="${l}" ${ee}>
      ${f}
    </${t}>
  `},pe=le;var Ue=(e={})=>{let{className:t="",children:o,tag:r="button",onClick:n,type:i}=e,c=v();return setTimeout(()=>{n&&c.current?.addEventListener("click",n)}),`
      <${r} class="${t}" ref="${c}" type="${i}">
        ${E({children:o})}
      </${r}>
    `},de=Ue;var me=new Map;var Je=({className:e,name:t}={name:"unknown"})=>{let o=v();return setTimeout(()=>{if(typeof window>"u"||typeof document>"u")return;let r=document.getElementById(`sprite-${t}`)?.getAttribute("viewBox")||"0 0 0 0";o.current?.setAttribute("viewBox",r)}),`
    <svg class="${e}" preserveAspectRatio="xMidYMid meet" viewBox="${me.get(t)?.viewBox||"0 0 0 0"}" ref="${o}">
      <use xlink:href="#sprite-${t}" />
    </svg>
  `},j=Je;var L=0,z=!1,S="",ge=[],V="\u{1F34F},\u{1F330},\u{1F34B},\u{1F345},\u{1F346},\u{1F347},\u{1F353},\u{1F349},\u{1F350},\u{1F352},\u{1F351},\u{1F951}".split(","),{floor:We,random:Qe}=Math,Ke=e=>e[We(Qe()*e.length)],q=()=>{if(z)return S;let[e,t,o]=[V,V,V].flatMap(Ke);if(S=`${e} ${t} ${o}`,b(`${L} ${S}`),e==t&&t==o){let r=`
            ${S}
    You won in ${L} tries`;z=!0,ge.push(()=>{setTimeout(()=>{T(r),alert(r),z=!1})}),L=0}else L++;return S},Ze=()=>{let e=v();return setTimeout(()=>{if(typeof window>"u")return;let t=new MutationObserver((o,r)=>{for(let n of o)if(n.type==="childList"){let i=ge.pop();i&&i()}});e.current&&t.observe(e.current,{childList:!0}),e.current?.addEventListener("click",()=>{e.current&&(e.current.innerHTML=q())}),document.addEventListener("keydown",o=>{o.isComposing||o.keyCode===229||o.which!==13&&o.which!==32||e.current&&(e.current.innerHTML=q())})}),`
    <div class="slot-machine">
      ${j({name:"slot-machine-icon",className:"slot-machine__icon"})}
      <span class="slot-machine__reels" ref="${e}">${q()}</span>
    </div>
  `},fe=Ze;var ue=(e,t)=>{let o=t instanceof Object?k[t.component||"View"](t??{}):t;e.appendChild(o)},E=({children:e})=>{if(typeof document>"u")return Array.isArray(e)?e.join(""):e;let t=document.createDocumentFragment();return Array.isArray(e)?[].forEach.call(e,o=>{e!==null&&ue(t,o)}):e!=null&&ue(t,e),t};var U=(e,...t)=>{let o=String.raw({raw:e},...t);if(typeof document>"u")return o;let r=document.createElement("div");return r.innerHTML=o,r.firstElementChild||""};var Xe=({children:e,speed:t=1})=>U`
    <marquee
      direction="down"
      scrollamount="5"
      scrolldelay="${60*t}"
      class="snowCanvas"
    >
      <noscript><pre>${e}</pre></noscript>
    </marquee>
  `,et=({width:e=1,height:t=1,avg:o=1,snowFlake:r="."}={})=>{let n=~~(e/6),i=~~(t/8),c=~~(n*i*o),l="";for(let p=0;p<i;p++){let m="";for(let f=0;f<n;f++)m+=Math.random()<c/(i*n)?r:"&nbsp;";l+=m+`
`}return l},he=({speed:e=1,count:t=1,step:o=.25,...r})=>[...new Array(t)].map((n,i)=>Xe({children:et(r),speed:e+(i+1)*o})),Y=({width:e=800,height:t=600,avg:o=.01,snowFlake:r="*",nonce:n=""}={})=>{let i=~~(t/8*1e3*.5),c=E({children:he({width:e,height:t,avg:o,snowFlake:r,speed:1,count:3,step:.25})});return typeof window<"u"&&setTimeout((l=>()=>{he({width:e,height:t,avg:o,snowFlake:r,speed:1,count:3,step:.5}).forEach(p=>{p!=null&&l.append?.(p)})})(c),i),U`
  ${c}
  ${a({srcDoc:"./src/lib/snow.js",nonce:n})}
  <style nonce="${n}">
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
  </style>`};var be={email:"Your email",subject:"Subject",message:"Content",send:"Send message",feedback:"Feedback",work:"Work opportunity",consultation:"Consultation",issue:"Bug Report",botcheck:"I`m not a robot"};var P=e=>h(be[e]||e);var J=u("./src/pages/1990/styles.css"),R="Art&#363;rs Jansons",W="Full-stack Developer",Q="10+ year exp.",ot=`${R} | ${W} [${Q}]`,K="Mobile / Web Developer &amp; JavaScript Consultant",rt="HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest",we=()=>`<p>
                        ${nt.map((e,t)=>`${t?" | ":""}${g(e)}`).join("")}
                        | 1990 |
                        
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#exit" bgcolor="red">DOS</a>
                    </p>`,ye=()=>`<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`,ve=()=>`<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`,$=[{image:{src:"/images/categories/website-thumb.png",ascii:"./src/pages/1990/assets/website.ascii"},description:"Website development, including complex forms with custom field validation, popups and dialogs.",links:[{href:"https://wiam-front-test.vercel.app/",title:"Ex. 1"},{href:"https://mindmap-opal.vercel.app/",title:"Ex. 2"},{href:"https://codepen.io/iegik/full/ObZpqo",title:"Ex. 3"},{href:"https://test-kanvajs.vercel.app/",title:"Ex. 4"}]},{image:{src:"/images/categories/mobile-thumb.png",ascii:"./src/pages/1990/assets/mobile.ascii"},description:"Mobile applications - developing, publishing or upgrading existing ones.",links:[{href:"https://github.com/iegik/inventarizacija/",title:"Ex. 1"},{href:"https://github.com/iegik/react_calc/",title:"Ex. 2"}],comment:"Unfortunately apps are not available in Google Play anymore"},{image:{src:"/images/categories/clock-thumb.png",ascii:"./src/pages/1990/assets/extensions.ascii"},description:"Browser extensions, custom scripts and other researches where I'm testing new approaches.",links:[{href:"https://github.com/iegik/clock-extension",title:"Ex. 1"},{href:"https://github.com/iegik/thunar-scripts",title:"Ex. 2"},{href:"https://hub.docker.com/repository/docker/iegik/docker-node/general",title:"Ex. 3"}]},{image:{src:"/images/categories/wordpress-thumb.png",ascii:"./src/pages/1990/assets/cms.ascii"},description:"CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices",links:[{href:"https://github.com/WinLinMac/magento_themes",title:"Ex. 1"}]}],xe=[{link:{href:"https://t.me/ajansons",title:"t.me/ajansons"}}],nt=[{href:"#gdpr",title:"\u{1F36A}"},{href:"#clean",title:"\u{1F5D1}\uFE0F"}],ke=[{href:"https://linkedin.com/in/iegik",title:"LinkedIn"},{href:"https://github.com/iegik",title:"GitHub"},{href:"https://profile.codersrank.io/user/iegik",title:"CodersRank"},{href:"https://codepen.io/iegik/",title:"CodePen"},{href:"https://jsfiddle.net/user/iegik",title:"JSFiddle"},{href:"https://stackoverflow.com/users/771471/iegik",title:"StackOverflow"}],it="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace",w=e=>`<center>${M(e.image)}</center>
                                            <p>${e.description}
                                            <p>
                                                ${e.links.map((t,o)=>`${o?" | ":""}${g(t)}`).join("")}
                                            ${e.comment?`<p><em><font color="gray">${e.comment}</font></em>`:""}`,Se=()=>"<p>Time Zone: EEST</p>",Pe=()=>"<p>Work Time: 10:00 - 20:00</p>",Fe=()=>"<p>Current Location: Earth</p>",$e={email:{kind:"vertical",required:!0},to:{type:"hidden",value:"a.jansons+web@gmail.com"},access_key:{type:"hidden",value:"c5540606-b7ca-4634-980a-13e2c50cd823"},redirect:{type:"hidden",value:"/1990/sent"},subject:{kind:"vertical",required:!0,data:["feedback","work","consultation","issue"]},message:{kind:"vertical",required:!0},send:{type:"submit"}},st=()=>e=>t=>{let{name:o}=t,{kind:r,type:n}=$e[o]||{},i={...t,...$e[o]||{},l10n:P};if(n==="hidden")return e(i);if(n==="submit")return`<input type="submit" name="${o}" value="${P(o)}" />`;let c=P(o);return r==="vertical"?`<label for="${o}">${c}</label>
                                                        <br>
                                                        ${e(i)}`:`<label for="${o}">${c}</label>&nbsp;${e(i)}`},d=st()(re),Me=({name:e})=>`<input id="bot" name="${e}" nonce="${s}" value="Type 'true' here" /><a id="${e}" href="#bot"></a><script nonce="${s}">bot.style.display='none';${e}.innerText='[_] ${P(e)}';${e}.addEventListener("click", () => {${e}.innerText=${e}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${e}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`,ct=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${d({name:"email"})}
                                                        ${d({name:"to"})}
                                                        ${d({name:"access_key"})}
                                                        ${d({name:"redirect"})}
                                                    <td width="100%">
                                                        ${d({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        <br>
                                                        ${d({name:"message",rows:5,cols:44})}
                                                        ${Me({name:"botcheck"})}
                                                        <p align="right">
                                                            ${d({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,at=()=>`<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${d({name:"email"})}
                                                        ${d({name:"to"})}
                                                        ${d({name:"access_key"})}
                                                        ${d({name:"redirect"})}
                                                </tr>
                                                <tr>
                                                    <td width="100%">
                                                        ${d({name:"subject"})}
                                                <tr>
                                                    <td colspan="2">
                                                        ${d({name:"message",rows:5,cols:36})}
                                                        ${Me({name:"botcheck"})}
                                                        <p align="left">
                                                            ${d({name:"send"})}
                                            </table>
                                        </fieldset>
                                    </form>`,lt=()=>`
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                ${M({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/me.ascii"})}
                            <td width="80%" valign="bottom">
                                <p>${R}
                                <h1><font size="5"><b>${W}</b></font><font size="2">[${Q}]</font></h1>
                                <p><em><font color="gray">${K}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${ye()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${ve()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                <p>${ke.map((e,t)=>`${t?" | ":""}${g(e)}`).join("")}</p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td colspan="2">
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${w($[0])}
                                        <td valign="top">
                                            ${w($[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${w($[2])}
                                        <td valign="top">
                                            ${w($[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td colspan="2">
                                <my-portfolio theme="1990/desktop" />
                        <tr>
                            <td colspan="2" align="center">
                                <noscript>${g({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${ct()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${xe.map(e=>`<li><p>${g(e.link)}${e.comment?` [${e.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${Se()}
                                    ${Pe()}
                                    ${Fe()}
                                </font>
                            <td valign="bottom" align="right">
                                
                            <td valign="top" align="right">
                                <table border="0" cellpadding="0" cellspacing="8">
                                    <tr>
                                        <td valign="top">
                                            <font size="2">
                                                ${O({src:"./src/pages/1990/assets/code_of_a_day/git_du.gitconfig",title:"Code of the day"})}
                                            </font>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td align="center">
                                ${Y({width:768,height:600,snowFlake:"*",nonce:s})}
                    </table>
                    `,pt=()=>`
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${M({src:"/images/me-thumb.png",ascii:"./src/pages/1990/assets/photo.ascii"})}
                                <p>${R}
                                <h1>
                                    <font size="5"><b>${W}</b></font>
                                    <br>
                                    <font size="2">[${Q}]</font></h1>
                                <p><em>${K}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${ye()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
                                        ${ve()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td>
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${w($[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${w($[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${w($[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${w($[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td>
                                <my-portfolio theme="1990/mobile" />
                        <tr>
                            <td align="center">
                                <noscript>${g({href:"/portfolio.xml",title:"Other projects"})}</noscript>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${at()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${xe.map(e=>`<li><p>${g(e.link)}${e.comment?` [${e.comment}]`:""}`).join("")}
                                    </ul>
                                    <br>
                                    ${Se()}
                                    ${Pe()}
                                    ${Fe()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%">
                                <font size="2">
                                    ${O({src:"./src/pages/1990/assets/code_of_a_day/git_du.gitconfig",title:"Code of the day"})}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${Y({width:424,height:600,snowFlake:".",nonce:s})}
                    </table>
                    `,Te=()=>`<p>${ke.map((e,t)=>`${t?" | ":""}${g(e)}`).join("")}</p>
                                <br>
                                <marquee>
                                    <font color="gray">\xA9 2024 ${R} | All rights reserved</font>
                                    `,Z=process.env.IS_VITE==="true"?"<!DOCTYPE html>":`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`,Ce=e=>`<font face="${it}" size="3">
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
`,X=e=>`${Z}
<html lang="en">
<head>
    ${ne({nonce:s})}
    <title>${ot}</title>
    <meta name="description" content="${K}" />
    <meta name="keywords" content="${rt}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    
    
    <style nonce="${s}" id="/1990/styles.min.css">${J}</style>
    
    ${a({srcDoc:"./src/lib/dialogs.dos.js",nonce:s})}
    ${a({srcDoc:"./src/lib/gdpr.js",nonce:s})}
    ${a({srcDoc:"./src/lib/sw.js",nonce:s})}
    ${a({srcDoc:"./src/lib/console-game.js",nonce:s})}
    ${a({srcDoc:"./src/lib/guard.js",nonce:s})}
    ${process.env.IS_VITE==="true"?"":A({nonce:s,gtmId:"GTM-MBG56M"})}
    
    
</head>
<body>
    
    ${process.env.IS_VITE==="true"?"":N({nonce:s,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${process.env.IS_VITE==="true"?"":_({nonce:s,gtmId:"GTM-MBG56M"})}
    ${e}
    
    ${a({srcDoc:"./src/lib/dos-theme.js",iife:'document, toggleDosStyle, "/1990/styles.min.css"',nonce:s,prefix:`const nonce = '${s}';
`})}
    ${a({srcDoc:"./src/lib/my-portfolio.js",nonce:s})}
    ${oe({nonce:s,projectId:"179618f1f04d4d9dac08acc750d5736c",dsn:"https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",release:`1250596@${D}`,environment:"production",integrity:"sha384-6yzL+SsRi1vefLAU9+yqKb0YIeAiJ6GsCob5LxN8Af29Ze1Q5iCg0Ur2fwFroEqa"})}
`;y("public/index.html",`${Z}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    <!--meta http-equiv="REFRESH" content="0;URL=1990/"-->
    
    <style nonce="${s}" id="/1990/styles.min.css">${J}</style>
    ${a({srcDoc:"./src/lib/router-1990.min.js",nonce:s})}
    
    ${process.env.IS_VITE==="true"?"":A({nonce:s,gtmId:"GTM-MBG56M"})}
</head>
<body id="root">
    
    ${process.env.IS_VITE==="true"?"":N({nonce:s,gtmId:"G-5ZY8Y6X2C4"})}
    
    ${process.env.IS_VITE==="true"?"":_({nonce:s,gtmId:"GTM-MBG56M"})}
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
`);y("public/1990/index.html",`${Z}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    
    <style nonce="${s}" id="/1990/styles.min.css">${J}</style>
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
`);var dt=()=>"<my-portfolio></my-portfolio>";y("public/1990/desktop/index.html",X(Ce([we(),lt(),Te()])));y("public/1990/mobile/index.html",X(Ce([we(),pt(),Te()])));y("public/portfolio/index.html",X(dt()));var mt=`
CACHE MANIFEST
# rev ${D}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`;y("public/manifest.appcache",mt);
