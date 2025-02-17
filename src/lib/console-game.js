let x;
class Game {
  get play() {
    x = ~~(Math.random() * 100);
    return 'guess the number 0..100 with maybe`N`. game started';
  }
  maybe(n) {
    console.log(
      +n === x
        ? ((x = undefined), 'you won')
        : `try ${+n > x ? 'less' : 'more'}`,
    );
    return +n;
  }
}
for (let i = 0; i < 101; i++)
  Object.defineProperty(Game.prototype, `maybe_${i}`, {
    set() {},
    get() {
      if (x) Game.prototype.maybe(i);
      return i;
    },
  });

Object.entries(
  Object.getOwnPropertyDescriptors(Game.prototype),
).forEach(([key, val]) => {
  if (key === 'constructor') return;
  Object.defineProperty(window, key, {
    configurable: false,
    ...(val.writable
      ? {
          value: val.value,
        }
      : {
          set: () => {},
          get: val.get,
        }),
  });
});

addEventListener(
  'keydown',
  (event) => {
    // Bind to both command (for Mac) and control (for Win/Linux)
    if (event.keyCode == 17) console.clear(), console.log(play);
  },
  false,
);
console.log(`type 'play' to start`);
