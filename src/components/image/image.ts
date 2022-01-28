const mask = /.(png|jpg)$/

export default (props) => {
  const { src, width, height, loading, alt = '', itemprop  } = props;

  if (/.jpg$/.test(src)) {
    return `
      <picture>
        <source type="image/webp" srcset="${src.replace(mask,'.webp')}" />
        <source type="image/jpeg" srcset="${src.replace(mask,'.jpg')}" />
        <img src="${src.replace(mask,'.png')}" width="${width}" height="${height}" loading="${loading}" alt="${alt}" itemprop="${itemprop}" />
      </picture>
    `
  }

  if (/.png$/.test(src)) {
    return `
      <picture>
        <source type="image/webp" srcset="${src.replace(mask,'.webp')}" />
        <img src="${src.replace(mask,'.png')}" width="${width}" height="${height}" loading="${loading}" alt="${alt}" itemprop="${itemprop}" />
      </picture>
    `
  }
}
