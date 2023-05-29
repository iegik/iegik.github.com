// import '@app/lib/clouds';

import SlotMachine from '@app/components/core/slot-machine'
import Header from '@app/components/header/header'
import Icon from '@app/components/icon/icon'
import Link from '@app/components/link/link'
import LinkList from '@app/components/link-list/link-list'

const Home = () => `
    ${Header()}
    <article lang="en">
      <section id="home" itemscope itemtype="https://schema.org/Person">
        <header>
          <h2 itemprop="name" class="h2">
            <span itemprop="givenName">Artūrs</span>
            <span itemprop="familyName">Jansons</span>
          </h2>
          <span itemprop="jobTitle" class="subtitle">Software Developer</span>
          <br>
            ${/*<span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress"><span itemprop="addressLocality">🏴 St.Petersburg, Russia</span></span>*/ ''}
            ${/*<a href="callto:+79213900737"><i class="fa fa-whatsapp"></i><span itemprop="telephone">+7-921-39-00-737</span></a>*/ ''}
            ${/*<a href="mailto:artur.janson+github@yandex.ru?title=iegik.github.io:contact" itemprop="email">artur.janson@yandex.ru</a>*/ ''}
          ${LinkList({
    squire: true,
    children: [
      Link({ to: 'https://linkedin.com/in/iegik', title: 'LinkedIn', children: [Icon({ name: "linkedin-icon", className: 'link-list__icon' })]}),
      Link({ to: 'https://github.com/iegik', title: 'GitHub', children: [Icon({ name: "github-icon", className: 'link-list__icon' })]}),
      Link({ to: 'https://profile.codersrank.io/user/iegik', title: 'Coders Rank', children: [Icon({ name: "codersrank-icon", className: 'link-list__icon' })]}),
      Link({ to: 'https://jsfiddle.net/user/iegik', title: 'JSFiddle', children: [Icon({ name: "jsfiddle-icon", className: 'link-list__icon' })]}),
      Link({ to: 'https://stackoverflow.com/users/771471/iegik', title: 'Stack Overflow', children: [Icon({ name: "stackoverflow-icon", className: 'link-list__icon' })]}),
    ],
  })}
          <div class="network">
            ${Link({ to: '/login/', title: 'Login', children: ['🚪'] })}
          </div>
        </header>
      </section>
    </article>
    <footer>
      ${SlotMachine()}
    </footer>
  `

export default Home
