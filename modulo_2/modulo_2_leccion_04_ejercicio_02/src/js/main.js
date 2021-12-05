//Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos.

'use strict';
//Forma1
function average(a, b, c, d) {
  const result = (a + b + c + d) / 4;
  return result;
}
//Forma2
function average2(a, b, c, d) {
  return (a + b + c + d) / 4;
}

//Haz tres pruebas con distintos números y muestra el resultado en la consola.
//Prueba1
const averageResult1 = average(2, 2, 3, 3);
console.log(averageResult1);

//Prueba2
const averageResult2 = average(5, 10, 7, 6);
console.log(averageResult2);

//Prueba3
const averageResult3 = average(5, 3, 4, 10);
console.log(averageResult3);
