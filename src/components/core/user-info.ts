import { createRef } from '@app/components/core/view';

const UserInfo:FC = ({ avatar_url, login } = {}) => {
  const ref = createRef();

  setTimeout(() => {
    const access_token = sessionStorage.getItem('access_token')
    const token_type = sessionStorage.getItem('token_type')
    const fetchUser = async () => {
      // Getting state
      console.debug('Requesting user', { access_token, token_type })
      const data = await fetch('https://api.github.com/user', { method: 'GET', headers: { 'Authorization': `${token_type} ${access_token}` } }).then((res) => res.json())
      console.debug('User data', { data })
      return data
    }
    if (!access_token) throw Error('Access token not provided')
    if (!login) fetchUser()
      .then((data) => { ref.current.innerHTML = UserInfo(data); })
  })

  return `
    <div class="user-info" ref="${ref}">
      ${avatar_url && `<img src="${avatar_url}" />`}
      ${login && `<span>${login}</span>`}
    </div>
  `;
}

export default UserInfo
