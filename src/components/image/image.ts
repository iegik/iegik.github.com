const typesMap = {
  'image/webp': 'webp',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

interface SourcesProps {
  types: string;
  sizes: string;
  src: string;
}
const sourcesDefaults = { types: '', sizes: '', src: '' }
const Sources:FC<SourcesProps> = ({ types, sizes, src } = sourcesDefaults) => Object.entries(typesMap)
  .filter(([_, ext]) => types.includes(ext))
  .flatMap(([type, ext]) => `
    <source type="${type}" srcset="${sizes.split(',').map((w:string) => src.replace(new RegExp(`.(${types})$`), `_${w}.${ext} ${w}w`))}" />
  `)
  .join('')

interface ImageProps {
  src:string;
  ratio:string;
  sizes:string;
  types:string;
  alt?:string;
  itemprop?:string;
}

const Image:FC<ImageProps> = (props) => {
  if (!props) return ''
  const { src, ratio, sizes, types = 'png|webp', alt = '', itemprop = ''  } = props;
  const [width, height] = ratio.split(':')

  return `
    <picture>
      ${Sources({ types, sizes, src })}
      <img src="${types.includes('webp') ? src.replace(/\..*$/, '.webp') : src}" width="${width}" height="${height}" alt="${alt}" itemprop="${itemprop}" />
    </picture>
  `
}

export default Image
