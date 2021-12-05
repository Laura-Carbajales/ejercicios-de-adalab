//Vamos a partir de uno de los ejemplos anteriores que usa una variable global, que luego se modifica desde una función.

// let secretLetter = "y";
// function mySecretLetter() {
//   secretLetter = "x";
//   return secretLetter;
// }
// console.log(mySecretLetter()); // devuelve "x"
// console.log(secretLetter); // devuelve "x"

//En el ejemplo anterior prueba a cambiar el orden del los console.log
'use strict';
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"
