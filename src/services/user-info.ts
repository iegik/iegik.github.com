import { Ref } from '@app/components/core/view';
import { useState } from '@app/components/core/view';
import GitHubApi from '@app/services/github-api';

const UserInfoService = async (ref: Ref) => {
  const [{ avatarUrl }, setUserInfo] = useState();
  const fetchUser = async () => {
    const { avatarUrl, login } = await GitHubApi.getInstance().getUserInfo();
    setUserInfo({ children: [{ tag: 'img', src: avatarUrl}, { tag: 'span', children: login}] });
  }
  if (!avatarUrl) fetchUser();
}

export default UserInfoService;
