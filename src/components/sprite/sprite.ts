import icons from '@app/icons'

const xmlns = 'https://www.w3.org/2000/svg'

export const spriteMap = new Map()

const Sprite = () => `
  <svg xmlns="${xmlns}" display="none">
  ${Object.entries(icons).map(([name, icon]) => {
    spriteMap.set(name, { viewBox: icon.match(/viewBox="([^"]+)"/i)[1] })
    return icon
      .replace(`xmlns="${xmlns}"`, `id="sprite-${name}"`)
      .replaceAll(/\bsvg\b/g, 'symbol');
  })}
  </svg>
`

export default Sprite
