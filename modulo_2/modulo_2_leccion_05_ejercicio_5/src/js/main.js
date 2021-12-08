'use strict';
// elemento de HTML
const body = document.querySelector('body');
// handler
function handleKeyDown(event) {
  if (event.key === 'r') {
    body.classList.add('red');
    body.classList.remove('purple');
  } else if (event.key === 'm') {
    body.classList.add('purple');
    body.classList.remove('red');
  }
}
// listener sobre el elemento, con tipo de evento y handler
document.addEventListener('keydown', handleKeyDown);
