import Image from '@app/components/image/image'
const Header = () => `
    <header class="header">
      <a href="#home" class="header__avatar">${Image({ itemprop: "photo", src: `home/images/artursjansons.jpg`, width: 511, height: 511, alt: '[artursjansons]' })}</a>
    </header>
  `
export default Header