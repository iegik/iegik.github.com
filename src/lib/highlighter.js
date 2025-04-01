const highlight = (code) => code
  // операторы
.replaceAll(/\b(echo|var|let|const|func|function|typeof|new|return|if|for|in|while|break|do|continue|switch|case|try|catch)([^a-z0-9\$_])/g,
  '<span class="c-keyword">$1</span>$2')
  // типы данных, объекты
  .replaceAll(/\b(RegExp|Boolean|Number|String|Array|Object|Function|this|true|false|NaN|undefined|null|Infinity)([^a-z0-9\$_])/g,
  '<span class="c-type">$1</span>$2')
  // комментарии
  .replaceAll(/(\/\*[^]*?\*\/|(\/\/)[^\n\r]+)/gim,'<span class="c-comment">$1</span>')
  // строки
  .replaceAll(/('.*?')/g,'<span class="c-string">$1</span>')
  // имена функций, переменные
  .replaceAll(/( |\(|\[)([a-z\_\$][a-z0-9_]*)(\s?([\(\)\[\];]|[=+\-\*,<]\s)|\s>)/gi,'$1<a id="var-$2" href="#var-$2" class="c-variable">$2</a>$3')
  // скобки
  .replaceAll(/(\{|\}|\]|\[|\|)/gi,'<span class="c-punctuation">$1</span>')
  // числа
  .replaceAll(/(0x[0-9a-f]*|\b(\d*\.)?([\d]+(e-?[0-9]*)?)\b)/gi,'<span class="c-atom">$1</span>')//|(0x[0-9abcdefx]*)
  // табуляция (2 пробела)
  //.replace(/\t/g,'  ')

document.querySelectorAll('code')
    .forEach((code) => {
        code.innerHTML=highlight(code.innerText)
    });
