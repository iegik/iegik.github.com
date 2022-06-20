import ErrorPage from './error'
import Link from '@app/components/link'

export default (error) => ErrorPage({
  message: error.message,
  children: [
    Link({ to: 'javascript:location.reload()', title: 'Go to login page', children: ['Log in'] }),
    Link({ to: 'javascript:history.go(-1)', title: 'Go back', children: ['Back'] }),
  ],
})
