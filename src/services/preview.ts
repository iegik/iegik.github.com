import { Ref } from '@app/components/core/view.ts';
import { useState } from '@app/components/core/view.ts';
import { getRoute } from '@app/services/web-utils.ts';
import * as log from '@app/services/log.ts';
import PublicApi from '@app/services/public-api.ts';

const PreviewService = async (ref: Ref) => {
  const [state = {}, setUserInfo] = useState();
  log.info('PreviewService', { state, setUserInfo });
  const route = getRoute();
  const data = await PublicApi.getInstance().getFile(route);
  log.info(`File ${route} loaded`, { data, state })
  setUserInfo(data);
};

export default PreviewService;
