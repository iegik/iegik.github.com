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

const main = (e) => {
  if (window?.document) {
    const { protocol, hash } = new URL(e?.destination?.url || document.location)
    const path = hash.slice(1)
    document.getElementById('root').innerHTML = route(path)()
  }
}

navigation.addEventListener('navigate', main);
main()
