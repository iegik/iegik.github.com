import View from '@app/components/core/view.ts';
import { getRoute } from '@app/services/router.ts';
import GitHubApi from '@app/services/github-api.ts';

const EditorService = async (ref: Ref) => {
  const editor = ref.current;
  if (!editor) return;
  editor.focus();

  const route = getRoute();
  const data = await GitHubApi.getInstance().getFile(route);

  editor.innerHTML = View(data);
};

export default EditorService;
