import { createRef } from '@app/components/core/view';
interface LinkProps {
  className?: string;
  children?: string[];
  tag?: string;
  to?: string;
  title?: string;
  onClick?: () => void;
}

const Link: FC<LinkProps> = (props = {}) => {
  const {
    className = 'link',
    children,
    tag = 'a',
    to = '#',
    title = '',
    onClick,
  } = props;
  const ref = createRef();

  setTimeout(() => {
    if (onClick && ref.current) {
      ref.current.addEventListener('click', onClick);
    }
  });

  return `
      <${tag} class="${className} link" href="${to}" title="${title}" ref="${ref}">
        ${children?.join?.('')}
      </${tag}>
    `;
};

export default Link;
