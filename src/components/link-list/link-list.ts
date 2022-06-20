const LinkList = (props): string => {
  const { className = '', children, squire, tag = 'div' } = props
  let classList = `link-list`
  if (className) classList += ` ${className}`
  if (squire) classList += ' link-list--squire'

  return `
      <${tag} class="${classList}">
        ${children?.map((link) => `<div class="link-list__item">${link}</div>`).join('')}
      </${tag}>
    `
}

export default LinkList
