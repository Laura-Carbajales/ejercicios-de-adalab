'use strict';

//Ejercicio 7
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const incidentUser = users.find((user) => user.pin === 5232);

const index = users.findIndex((user) => user.pin === 5232);

const userPermanet = users.splice(3, 1);

console.log(incidentUser);
console.log(index);
console.log(userPermanet);
console.log(users);

//Ejercicio 1
//Forma uno
// const marks = [5, 4, 6, 7, 9];
// const getSum = (num) => parseInt(num) + 1;
// const inflatedMarks = marks.map(getSum);
// console.log(inflatedMarks);

//Forma dos
const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((num) => parseInt(num) + 1);
console.log(inflatedMarks);

//Ejercicio 2
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const sayHi = names.map((name) => `Bienvenida ${name}`);
console.log(sayHi);

//Ejercicio 3
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];


