/* global window, process, navigation */
// @deno-types='@app/types.d'
import Home from '@app/pages/home/home'
import Login from '@app/pages/login/login'
import View from '@app/components/core/view'
import servicesMap from '@app/services/index';
import Error403Page from '@app/pages/error/error-403'
import Error404Page from '@app/pages/error/error-404'
import Error500Page from '@app/pages/error/error-500'
import * as log from '@app/services/log';
import { getRoute } from '@app/services/web-utils';

const Test = () => {
  setTimeout(() => {
    log.error(new Error('Some error test'))
  });
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
      case /^\/next\/login\/?$/.test(uri): return Login()
      case /^\/next\/oauth\/?$/.test(uri): return View({ children: ['Loading...'], services: ['oauth']})
      case /^\/next\/profile\/?$/.test(uri): return View({ children: ['Loading...'], component: 'View', className: 'user-info', services: ['userInfo']})
      case /^\/next\/editor\/?$/.test(uri): return View({ children: ['Loading...'], services: ['editor']})
      // case /^\/next\/preview1\/?$/.test(uri): return View({ children: ['Loading...'], services: ['preview']})
      case /^\/next\/preview\/?$/.test(uri): return View({ children: ['Loading...'], services: ['preview']})
      // case /^\/next\/error\/?$/.test(uri): return View({ children: ['Loading...'], services: ['error']})
      case /^\/next(\/home)?\/?$/.test(uri): return Home()
      case /^\/test\/?$/.test(uri): return Test()
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
    if (root.innerHTML === out) return;
    root.innerHTML = out
  }
}

// navigation?.addEventListener('navigate', main);
addEventListener('DOMContentLoaded', main)
addEventListener("hashchange", main);

// @ts-ignore
window.servicesMap = servicesMap
