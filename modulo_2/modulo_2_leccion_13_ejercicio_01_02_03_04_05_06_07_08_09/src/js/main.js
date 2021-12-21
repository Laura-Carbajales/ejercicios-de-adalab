'use strict';

//Ejercicio 1
const marks = [5, 4, 6, 7, 9];
const sum = (marks) => parseInt(marks) + 1;
const inflatedMarks = marks.map(sum);
console.log(inflatedMarks);

//Ejercicio 2
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const sayHi = (names) => `Bienvenida ${names}`;
const wellcome = names.map(sayHi);
console.log(wellcome);

//Ejercicio 3
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

function sayHiPremium(user) {
  if (user.isPremium) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros`;
  } else {
    return `Bienvenida ${user.name}.`;
  }
}

const wellcome2 = users.map(sayHiPremium);
console.log(wellcome2);

//Ejercicio 4
const users2 = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const premiumUsers = users2.filter((user) => user.isPremium);
console.log(premiumUsers);

//Ejercicio 5
const pins = [2389, 2384, 2837, 5232, 8998];
const evenPins = pins.filter((pin) => pin % 2 === 0);
console.log(evenPins);

//Ejercicio 6
const users3 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const userEvenPins = users3.filter((user) => user.pin % 2 === 0);
console.log(userEvenPins);

//Ejercicio 7
const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];
const winner = runners
  .filter((runner) => runner.student)
  .reduce((previousRunner, currentRunner) => {
    if (previousRunner.time < currentRunner.time) {
      return previousRunner;
    }
    return currentRunner;
  });
console.log(winner);

//Ejercicio 8
//Parte 1
const users4 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const incidentUser = users4.find((user) => user.pin === 5232);
console.log(incidentUser);

//Parte 2
const userIndex = users4.findIndex((user) => user.pin === 5232);
console.log(userIndex);

users4.splice(3, 1);
console.log(users4);

//Ejercicio 9
const times = [56, 9, 45, 28, 35];
const mean = times.reduce((acc, number) => acc + number);
console.log(mean / times.length);
