const mask = /.(png|jpg)$/
const jpg = /.jpg$/
const png = /.png$/

const types = {
  'image/webp': 'webp',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

export default (props) => {
  const { src, ratio, sizes, loading, alt = '', itemprop  } = props;
  const [width, height] = ratio.split(':')

  if (jpg.test(src)) {
    return `
      <picture>
        ${Object.entries(types).map(([type, ext]) => `<source type="${type}" srcset="${sizes.split(',').map((w) => src.replace(mask,`_${w}.${ext} ${w}w`))}" />`).join('')}
        <img src="${src}" width="${width}" height="${height}" loading="${loading}" alt="${alt}" itemprop="${itemprop}" />
      </picture>
    `
  }

  if (png.test(src)) {
    return `
      <picture>
        <source type="image/webp" srcset="${src.replace(mask,'.webp')}" />
        <img src="${src.replace(mask,'.png')}" width="${width}" height="${height}" loading="${loading}" alt="${alt}" itemprop="${itemprop}" />
      </picture>
    `
  }
}
