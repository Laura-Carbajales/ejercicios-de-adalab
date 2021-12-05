//Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.

'use strict';
//Función
function evenOrOdd(a) {
  if (a % 2 === 0) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}

//Prueba 1
evenOrOdd(15);

//Prueba 2
evenOrOdd(10);

//Prueba 3
evenOrOdd(97);
