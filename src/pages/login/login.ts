
import Icon from '@app/components/icon/icon'
import Action from '@app/components/action/action'
import { CLIENT_ID, SCOPE } from '@app/components/core/constants'

const onClick = () => {
  const login = document.querySelector('[name="login"]')?.value;
  const state = '1wasdwe'
  sessionStorage.setItem('id', state)
  document.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&login=${login}&scope=${SCOPE}&state=${state}`
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
