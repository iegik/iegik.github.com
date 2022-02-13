// import '@app/lib/ga';
// import '@app/lib/clouds';

import slotmachine from '@app/components/core/slotmachine'
import Header from '@app/components/header'
import Icon from '@app/components/icon'
import Link from '@app/components/link'
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
      Link({ className: 'link-list__link', to: 'http://linkedin.com/in/iegik', title: 'LinkedIn', children: [Icon({ name: "linkedin-icon", className: 'link-list__icon' })]}),
      Link({ className: 'link-list__link', to: 'http://github.com/iegik', title: 'GitHub', children: [Icon({ name: "github-icon", className: 'link-list__icon' })]}),
      Link({ className: 'link-list__link', to: 'http://profile.codersrank.io/user/iegik', title: 'Coders Rank', children: [Icon({ name: "codersrank-icon", className: 'link-list__icon' })]}),
      Link({ className: 'link-list__link', to: 'http://jsfiddle.net/user/iegik', title: 'JSFiddle', children: [Icon({ name: "jsfiddle-icon", className: 'link-list__icon' })]}),
      Link({ className: 'link-list__link', to: 'http://stackoverflow.com/users/771471/iegik', title: 'Stack Overflow', children: [Icon({ name: "stackoverflow-icon", className: 'link-list__icon' })]}),
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

export default Home
