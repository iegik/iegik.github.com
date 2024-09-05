// deno-lint-ignore-file no-undef
// global document, navigation
import * as log from '@app/services/log';
import { escapeHTML } from '@app/services/web-utils';
import servicesMap from '@app/services/index';
import * as componentsMap from '@app/components/index';

export class Ref {
  id: string | null = null;
  toString() {
    const id = btoa(
      `${Math.ceil(Math.random() * 1e13) + +new Date()}`,
    ).slice(10, 18);
    return (this.id = this.id || `ref-${id}`);
  }
  // @ts-ignore
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

export interface State extends ViewProps {
  title?: string;
  url?: string;
}

export const useState = (initialState = undefined) =>
  typeof history === 'undefined'
    ? []
    : [
        initialState || history.state || {},
        (state: State, title: string, url: string) =>
          history.pushState(
            { ...history.state, ...state },
            title || '',
            url || location.href,
          ),
      ];

const mutationConfig = {
  attributes: true,
  childList: true,
  subtree: true,
};

const render =
  (
    ref: Ref,
    eventType: string,
    props: State = { component: 'View' },
  ) =>
  (event: MutationRecord[] | MutationRecord | Error) => {
    const [state, setState] = useState();
    const { component = 'View' } = props;
    log.debug('render', {
      eventType,
      component,
      state,
      props,
      event,
      typeof: typeof event,
      isArray: Array.isArray(event),
    });
    if (event instanceof Error) {
      log.error(event);
      return;
    }

    const Component =
      componentsMap[
        (component || 'View') as keyof typeof componentsMap
      ];
    if (Array.isArray(event)) {
      for (const mutation of event)
        render(ref, eventType, props)(mutation);
      return;
    }

    if (
      event instanceof MutationRecord &&
      event.type === 'childList'
    ) {
      let refs = [];
      // for (let item of event.target) {
      //   if (item instanceof HTMLElement) refs.push(item.getAttribute('ref'))
      // }
      log.log('A child node has been added or removed.', {
        target: event.target,
      });
      return;
    }
    if (
      event instanceof MutationRecord &&
      event.type === 'attributes'
    ) {
      log.log(`The ${event.attributeName} attribute was modified.`, {
        event,
      });
      if (ref.current) ref.current.innerHTML = Component(state);
      return;
    }
    // options: { subtree: true } must be enabled on MutationObserver
    // if (event instanceof MutationRecord && event.type === 'subtree') {
    //   log.log(`The children was modified.`, { event });
    //   return;
    // }

    if (!Component) throw Error(`Component ${component} not found`);
    // FIXME: Fix this
    // if (!history.state) throw Error(ERROR_NOT_FOUND)
    if (ref?.current) ref.current.innerHTML = Component(state);
  };

const attachEvents = async (ref: Ref, props: State) => {
  log.debug('attachEvents', { ref, props });

  // To observe DOM changes
  const observer = new MutationObserver(render(ref, 'render', props));
  ref.current && observer.observe(ref.current, mutationConfig);

  // addEventListener('popstate', render(ref, 'popstate'));
  // @ts-ignore
  navigation?.addEventListener(
    'navigate',
    render(ref, 'navigate', props),
  );

  // TODO: Move here from main()
  // document.addEventListener('error', render(ref, 'error', props))

  // Cleanup on unmount
  ref?.current?.addEventListener('DOMRemoved', () => {
    if (!globalThis.hasOwnProperty('navigation')) return;
    log.info('DOMRemoved');
    // removeEventListener('popstate', popstate);
    // @ts-ignore
    navigation?.removeEventListener(
      'navigate',
      render(ref, 'navigate', props),
    );
    observer.disconnect();
  });
};

const runServices = async (ref: Ref, props: State) => {
  log.debug('runServices', { ref, props });
  const { services } = props;
  const [state, setState] = useState();

  if (!services) return;
  for (const serviceName of services) {
    const service = servicesMap[serviceName];
    if (!service) throw Error(`Service ${serviceName} not found`);
    await service(ref);
  }

  // Keep history
  setState({ services: null });
};

const View: FC<ViewProps> = (props = {}) => {
  log.debug({ props });
  const {
    tag = 'div',
    className = '',
    children = [],
    services = [],
    component = 'View',
    ...rest
  } = props;
  const ref = createRef();
  const [state, setState] = useState();

  setTimeout(async () => {
    if (!ref.current) return;
    if (services?.length) attachEvents(ref, props);
    if (services?.length) runServices(ref, props);
  });

  // TODO: Replace with imperative
  const content = Array.isArray(children)
    ? children
        .map((childProps: ReactNode) =>
          childProps instanceof Object
            ? View(<ViewProps>childProps ?? {})
            : `${childProps}`,
        )
        .join?.('')
    : escapeHTML(`${children}`);

  const restProps = Object.entries(rest)?.reduce?.(
    (acc, [key, value = '']) => `${acc} ${key}="${value}"`,
    '',
  );

  log.debug('Rendering', { content, restProps });

  return `
    <${tag} class="${className}" ref="${ref}" ${restProps}>
      ${content}
    </${tag}>
  `;
};

export default View;
