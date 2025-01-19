import { createRef } from '@app/components/core/view';
import { Fragment } from '@app/core/Fragment';

type Props = ActionProps & {
  onClick?: (event: Event) => void;
}

const Action: FC<Props> = (props = {}) => {
  const {
    className = '',
    children,
    tag = 'button',
    onClick,
    type,
  } = props;
  const ref = createRef();

  setTimeout(() => {
    if (onClick) ref.current?.addEventListener('click', onClick);
  });

  return `
      <${tag} class="${className}" ref="${ref}" type="${type}">
        ${Fragment({ children })}
      </${tag}>
    `;
};

export default Action;
