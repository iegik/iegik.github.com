const mask = /.(png|jpg)$/
const jpg = /.jpg$/
const png = /.png$/

export default (props) => {
  const { src, ratio, loading, alt = '', itemprop  } = props;
  const [width, height] = ratio.split(':')

  if (jpg.test(src)) {
    return `
      <picture>
        <source type="image/webp" srcset="${src.replace(mask,'.webp')}" />
        <source type="image/jpeg" srcset="${src.replace(mask,'.jpg')}" />
        <img src="${src.replace(mask,'.png')}" width="${width}" height="${height}" loading="${loading}" alt="${alt}" itemprop="${itemprop}" />
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
