'use strict';

//<-------------- Ejercicio 5 -------------->

//HTML
const allBtn = document.querySelectorAll('.input');
const main = document.querySelector('.container');

//Handler
function handleClickChangeStyle(event) {
  if (event.currentTarget.classList.contains('dark')) {
    main.classList.add('dark');
    main.classList.remove('ligth');
  } else {
    main.classList.add('ligth');
    main.classList.remove('dark');
  }
}

//Listener
for (const eachBtn of allBtn) {
  eachBtn.addEventListener('click', handleClickChangeStyle);
}
