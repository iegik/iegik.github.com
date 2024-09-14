function (D, O, S, theme = "", _) {
  _ = document.getElementById(S);
  theme = _.innerHTML;
  O.onclick = remove;
  function add() {
      O.innerText = "EXIT";
      O.href = "#exit"
      O.onclick = remove;
      _ = D.createElement("style");
      _.id = S;
      _.innerHTML = theme;
      _.setAttribute("nonce", nonce);
      D.head.appendChild(_);
      [].forEach.call(
          document.getElementsByTagName("img"),
          toggleAttr("src", "data-src")
      );
  }
  const reDataAttr = /^data-/;
  [].forEach.call(
      document.getElementsByTagName("img"),
      toggleAttr("src", "data-src")
  );
  function remove() {
      O.innerText = "DOS";
      O.href = "#dos"
      O.onclick = add;
      _.remove();
      [].forEach.call(
      document.getElementsByTagName("img"),
      toggleAttr("data-src", "src")
      );
  }
  function toggleAttr(a, b) {
      return function (el) {
          setAttribute(el, b, getAttribute(el, a) || "");
          removeAttribute(el, a);
      };
  }
  function getAttribute(el, attr) {
      if (reDataAttr.test(attr)) {
          return el.dataset[attr.replace("data-", "")];
      } else {
          return el.getAttribute(attr);
      }
  }
  function setAttribute(el, attr, value) {
      if (reDataAttr.test(attr)) {
          el.dataset[attr.replace("data-", "")] = value;
      } else {
          el.setAttribute(attr, value);
      }
  }
  function removeAttribute(el, attr) {
      if (reDataAttr.test(attr)) {
          delete el.dataset[attr.replace("data-", "")];
      } else {
          el.removeAttribute(attr);
      }
  }
  // @ts-ignore
}