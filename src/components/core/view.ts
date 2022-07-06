// deno-lint-ignore-file no-undef
// global document
import * as log from '@app/services/log.ts';
import { escapeHTML } from '@app/services/web-utils.ts';
import servicesMap from '@app/services/index.ts';

export class Ref {
  id = '';
  toString() {
    const id = btoa(`${Math.ceil(Math.random() * 1E+13) + +new Date}`).slice(10,18)
    return (this.id = this.id || `ref-${id}`);
  }
  get current() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return null
    return <HTMLInputElement>document.querySelector(`[ref=${this.id}]`);
  }
}

export const createRef = () => new Ref();

const View: FC<ViewProps> = ({ tag = 'div', className = '', children = [], services = [], ...rest } = {}) => {
  const ref = createRef();
  setTimeout(() => {
    Promise.all(services?.map((serviceName:string) => servicesMap[serviceName]?.(ref))).catch((error) => { log.error(error); })
  });

  return `
    <${tag} class="${className}" ref="${ref}" ${Object.entries(rest)?.reduce?.((acc:string, [key, value]:string[]) => `${acc} ${key}="${value}"`, '')}>
      ${Array.isArray(children) ? children.map((childProps: ReactNode) => childProps instanceof Object ? View(<ViewProps>childProps) : `${childProps}`).join?.('') : escapeHTML(children)}
    </${tag}>
  `;
}

export default View;
