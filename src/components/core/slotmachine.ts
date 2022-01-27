import { createRef } from '@app/components/core/view';

let tries = 0;
let blocked = false;
const roll = '🍏,🌰,🍋,🍅,🍆,🍇,🍓,🍉,🍐,🍒,🍑,🥑'.split(',');
const { floor, random } = Math;
const randomRoll = (what) => what[floor(random() * what.length)];

const play = () => {
  if (blocked) return;
  const [a, b, c] = [roll, roll, roll].flatMap(randomRoll);

  if (a == b && b == c) {
    blocked = true;
    let msg = `You won in ${tries} tries`;
    setTimeout(() => {
      alert(msg);
      blocked = false;
    }, 100);
    tries = 0;
  } else {
    tries++;
  }
  return `${a} ${b} ${c}`;
}

export default () => {
  const ref = createRef();

  setTimeout(() => {
    ref.current?.addEventListener('click', () => {
      ref.current.innerHTML = play()
    });
    if (!window?.document) return
    document.addEventListener('keyup', (event) => {
      // bug 354358
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      // Enter, Space
      if (event.which !== 13 && event.which !== 32) {
        return;
      }
      ref.current.innerHTML = play();
    });
  })

  return `<center ref="${ref}">${play()}</center>`;
}