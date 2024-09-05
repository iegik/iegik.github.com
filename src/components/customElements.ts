import { Color } from '@app/components/color';
import { Component, displayNameToIs } from '@app/core/Component'

const HTMLElementMap: Record<string, Function> = {
  'input': HTMLInputElement,
  'div': HTMLDivElement,
  'p': HTMLParagraphElement,
  'span': HTMLSpanElement,
}

const ComponentClasses: Record<string, Function> = {
  Color,
}

export const HTMLElements = Object.entries(ComponentClasses).reduce((acc, [displayName, C]) => {
  const is = displayNameToIs(displayName);
  if (!customElements.get(is)) {
    acc[`HTML${displayName}Element`] = function () {
      HTMLElementMap[C.prototype.tag].apply(this, arguments);
      C.apply(this, arguments);
    }
    Object.assign(acc[`HTML${displayName}Element`].prototype, C.prototype);

    customElements.define(is, acc[`HTML${displayName}Element`], { extends: acc[`HTML${displayName}Element`].prototype.tag });
  }
  return acc;
}, {} as Record<string, any>)

new Component({
  children: [
    {
      tag: "input",
    },
  ],
});