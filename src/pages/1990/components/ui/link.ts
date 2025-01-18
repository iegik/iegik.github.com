export const Link = (props: LinkProps) => `<a ${/^http/.test(props.href) ? ' rel="noopener noreferrer"' : ''} href="${props.href}" title="${props.title}">${props.title}</a>`
