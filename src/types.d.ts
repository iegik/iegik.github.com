interface FC<T> {
  (props?:T): string
}

type ReactNodeArray = Array<ReactNode>
type ReactNode = ViewProps | string | number | null | undefined | ReactNodeArray;
type Props = { [key: string]: any };
type Process = { [key: string]: any };

type Service = (ref: import('./components/core/view').Ref) => Promise<any>

interface ViewProps extends {} {
  services?: string[];
  tag?: 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'button' | 'div';
  className?: string;
  children?: ReactNode
  component?: string;
}

declare const Sentry: { [key: string]: any };
