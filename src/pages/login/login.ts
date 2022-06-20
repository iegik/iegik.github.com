
import Icon from '@app/components/icon/icon'
import Action from '@app/components/action/action'
import { CLIENT_ID as client_id, SCOPE as scope } from '@app/components/core/constants'

const PATTERN_LOGIN = '^[\\d\\w\\-\\.]+$'
const REGEX_LOGIN = new RegExp(PATTERN_LOGIN);

const assert = (expr, message) => !expr ? message : undefined

const validate = (value, rules) => rules.reduce((prev, ruleName) => undefined
  || assert(AVAILABLE_RULES.includes(ruleName), `Unknown rule name ${ruleName}`)
  || assert(ruleName === 'required' && value !== null, 'Field is required')
  || assert(/^regex/.test(ruleName) && (new RegExp(ruleName.split(':')[1])).test(value), `Value should match pattern ${ruleName.split(':')[1]}`)
  || assert(ruleName === 'username' && REGEX_LOGIN.test(value), 'Value should contain only valid characters')
)

const onClick = () => {
  const loginField = document.querySelector('[name="login"]')
  if (loginField.validity.valid === false) return
  const login = loginField?.value
  const state = btoa(+new Date()).slice(10,18)
  sessionStorage.setItem('state', state)
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&login=${encodeURIComponent(login)}&scope=${encodeURIComponent(scope)}&state=${state}`
  console.info(`Navigated to ${url}`, { client_id, scope, state })
  document.location.href = url
};

const Login = () => `
    <div class="login">
      <form>
        <input type="text" name="login" placeholder="username" pattern="${PATTERN_LOGIN}" />
        ${Action({ className: 'login__btn', children: ['Login with ', Icon({ name: "github-logo", className: 'login__btn__icon' })], onClick, type: 'submit'})}
      </form>
    </div>
  `

export default Login
