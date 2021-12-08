'use strict';
// elemento de HTML
const button = document.querySelector('.button');

// handler
function handleButtonClick(event) {
  event.currentTarget.classList.toggle('pink');

  // Otra forma de hacerlo:
  //  if (event.currentTarget.classList.contains('pink')) {
  //   event.currentTarget.classList.remove('pink');
  // } else {
  //   event.currentTarget.classList.add('pink');
  // }
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', handleButtonClick);
