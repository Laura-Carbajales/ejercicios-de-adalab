'use strict';
const nameUser1 = 'Laura';
const nameUser2 = 'Rocío';
const random = 'yudyju';

if (random === nameUser1 || random === nameUser2) {
  console.log(`Bienvenida, ${random}`);
} else {
  console.log('"Lo siento pero el usuario que has introducido no está registrado".');
}
