import * as componentsMap from '@app/pages/1990/components';

const render = (item: unknown) => {
  return item instanceof Object
    ? componentsMap[
      ((item as Component).component || 'View') as keyof typeof componentsMap
      // @ts-ignore-next-line
    ](item ?? {})
    : item;
}

export const Fragment = ({ children }: FragmentProps) => {
  if (Array.isArray(children)) {
    return [].map.call(children, (item) => {
      if (children === null) return '';
      render(item)
    }).join('');
  } else if (children != null) {
    render(children)
  }
}