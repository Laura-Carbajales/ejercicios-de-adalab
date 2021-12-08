'use strict';
// elemento de HTML
const teacherIsra = document.querySelector('.teacher--isra');
const teacherTuerto = document.querySelector('.teacher--tuerto');
const teacherNasi = document.querySelector('.teacher--nasi');

// handler
function handleAddTeacher(event) {
  const selectedLi = event.currentTarget;
  selectedLi.classList.toggle('teacher--selected');

  const favoriteDiv = selectedLi.querySelector('.favorite');
  if (favoriteDiv.innerText === 'Añadir') {
    favoriteDiv.innerText = 'Quitar';
  } else {
    favoriteDiv.innerText = 'Añadir';
  }
}

// listener sobre el elemento, con tipo de evento y handler
teacherIsra.addEventListener('click', handleAddTeacher);
teacherTuerto.addEventListener('click', handleAddTeacher);
teacherNasi.addEventListener('click', handleAddTeacher);
