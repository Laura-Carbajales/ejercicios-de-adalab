'use strict';
// elemento de HTML
const input = document.querySelector('.input');
// handler
function handleInputKeyUp(event) {
  const inputValue = event.currentTarget.value; // Es lo mismo que const inputValue = input.value;
  const p = document.querySelector('.paragraph');
  p.innerHTML = inputValue;
}
// listener sobre el elemento, con tipo de evento y handler
input.addEventListener('keyup', handleInputKeyUp);
