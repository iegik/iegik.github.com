import Image from '@app/components/image/image';
import * as log from '@app/services/log';
import { imageToColorfulASCII } from '@app/components/header/imageToColorfulASCII';
// import ascii from '@assets/images/artursjansons.ascii';
const ascii = require('@assets/images/artursjansons.ascii');

const Header: FC<{}> = () => {
  setTimeout(async () => {
    const ascii = await imageToColorfulASCII('/images/artursjansons.jpg')
    log.log(...ascii);
  });
  return `
    <header class="header">
      <a href="#/home" class="header__avatar" alt="avatar">${Image({
        itemprop: 'photo',
        src: '/images/artursjansons.jpg',
        ratio: '1:1',
        sizes: '432,216,64',
        types: 'jpg|png|webp',
        alt: ascii,
      })}</a>
    </header>
  `;
};
export default Header;
