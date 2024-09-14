import ErrorPage from './error';
import Link from '@app/components/link/link';

export default () =>
  ErrorPage({
    message: '403 Forbidden',
    children: [
      Link({
        to: '#/login',
        title: 'Go to login page',
        children: ['Log in'],
      }),
    ],
  });
