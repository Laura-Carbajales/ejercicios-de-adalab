'use strict';
//Elemento HTML
const filmInput1 = document.querySelector('.film1');
const filmInput2 = document.querySelector('.film2');
const textInput1 = document.querySelector('.text1');
const button = document.querySelector('.button');

//Hadler
function handleClickButtonInput() {
  const filmList = [filmInput1.value, filmInput2.value];
  console.log(filmList);
  for (const movie of filmList) {
    textInput1.innerHTML += `<p>¡A mí también me encantó "${movie}"! Tenemos mucho en común, humana.</p>`;
  }
}
//Listener
button.addEventListener('click', handleClickButtonInput);
