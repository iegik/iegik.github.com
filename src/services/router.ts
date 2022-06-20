import Home from '@app/pages/home'
import Login from '@app/pages/login'
import Oauth from '@app/services/oauth'
import Profile from '@app/pages/profile'
import Error403Page from '@app/pages/error/error-403'
import Error404Page from '@app/pages/error/error-404'
import Error500Page from '@app/pages/error/error-500'

import { ERROR_ACCESS_TOKEN } from '@app/components/core/constants';

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
  if (error.code === 'ERR_BUFFER_OUT_OF_BOUNDS' ) {
    // console.debug('Out of buffer bounds:')
    // console.error(error)
    if (typeof process !== 'undefined') process.exit(1);
    return;
  }
  if (error.code === 'ERR_ASSERTION' ) {
    // console.debug('Assert error:')
    // console.error(error)
    if (typeof process !== 'undefined') process.exit(1);
    return;
  }
  if (error.message === ERROR_ACCESS_TOKEN) {
    // console.debug('Access token error handled:')
    // console.error(error)
    document.getElementById('root').innerHTML = Error403Page(error)
    return
  }
  // console.debug('Error handled:')
  // console.error(error)
  document.getElementById('root').innerHTML = Error500Page(error)
}

const main = (e) => {
  if (window?.document) {
    const { protocol, hash } = new URL(e?.destination?.url || document.location)
    const path = hash.slice(1)
    addEventListener('error', onError)
    document.getElementById('root').innerHTML = route(path)()
  }
}

window.history.pushState = new Proxy(window.history.pushState, {
  apply: (target, thisArg, argArray) => {
    // console.debug('pushState', { target })
    main()
    return target.apply(thisArg, argArray);
  },
});

if (typeof process !== 'undefined') process.on('uncaughtException', onError);
navigation.addEventListener('navigate', main);
main()
