export const html = (strings: TemplateStringsArray, ...values: unknown[]): Node | Element | string => {
  const raw = String.raw({ raw: strings }, ...values);
  if (typeof document === "undefined") return raw;
  const el = document.createElement("div");
  el.innerHTML = raw;
  return el.firstElementChild || '';
};
