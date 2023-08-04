import ErrorPage from './error';
import Link from '@app/components/link/link';
import { ERROR_NOT_FOUND } from '@app/components/core/constants';

export default (error = { message: ERROR_NOT_FOUND }) =>
  ErrorPage({
    message: error.message,
    children: [
      Link({ to: '#', title: 'Go to home page', children: ['Home'] }),
      Link({
        onClick: () => {
          history.go(-1);
        },
        title: 'Go back',
        children: ['Back'],
      }),
    ],
  });
