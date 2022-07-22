interface FC<T> {
  (props?:T): string
}

type ReactNodeArray = Array<ReactNode>
type ReactNode = ViewProps | string | number | null | undefined | ReactNodeArray;
type Props = { [key: string]: any };
type Process = { [key: string]: any };

type Service = (ref: import('./components/core/view').Ref) => Promise<any>

interface ViewProps {
  services?: string[];
  tag?: string;
  className?: string;
  children?: ReactNode
}

declare const Sentry: { [key: string]: any };
