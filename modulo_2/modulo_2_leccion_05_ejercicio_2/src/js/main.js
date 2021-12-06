'use strict';
// elemento de HTML
const button = document.querySelector('.input_button');
// handler
function showName() {
  const input = document.querySelector('.input_name');
  const name = input.value;
  const text = document.querySelector('.text');
  text.innerHTML = `Hola ${name}`;
}
// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showName);
