//Crear una función debe recibir por parámetro un selector de css y retornar el elemento de HTML correspondiente.

'use strict';
//Función
function getEl(a) {
  const htmlEl = document.querySelector(a);
  if (!htmlEl) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${a}`);
  }
  return htmlEl;
}

//Prueba 1
const btnEl = getEl('.btn');
console.log(btnEl);

//Prueba 2
const contEl = getEl('.xbjs');
console.log(contEl);
