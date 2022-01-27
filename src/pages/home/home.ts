// import '@app/lib/ga';
// import '@app/lib/clouds';

import slotmachine from '@app/components/core/slotmachine'
import Header from '@app/components/header/header'

const Home = () => `
    ${Header()}
    <article lang="en">
      <section id="home" itemscope itemtype="http://schema.org/Person">
        <header>
          <h2 itemprop="name" class="h2"><span itemprop="givenName">Artūrs</span> <span itemprop="familyName">Jansons</span></h2>
          <span itemprop="jobTitle" class="subtitle">Full-stack web developer</span><br><span itemprop="address" itemscope
            itemtype="http://schema.org/PostalAddress"><span itemprop="addressLocality">St. Petersburg</span>,</span> <a
            href="callto:0079213900737"><span itemprop="telephone">+7-921-390-07-37</span></a> <a
            href="skype:jansons.a?info"><i class="fa fa-skype"></i></a> <a
            href="mailto:a.jansons+github@gmail.com?title=iegik.github.io:contact" itemprop="email">a.jansons@gmail.com</a>
          <div class="network"><a href="http://linkedin.com/in/iegik"><i class="fa fa-linkedin-square"></i></a> <a
              href="http://github.com/iegik"><i class="fa fa-github-alt"></i></a> <a
              href="http://jsfiddle.net/user/iegik"><i class="fa fa-jsfiddle"></i></a> <a
              href="http://facebook.com/iegik"><i class="fa fa-facebook-square"></i></a> <a
              href="http://stackoverflow.com/users/771471/iegik"><i class="fa fa-stack-overflow"></i></a> <a
              href="http://winlinmac.tumblr.com/"><i class="fa fa-tumblr-square"></i></a>
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
