'use strict';
//Elementos HTML
const buttons = document.querySelectorAll('.js_alarma');

//Hadler
function handlerClickBackgroundColor(event) {
  console.log('patata');
  if (event.currentTarget.parentNode.classList.contains('white')) {
    event.currentTarget.parentNode.classList.remove('white');
    event.currentTarget.parentNode.classList.add('red');
  } else if (event.currentTarget.parentNode.classList.contains('red')) {
    event.currentTarget.parentNode.classList.remove('red');
    event.currentTarget.parentNode.classList.add('white');
  }
}

//Listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handlerClickBackgroundColor);
}
