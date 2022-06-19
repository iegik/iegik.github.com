import Home from '@app/pages/home'
import Login from '@app/pages/login'
import Oauth from '@app/services/oauth'
import Profile from '@app/pages/profile'

const route = (uri) => {
  switch (true) {
    case /^\/login$/.test(uri): return Login
    case /^\/oauth$/.test(uri): return Oauth
    case /^\/profile$/.test(uri): return Profile
    default: return Home
  }
}

const onError = (err: Error): void => {
  if (err.code === 'ERR_BUFFER_OUT_OF_BOUNDS' ) {
    console.debug('Out of buffer bounds:')
    console.error(err)
    if (typeof process !== 'undefined') process.exit(1);
    return;
  } else if (err.code === 'ERR_ASSERTION' ) {
    console.debug('Assert error:')
    console.error(err)
    if (typeof process !== 'undefined') process.exit(1);
    return;
  }
  console.debug('Error handled:')
  console.error(err)
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
    console.debug('pushState', { target })
    // trigger here what you need
    return target.apply(thisArg, argArray);
  },
});

if (typeof process !== 'undefined') process.on('uncaughtException', onError);
navigation.addEventListener('navigate', main);
main()
