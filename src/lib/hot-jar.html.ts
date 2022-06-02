const HotJar = ({ hjid, hjsv, nonce }) => `
    <script async nonce="${nonce}" src="https://static.hotjar.com/c/hotjar-${hjid}.js?sv=${hjsv}"></script>
    <script async nonce="${nonce}">window._hjSettings={hjid:${hjid},hjsv:${hjsv}};</script>
`

export default HotJar