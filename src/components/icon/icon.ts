import { createRef } from '@app/components/core/view';
import { spriteMap } from '@app/components/Sprite';

const Icon = ({ className, name }) => {
  const ref = createRef();

  setTimeout(() => {
    if (typeof window === 'undefined') return;

    const viewBox = document.getElementById(`sprite-${name}`).getAttribute('viewBox')
    ref.current.setAttribute('viewBox', viewBox)
  })

  return `
    <svg class="${className}" preserveAspectRatio="xMidYMid meet" viewBox="${spriteMap.get(name)?.viewBox || '0 0 0 0'}" ref="${ref}">
      <use xlink:href="#sprite-${name}" />
    </svg>
  `
}

export default Icon
