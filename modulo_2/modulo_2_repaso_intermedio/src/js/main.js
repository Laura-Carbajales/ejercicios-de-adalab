'use strict';
//Elementos HTML
const container = document.querySelector('.js_container');
const face = document.querySelector('.js_text');
const select = document.querySelector('.js_select');
const button = document.querySelector('.js_button');

//Funcion numero aleatorio Math.random()
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//Handler
function handlerClickChangeFace() {
  //Condicional: Que la cara del background cambie con el selector
  if (select.value === 'happy') {
    face.innerHTML = ';)';
  } else {
    face.innerHTML = ':(';
  }
  //Funcion: Numero aleatorio
  getRandomNumber(1, 100);
  const randomNumber = getRandomNumber(1, 100);
  //Condicional: Que cambie el background con par/impar
  if (randomNumber % 2 === 0) {
    container.classList.add('yellow');
    container.classList.remove('orange');
  } else {
    container.classList.add('orange');
    container.classList.remove('yellow');
  }
  //Que se muestre en consola el número aleatorio
  console.log(randomNumber);
}

//Listener
button.addEventListener('click', handlerClickChangeFace);
