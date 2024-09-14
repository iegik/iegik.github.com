/**
 * You can validate the result of CSP here: https://csp-evaluator.withgoogle.com/
 */
type CSPContentProps = { nonce: string; }
const CSPContent = ({ nonce }: CSPContentProps) => Object.entries({
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
  'script-src': [
    `'nonce-${nonce}'`,
    `'strict-dynamic'`,
    `https://www.google-analytics.com`,
    `https://ssl.google-analytics.com`,
    'https://static.hotjar.com',
    'https://script.hotjar.com',
    `https://js.sentry-cdn.com`,
    `'unsafe-inline'`, // (ignored by browsers supporting nonces/hashes) to be backward compatible with older browsers.
  ],
  'img-src': [
    `'self'`,
    `https://www.google-analytics.com`,
    `https://avatars.githubusercontent.com/`,
    `https://www.googletagmanager.com/`,
    'https://static.hotjar.com',
    'https://survey-images.hotjar.com',
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
    `https://o171820.ingest.sentry.io/`,
  ],
  'style-src': [
    `'self'`,
    `'nonce-${nonce}'`,
    `https://static.hotjar.com`,
    // `'unsafe-inline'`,
  ],
  'object-src': [`'none'`],
  'base-uri': [`'none'`],
  'frame-src': [`https://vars.hotjar.com/`],
  'script-src-elem': [
    `'self'`,
    `'nonce-${nonce}'`,
    'https://script.hotjar.com'
    // `'unsafe-inline'`
  ]
}).reduce((acc, [key, val]) => `${acc};${key} ${val.join(' ')}`, `default-src 'self'`);

export const CSP = ({ nonce }: CSPContentProps) => `<meta http-equiv="Content-Security-Policy" content="${CSPContent({ nonce })}">`
