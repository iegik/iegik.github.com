interface FC<T> {
  (props?:T): string
}

interface React {
  ReactNode: FC<any>
  Props: { [key: string]: any }
}

type Service = () => Promise<any>

interface RouteComponentProps extends React.Props<any> {
  services?: Service[];
}

interface ViewProps extends RouteComponentProps {
  tag?: string;
  className?: string;
  children?: React.ReactNode
}
