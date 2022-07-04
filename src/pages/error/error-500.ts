import ErrorPage from './error.ts'
import Link from '@app/components/link/link.ts'

export default (error: Error) => ErrorPage({
  message: error.message,
  children: [
    Link({ onClick: () => { location.reload() }, title: 'Reload', children: ['Reload'] }),
    Link({ onClick: () => { history.go(-1) }, title: 'Go back', children: ['Back'] }),
  ],
})
