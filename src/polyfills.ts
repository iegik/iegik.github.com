(() => {
  if (typeof window === 'undefined') return;

  window.requestAnimationFrame = window.requestAnimationFrame ?? ((cb: () => void) => { setTimeout(cb); });
})();
