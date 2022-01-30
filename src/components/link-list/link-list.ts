const LinkList = (props): string => {
  const { className, children, squire } = props
  let classList = `link-list`
  if (className) classList += ` ${className}`
  if (squire) classList += ' link-list--squire'

  return `
      <div class="${classList}">
        ${children?.map((link) => `<div class="link-list__item">${link}</div>`).join('')}
      </div>
    `
}

export default LinkList
