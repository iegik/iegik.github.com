import { Ref } from '@app/components/core/view.ts';
import { useState } from '@app/components/core/view.ts';
import GitHubApi from '@app/services/github-api.ts';

const UserInfoService = async (ref: Ref) => {
  const [{ avatarUrl }, setUserInfo] = useState();
  const fetchUser = async () => {
    const { avatarUrl, login } = await GitHubApi.getInstance().getUserInfo();
    setUserInfo({ children: [{ tag: 'img', src: avatarUrl}, { tag: 'span', children: login}] });
  }
  if (!avatarUrl) fetchUser();
}

export default EditorService;
