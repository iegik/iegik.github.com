;(slotmachine => {
    let tries = 0;
    let blocked = false;
    const roll = '🍏,🌰,🍋,🍅,🍆,🍇,🍓,🍉,🍐,🍒,🍑,🥑'.split(',');
    const { floor, random } = Math;
    const randomRoll = what => what[floor(random() * what.length)];
    const play = _ => {
      if (blocked) return;
      const [a, b, c] = [roll, roll, roll].flatMap(randomRoll);
      slotmachine.innerHTML = `${a} ${b} ${c}`;
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
  }
  addEventListener('click', play);
  addEventListener('keyup', event => {
    // bug 354358
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    // Enter, Space
    if (event.which !== 13 && event.which !== 32) {
      return;
    }
    play();
  });
})(window.slotmachine);