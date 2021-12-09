'use strict';
// elemento de HTML
const teachers = document.querySelector('.teachers');

// handler
function handleAddTeacher(event) {
  console.log(event.target);
  let selectedElement = event.target;
  if (!selectedElement.classList.contains('favorite')) {
    selectedElement = selectedElement.querySelector('.favorite');
  }
  selectedElement.parentElement.classList.toggle('teacher--selected');

  //const favoriteDiv = selectedLi.querySelector('.favorite');
  if (selectedElement.innerText === 'Añadir') {
    selectedElement.innerText = 'Quitar';
  } else {
    selectedElement.innerText = 'Añadir';
  }
}

// listener sobre el elemento, con tipo de evento y handler
teachers.addEventListener('click', handleAddTeacher);
