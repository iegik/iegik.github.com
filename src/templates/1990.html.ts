#!/usr/bin/env node
// @deno-types='@app/types.d'
import { writeFileSync, readFileSync, release, nonce } from '@app/utils';
import { type LinkProps, Link } from '@app/pages/1990/components/ui/link';
import { Image, type ImageProps } from '@app/pages/1990/components/ui/image';
import { Code } from '@app/pages/1990/components/ui/code';
import { GTMHead, GTMBody } from '@app/pages/1990/components/GTM';
import { Script } from '@app/pages/1990/components/ui/script';
import { GTag } from '@app/pages/1990/components/GTag';
// import { HotJar } from '@app/pages/1990/components/HotJar';
import { Sentry } from '@app/pages/1990/components/Sentry';
import { Field, FieldL10nProps, FieldProps, FormFieldProps } from '@app/pages/1990/components/ui/field';
import { CSP } from '@app/pages/1990/components/CSP';
import { Snow } from '@app/pages/1990/components/Snow';

const style = readFileSync('./src/pages/1990/styles.css');

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
                        <a id="toggleDosStyle" href="#exit" bgcolor="red">DOS</a>
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


type Project = {
    image: ImageProps,
    description: string;
    links: LinkProps[];
    comment?: string;
}

const projects:Project[] = [
    {
        image: {
            src: '/images/categories/website-thumb.png',
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
            src: '/images/categories/mobile-thumb.png',
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
            src: '/images/categories/clock-thumb.png',
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
            src: '/images/categories/wordpress-thumb.png',
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

const ProjectView = (data: Project) => `<center>${Image(data.image)}</center>
                                            <p>${data.description}
                                            <p>
                                                ${data.links.map((link, key) => `${!!key ? ' | ' : ''}${Link(link)}`).join('')}
                                            ${data.comment ? `<p><em><font color="gray">${data.comment}</font></em>` : ''}`

const TimeZone = () => `<p>Time Zone: EEST</p>`
const WorkTime = () => `<p>Work Time: 10:00 - 20:00</p>`
const CurrentLocation = () => `<p>Current Location: Earth</p>`

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
    botcheck: "I'm not a robot",
}

const l10n = (slug: string) => dict[slug] || slug;

const withLabel = () => (Field: (x: FieldProps & FormFieldProps & FieldL10nProps ) => string) => (props: FieldProps) => {
    const { name } = props
    const { kind, type: fieldType } = fields[name] || {}
    const fieldProps:FieldProps & FormFieldProps & FieldL10nProps = { ...props, ...(fields[name] || {}), l10n }

    if (fieldType === 'hidden') return Field(fieldProps)
    if (fieldType === 'submit') return `<input type="submit" name="${name}" value="${l10n(name)}" />`
    const label = l10n(name)

    return kind === 'vertical'
    ? `<label for="${name}">${label}</label>
                                                        <br>
                                                        ${Field(fieldProps)}`
    : `<label for="${name}">${label}</label>&nbsp;${Field(fieldProps)}`
}


const FormField = withLabel()(Field)

const Captcha = ({ name }: FieldProps) => `<input id="bot" name="${name}" nonce="${nonce}" value="Type 'true' here" /><a id="${name}" href="#bot" style="display:none;">[_] ${l10n(name)}</a><script nonce="${nonce}">bot.style.display='none';${name}.style.display='inline-block';${name}.addEventListener("click", () => {${name}.innerText=${name}.innerText.slice(0,1)+(bot.value==='true' ? '_' : 'x')+${name}.innerText.slice(2);bot.disabled=true;bot.value=bot.value === 'true' ? false : true;});</script>`

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


const DesktopView = () => `
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td>
                                ${Image({ src: '/images/me-thumb.png', ascii: './src/pages/1990/assets/me.ascii' })}
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
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
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
                            <td colspan="2">
                                <my-portfolio theme="1990/desktop" />
                        <tr>
                            <td colspan="2" align="center">
                                <noscript>${Link({ href: '/portfolio.xml', title: 'Other projects' })}</noscript>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <font size="2">
                                    ${ContactFormDesktop()}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
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
                                                ${Code({ src: './src/pages/1990/assets/code_of_a_day/git_du.gitconfig', title: 'Code of the day' })}
                                            </font>
                                </table>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8" width="768px">
                        <tr>
                            <td align="center">
                                ${Snow({ width: 768, height: 1024, snowFlake: '*', nonce })}
                    </table>
                    `

const MobileView = () => `
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${Image({ src: '/images/me-thumb.png', ascii: './src/pages/1990/assets/photo.ascii' })}
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
                            <td>
                                <my-portfolio theme="1990/mobile" />
                        <tr>
                            <td align="center">
                                <noscript>${Link({ href: '/portfolio.xml', title: 'Other projects' })}</noscript>
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
                                    ${Code({ src: './src/pages/1990/assets/code_of_a_day/git_du.gitconfig', title: 'Code of the day' })}
                                </font>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="8">
                        <tr>
                            <td align="center">
                                ${Snow({ width: 424, height: 600, snowFlake: '.', nonce })}
                    </table>
                    `

const Footer = () => `<p>${links.map((link, key) => `${!!key ? ' | ' : ''}${Link(link)}`).join('')}</p>
                                <br>
                                <marquee>
                                    <font color="gray">© 2024 ${fullName} | All rights reserved</font>
                                    `

// https://www.w3.org/TR/xhtml-basic/

const DOCTYPE = process.env.IS_VITE === 'true' ? `<!DOCTYPE html>` : `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`

const Layout = (content: (Node | Element | string)[]) => `<font face="${fontFamily}" size="3">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr align="center">
                <td valign="top">
                    ${content[0]}
                    <hr>
                    ${content[1]}
            <tr>
                <td valign="bottom" align="center">
                    <hr>
                    <table border="0" cellpadding="8" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                ${content[2]}
                    </table>
        </table>
    </font>
`

const Page = (content: string) => `${DOCTYPE}
<html lang="en">
<head>
    ${CSP({ nonce })}
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="var(--color-window)" />
    ${/* Toggled DOS Theme */''}
    ${/*<link rel="stylesheet" nonce="${nonce}" href="/1990/styles.min.css" />*/''}
    <style nonce="${nonce}" id="/1990/styles.min.css">${style}</style>
    ${/* Google Tag Manager */''}
    ${Script({ srcDoc: './src/lib/console-game.js', nonce })}
    ${Script({ srcDoc: './src/lib/guard.js', nonce })}
    ${process.env.IS_VITE === 'true' ? '' : GTMHead({ nonce, gtmId: 'GTM-MBG56M'})}
    ${/* Hotjar Tracking Code (removed due install from GTM) */''}
    ${/* HotJar({ nonce, hjid: 2660383, hjsv: 6 }) */''}
</head>
<body style="position: relative;">
    ${/* Google Analytics */''}
    ${process.env.IS_VITE === 'true' ? '' : GTag({ nonce, gtmId: 'G-5ZY8Y6X2C4'})}
    ${/* Google Tag Manager */''}
    ${process.env.IS_VITE === 'true' ? '' : GTMBody({ nonce, gtmId: 'GTM-MBG56M'})}
    ${content}
    ${/* DOS Theme Code for https://iegik.github.io */''}
    ${Script({ srcDoc: './src/lib/dos-theme.js', iife: 'document, toggleDosStyle, "/1990/styles.min.css"', nonce, prefix: `const nonce = '${nonce}';\n` })}
    ${Script({ srcDoc: './src/lib/my-portfolio.js', nonce, })}
    ${Sentry({
        nonce,
        projectId: "179618f1f04d4d9dac08acc750d5736c",
        dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
        release: `1250596@${release}`,
        environment: "production",
        integrity: 'sha384-6yzL+SsRi1vefLAU9+yqKb0YIeAiJ6GsCob5LxN8Af29Ze1Q5iCg0Ur2fwFroEqa'
    })}
`;

writeFileSync('public/index.html', `${DOCTYPE}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    <!--meta http-equiv="REFRESH" content="0;URL=1990/"-->
    ${/*<link rel="stylesheet" id="/1990/styles.min.css" href="/1990/styles.min.css">*/''}
    <style nonce="${nonce}" id="/1990/styles.min.css">${style}</style>
    ${Script({ srcDoc: './src/lib/router-1990.min.js', nonce })}
    ${/* Google Tag Manager */''}
    ${process.env.IS_VITE === 'true' ? '' : GTMHead({ nonce, gtmId: 'GTM-MBG56M'})}
</head>
<body id="root">
    ${/* Google Analytics */''}
    ${process.env.IS_VITE === 'true' ? '' : GTag({ nonce, gtmId: 'G-5ZY8Y6X2C4'})}
    ${/* Google Tag Manager */''}
    ${process.env.IS_VITE === 'true' ? '' : GTMBody({ nonce, gtmId: 'GTM-MBG56M'})}
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
                      <font size="1" color="gray">You will be redirected to the new page shortly. If not, click <a id="url" href="1990/">here</a>.</font>
`);
writeFileSync('public/1990/index.html', `${DOCTYPE}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Loading...</title>
    ${/*<link rel="stylesheet" id="/1990/styles.min.css" href="/1990/styles.min.css">*/''}
    <style nonce="${nonce}" id="/1990/styles.min.css">${style}</style>
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
                          <td width="1px" valign="bottom"><font size="1"><marquee scrollamount="5" behavior="scroll"><pre>▁▁▃▃▅▅▆▆▇▇██</pre></marquee></font>
                          <td><font size="3" weight="bold">Loading...</font>
                      </table>
                      <font size="1" color="lightgray">301 Redirect</font><br>
                      <font size="1" color="gray">You will be redirected to the new page shortly. If not, click <a id="url" href="/1990/mobile/">here</a>.</font>
                      <p>
                        <a href="/1990/desktop/">DESKTOP</a> |
                        <a href="/1990/mobile/">MOBILE</a>
`);

const Portfolio = () => `<my-portfolio></my-portfolio>`

writeFileSync('public/1990/desktop/index.html', Page(Layout([
    TopNav(),
    DesktopView(),
    Footer(),
])));

writeFileSync('public/1990/mobile/index.html', Page(Layout([
    TopNav(),
    MobileView(),
    Footer(),
])));
writeFileSync('public/portfolio/index.html', Page(Portfolio()));

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
