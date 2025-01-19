import { Fragment } from "../core/fragment";

export const Action = ({
  name = '',
  title = '',
  type = 'button',
  l10n,
  children,
  services
}: ActionProps = { title: 'button' }) => `<input
  type="${type}"
  name="${name}"
  value="${l10n?.(name || title) || Fragment({ children }) || name || title}"
  ${services ? `onclick="[${services}].forEach((service) => service())"` : ''}
/>`
