export const getRoute = (e?: Event) => {
  const { protocol, hash, pathname } = new URL(`${e?.destination?.url || document.location}`)
  const path = `${pathname.replace('index.html', '')}${hash.slice(2)}` // /path1#/path2
  return path
}
