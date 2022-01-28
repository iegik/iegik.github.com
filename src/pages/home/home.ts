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
          <span itemprop="jobTitle" class="subtitle">Full-stack web developer</span>
            <br>
            <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="addressLocality">St. Petersburg</span>,</span>
            <a href="callto:0079213900737"><i class="fa fa-whatsapp"></i><span itemprop="telephone">+7-921-390-07-37</span></a>
            <a href="mailto:a.jansons+github@gmail.com?title=iegik.github.io:contact" itemprop="email">a.jansons@gmail.com</a>
          <div class="network">
            <a href="http://linkedin.com/in/iegik"><i class="fa fa-linkedin-square"></i>linkedin.com</a>
            <a href="http://github.com/iegik" title="GitHub"><i class="fa fa-github-alt"></i>github.com</a>
            <a href="http://jsfiddle.net/user/iegik" title="JSFiddle"><i class="fa fa-jsfiddle"></i>jsfiddle.net</a>
            <a href="http://stackoverflow.com/users/771471/iegik" title="Stack Overflow"><i class="fa fa-stack-overflow"></i>stackoverflow.com</a>
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
