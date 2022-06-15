import { createRef } from '@app/components/core/view';

const UserInfo:FC = ({ avatar_url, login }) => {
  const ref = createRef();

  setTimeout(async () => {
    // Getting state
    const access_token = sessionStorage.getItem('access_token')
    const token_type = sessionStorage.getItem('token_type')
    console.debug('Requesting user', { access_token, scope, token_type })
    const data = await fetch('https://api.github.com/user', { method: 'GET', headers: { 'Authorization': `${token_type} ${access_token}` } }).then((res) => res.json())
    console.debug('User data', { data })
    ref.current.innerHTML = UserInfo(data)
  })

  return `
    <div class="user-info" ref="${ref}">
      ${avatar_url && `<img src="${avatar_url}" />`}
      ${login && `<span>${login}</span>`}
    </div>
  `;
}

export default UserInfo
