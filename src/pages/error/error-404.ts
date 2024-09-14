import ErrorPage from './error';
import Link from '@app/components/link/link';

export default () =>
  ErrorPage({
    message: '404 Page not found',
    children: [
      Link({ to: '/', title: 'Go to home page', children: ['Home'] }),
      Link({
        onClick: () => {
          history.go(-1);
        },
        title: 'Go back',
        children: ['Back'],
      }),
    ],
  });
