'use strict';
const button = document.querySelector('.button');
const text = document.querySelector('.text');
function showNewText() {
  text.innerHTML = 'Mi primer click, ¡olé yo!';
}
button.addEventListener('click', showNewText);
