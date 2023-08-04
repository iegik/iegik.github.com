import Icon from '@app/components/icon/icon'
import { createRef } from '@app/components/core/view';
import * as log from '@app/services/log';

let tries = 0;
let blocked = false;
let cache = '';
const events:(() => void)[] = [];
const roll = '🍏,🌰,🍋,🍅,🍆,🍇,🍓,🍉,🍐,🍒,🍑,🥑'.split(',');
const { floor, random } = Math;
const randomRoll = (what: string[]):string => what[floor(random() * what.length)];

const Reels:FC<{}> = () => {
  if (blocked) return cache
  const [a, b, c] = /*(tries === 3) ? ['🍏', '🍏', '🍏'] : */[roll, roll, roll].flatMap(randomRoll);
  cache = `${a} ${b} ${c}`
  log.debug(`${tries} ${cache}`);

  if (a == b && b == c) {
    const msg = `
            ${cache}
    You won in ${tries} tries`
    blocked = true;
    events.push(() => {
      setTimeout(() => {
        log.info(msg);
        alert(msg);
        blocked = false
      });
    });
    tries = 0;
  } else {
    tries++;
  }
  return cache;
}

const SlotMachine:FC<{}> = () => {
  const ref = createRef();

  setTimeout(() => {
    if (typeof window === 'undefined') return;

    // Mount/unmount
    const observer = new MutationObserver((mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          const event = events.pop()
          if (event) event()
        }
      }
    });
    ref.current && observer.observe(ref.current, { childList: true });

    // Click
    ref.current?.addEventListener('click', () => {
      if (!ref.current) return;
      ref.current.innerHTML = Reels()
    });

    // Keyboard events
    // keydown for keeping reels spinning
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      // bug 354358
      if (event.isComposing || event.keyCode === 229) {
        return;
      }

      // Enter, Space
      if (event.which !== 13 && event.which !== 32) {
        return;
      }

      if (!ref.current) return;
      ref.current.innerHTML = Reels();
    });
  })

  return `
    <div class="slot-machine">
      ${Icon({ name: 'slot-machine-icon', className: 'slot-machine__icon'})}
      <span class="slot-machine__reels" ref="${ref}">${Reels()}</span>
    </div>
  `;
}

export default SlotMachine
