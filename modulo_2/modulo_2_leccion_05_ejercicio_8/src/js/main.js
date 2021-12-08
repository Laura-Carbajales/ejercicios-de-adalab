'use strict';
// elemento de HTML
const button1 = document.querySelector('.button__green');
const button2 = document.querySelector('.button__grey');

// handler
function handleButtonClick(event) {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle('pink');
}

// listener sobre el elemento, con tipo de evento y handler
button1.addEventListener('click', handleButtonClick);
button2.addEventListener('click', handleButtonClick);
