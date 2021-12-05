//Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos.

'use strict';
//Forma1
function mult(a, b) {
  const result = a * b;
  return result;
}
//Forma2
function mult2(a, b) {
  return a * b;
}

//Haz tres pruebas con distintos números y muestra el resultado en la consola.
//Prueba1
const multResult1 = mult(3, 4);
console.log(multResult1);

//Prueba2
const multResult2 = mult(5, 5);
console.log(multResult2);

//Prueba3
const multResult3 = mult(9, 9);
console.log(multResult3);
