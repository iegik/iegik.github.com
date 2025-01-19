

window.alert = function (message) {
  showDialog(message, 0);
};
window.confirm = function (message) {
  showDialog(message, 1);
};

window.prompt = function (message, defaultValue) {
  return showDialog(message, 2, defaultValue);
};

function showDialog(message, type, defaultValue = '') {
  window.dialog && document.body.removeChild(window.dialog);
  window.dialog = document.createElement('fieldset');
  dialog.className = 'dialog';
  dialog.setAttribute('bgcolor', 'green');

  var header = document.createElement('legend');
  header.textContent = document.title;
  dialog.appendChild(header);

  const form = document.createElement('form');
  dialog.appendChild(form);

  var msg = document.createElement('p');
  msg.textContent = message;
  form.appendChild(msg);

  var input;
  if (type === 2) {
    input = document.createElement('input');
    input.type = 'text';
    input.value = defaultValue;
    form.appendChild(input);
  }

  var br = document.createElement('br');
  form.appendChild(br);

  var okButton = document.createElement('input');
  okButton.setAttribute('type', 'submit');
  okButton.value = 'OK';
  form.appendChild(okButton);

  if (type > 0) {
    var cancelButton = document.createElement('input');
    cancelButton.setAttribute('type', 'cancel');
    cancelButton.value = 'Cancel';
    form.appendChild(cancelButton);
  }

  document.body.appendChild(dialog);
  input?.focus();

  let value;
  okButton.onclick = function () {
    document.body.removeChild(dialog);
    dialog = null
    if (type === 1) value = input.value;
    if (type === 2) value = true;
  };

  if (type > 0) {
    cancelButton.onclick = function () {
      document.body.removeChild(dialog);
      dialog = null
      value = type === 1 ? null : false;
    };
  }

  return {
    toString(){
      return value
    },
    then(fn) {
      fn(value)
    }
  }
}
