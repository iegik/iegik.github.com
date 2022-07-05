import { ERROR_NOT_FOUND } from '@app/components/core/constants.ts';
import repoFile from '@app/graphql/github/repo_file.graphql';

const githubResponseMiddleware = async (res) => {
  const { data, errors } = await res.json();
  if (errors) throw errors[0];
  return data;
}

class GitHubApi {
  static instance = new GitHubApi();
  private constructor() {
    this.repoName = 'iegik.github.com';
    this.repoOwner = 'iegik';
    this.storeRoot = 'gh-pages:data';
  }
  static getInstance() {
    return this.instance;
  }

  async request({ query, variables }) {
    const accessToken = window.sessionStorage?.getItem('access_token');
    const tokenType = window.sessionStorage?.getItem('token_type');

    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `${tokenType} ${accessToken}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
    return githubResponseMiddleware(res)
  }

  async getFile(path: string) {
    const data = await this.request({ query: repoFile, variables: {
      repo_name: this.repoName,
      repo_owner: this.repoOwner,
      object_path: `${this.storeRoot}${path}.json`,
    }})
    if (!data) throw Error(ERROR_REQUEST);
    const {
      repository: { object },
    } = data;
    if (!object) throw Error(ERROR_NOT_FOUND);
    const { text } = object;
    return JSON.parse(text);
  };
}

export default GitHubApi;
