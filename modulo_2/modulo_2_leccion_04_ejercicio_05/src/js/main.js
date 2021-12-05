//Crear una función debe recibir por parámetro un selector de css y retornar el elemento de HTML correspondiente.

'use strict';
//Función
function getEl(a) {
  return document.querySelector(a);
}

//Prueba 1
const btnEl = getEl('.btn');
console.log(btnEl);

//Prueba2
const contEl = getEl('.container');
console.log(contEl);
