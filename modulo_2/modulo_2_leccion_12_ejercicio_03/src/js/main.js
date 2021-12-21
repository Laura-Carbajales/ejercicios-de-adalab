'use strict';
const user = [
  {
    nombre: 'Lau',
    apellido: 'Carbajales',
    telefono: '630905896',
  },
  {
    nombre: 'Maca',
    apellido: 'Peña',
    telefono: '659862145',
  },
  {
    nombre: 'Isa',
    apellido: 'Garabana',
    telefono: '630905896',
  },
];

//HTML
const selectInput = document.querySelector('.js-select');
const nameInput = document.querySelector('.js-name');
const lastNameInput = document.querySelector('.js-lastName');
const phoneInput = document.querySelector('.js-phone');

for (const itemUser of user) {
  const option = document.createElement('option');
  option.value = itemUser.nombre;
  const contentOption = document.createTextNode(itemUser.nombre);
  selectInput.appendChild(option);
  option.appendChild(contentOption);
}

//Handler
function handleChangeSelectUser() {
  if (selectInput.value === 'Lau') {
    nameInput.value = user[0].nombre;
    lastNameInput.value = user[0].apellido;
    phoneInput.value = user[0].telefono;
  } else if (selectInput.value === 'Maca') {
    nameInput.value = user[1].nombre;
    lastNameInput.value = user[1].apellido;
    phoneInput.value = user[1].telefono;
  } else if (selectInput.value === 'Isa') {
    nameInput.value = user[2].nombre;
    lastNameInput.value = user[2].apellido;
    phoneInput.value = user[2].telefono;
  }
}

//Listener
selectInput.addEventListener('change', handleChangeSelectUser);
