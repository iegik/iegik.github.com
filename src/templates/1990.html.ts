#!/usr/bin/env node
// @deno-types='@app/types.d'
import { writeFileSync, readFileSync, release, nonce } from '@app/utils';
import { escapeHTML } from '../services/web-utils';
const style = readFileSync('./src/pages/1990/styles.css');
const csp = Object.entries({
  'script-src': [
    `'nonce-${nonce}'`,
    `'strict-dynamic'`,
    `https://www.google-analytics.com`,
    `https://ssl.google-analytics.com`,
    `https://static.hotjar.com`,
    `https://js.sentry-cdn.com`,
    // `'unsafe-inline'`, // (ignored by browsers supporting nonces/hashes) to be backward compatible with older browsers.
  ],
  'img-src': [
    `'self'`,
    `https://www.google-analytics.com`,
    `https://avatars.githubusercontent.com/`,
    `https://www.googletagmanager.com/`,
  ],
  'connect-src': [
    `'self'`,
    `https://www.google-analytics.com`,
    `https://region1.google-analytics.com`,
    `https://in.hotjar.com`,
    `https://static.hotjar.com`,
    `https://content.hotjar.io`,
    `https://github.com/login/oauth/access_token`,
    `https://api.github.com/graphql`,
    `https://api.github.com/user`,
    `https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/`,
    `https://o171820.ingest.sentry.io/`,
  ],
  'style-src': [
    `'nonce-${nonce}'`,
    `https://static.hotjar.com`,
    // `'unsafe-inline'`,
  ],
  'object-src': [`'none'`],
  'base-uri': [`'none'`],
  'frame-src': [`https://vars.hotjar.com/`],
}).reduce((acc, [key, val]) => `${acc};${key} ${val.join(' ')}`, `default-src 'self'`);

const fullName = 'Art&#363;rs Jansons'
const position = 'Full-stack Developer'
const experience = '10+ year exp.'
const title = `${fullName} | ${position} [${experience}]`;
const description = 'Mobile / Web Developer &amp; JavaScript Consultant'
const keywords = 'HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, MySQL, Bash, Makefile, Docker, GraphQL, Next, Nest'

const TopNav = () => `<p>
                        1990 |
                        ${/*<a href="/2000/">2000</a> |
                        <a href="/2010/">2010</a> |
                        <a href="/2020/">2020</a> |*/''}
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#" bgcolor="red">DOS</a>
                    </p>`

const TechStack = () => `<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2F74C0">TypeScript</font>,
                                        <font color="#5FD3F3">React / React Native</font>`

const AlsoUse = () => `<font color="#7277ae">PHP</font>,
                                        <font color="#2683CB">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008DDB">Docker</font>,
                                        <font color="#DD34A6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#DA214C">Nest</font>`

// const escapeHTML = (unsafe:string) => unsafe.replace(/[&<>"']/g, (c:string) => `&#${c.charCodeAt(0)}`)

const Image = ({ src }: { src: string; }) => `<pre><font size=1>${escapeHTML(readFileSync(src))}</font></pre>`

type LinkProps = { href: string; title: string; }

const Link = (props:LinkProps) => `<a ${/^http/.test(props.href) ? ' rel="noopener noreferrer"' : ''} href="${props.href}" title="${props.title}">${props.title}</a>`

type Project = {
    image: { ascii: string; },
    description: string;
    links: LinkProps[];
    comment?: string;
}

const projects:Project[] = [
    {
        image: {
            ascii: './src/pages/1990/assets/website.ascii'
        },
        description: 'Website development, including complex forms with custom field validation, popups and dialogs.',
        links: [
            { href: "https://wiam-front-test.vercel.app/", title: "Ex. 1", },
            { href: "https://mindmap-opal.vercel.app/", title: "Ex. 2", },
            { href: "https://codepen.io/iegik/full/ObZpqo", title: "Ex. 3", },
            { href: "https://test-kanvajs.vercel.app/", title: "Ex. 4", },
        ]
    },
    {
        image: {
            ascii: './src/pages/1990/assets/mobile.ascii'
        },
        description: 'Mobile applications - developing, publishing or upgrading existing ones.',
        links: [
            { href: "https://github.com/iegik/inventarizacija/", title: "Ex. 1", },
            { href: "https://github.com/iegik/react_calc/", title: "Ex. 2", },
        ],
        comment: 'Unfortunately apps are not available in Google Play anymore'
    },
    {
        image: {
            ascii: './src/pages/1990/assets/extensions.ascii'
        },
        description: 'Browser extensions, custom scripts and other researches where I\'m testing new approaches.',
        links: [
            { href: "https://github.com/iegik/clock-extension", title: "Ex. 1", },
            { href: "https://github.com/iegik/thunar-scripts", title: "Ex. 2", },
            { href: "https://hub.docker.com/repository/docker/iegik/docker-node/general", title: "Ex. 3", },
        ],
    },
    {
        image: {
            ascii: './src/pages/1990/assets/cms.ascii'
        },
        description: 'CMS (Wordpress, Magento) configuration, plugin creation, RESTFul API on PHP, GraphQL and microservices',
        links: [
            { href: "https://github.com/WinLinMac/magento_themes", title: "Ex. 1", },
        ],
    },
]

type Contact = { link: LinkProps; comment?: string; }
const contacts:Contact[] = [
    // { link: { href: "callto:0037126262109", title: "+371 26262109", }, comment: 'EU' },
    // { link: { href: "callto:0079213900737", title: "+7 921 3900737", }, comment: 'RU' },
    // { link: { href: "mailto:a.jansons@gmail.com", title: "a.jansons@gmail.com", } },
    { link: { href: "https://t.me/ajansons", title: "t.me/ajansons", } },
    // { link: { href: "https://discord.gg/iegik", title: "discord.gg/iegik", } },
]

const links:LinkProps[] = [
    { href: "https://linkedin.com/in/iegik", title: "LinkedIn", },
    { href: "https://github.com/iegik", title: "GitHub", },
    { href: "https://profile.codersrank.io/user/iegik", title: "CodersRank", },
    { href: "https://codepen.io/iegik/", title: "CodePen", },
    { href: "https://jsfiddle.net/user/iegik", title: "JSFiddle", },
    { href: "https://stackoverflow.com/users/771471/iegik", title: "StackOverflow", },
]

const fontFamily = "'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace"

const ProjectView = (data: Project) => `<center>${Image({ src: data.image.ascii })}</center>
                                            <p>${data.description}
                                            <p>
                                                ${data.links.map((link, key) => `${!!key ? ' | ' : ''}${Link(link)}`).join('')}
                                            ${data.comment ? `<p><em><font color="gray">${data.comment}</font></em>` : ''}`

const TimeZone = () => `<p>Time Zone: EEST</p>`
const WorkTime = () => `<p>Work Time: 10:00 - 20:00</p>`
const CurrentLocation = () => `<p>Current Location: Earth</p>`

const Code = ({ src, title }: { src: string, title: string }) => `<fieldset bgcolor="green">
                                                <legend>${title}</legend>
                                                <code>${Image({ src })}</code>
                                            </fieldset>`

type FieldProps = { name: string, rows?: number, cols?: number }

type FormFieldProps = {
    kind?: 'horizontal' | 'vertical';
    data?: any[];
    rows?: number;
    cols?: number;
    type?: 'hidden' | 'text' | 'memo' | 'checkbox' | 'radio' | 'email' | 'select' | 'submit';
    value?: string;
    required?: boolean;
}

const fields: Record<string, FormFieldProps> = {
    email: { kind: 'vertical', required: true },
    to: { type: 'hidden', value: 'a.jansons+web@gmail.com' },
    access_key: { type: 'hidden', value: 'c5540606-b7ca-4634-980a-13e2c50cd823' },
    redirect: { type: 'hidden', value: '/1990/sent' },
    subject: { kind: 'vertical', required: true, data: ['feedback', 'work', 'consultation', 'issue'] },
    message: { kind: 'vertical', required: true, },
    send: { type: 'submit' },
}

const dict: Record<string, string>= {
    email: 'Your email',
    subject: 'Subject',
    message: 'Content',
    send: 'Send message',
    feedback: 'Feedback',
    work: 'Work opportunity',
    consultation: 'Consultation',
    issue: 'Bug Report',
    botcheck: "I' m not a robot",
}

const l10n = (slug: string) => dict[slug] || slug;

const withLabel = () => (Field: (x: FieldProps) => string) => (props: FieldProps) => {
    const { name } = props
    const { kind, type: fieldType } = fields[name] || {}

    if (fieldType === 'hidden') return Field(props)
    if (fieldType === 'submit') return `<input type="submit" name="${name}" value="${l10n(name)}" />`
    const label = l10n(name)

    return kind === 'vertical'
    ? `<label for="${name}">${label}</label>
                                                        <br>
                                                        <br>
                                                        ${Field(props)}`
    : `<label for="${name}">${label}</label>&nbsp;${Field(props)}`
}

const Field = ({ name, rows, cols, }: FieldProps) => {
    const { data, type: fieldType, value = '', required }: FormFieldProps = fields[name] || {}
    const id = name;
    const isRequired = required ? `required` : ''
    if (data) return `<select id="${id}" name="${name}" ${isRequired}>
                                                                <option></option>
                                                                ${data.map((key) => `<option value="${key}">${l10n(key)}</option>`).join('\n')}
                                                            </select>`
    if (!!rows || !!cols) return `<table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <textarea id="${id}" name="${name}" rows="${rows}" cols="${cols}" ${isRequired}>${value}</textarea>
                                                        </table>`
    return `<input type="${fieldType || 'text'}" name="${name}" value="${value}" ${isRequired} />`
}

const FormField = withLabel()(Field)

const Captcha = ({ name }: FieldProps) => `<input id="bot" name="${name}" nonce="${nonce}" value="This shouldn't be here" /><p><a id="${name}" href="#bot">[_] ${l10n(name)}</a></p><script nonce="${nonce}">bot.style.display='none';${name}.addEventListener("click", () => {${name}.innerText=${name}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${name}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`

const ContactFormDesktop = () => `<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${FormField({ name: 'email' })}
                                                        ${FormField({ name: 'to' })}
                                                        ${FormField({ name: 'access_key' })}
                                                        ${FormField({ name: 'redirect' })}
                                                    <td width="100%">
                                                        ${FormField({ name: 'subject' })}
                                                <tr>
                                                    <td colspan="2">
                                                        <br>
                                                        ${FormField({ name: 'message', rows: 5, cols: 44 })}
                                                        ${Captcha({ name: 'botcheck' })}
                                                        <p align="right">
                                                            ${FormField({ name: 'send' })}
                                            </table>
                                        </fieldset>
                                    </form>`

const ContactFormMobile = () => `<form align="left" method="POST" action="https://api.web3forms.com/submit">
                                        <fieldset bgcolor="gray">
                                            <legend>Feedback</legend>
                                            <table align="left" border="0" cellpadding="0" cellspacing="8" width="100%">
                                                <tr>
                                                    <td>
                                                        ${FormField({ name: 'email' })}
                                                        ${FormField({ name: 'to' })}
                                                        ${FormField({ name: 'access_key' })}
                                                        ${FormField({ name: 'redirect' })}
                                                </tr>
                                                <tr>
                                                    <td width="100%">
                                                        ${FormField({ name: 'subject' })}
                                                <tr>
                                                    <td colspan="2">
                                                        ${FormField({ name: 'message', rows: 5, cols: 36 })}
                                                        ${Captcha({ name: 'botcheck' })}
                                                        <p align="left">
                                                            ${FormField({ name: 'send' })}
                                            </table>
                                        </fieldset>
                                    </form>`


const DesktopView = () => `<font face="${fontFamily}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${TopNav()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td>
                                ${Image({ src: './src/pages/1990/assets/photo.ascii' })}
                            <td width="80%" valign="bottom">
                                <p>${fullName}
                                <h1><font size="5"><b>${position}</b></font><font size="2">[${experience}]</font></h1>
                                <p><em><font color="gray">${description}</font></em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${TechStack()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        ${AlsoUse()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td colspan="2">
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${ProjectView(projects[0])}
                                        <td valign="top">
                                            ${ProjectView(projects[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${ProjectView(projects[2])}
                                        <td valign="top">
                                            ${ProjectView(projects[3])}
                                    </tr>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${ContactFormDesktop()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${contacts.map((contact) => `<li><p>${Link(contact.link)}${contact.comment ? ` [${contact.comment}]` : ''}`).join('')}
                                    </ul>
                                    <br>
                                    ${TimeZone()}
                                    ${WorkTime()}
                                    ${CurrentLocation()}
                                </font>
                            <td valign="bottom" align="right">
                                ${/*Image({ src: './src/pages/1990/assets/javascript.ascii'})*/''}
                            <td valign="top" align="right">
                                <table border="0" cellpadding="0" cellspacing="8">
                                    <tr>
                                        <td valign="top">
                                            <font size="2">
                                                ${Code({ src: './src/pages/1990/assets/code_of_a_day/git_du.ascii', title: 'Code of the day' })}
                                            </font>
                                </table>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${links.map((link, key) => `${!!key ? ' | ' : ''}${Link(link)}`).join('')}</p>
                                <br>
                                <marquee>
                                    <font color="gray">© 2024 ${fullName} | All rights reserved</font>
                    </table>
        </table>
    </font>`

const MobileView = () => `<font face="${fontFamily}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${TopNav()}
                    <hr>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${Image({ src: './src/pages/1990/assets/photo.ascii' })}
                                <p>${fullName}
                                <h1>
                                    <font size="5"><b>${position}</b></font>
                                    <br>
                                    <font size="2">[${experience}]</font></h1>
                                <p><em>${description}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        <br>
                                        ${TechStack()}
                                </p>
                                <p>
                                    <b>Also use:</b>
                                        <br>
                                        ${AlsoUse()}
                                </p>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td>
                                <h2>Project Examples:</h2>
                                <table border="0" cellpadding="0" cellspacing="8" width="100%">
                                    <tr>
                                        <td valign="top">
                                            ${ProjectView(projects[0])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${ProjectView(projects[1])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${ProjectView(projects[2])}
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            ${ProjectView(projects[3])}
                                    </tr>
                                </table>
                        <tr>
                            <td width="40%" align="right">
                                <font size="2">
                                    ${ContactFormMobile()}
                                </font>
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${contacts.map((contact) => `<li><p>${Link(contact.link)}${contact.comment ? ` [${contact.comment}]` : ''}`).join('')}
                                    </ul>
                                    <br>
                                    ${TimeZone()}
                                    ${WorkTime()}
                                    ${CurrentLocation()}
                                </font>
                        <tr>
                        <tr>
                            <td width="30%">
                                <font size="2">
                                    ${Code({ src: './src/pages/1990/assets/code_of_a_day/git_du.ascii', title: 'Code of the day' })}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${links.map((link, key) => `${!!key ? ' | ' : ''}${Link(link)}`).join('')}</p>
                                <marquee>
                                    <font color="gray">© 2024 ${fullName} | All rights reserved</font>
                    </table>
        </table>
    </font>`

// https://www.w3.org/TR/xhtml-basic/

const DOCTYPE = process.env.IS_VITE ? `<!DOCTYPE html>` : `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`

const Layout = (content: string) => `${DOCTYPE}
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="${csp}">
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    ${/*<link rel="stylesheet" nonce="${nonce}" href="/1990/styles.min.css" />*/''}
    <style nonce="${nonce}" id="/1990/styles.min.css">${style}</style>
</head>
<body>
    ${content}
    ${/* Google Analytics */''}
    <script async nonce="${nonce}" src="https://www.googletagmanager.com/gtag/js?id=G-5ZY8Y6X2C4"></script>
    <script nonce="${nonce}">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5ZY8Y6X2C4');
    </script>
    <!-- DOS Theme Code for https://iegik.github.io -->
    <script nonce="${nonce}">
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
            _.setAttribute("nonce", "${nonce}");
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
    <script nonce="${nonce}">
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2660383,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    <script nonce="${nonce}" src="https://browser.sentry-cdn.com/7.54.0/bundle.min.js" integrity="sha384-EmlJLN9Q0yu0/2UUCIYnEM88jpQ7xUhtNI2ZeXb/ci3cwoAoIQl350N4PQPlMbP5" crossorigin="anonymous"></script>
    <script nonce="${nonce}">
    document.addEventListener('DOMContentLoaded', () => {
      typeof Sentry !== 'undefined' && Sentry.init({
        dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
        release: "1250596@${release}",
        environment: "production",
      });
    });
    </script>
`;

writeFileSync('public/index.html', `${DOCTYPE}
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
                          <td width="1px" valign="bottom"><font size="1"><marquee scrollamount="5" behavior="scroll"><pre>▁▁▃▃▅▅▆▆▇▇██</pre></marquee></font>
                          <td><font size="3" weight="bold">Loading...</font>
                      </table>
                      <font size="1" color="lightgray">301 Redirect</font><br>
                      <font size="1" color="gray">You will be redirected to the new page shortly. If not, click <a id="url" href="1990">here</a>.</font>
`);
writeFileSync('public/1990/index.html', `${DOCTYPE}
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
                          <td width="1px" valign="bottom"><font size="1"><marquee scrollamount="5" behavior="scroll"><pre>▁▁▃▃▅▅▆▆▇▇██</pre></marquee></font>
                          <td><font size="3" weight="bold">Loading...</font>
                      </table>
                      <font size="1" color="lightgray">301 Redirect</font><br>
                      <font size="1" color="gray">You will be redirected to the new page shortly. If not, click <a id="url" href="/1990/mobile">here</a>.</font>
                      <p>
                        <a href="/1990/desktop">DESKTOP</a> |
                        <a href="/1990/mobile">MOBILE</a>
`);
writeFileSync('public/1990/desktop/index.html', Layout(DesktopView()));
writeFileSync('public/1990/mobile/index.html', Layout(MobileView()));

const manifest = `
CACHE MANIFEST
# rev ${release}

CACHE:
index.html
1990/index.html
1990/mobile/index.html
1990/desktop/index.html
1990/mailto/index.html

NETWORK:
*
`

writeFileSync('public/manifest.appcache', manifest);
