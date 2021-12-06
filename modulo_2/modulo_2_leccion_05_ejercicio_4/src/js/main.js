'use strict';
// elemento de HTML
const div = document.querySelector('.container');
// handler
function windowScroll() {
  if (window.scrollY > 250) {
    div.classList.remove('pink');
    div.classList.add('blue');
  } else {
    div.classList.add('pink');
    div.classList.remove('blue');
  }
}
// listener sobre el elemento, con tipo de evento y handler
window.addEventListener('scroll', windowScroll);
