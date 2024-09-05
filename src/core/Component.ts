import type { ComponentProps } from './Component.d';

export const displayNameToIs = (displayName: string) => `x-${displayName.toLowerCase()}`

export class Component<F extends ComponentProps = {}> extends HTMLElement {
  tag = 'div';
  root = document.body
  ref: Element | null = null;
  private $$displayName = 'Component';
  get displayName() { return this.$$displayName || this.constructor.name }
  set displayName(displayName) { this.$$displayName = displayName }
  get is() { return displayNameToIs(this.displayName); }
  constructor (props:F) {
    super();
    const { tag, ref, children } = props;
    this.tag = tag || this.tag;

    if (this.ref == null && ref) {
      this.ref = ref || this.ref;
      this.ref.outerHTML = this.toString();
    } else if (this.ref != null) {
      this.root.appendChild(this.ref);
      this.ref = this.root.lastElementChild;
    }

    if (children) {
      children.forEach((v) => {
        if (!this.ref) return;
        this.ref.innerHTML += new Component(v)
      });
    }
  }
  toString() {
    const { tag, is } = this;
    return `<${tag} is="${is}" />`
  }
};