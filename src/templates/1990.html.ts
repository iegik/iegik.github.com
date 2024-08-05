#!/usr/bin/env node
// @deno-types='@app/types.d'
import { writeFileSync, readFileSync, release, nonce } from '@app/utils';
const style = readFileSync('./src/pages/1990/styles.css');
const csp = Object.entries({
  'script-src': [
    `'nonce-${nonce}'`,
    `'strict-dynamic'`,
    `https://www.google-analytics.com`,
    `https://ssl.google-analytics.com`,
    `https://static.hotjar.com`,
    `https://js.sentry-cdn.com`,
    `'unsafe-inline'`, // (ignored by browsers supporting nonces/hashes) to be backward compatible with older browsers.
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
    `https://github.com/login/oauth/access_token`,
    `https://api.github.com/graphql`,
    `https://api.github.com/user`,
    `https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/`,
    `https://o171820.ingest.sentry.io/`,
  ],
  'style-src': [
    `'nonce-${nonce}'`,
    `https://static.hotjar.com`,
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
                        <!-- <a href="/2000/">2000</a> |
                        <a href="/2010/">2010</a> |
                        <a href="/2020/">2020</a> | -->
                        <a href="/next/">BETA</a>
                    </p>`

const TechStack = () => `<font color="orange">HTML</font>,
                                        <font color="blue">CSS</font>,
                                        <font color="#F0DB4F">JavaScript</font>,
                                        <font color="#2f74c0">TypeScript</font>,
                                        <font color="#5fd3f3">React / React Native</font>`

const AlsoUse = () => `<font color="#7277ae">PHP</font>,
                                        <font color="#2683cb">MySQL</font>,
                                        <font>Bash/Makefile</font>,
                                        <font color="#008ddb">Docker</font>,
                                        <font color="#dd34a6">GraphQL</font>,
                                        <font>Next</font>,
                                        <font color="#da214c">Nest</font>`

const Image = ({ src }: { src: string; }) => `<pre><font size=1>${readFileSync(src)}</font></pre>`

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
    { link: { href: "mailto:a.jansons@gmail.com", title: "a.jansons@gmail.com", } },
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

const ContactForm = () => `<form align="left" method="get" action="/1990/mailto/">
                                            <fieldset>
                                                <legend>Bonus Code</legend>
                                                ${Image({ src: './src/pages/1990/assets/slotmachine.ascii' })}
                                            </fieldset>
                                        </form>
                                    </font>`

// const ContactForm = () => `<form align="left" method="get" action="/1990/mailto/">
//                                         <fieldset>
//                                             <legend>Feedback</legend>
//                                             <table align="left" border="0" cellpadding="0" cellspacing="8">
//                                                 <tr>
//                                                     <td>
//                                                         <label for="from">Your email</label>
//                                                         <p>
//                                                             <input id="from" name="from" type="text" />
//                                                             <input type="hidden" name="to" value="a.jansons+web@gmail.com" />
//                                                     <td>
//                                                         <label for="subject">Subject</label>
//                                                         <p>
//                                                             <select id="subject" name="subject">
//                                                                 <option>Subject</option>
//                                                                 <option value="Feedback">Feedback</option>
//                                                                 <option value="Work oppartunity">Work oppartunity</option>
//                                                                 <option value="Consultation">Consultation</option>
//                                                                 <option value="Bug Report">Bug Report</option>
//                                                             </select>
//                                                 <tr>
//                                                     <td colspan="2">
//                                                         <br/>
//                                                             <label for="message">Content</label>
//                                                             <br/>
//                                                             <br/>
//                                                             <table>
//                                                                 <tr>
//                                                                     <td>
//                                                                         <textarea id="message" name="message" rows="5" cols="42"></textarea>
//                                                             </table>
//                                                         <p align="right">
//                                                             <input type="submit" value="Send message" />
//                                                     </fieldset>
//                                             </table>
//                                         </fieldset>
//                                     </form>`


const DesktopView = () => `<font face="${fontFamily}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${TopNav()}
                    <hr/>
                    <table border="0" cellpadding="0" cellspacing="8" width="800px">
                        <tr>
                            <td>
                                ${Image({ src: './src/pages/1990/assets/photo.ascii' })}
                            <td width="80%">
                                <p>${fullName}
                                <h1><font color="#ffff58" size="5"><b>${position}</b></font><font size="2">[${experience}]</font></h1>
                                <p><em>${description}</em></p>
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
                        <tr>
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${contacts.map((contact) => `<li><p>${Link(contact.link)}${contact.comment ? ` [${contact.comment}]` : ''}`).join('')}
                                    </ul>
                                    <br/>
                                    ${TimeZone()}
                                    ${WorkTime()}
                                    ${CurrentLocation()}
                                </font>
                            <td align="right">
                                <font size="2">
                                    ${ContactForm()}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr/>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${links.map((link, key) => `${!!key ? ' | ' : ''}${Link(link)}`).join('')}</p>
                                <br/>
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
                    <hr/>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${Image({ src: './src/pages/1990/assets/photo.ascii' })}
                                <p>${fullName}
                                <h1>
                                    <font color="#ffff58" size="5"><b>${position}</b></font>
                                    <br/>
                                    <font size="2">[${experience}]</font></h1>
                                <p><em>${description}</em></p>
                                <p>
                                    <b>Tech Stack:</b>
                                        ${TechStack()}
                                </p>
                                <p>
                                    <b>Also use:</b>
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
                            <td valign="top">
                                <font size="2">
                                    <h2>Contacts:</h2>
                                    <ul>
                                        ${contacts.map((contact) => `<li><p>${Link(contact.link)}${contact.comment ? ` [${contact.comment}]` : ''}`).join('')}
                                    </ul>
                                    <br/>
                                    ${TimeZone()}
                                    ${WorkTime()}
                                    ${CurrentLocation()}
                                </font>
                        </tr>
                        <tr>
                            <td width="60%" align="right">
                                <font size="2">
                                    ${ContactForm()}
                                </font>
                    </table>
            <tr>
                <td valign="bottom" align="center">
                    <hr/>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <p>${links.map((link, key) => `${!!key ? ' | ' : ''}${Link(link)}`).join('')}</p>
                                <marquee>
                                    <font color="gray">© 2024 ${fullName} | All rights reserved</font>
                    </table>
        </table>
    </font>`

const Layout = (content: string) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="${csp}">
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    <style nonce="${nonce}">${style}</style>
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
