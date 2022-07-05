// deno-lint-ignore-file no-undef
// global document
import * as log from '@app/services/log.ts';

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

const View: ViewProps = ({ tag = 'div', className = '', children = [], services = [], ...rest }) => {
  const ref = createRef();
  setTimeout(() => {
    Promise.all((services as Service[])?.map((service) => service(ref))).catch((error) => { log.error(error); })
  });

  return `
    <${tag} class="${className}" ref="${ref}" ${rest?.reduce?.((acc:string, key:string, value:string) => `${acc} ${key}="${value}"`, '')}>
      ${children?.join?.('')}
    </${tag}>
  `;
}

export default View;
