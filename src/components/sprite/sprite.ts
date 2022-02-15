import icons from '@app/icons'

const xmlns = 'https://www.w3.org/2000/svg'

const Sprite = () => `
  <svg xmlns="${xmlns}" display="none">
  ${Object.entries(icons).map(([name, icon]) => icon
    .replace(`xmlns="${xmlns}"`, `id="sprite-${name}"`)
    .replaceAll(/\bsvg\b/g, 'symbol')
  ).join('')}
  </svg>
`

export default Sprite
