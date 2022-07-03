/* global window, process, navigation */
// @deno-types='@app/types.d.ts'
import Home from '@app/pages/home/home.ts'
import Login from '@app/pages/login/login.ts'
import Oauth from '@app/services/oauth.ts'
import Profile from '@app/pages/profile/profile.ts'
import Error403Page from '@app/pages/error/error-403.ts'
import Error404Page from '@app/pages/error/error-404.ts'
import Error500Page from '@app/pages/error/error-500.ts'

import { ERROR_ACCESS_TOKEN } from '@app/components/core/constants.ts';

const route = (uri = '/') => {
  // console.info(`Loading ${uri}`)
  switch (true) {
    case /^\/login$/.test(uri): return Login
    case /^\/oauth$/.test(uri): return Oauth
    case /^\/profile$/.test(uri): return Profile
    case uri === '/' || uri === '': return Home
    default: return Error404Page
  }
}

const onError = ({ error }: ErrorEvent): void => {
  if (typeof window === 'undefined') return;
  const root = document.getElementById('root')
  if (root == null) return;
  if (error.message === ERROR_ACCESS_TOKEN) {
    // console.debug('Access token error handled:')
    // console.error(error)
    root.innerHTML = Error403Page(error)
    return;
  }
  // console.debug('Error handled:')
  // console.error(error)
  root.innerHTML = Error500Page(error)
}

const main = (e?: Event) => {
  if (window?.document) {
    const { protocol, hash, pathname } = new URL(`${e?.destination?.url || document.location}`)
    const path = `${pathname.replace('/index.html', '')}${hash.slice(1)}`
    addEventListener('error', onError)
    const root = document.getElementById('root')
    if (root == null) return;
    root.innerHTML = route(path)()
  }
}

window.history.pushState = new Proxy(window.history.pushState, {
  apply: (target, thisArg, argArray) => {
    main()
    return target.apply(thisArg, argArray);
  },
});

navigation?.addEventListener('navigate', main);
main()
