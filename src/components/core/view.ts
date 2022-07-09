// deno-lint-ignore-file no-undef
// global document
import * as log from '@app/services/log.ts';
import { escapeHTML } from '@app/services/web-utils.ts';
import servicesMap from '@app/services/index.ts';

export class Ref {
  id = null;
  toString() {
    const id = btoa(
      `${Math.ceil(Math.random() * 1e13) + +new Date()}`,
    ).slice(10, 18);
    return (this.id = this.id || `ref-${id}`);
  }
  get current() {
    if (
      typeof window === 'undefined' ||
      typeof document === 'undefined'
    )
      return null;
    return <HTMLInputElement>(
      document.querySelector(`[ref=${this.id}]`)
    );
  }
}

export const createRef = () => new Ref();

export const useState = (initialState) =>
  typeof history === 'undefined'
    ? []
    : [
      initialState || history.state || {},
      (state, title, url) =>
        history.pushState(
          { ...history.state, ...state },
          title || '',
          // url || location.href,
        ),
    ];

const mutationConfig = { attributes: true, childList: true, subtree: true };
const mutationCallback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      log.log('A child node has been added or removed.', { ref: mutation.target.getAttribute('ref') });
    }
    else if (mutation.type === 'attributes') {
      log.log(`The ${  mutation.attributeName  } attribute was modified.`);
    }
  }
};

const View: FC<ViewProps> = (props = {}) => {
  log.debug({ props });
  const {
    tag = 'div',
    className = '',
    children = [],
    services = [],
    ...rest
  } = props;
  const ref = createRef();
  const [state, setState] = useState()
  const render = (eventType) => (navigationEvent) => {
    log.debug(eventType, { navigationEvent });
    if (ref?.current) ref.current.innerHTML = View(history.state || {});
  };
  addEventListener('popstate', render('popstate'));
  navigation?.addEventListener('navigate', render('navigate'));
  setTimeout(async () => {
    const loadServices = async () => {
      log.debug('ref', { ref, state: history.state, services });

      // To observe DOM changes
      const observer = new MutationObserver(mutationCallback);
      observer.observe(ref.current, mutationConfig);

      // Cleanup on unmount
      ref.current.addEventListener('DOMRemoved', () => {
        log.info('DOMRemoved');
        removeEventListener('popstate', popstate);
        navigation?.removeEventListener('navigate', popstate);
        observer.disconnect();
      });

      await Promise.all(
        services?.map((serviceName: string) =>
          servicesMap[serviceName]?.(ref),
        ),
      ).catch((error) => {
        log.error(error);
      });

      // Keep history
      setState({ services: null })
    }

    if (services?.length) loadServices();
  });

  const content = Array.isArray(children)
    ? children
      .map((childProps: ReactNode) =>
        childProps instanceof Object
          ? View(<ViewProps>childProps ?? {})
          : `${childProps}`,
      )
      .join?.('')
    : escapeHTML(children);

  const restProps = Object.entries(rest)?.reduce?.(
    (acc: string, [key, value]: string[]) =>
      `${acc} ${key}="${value}"`,
    '',
  );

  log.debug('Rendering', { content, restProps })

  return `
    <${tag} class="${className}" ref="${ref}" ${restProps}>
      ${content}
    </${tag}>
  `;
};

export default View;
