(() => {
  if (typeof window === 'undefined') return;

  // @ts-ignore
  document.write = window.write = () => {}


  const silentFreeze = <T = Object>(target: T, skip:string[] = []) =>
    Object.getOwnPropertyNames(target).forEach((key) => {
      const orig = Object.prototype[key as never];
      if (skip.includes(key)) return;
      if (!Object.getOwnPropertyDescriptor(Object.prototype, key)?.configurable)
        return;

      Object.defineProperty(Object.prototype, key, {
        configurable: false,
        set: () => {
          /*readonly*/
          if (key !== 'trace')
            console.trace(`Property "${key}" was changed in:`);
        },
        get: () => orig,
      });
      // console.log('freezed', key, orig);
    });

  silentFreeze(Object.prototype, [
    // 'toString', // Google don't like this (uncomment)
    '__proto__',  // Should be writable
    // 'name',  // Open AI GPT-3 has a bug html.attributes.name.toString()
                // that throws an error
  ]);

  /**
   * Some of external scripts try to change global Object
   * To prevent that they totally broke and cause errors on the site
   * we can adjust and add replace required functions with some dummy ones
   */
  // Block cdn.rudderlabs.com
  // Block app.satismeter.com
  // @ts-ignore
  window.satismeter = () => {};
  // Block cdn.segment.com
  // Object.prototype.__trace__ = Object.prototype;

  window.requestAnimationFrame = window.requestAnimationFrame
    ?? ((cb: () => void) => { setTimeout(cb); });
})();
