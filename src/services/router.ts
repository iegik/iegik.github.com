import Home from '@app/pages/home'
import Login from '@app/pages/login'
import Oauth from '@app/services/oauth'

const route = (uri) => {
  switch (true) {
    case /^\/login$/.test(uri): return Login
    case /^\/oauth$/.test(uri): return Oauth
    default: return Home
  }
}

if (window?.document) {
  const { protocol, hash } = document.location
  // if (protocol !== 'https:') return
  const path = hash.slice(1)
  document.getElementById('root').innerHTML = route(path)()
}
