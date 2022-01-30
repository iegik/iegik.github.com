// import '@app/lib/ga';
// import '@app/lib/clouds';

import slotmachine from '@app/components/core/slotmachine'
import Header from '@app/components/header/header'
import Icon from '@app/components/icon/icon'
import LinkList from '@app/components/link-list/link-list'

const Home = () => `
    ${Header()}
    <article lang="en">
      <section id="home" itemscope itemtype="http://schema.org/Person">
        <header>
          <h2 itemprop="name" class="h2"><span itemprop="givenName">Artūrs</span> <span itemprop="familyName">Jansons</span></h2>
          <span itemprop="jobTitle" class="subtitle">Full-stack web developer</span>
            <br>
            <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="addressLocality">St. Petersburg</span>,</span>
            <a href="callto:0079213900737"><i class="fa fa-whatsapp"></i><span itemprop="telephone">+7-921-390-07-37</span></a>
            <a href="mailto:a.jansons+github@gmail.com?title=iegik.github.io:contact" itemprop="email">a.jansons@gmail.com</a>
          ${LinkList({
    squire: true,
    children: [
      `<a class="link-list__link" href="http://linkedin.com/in/iegik" title="LinkedIn">${Icon({ name: "linkedin-icon", className: 'link-list__icon' })}</a>`,
      `<a class="link-list__link" href="http://github.com/iegik" title="GitHub">${Icon({ name: "github-icon", className: 'link-list__icon' })}</a>`,
      `<a class="link-list__link" href="http://profile.codersrank.io/user/iegik" title="Coders Rank">${Icon({ name: "codersrank-icon", className: 'link-list__icon' })}</a>`,
      `<a class="link-list__link" href="http://jsfiddle.net/user/iegik" title="JSFiddle">${Icon({ name: "jsfiddle-icon", className: 'link-list__icon' })}</a>`,
      `<a class="link-list__link" href="http://stackoverflow.com/users/771471/iegik" title="Stack Overflow">${Icon({ name: "stackoverflow-icon", className: 'link-list__icon' })}</a>`,
    ],
  })}
          <div class="network">
          </div>
        </header>
      </section>
    </article>
    <footer>
      ${slotmachine()}
    </footer>
  `
if (window?.document) {
  document.getElementById('root').innerHTML = Home()
}

export default Home
