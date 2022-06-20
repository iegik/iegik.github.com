import Home from '@app/pages/home'
import Login from '@app/pages/login'
import Oauth from '@app/services/oauth'
import Profile from '@app/pages/profile'
import Link from '@app/components/link'

import { ERROR_ACCESS_TOKEN } from '@app/components/core/constants';

const route = (uri) => {
  switch (true) {
    case /^\/login$/.test(uri): return Login
    case /^\/oauth$/.test(uri): return Oauth
    case /^\/profile$/.test(uri): return Profile
    default: return Home
  }
}

const ErrorPage = ({ message, children }) => `
  <div style="display:grid;place-content:center;">
    <div style="border-radius: 5px;color: var(--color-error);background: var(--color-primary);padding: 1rem;">
      <p>⚠️ ${message}</p>
    </div>
    <nav style="display: inline-flex;">${children?.join('')}</nav>
  </div>
`

const onError = ({ error }: ErrorEvent): void => {
  if (error.code === 'ERR_BUFFER_OUT_OF_BOUNDS' ) {
    console.debug('Out of buffer bounds:')
    console.error(error)
    if (typeof process !== 'undefined') process.exit(1);
    return;
  }
  if (error.code === 'ERR_ASSERTION' ) {
    console.debug('Assert error:')
    console.error(error)
    if (typeof process !== 'undefined') process.exit(1);
    return;
  }
  if (error.message === ERROR_ACCESS_TOKEN) {
    console.debug('Access token error handled:')
    console.error(error)
    document.getElementById('root').innerHTML = ErrorPage({
      message: error.message,
      children: [
        Link({ to: '#/login', title: 'Go to login page', children: ['Log in'] }),
      ],
    })
    return
  }
  console.debug('Error handled:')
  console.error(error)
  document.getElementById('root').innerHTML = ErrorPage({
    message: error.message,
    children: [
      Link({ onClick: () => { location.reload(); }, title: 'Go to login page', children: ['Log in'] }),
      Link({ onClick: () => { history.go(-1); }, title: 'Go back', children: ['Back'] }),
    ],
  })
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
    main()
    return target.apply(thisArg, argArray);
  },
});

if (typeof process !== 'undefined') process.on('uncaughtException', onError);
navigation.addEventListener('navigate', main);
main()
