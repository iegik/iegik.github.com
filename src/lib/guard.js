'use strict';
const userScript = () => {
  console.debug(`💩`);

  const queue = new Map();
  const runners = new Map();
  const contents = new Map();
  const dummy = () => {}

  const createLazyTimer = (fn1, fn2) =>
    function () {
      let id;
      const uid = queue.size;
      queue.set(uid, () => {
        id = fn1.apply(this, arguments);
        runners.set(id, () => fn2(uid));
      });
      contents.set(uid, arguments[0]);
      return id;
    };

  const silentOverride = (target, key, value) => {
    const orig = value || target[key];
    if (!Object.getOwnPropertyDescriptor(target, key)?.configurable)
      return;

    Object.defineProperty(target, key, {
      configurable: false,
      set: () => {
        if (key !== 'trace') console.trace(`Property "${key}" was changed in:`);
      },
      get: () => orig,
    });
  }
  const silentFreeze = (target, skip = []) =>
    Object.getOwnPropertyNames(target).forEach((key) => {
      if (skip.includes(key)) return;
      silentOverride(target, key)
    });

  silentFreeze(Object.prototype, [
    '__proto__',
  ]);

  // GTM
  silentOverride(window, 'dataLayer', [])

  silentOverride(window, 'setInterval', createLazyTimer(setInterval, clearInterval));
  silentOverride(window, 'GUARD_showTimer', (id) => contents.get(id).toString());
  silentOverride(window, 'GUARD_startTimer', (id) => queue.get(id)());
  silentOverride(window, 'GUARD_clearTimer', (id) => runners.get(id)());
  silentOverride(window, 'GUARD_timers', contents);

  // Block cdn.rudderlabs.com
  // Block app.satismeter.com
  silentOverride(window, 'satismeter', dummy);
  silentOverride(document, 'write', dummy);
  silentOverride(window, 'write', dummy);
}

try {
  userScript();
} catch (e){
  console.error(e)
}
