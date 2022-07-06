/* global window, process, navigation */
// @deno-types='@app/types.d.ts'
import Home from '@app/pages/home/home.ts'
import Login from '@app/pages/login/login.ts'
import View from '@app/components/core/view.ts'
import * as log from '@app/services/log.ts';
import { getRoute } from '@app/services/web-utils.ts';
import Profile from '@app/pages/profile/profile.ts'

import { ERROR_NOT_FOUND } from '@app/components/core/constants.ts';

const Loading = (props:ViewProps) => View({ children: ['Loading...'], ...props });

const route = (uri = '/') => {
  log.info(`Loading ${uri}`)
  switch (true) {
    case /^\/login\/?$/.test(uri): return Login()
    case /^\/oauth\/?$/.test(uri): return Loading({ services: ['oauth']})
    case /^\/profile\/?$/.test(uri): return Loading({ component: 'UserInfo', className: 'user-info', services: ['userInfo']})
    case /^\/editor\/?$/.test(uri): return Loading({ services: ['editor']})
    case /^\/preview\/?$/.test(uri): return Loading({ services: ['preview']})
    case uri === '/' || uri === '': return Home()
    default: throw Error(ERROR_NOT_FOUND)
  }
}

const onError = (e: ErrorEvent): void => {
  // e.preventDefault();
  const { error } = e;
  log.error(error)
}

const main = (e?: Event) => {
  const path = getRoute(e)
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
