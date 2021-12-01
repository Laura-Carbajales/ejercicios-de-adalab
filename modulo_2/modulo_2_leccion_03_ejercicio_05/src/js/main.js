'use strict';
const sectionDiv = document.querySelector('.js-div');
const title = document.querySelector('.title');
const text = document.querySelector('.text');

if (sectionDiv.classList.contains('warning')) {
  title.innerHTML = 'AVISO';
  text.innerHTML = 'Tenga cuidado';
} else if (sectionDiv.classList.contains('error')) {
  title.innerHTML = 'ERROR';
  text.innerHTML = 'Ha surgido un error';
} else if (sectionDiv.classList.contains('success')) {
  title.innerHTML = 'CORRECTO';
  text.innerHTML = 'Los datos son correctos';
}
