import { ERROR_ACCESS_TOKEN, ERROR_NOT_FOUND } from '@app/components/core/constants';

const isProd = process.env.NODE_ENV === 'production';

// const message = (...args: any[]): void => {
//   const { component } = args[0] || {}
//   const root = document.getElementById('root')
//   if (root !== null && componentMap[component] !== undefined) {
//     root.innerHTML = componentMap[component](...args)
//   };
//   if (isProd) return;
//   console[component](...args)
// }

export const error = (error: Error) => {
  console.error(error)
  if (typeof window === 'undefined') return;

  // Send logs to Sentry
  if (isProd && typeof Sentry !== 'undefined') Sentry.captureException(error);
  // @ts-ignore
  if (isProd && typeof window.dataLayer !== 'undefined') window.dataLayer.push({
    'event': 'issue',
    message: error.message,
    // @ts-ignore
    row: error.lineNumber || null,
    // @ts-ignore
    source: error.fileName || null,
    stack: error.stack,
  });

  if (error.message === ERROR_NOT_FOUND) {
    window.location.href = "/404";
    return;
  }
  if (error.message === ERROR_ACCESS_TOKEN) {
    window.location.href = "/403";
    return;
  }
  // root.innerHTML = Error500Page(error)
  return;
}

// eslint-disable-next-line no-console
export const debug = isProd ? () => {} : (...args:unknown[]) => { console.debug(...args); }
// eslint-disable-next-line no-console
export const warn = isProd ? () => {} : (...args:unknown[]) => { console.warn(...args); }
// eslint-disable-next-line no-console
export const info = isProd ? () => {} : (...args:unknown[]) => { console.info(...args); }
// eslint-disable-next-line no-console
export const log = isProd ? () => {} : (...args:unknown[]) => { console.log(...args); }
