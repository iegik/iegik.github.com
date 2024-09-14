'use strict'
/* global window, process, navigation */
// @deno-types='@app/types.d'
import Error403Page from '@app/pages/error/error-403'
import Error404Page from '@app/pages/error/error-404'
import Error500Page from '@app/pages/error/error-500'
import * as log from '@app/services/log';
import { getRoute } from '@app/services/web-utils';

const Test = () => {
  addEventListener('DOMContentLoaded', () => {
    log.error(new Error('Some error test'))
  })
  setTimeout(() => {
    log.error(new Error('Throw error on setTimeout'))
  });
  Promise.reject(new Error('Throw error on promise')).catch((e) => {console.error(e)})
  log.error(new Error('Throw error immediately'))
  return `Some error test`
}

const Default = () => {
  setTimeout(() => {
    const nextUrl = window.innerWidth < 768
    ? "/1990/mobile/"
    : "/1990/desktop/"

    const url = document.getElementById('url') as HTMLAnchorElement | undefined;
    if (url) url.href = nextUrl;
    window.location.href.includes(nextUrl) || (window.location.href = nextUrl)
  }, 1e3);
}

// TODO: Move route to services
const route = (uri = '/') => {
  log.info(`Loading ${uri}`)
  try {
    switch (true) {
      case /\/test\/?$/.test(uri): return Test()
      // Default redirect
      case /^\/1990\/?$/.test(uri):
      case /^\/$/.test(uri): return Default()
      case uri === '/403/' || uri === '/403': return Error403Page()
      default: return Error404Page();
    }
  } catch (e) {
    // @ts-ignore
    const error = e instanceof Error ? e : { message: e?.message || e } as Error
    return Error500Page(error);
  }
}

const onError = (e: ErrorEvent): void => {
  // e.preventDefault();
  const { error } = e;
  log.error(error)
}

const main = () => {
  const path = getRoute()
  if (!path) return
  // if (location.pathname === path) return
  const out = route(path)
  if (!out) return
  if (typeof window === 'undefined') return
  if (window?.document) {
    addEventListener('error', onError)
    const root = document.getElementById('root')
    if (root == null) return;
    root.innerHTML = out
  }
}

// navigation?.addEventListener('navigate', main);
addEventListener('DOMContentLoaded', main)
addEventListener("hashchange", main);
