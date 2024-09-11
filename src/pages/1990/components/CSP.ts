type CSPContentProps = { nonce: string; }
const CSPContent = ({ nonce }: CSPContentProps) => Object.entries({
  'script-src': [
    `'nonce-${nonce}'`,
    `'strict-dynamic'`,
    `https://www.google-analytics.com`,
    `https://ssl.google-analytics.com`,
    `https://static.hotjar.com`,
    `https://js.sentry-cdn.com`,
    // `'unsafe-inline'`, // (ignored by browsers supporting nonces/hashes) to be backward compatible with older browsers.
  ],
  'img-src': [
    `'self'`,
    `https://www.google-analytics.com`,
    `https://avatars.githubusercontent.com/`,
    `https://www.googletagmanager.com/`,
  ],
  'connect-src': [
    `'self'`,
    `https://www.google-analytics.com`,
    `https://region1.google-analytics.com`,
    `https://in.hotjar.com`,
    `wss://ws.hotjar.com`,
    `https://static.hotjar.com`,
    `https://content.hotjar.io`,
    `https://github.com/login/oauth/access_token`,
    `https://api.github.com/graphql`,
    `https://api.github.com/user`,
    `https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/`,
    `https://o171820.ingest.sentry.io/`,
  ],
  'style-src': [
    `'nonce-${nonce}'`,
    `https://static.hotjar.com`,
    // `'unsafe-inline'`,
  ],
  'object-src': [`'none'`],
  'base-uri': [`'none'`],
  'frame-src': [`https://vars.hotjar.com/`],
  'script-src-elem': [
    `'nonce-${nonce}'`,
    `'self'`,
    'https://script.hotjar.com/modules.8da33a8f469c3b5ffcec.js',
    'https://script.hotjar.com/browser-perf.8417c6bba72228fa2e29.js',
    'https://script.hotjar.com/sentry.58c81e3e25532810f6fd.js'
    // `'unsafe-inline'`
  ]
}).reduce((acc, [key, val]) => `${acc};${key} ${val.join(' ')}`, `default-src 'self'`);

export const CSP = ({ nonce }: CSPContentProps) => `<meta http-equiv="Content-Security-Policy" content="${CSPContent({ nonce })}">`
