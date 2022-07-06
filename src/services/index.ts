import OauthService from '@app/services/oauth.ts'
import EditorService from '@app/services/editor.ts'
import PreviewService from '@app/services/preview.ts'
import UserInfoService from '@app/services/user-info.ts'

const servicesMap:Record<string,Service> = {
  oauth: OauthService,
  editor: EditorService,
  preview: PreviewService,
  userInfo: UserInfoService,
};

export default servicesMap;