import ErrorPage from './error.ts'
import Link from '@app/components/link/link.ts'

export default (error: Error) => ErrorPage({
  message: error.message,
  children: [
    Link({ to: '#/login', title: 'Go to login page', children: ['Log in'] }),
  ],
})
