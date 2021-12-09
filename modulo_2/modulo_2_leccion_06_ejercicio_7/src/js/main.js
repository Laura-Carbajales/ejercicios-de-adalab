'use strict';
//Crear la variable "job"
const job = 'Developer';

//Crear el objeto "User"
const user = {};
user.firstName = 'Laura';
user.lastName = 'Carbajales';
user.age = 32;
user.job = job;

//Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.job);

//Cambiaremos el nombre del usuario, y aumentaremos en 1 la edad.
user.firstName = 'Georgina';
user.lastName = 'Rodríguez';
user.age = 33;

//Comprobaremos de nuevo que todo sigue funcionando correctamente
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.job);
