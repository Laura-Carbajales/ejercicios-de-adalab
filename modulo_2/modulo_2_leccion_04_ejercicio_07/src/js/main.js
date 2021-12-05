'use strict';

//Función evenOrOdd(a) (ejercicio 4 - par/impar)
function evenOrOdd(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//Función getEl(a) (ejercicio 7 - querySelector)
function getEl(a) {
  const htmlEl = document.querySelector(a);
  if (!htmlEl) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${a}`);
  }
  return htmlEl;
}

//Usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML).
const paragraphEl = getEl('.numberParagraph').innerHTML;

//convertimos ese valor a número y lo asignamos a una constante.
const paragraphElValue = parseInt(paragraphEl);

//Usamos nuestra función del ejercicio 4 para saber si es par o impar.
console.log(evenOrOdd(paragraphElValue));

//Escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'
if (evenOrOdd(paragraphElValue)) {
  console.log(`Este número es PAR: ${paragraphEl}`);
} else {
  console.log(`Este número es IMPAR: ${paragraphEl}`);
}

// //Prueba 1
// const btnEl = getEl('.btn');
// console.log(btnEl);

// //Prueba 2
// const contEl = getEl('.xbjs');
// console.log(contEl);
