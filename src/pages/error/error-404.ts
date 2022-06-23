import ErrorPage from './error.ts'
import Link from '@app/components/link/link.ts'

export default (error = { message: 'Page not found' }) => ErrorPage({
  message: error.message,
  children: [
    Link({ to: '#', title: 'Go to home page', children: ['Home'] }),
    Link({ to: 'javascript:history.go(-1)', title: 'Go back', children: ['Back'] }),
  ],
})
