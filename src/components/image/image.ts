const typesMap = {
  'image/webp': 'webp',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

const Sources = ({ types, sizes, src }) => Object.entries(typesMap)
  .filter(([_, ext]) => types.includes(ext))
  .flatMap(([type, ext]) => `
    <source type="${type}" srcset="${sizes.split(',').map((w) => src.replace(new RegExp(`.(${types})$`), `_${w}.${ext} ${w}w`))}" />
  `)
  .join('')

const Image = (props) => {
  const { src, ratio, sizes, types = 'png|webp', loading, alt = '', itemprop, className = ''  } = props;
  const [width, height] = ratio.split(':')

  return `
    <picture class="${className}">
      ${Sources({ types, sizes, src })}
      <img src="${types.includes('webp') ? src.replace(/\..*$/, '.webp') : src}" width="${width}" height="${height}" loading="${loading}" alt="${alt}" itemprop="${itemprop}" />
    </picture>
  `
}

export default Image
