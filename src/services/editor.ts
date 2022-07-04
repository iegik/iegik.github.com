import repoFile from '@app/graphql/github/repo_file.graphql';
import View from '@app/components/core/view.ts'
import { getRoute } from '@app/services/router.ts';

const getFile = (path: string) => {
  const accessToken = window.sessionStorage?.getItem('access_token')
  const tokenType = window.sessionStorage?.getItem('token_type')

  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `${tokenType} ${accessToken}`,
    },
    body: JSON.stringify({
      query: repoFile,
      variables: {
        repo_name: 'iegik.github.com',
        repo_owner: 'iegik',
        object_path: `gh-pages:data${path}.json`,
      },
    }),
  }).then((res) => res.json());
}

const parse = JSON.parse

const EditorService = async (ref: Ref) => {
  const editor = ref.current;
  if (!editor) return;
  editor.focus();

  const route = getRoute()

  const { data, errors } = await getFile(route)

  if (errors) throw errors[0];

  const { repository: { object: { object: { text } } } } = data;

  editor.innerHTML = View(parse(text));
};

export default EditorService;
