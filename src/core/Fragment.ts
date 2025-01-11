type FragmentProps = { children: (string | Node | Element | null)[] | Node | Element | string | null }
export const Fragment = ({ children }: FragmentProps):DocumentFragment | FragmentProps['children'] | string => {
  if (typeof document === "undefined") {
    return Array.isArray(children) ? children.join("") : children;
  }

  const el = document.createDocumentFragment();
  if (Array.isArray(children)) {
    [].forEach.call(children, (item) => {
      el.appendChild(item);
    });
  } else if (children != null) {
    el.appendChild(children as Node | Element);
  }
  return el;
};
