import { CLIENT_ID as clientId } from '@app/components/core/constants.ts'
import * as log from '@app/services/log.ts';
import { Ref } from '@app/components/core/view.ts';

const getAccessToken = async (code?:string) => {
  if (!code) return
  log.debug('Requesting access_token', { code, clientId })
  const { access_token: accessToken, scope, token_type: tokenType } = await fetch(`https://qilg4ch66b3vpgtevzccb5meum0ttfcl.lambda-url.eu-north-1.on.aws/?code=${code}&client_id=${clientId}`).then((res) => res.json())

  window.sessionStorage?.setItem('access_token', accessToken)
  window.sessionStorage?.setItem('scope', scope)
  window.sessionStorage?.setItem('token_type', tokenType)
  document.location.href = '/#/profile' // history.pushState({ access_token, scope, token_type }, 'User Info', '/#/profile')
}

const OauthService = async (ref: Ref) => {
  const { protocol, hash, search } = location
  const state = window.sessionStorage?.getItem('state')
  const code = window.sessionStorage?.getItem('code')
  log.debug('Checking GET params', { protocol, hash, search, state })
  const uri = new URLSearchParams(search)
  if (uri.get('state') !== state) return window.history?.go(-2);

  getAccessToken(uri.get('code') || undefined);
}

export default OauthService
