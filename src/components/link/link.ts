interface Props {
  className?: string;
  children?: string | string[]
  tag?: string
  to?: string
  title?: string
}

const Link:FC<Props> = (props) => {
  const { className, children, tag = 'a', to = '#', title = ''} = props

  return `
      <${tag} class="${className} link" href="${to}" title="${title}">
        ${children?.join('')}
      </${tag}>
    `
}

export default Link
