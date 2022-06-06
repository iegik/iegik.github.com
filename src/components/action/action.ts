import { createRef } from '@app/components/core/view';

interface Props {
  className?: string;
  children?: string[];
  tag?: string;
  onClick?: (event: Event) => void;
}

const Action:FC<Props> = (props) => {
  const { className = '', children, tag = 'button', onClick } = props
  const ref = createRef();

  setTimeout(() => {
    if (onClick) ref.current?.addEventListener('click', onClick);
  });

  return `
      <${tag} class="${className}" ref="${ref}">
        ${children?.join('')}
      </${tag}>
    `
}

export default Action