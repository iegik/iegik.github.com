export const getRoute = () => {
  const { protocol, hash, pathname } = document.location
  const path = `${pathname.replace('index.html', '')}${hash.slice(2)}` // /path1#/path2
  return path
}

export const escapeHTML = (unsafe: string) => unsafe.replace(/[&<"']/g, (m) => {
  switch (m) {
    case '&':
      return '&amp;';
    case '<':
      return '&lt;';
    case '"':
      return '&quot;';
    default:
      return '&#039;';
  }
});