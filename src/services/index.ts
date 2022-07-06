import OauthService from '@app/services/oauth.ts'
import EditorService from '@app/services/editor.ts'
import PreviewService from '@app/services/preview.ts'

const servicesMap:Record<string,Service> = {
  oauth: OauthService,
  editor: EditorService,
  preview: PreviewService,
};

export default servicesMap;