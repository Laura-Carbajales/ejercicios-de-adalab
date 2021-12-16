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

//Crear bucle que recorra la lista 'tasks'
function render() {
  list.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      list.innerHTML += `<li class="true"><input id=${i} class="checkbox" type="checkbox" checked>${tasks[i].name} </li>`;
    } else {
      list.innerHTML += `<li><input id=${i} class="checkbox" type="checkbox">${tasks[i].name}</li>`;
    }
  }

  const checkbox = document.querySelectorAll('.checkbox');
  //Listener
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', handleClickCheckboxChecked);
  }
}
render();

//Handle
function handleClickCheckboxChecked(event) {
  // if (event.currentTarget.checked) {
  //   event.currentTarget.parentNode.classList.toggle('true');
  // } else {
  //   event.currentTarget.parentNode.classList.toggle('true');
  // }
  //Ahora vamos a cambiarlo no sólo visualmente, sino en el objeto.
  const posTask = event.currentTarget.id;
  if (tasks[posTask].completed) {
    tasks[posTask].completed = false;
  } else {
    tasks[posTask].completed = true;
  }
  render();
}
