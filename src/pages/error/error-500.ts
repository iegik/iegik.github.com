import ErrorPage from './error.ts'
import Link from '@app/components/link/link.ts'

export default (error: Error) => ErrorPage({
  message: error.message,
  children: [
    Link({ onClick: () => location.reload(), title: 'Go to login page', children: ['Log in'] }),
    Link({ onClick: () => history.go(-1), title: 'Go back', children: ['Back'] }),
  ],
})
