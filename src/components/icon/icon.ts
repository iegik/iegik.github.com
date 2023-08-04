import { createRef } from '@app/components/core/view';
import { spriteMap } from '@app/components/sprite/sprite';

interface IconProps {
  className?: string;
  name: string;
}

const Icon: FC<IconProps> = (
  { className, name } = { name: 'unknown' },
) => {
  const ref = createRef();

  setTimeout(() => {
    if (
      typeof window === 'undefined' ||
      typeof document === 'undefined'
    )
      return;

    const viewBox =
      document
        .getElementById(`sprite-${name}`)
        ?.getAttribute('viewBox') || '0 0 0 0';
    ref.current?.setAttribute('viewBox', viewBox);
  });

  return `
    <svg class="${className}" preserveAspectRatio="xMidYMid meet" viewBox="${
    spriteMap.get(name)?.viewBox || '0 0 0 0'
  }" ref="${ref}">
      <use xlink:href="#sprite-${name}" />
    </svg>
  `;
};

export default Icon;
