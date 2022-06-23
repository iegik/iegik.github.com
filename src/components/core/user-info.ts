import { createRef } from '@app/components/core/view.ts';
import { ERROR_ACCESS_TOKEN } from '@app/components/core/constants.ts';

interface UserInfoProps {
  avatarUrl?: string;
  login?: string;
}

const UserInfo:FC<UserInfoProps> = ({ avatarUrl, login } = {}) => {
  const ref = createRef();

  setTimeout(() => {
    const accessToken = window.sessionStorage?.getItem('access_token')
    const tokenType = window.sessionStorage?.getItem('token_type')
    const fetchUser = async () => {
      // Getting state
      // console.debug('Requesting user', { access_token, token_type })
      const { avatar_url: avatarUrl, login } = await fetch('https://api.github.com/user', { method: 'GET', headers: { 'Authorization': `${tokenType} ${accessToken}` } }).then((res) => res.json())
      // console.debug('User data', { data })
      return { avatarUrl, login }
    }
    if (!accessToken) throw Error(ERROR_ACCESS_TOKEN)
    if (!login) fetchUser()
      .then((data) => { if (ref.current) ref.current.innerHTML = UserInfo(data); })
  })

  return `
    <div class="user-info" ref="${ref}">
      ${avatarUrl && `<img src="${avatarUrl}" />`}
      ${login && `<span>${login}</span>`}
    </div>
  `;
}

export default UserInfo
