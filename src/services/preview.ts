import View, { Ref } from '@app/components/core/view.ts';
import { getRoute } from '@app/services/web-utils.ts';
import PublicApi from '@app/services/public-api.ts';

const PreviewService = async (ref: Ref) => {
  const preview = ref.current;
  if (!preview) return;
  preview.focus();

  const route = getRoute();
  const data = await PublicApi.getInstance().getFile(route);

  preview.innerHTML = View(data);
};

export default PreviewService;
