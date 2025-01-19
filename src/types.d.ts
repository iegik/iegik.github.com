interface FC<T> {
  (props?:T): string
}

type ReactNodeArray = Array<ReactNode>
type ReactNode = ViewProps | Node| string | number | null | undefined | ReactNodeArray;
type Props = { [key: string]: any };
type Process = { [key: string]: any };

type Service = (ref: import('./components/core/view').Ref) => Promise<any>

// Components
type Component = Object & { component?: string; }
type FragmentProps = {
  children?: ReactNode
}
type FunctionalProps = {
  name?: string;
  services?: string[];
}
interface ViewProps extends FragmentProps, Component, FunctionalProps {
  tag?: 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'button' | 'div';
  className?: string;
}

type L10nProps = { l10n?: (key: string) => string }

type LinkProps = { href: string; title: string; }
type ActionProps = L10nProps & ViewProps & {
  title?: string;
  type?: 'submit' | 'button' | 'reset' | 'image';
  onClick?: (event: Event) => void;
}
type IconProps = ViewProps;
type DialogProps = L10nProps & FragmentProps & {
  src?: string;
  title?: string;
  okServices?: string[];
  cancelServices?: string[];
}

// Misc
declare const Sentry: { [key: string]: any };
