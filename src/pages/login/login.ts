import Icon from '@app/components/icon/icon'
import Action from '@app/components/action/action'
import { CLIENT_ID as clientId, SCOPE as scope } from '@app/components/core/constants'
import * as log from '@app/services/log';

const PATTERN_LOGIN = '^[\\d\\w\\-\\.]+$'
const REGEX_LOGIN = new RegExp(PATTERN_LOGIN);

const assert = (expr:boolean, message:string) => !expr ? message : undefined

// const validate = (value?:string, rules?:string[]):string | boolean => rules?.reduce((prev, ruleName) => false
//   || assert(ruleName === 'required' && value !== null, 'Field is required')
//   || assert(/^regex/.test(ruleName) && value !== null && (new RegExp(ruleName.split(':')[1])).test(value || ''), `Value should match pattern ${ruleName.split(':')[1]}`)
//   || assert(ruleName === 'username' && value !== null && REGEX_LOGIN.test(value || ''), 'Value should contain only valid characters')
// )

const onClick = () => {
  if (typeof document === 'undefined') return;
  if (typeof window === 'undefined') return;
  if (typeof window.sessionStorage === 'undefined') return;
  const loginField = <HTMLInputElement>document.querySelector('[name="login"]')
  if (loginField.validity.valid === false) return
  const login = loginField?.value
  const state = btoa(`${+new Date()}`).slice(10,18)
  window.sessionStorage?.setItem('state', state)
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&login=${encodeURIComponent(login)}&scope=${encodeURIComponent(scope)}&state=${state}`
  log.info(`Navigated to ${url}`, { clientId, scope, state })
  document.location.href = url
  // history.pushState({ clientId, scope, state }, '', url)
};

const Login = () => `
    <div class="login">
      <form>
        <input type="text" name="login" placeholder="username" pattern="${PATTERN_LOGIN}" />
        ${Action({
    className: 'login__btn',
    children: [
      'Login with ',
      Icon({
        name: "github-logo",
        className: 'login__btn__icon',
      })],
    onClick,
    type: 'submit',
  })}
      </form>
    </div>
  `

export default Login
