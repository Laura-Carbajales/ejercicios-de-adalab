'use strict';

//Array
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

//HTML
const list = document.querySelector('.list');
const checkbox = document.querySelectorAll('.checkbox');

//Crear bucle que recorra la lista 'tasks'
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].completed) {
    list.innerHTML += `<li class="true">${tasks[i].name} <input class="checkbox" type="checkbox" checked></li>`;
  } else {
    list.innerHTML += `<li>${tasks[i].name}<input class="checkbox" type="checkbox"></li>`;
  }
}

//Handle
function handleClickCheckboxChecked(event) {
  if (event.currentTarget.checked) {
    event.currentTarget.parentNode.classList.add('true');
  } else {
    event.currentTarget.parentNode.classList.remove('true');
  }
}

//Listener
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click', handleClickCheckboxChecked);
}
