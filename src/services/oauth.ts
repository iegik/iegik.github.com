import { CLIENT_ID as client_id } from '@app/components/core/constants'

const getAccessToken = async (code) => {
  // console.debug('Requesting access_token', { code, client_id })
  const { access_token, scope, token_type } = await fetch(`https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/?code=${code}&client_id=${client_id}`).then((res) => res.json())

  sessionStorage.setItem('access_token', access_token)
  sessionStorage.setItem('scope', scope)
  sessionStorage.setItem('token_type', token_type)
  document.location.href = '/#/profile' // history.pushState({ access_token, scope, token_type }, 'User Info', '/#/profile')
}

const Oauth = () => {
  setTimeout(() => {
    const { protocol, hash, search } = location
    const state = sessionStorage.getItem('state')
    const code = sessionStorage.getItem('code')
    // console.debug('Checking GET params', { protocol, hash, search, state })
    const uri = new URLSearchParams(search)
    if (uri.get('state') !== state) return history.go(-2);
    // if (uri.get('state') !== state) { console.warn('state not match', { search, state, history }); return; }

    getAccessToken(uri.get('code'));
  })

  return `Loading...`
}

export default Oauth
