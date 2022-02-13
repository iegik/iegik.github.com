import { CLIENT_ID, SCOPE } from '@app/components/core/constants'

const getAccessToken = async () => {
  const { access_token, scope, token_type } = await fetch('https://github.com/login/oauth/access_token', { method: 'POST', body: JSON.stringify({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
  }) }).then((res) => res.json())
  sessionStorage.setItem('access_token', access_token)
  sessionStorage.setItem('scope', scope)
  sessionStorage.setItem('token_type', token_type)

  const data = await fetch('https://api.github.com/user', { method: 'GET', headers: { 'Authorization': `${token_type} ${access_token}` } }).then((res) => res.json())
  console.log({ data })
}

const Oauth = () => {
  setTimeout(() => {
    const { protocol, hash } = location
    const [path, search] = hash.split('?')
    const code = sessionStorage.getItem('id')
    const uri = new URLSearchParams(search)
    if (uri.get('code') !== code) return history.go(-2);

    getAccessToken();
  })

  return `Loading...`
}

export default Oauth
