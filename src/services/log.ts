import Error403Page from '@app/pages/error/error-403'
import Error404Page from '@app/pages/error/error-404'
import Error500Page from '@app/pages/error/error-500'
import { ERROR_ACCESS_TOKEN, ERROR_NOT_FOUND } from '@app/components/core/constants';

const isProd = false

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
  // console.error(error)
  if (typeof window === 'undefined') return;

  // Send logs to Sentry
  if (isProd && typeof Sentry !== 'undefined') Sentry.captureException(error);

  const root = document.getElementById('root')
  if (root == null) return;
  if (error.message === ERROR_NOT_FOUND) {
    root.innerHTML = Error404Page(error)
    return;
  }
  if (error.message === ERROR_ACCESS_TOKEN) {
    root.innerHTML = Error403Page(error)
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
