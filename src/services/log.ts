import Error403Page from '@app/pages/error/error-403.ts'
import Error404Page from '@app/pages/error/error-404.ts'
import Error500Page from '@app/pages/error/error-500.ts'
import { ERROR_ACCESS_TOKEN, ERROR_NOT_FOUND } from '@app/components/core/constants.ts';

const isProd = typeof window === 'undefined' ? false : window.process?.env?.NODE_ENV === 'production'

export const error = (error) => {
  // console.error(error)
  if (typeof window === 'undefined') return;

  // Send logs to Sentry
  if (isProd && window.Sentry) Sentry.captureException(error);

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
  root.innerHTML = Error500Page(error)
  return;
}

// @eslint-disable-next-line no-console
export const debug = isProd ? () => {} : (...args) => { console.debug(...args); }
// @eslint-disable-next-line no-console
export const warn = isProd ? () => {} : (...args) => { console.warn(...args); }
// @eslint-disable-next-line no-console
export const info = isProd ? () => {} : (...args) => { console.info(...args); }
