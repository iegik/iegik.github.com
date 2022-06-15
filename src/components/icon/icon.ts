import { createRef } from '@app/components/core/view';
import { spriteMap } from '@app/components/Sprite';

const Icon = ({ className, name }) => `
  <svg class="${className}" preserveAspectRatio="xMidYMid meet" viewBox="${spriteMap.get(name)?.viewBox || '0 0 0 0'}">
    <use xlink:href="#sprite-${name}" />
  </svg>
`

export default Icon
