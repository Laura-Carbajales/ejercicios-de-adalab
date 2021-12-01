'use strict';
const age = 6;
const humanAge = 24 + (age - 2) * 5;

if (age === 1) {
  console.log('La edad de tu perro es 15 años humanos');
} else if (age === 2) {
  console.log('La edad de tu perro es 24 años humanos');
} else if (age >= 3) {
  console.log(`La edad de tu perro es ${humanAge} años humanos`);
} else {
  console.log('Por favor, introduce un número entero o mayor que 0.');
}
