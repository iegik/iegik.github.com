import ErrorPage from './error.ts'
import Link from '@app/components/link/link.ts'
import { ERROR_NOT_FOUND } from '@app/components/core/constants.ts';

export default (error = { message: ERROR_NOT_FOUND }) => ErrorPage({
  message: error.message,
  children: [
    Link({ to: '#', title: 'Go to home page', children: ['Home'] }),
    Link({ to: 'javascript:history.go(-1)', title: 'Go back', children: ['Back'] }),
  ],
})
