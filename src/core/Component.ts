import type { F } from './Component.d';

export const displayNameToIs = (displayName) => `x-${displayName.toLowerCase()}`

export class Component extends HTMLElement {
  tag = 'div';
  root = document.body
  ref = null;
  private $$displayName = 'Component';
  get displayName() { return this.$$displayName || this.constructor.name }
  set displayName(displayName) { this.$$displayName = displayName }
  get is() { return displayNameToIs(this.displayName); }
  constructor (props:F = {}) {
    super();
    const { tag, ref, children } = props;
    this.tag = tag || this.tag;
    this.ref = ref || this.ref;

    if (this.ref) {
      ref.outerHTML = this.toString();
    } else {
      this.root.appendChild(this.ref);
      this.ref = this.root.lastElementChild;
    }

    if (children) {
      children.forEach((v) => {
        ref.innerHTML += new Component(v)
      });
    }
  }
  toString() {
    const { tag, is } = this;
    return `<${tag} is="${is}" />`
  }
};