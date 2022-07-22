import OauthService from '@app/services/oauth'
import EditorService from '@app/services/editor'
import PreviewService from '@app/services/preview'
import UserInfoService from '@app/services/user-info'

const servicesMap:Record<string,Service> = {
  oauth: OauthService,
  editor: EditorService,
  preview: PreviewService,
  userInfo: UserInfoService,
};

export default servicesMap;