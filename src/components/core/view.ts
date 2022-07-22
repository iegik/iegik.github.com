// deno-lint-ignore-file no-undef
// global document
import * as log from '@app/services/log';
import { escapeHTML } from '@app/services/web-utils';
import servicesMap from '@app/services/index';
import * as componentsMap from '@app/components/index';
import { ERROR_NOT_FOUND } from '@app/components/core/constants';

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

const render = (ref, eventType, props = {}) => (event: MutationRecord[] | MutationRecord | NavigateEvent | Error) => {
  const [state, setState] = useState()
  const { component = 'View' } = props;
  log.debug('render', { eventType, component, state, props, event, typeof: typeof event, isArray: Array.isArray(event) });
  if (event instanceof Error) {
    log.error(event);
    return;
  }

  const Component = componentsMap[component || 'View' ];
  if (Array.isArray(event)) {
    for (const mutation of event) render(ref, eventType, props)(mutation);
    return
  }

  if (event instanceof MutationRecord && event.type === 'childList') {
    log.log('A child node has been added or removed.', { ref: mutation.target.getAttribute('ref') });
    return;
  }
  if (event instanceof MutationRecord && event.type === 'attributes') {
    log.log(`The ${  mutation.attributeName  } attribute was modified.`, { mutation });
    // ref.current.innerHTML = Component(state);
    return;
  }
  if (event instanceof MutationRecord && event.type === 'subtree') {
    log.log(`The children was modified.`, { mutation });
    return;
  }

  if (!Component) throw Error(`Component ${component} not found`);
  // FIXME: Fix this
  // if (!history.state) throw Error(ERROR_NOT_FOUND)
  if (ref?.current) ref.current.innerHTML = Component(state);
};

const attachEvents = async (ref, props) => {
  log.debug('attachEvents', { ref, props });

  // To observe DOM changes
  const observer = new MutationObserver(render(ref, 'render', props));
  observer.observe(ref.current, mutationConfig);

  // addEventListener('popstate', render(ref, 'popstate'));
  navigation?.addEventListener('navigate', render(ref, 'navigate', props));

  // TODO: Move here from main()
  // document.addEventListener('error', render(ref, 'error', props))

  // Cleanup on unmount
  ref.current.addEventListener('DOMRemoved', () => {
    log.info('DOMRemoved');
    // removeEventListener('popstate', popstate);
    navigation?.removeEventListener('navigate', render(ref, 'navigate', props));
    observer.disconnect();
  });
}

const runServices = async (ref, props) => {
  log.debug('runServices', { ref, props });
  const { services } = props;
  const [state, setState] = useState()

  for (const serviceName of services) {
    const service = servicesMap[serviceName];
    if (!service) throw Error(`Service ${serviceName} not found`);
    await service(ref);
  }

  // Keep history
  setState({ services: null })
}

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
  const [state, setState] = useState()

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
