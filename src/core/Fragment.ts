import * as componentsMap from '@app/components/index';

const render = (ref: Element | DocumentFragment, item: unknown) => {
  const element = item instanceof Object
    ? componentsMap[
        ((item as Component).component || 'View') as keyof typeof componentsMap
      ](item ?? {})
    : item;
    ref.appendChild(element as Node | Element);
}

export const Fragment = ({ children }: FragmentProps):DocumentFragment | FragmentProps['children'] | string => {
  if (typeof document === "undefined") {
    return Array.isArray(children) ? children.join("") : children;
  }

  const el = document.createDocumentFragment();

  if (Array.isArray(children)) {
    [].forEach.call(children, (item) => {
      if (children === null) return;
      render(el, item)
    });
  } else if (children != null) {
    render(el, children as Node | Element)
  }
  return el;
};
