import { Ref } from '@app/components/core/view';
import { useState } from '@app/components/core/view';
import { getRoute } from '@app/services/web-utils';
import GitHubApi from '@app/services/github-api';

const EditorService = async (ref: Ref) => {
  const [{ isLoaded }, setUserInfo] = useState();
  const fetchFile = async () => {
    const route = getRoute();
    const data = await GitHubApi.getInstance().getFile(route);

    setUserInfo({ data, isLoaded: true });
  }
  if (!isLoaded) fetchFile();
};

export default EditorService;
