'use strict';
// // elemento de HTML
const link1 = document.querySelector('.js-link1');
const link2 = document.querySelector('.js-link2');
const link3 = document.querySelector('.js-link3');

// // handler
function handleScroll(event) {
  event.preventDefault();
}

// // listener sobre el elemento, con tipo de evento y handler
link1.addEventListener('click', handleScroll);
link2.addEventListener('click', handleScroll);
link3.addEventListener('click', handleScroll);
