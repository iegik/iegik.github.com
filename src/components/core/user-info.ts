import { createRef } from '@app/components/core/view.ts';
import { ERROR_ACCESS_TOKEN } from '@app/components/core/constants.ts';
import * as log from '@app/services/log.ts';

interface UserInfoProps {
  avatarUrl?: string;
  login?: string;
}

const UserInfo:FC<UserInfoProps> = ({ avatarUrl, login } = {}) => {
  const ref = createRef();

  setTimeout(() => {
    if (typeof window === 'undefined') return;
    const accessToken = window.sessionStorage?.getItem('access_token')
    const tokenType = window.sessionStorage?.getItem('token_type')
    const fetchUser = async () => {
      // Getting state
      log.debug('Requesting user', { accessToken, tokenType })
      const { avatar_url: avatarUrl, login } = await fetch('https://api.github.com/user', { method: 'GET', headers: { 'Authorization': `${tokenType} ${accessToken}` } }).then((res) => res.json())
      log.debug('User data', { avatarUrl, login })
      return { avatarUrl, login }
    }
    log.debug({ accessToken, tokenType })
    if (!accessToken) throw Error(ERROR_ACCESS_TOKEN)
    if (!login) fetchUser()
      .then((data) => { if (ref.current && data.login) ref.current.innerHTML = UserInfo(data); })
  })

  return `
    <div class="user-info" ref="${ref}">
      ${avatarUrl && `<img src="${avatarUrl}" />`}
      ${login && `<span>${login}</span>`}
    </div>
  `;
}

export default UserInfo
