import Image from '@app/components/image/image'
import ascii from '@assets/home/images/artursjansons.ascii'

const Header:FC = () => `
    <header class="header">
      <a href="#home" class="header__avatar" alt="avatar">${Image({ itemprop: "photo", src: `home/images/artursjansons.jpg`, ratio: "1:1", sizes: "255,216,64", types: 'jpg|png|webp', alt: ascii })}</a>
    </header>
  `
export default Header