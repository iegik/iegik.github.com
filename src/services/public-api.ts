import { ERROR_NOT_FOUND } from '@app/components/core/constants.ts';

const publicResponseMiddleware = (res) => res.json();

class PublicApi {
  static instance = new PublicApi();
  private constructor() {}
  static getInstance() {
    return this.instance;
  }

  async request(uri) {
    const res  = await fetch(`${location.host}/data${uri}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    return publicResponseMiddleware(res)
  }

  async getFile(path: string) {
    const data = await this.request(`${path}.json`)
    if (!data) throw Error(ERROR_NOT_FOUND);
    return data;
  };
}

export default PublicApi;
