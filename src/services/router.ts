/* global window, process, navigation */
// @deno-types='@app/types.d'
import Home from '@app/pages/home/home'
import Login from '@app/pages/login/login'
import View from '@app/components/core/view'
import * as log from '@app/services/log';
import { getRoute } from '@app/services/web-utils';

import { ERROR_NOT_FOUND } from '@app/components/core/constants';

// TODO: Move route to services
const route = (uri = '/') => {
  log.info(`Loading ${uri}`)
  switch (true) {
    case /^\/login\/?$/.test(uri): return Login()
    case /^\/oauth\/?$/.test(uri): return View({ children: ['Loading...'], services: ['oauth']})
    case /^\/profile\/?$/.test(uri): return View({ children: ['Loading...'], component: 'View', className: 'user-info', services: ['userInfo']})
    case /^\/editor\/?$/.test(uri): return View({ children: ['Loading...'], services: ['editor']})
    // case /^\/preview1\/?$/.test(uri): return View({ children: ['Loading...'], services: ['preview']})
    case /^\/preview\/?$/.test(uri): return View({ children: ['Loading...'], services: ['preview']})
    // case /^\/error\/?$/.test(uri): return View({ children: ['Loading...'], services: ['error']})
    case uri === '/' || uri === '': return Home()
    default: throw Error(ERROR_NOT_FOUND)
  }
}

const onError = (e: ErrorEvent): void => {
  // e.preventDefault();
  const { error } = e;
  log.error(error)
}

const main = () => {
  const path = getRoute()
  if (typeof window === 'undefined') return
  if (window?.document) {
    addEventListener('error', onError)
    const root = document.getElementById('root')
    if (root == null) return;
    root.innerHTML = route(path)
  }
}

// window.history.pushState = new Proxy(window.history.pushState, {
//   apply: (target, thisArg, argArray) => {
//     main()
//     return target.apply(thisArg, argArray);
//   },
// });

// navigation?.addEventListener('navigate', main);
main()
