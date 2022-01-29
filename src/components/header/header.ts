import Image from '@app/components/image/image'
import ascii from '@assets/home/images/artursjansons.ascii'

const Header = () => `
    <header class="header">
      <a href="#home" class="header__avatar" alt="avatar">${Image({ itemprop: "photo", src: `home/images/artursjansons.jpg`, width: 511, height: 511, alt: ascii })}</a>
    </header>
  `
export default Header