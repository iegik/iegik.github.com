interface FC<T> {
  (props?:T): string
}

type ReactNode = FC<any>;
type Props = { [key: string]: any };
type Process = { [key: string]: any };

type Service = (ref: import('./components/core/view.ts').Ref) => Promise<any>

interface RouteComponentProps extends Props {
  services?: Service[];
}

interface ViewProps extends RouteComponentProps {
  tag?: string;
  className?: string;
  children?: ReactNode
}

declare const Sentry: { [key: string]: any };
