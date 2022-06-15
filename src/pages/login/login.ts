
import Icon from '@app/components/icon/icon'
import Action from '@app/components/action/action'
import { CLIENT_ID as client_id, SCOPE as scope } from '@app/components/core/constants'

const onClick = () => {
  const login = document.querySelector('[name="login"]')?.value;
  const state = btoa(+new Date()).slice(10,18)
  sessionStorage.setItem('state', state)
  console.info('Navigated to /authorize', { client_id, scope, state })
  document.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&login=${login}&scope=${scope}&state=${state}`
};

const Login = () => `
    <div class="login">
      <div>
        <input type="text" name="login" placeholder="username" />
        ${Action({ className: 'login__btn', children: ['Login with ', Icon({ name: "github-logo", className: 'login__btn__icon' })], onClick })}
      </div>
    </div>
  `

export default Login
