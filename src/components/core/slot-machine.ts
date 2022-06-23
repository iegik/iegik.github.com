import Icon from '@app/components/icon/icon.ts'
import { createRef } from '@app/components/core/view.ts';

let tries = 0;
let blocked = false;
const roll = '🍏,🌰,🍋,🍅,🍆,🍇,🍓,🍉,🍐,🍒,🍑,🥑'.split(',');
const { floor, random } = Math;
const randomRoll = (what: string[]):string => what[floor(random() * what.length)];

const Reels:FC<{}> = () => {
  if (blocked) return '';
  const [a, b, c] = [roll, roll, roll].flatMap(randomRoll);

  if (a == b && b == c) {
    blocked = true;
    setTimeout(() => {
      typeof window !== 'undefined' && alert(`You won in ${tries} tries`);
      blocked = false;
    }, 100);
    tries = 0;
  } else {
    tries++;
  }
  return `${a} ${b} ${c}`;
}

const SlotMachine:FC<{}> = () => {
  const ref = createRef();

  setTimeout(() => {
    ref.current?.addEventListener('click', () => {
      if (!ref.current) return;
      ref.current.innerHTML = Reels()
    });

    if (typeof window === 'undefined' || typeof document === 'undefined') return

    document.addEventListener('keyup', (event: KeyboardEvent) => {
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
