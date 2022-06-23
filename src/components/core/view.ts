// deno-lint-ignore-file no-undef
// global document
class Ref {
  id = '';
  toString() {
    const id = btoa(`${Math.round(Math.random() * 1000000)}`).slice(0,4);
    return (this.id = this.id || `ref-${id}`);
  }
  get current() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return null
    return <HTMLInputElement>document.querySelector(`[ref=${this.id}]`);
  }
}

export const createRef = () => new Ref();
