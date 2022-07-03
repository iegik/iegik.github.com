import Error403Page from '@app/pages/error/error-403.ts'
import Error404Page from '@app/pages/error/error-404.ts'
import Error500Page from '@app/pages/error/error-500.ts'
import { ERROR_ACCESS_TOKEN, ERROR_NOT_FOUND } from '@app/components/core/constants.ts';

export const error = (error) => {
  // console.error(error)
  if (typeof window === 'undefined') return;

  // Send logs to Sentry
  if (window.Sentry) Sentry.captureException(error);

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
export const debug = (...args) => {}; // console.debug(...args)
export const warn = (...args) => {}; // console.warn(...args)
export const info = (...args) => {}; // console.info(...args)
