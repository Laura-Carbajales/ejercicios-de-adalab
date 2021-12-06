'use strict';

//<-----------------------------Ejercicio 1-------------------------------------->

//Función simple
// function mult2(a, b) {
//   return a * b;
// }

//Arrow fuction
const mult = (a, b) => {
  return a * b;
};
console.log(mult(4, 5));

//Arrow fuction con return implícito
const mult2 = (a, b) => a * b;
console.log(mult2(4, 5));

//<-----------------------------Ejercicio 2-------------------------------------->

//Función simple
// function average2(a, b, c, d) {
//   return (a + b + c + d) / 4;
// }

//Arrow fuction
const average = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(average(2, 4, 2, 4));

//Arrow fuction con return implícito
const average2 = (a, b, c, d) => (a + b + c + d) / 4;
console.log(average2(2, 4, 2, 4));

//<-----------------------------Ejercicio 3-------------------------------------->

//Función simple
// function disaggregatedPrice(a) {
//   const tax = (a * 21) / 100;
//   const priceWithoutTax = a - tax;
//   return `Precio sin IVA: ${priceWithoutTax}€, IVA: ${tax}€ y Total: ${a}€`;
// }

//Arrow fuction
const disaggregatedPrice = (a) => {
  const tax = (a * 21) / 100;
  const priceWithoutTax = a - tax;
  return `Precio sin IVA: ${priceWithoutTax}€, IVA: ${tax}€ y Total: ${a}€`;
};
console.log(disaggregatedPrice(10));

//Arrow fuction con return implícito
//Esta función no se puede ejecutar con "return implícito"

//<-----------------------------Ejercicio 4-------------------------------------->

//Función simple
// function evenOrOdd(a) {
//   if (a % 2 === 0) {
//     console.log('true');
//     return true;
//   } else {
//     console.log('false');
//     return false;
//   }
// }

//Arrow fuction
const evenOrOdd = (a) => {
  if (a % 2 === 0) {
    console.log('Número PAR');
    return true;
  } else {
    console.log('Número IMPAR');
    return false;
  }
};
console.log(evenOrOdd(10));

//Arrow fuction con return implícito
//Esta función no se puede ejecutar con "return implícito"

//<-----------------------------Ejercicio 5-------------------------------------->

//Función simple
// function getEl(a) {
//   return document.querySelector(a);
// }

//Arrow fuction
const getEl = (a) => {
  return document.querySelector(a);
};
console.log(getEl('.blue'));

//Arrow fuction con return implícito
const getEl2 = (a) => document.querySelector(a);
console.log(getEl2('.blue'));

//<-----------------------------Ejercicio 6-------------------------------------->

// function getEl3(a) {
//   const htmlEl = document.querySelector(a);
//   if (!htmlEl) {
//     console.error(`No existe ningún elemento con clase, id o tag llamado ${a}`);
//   }
//   return htmlEl;
// }

//Arrow fuction
const getEl3 = (a) => {
  const htmlEl = document.querySelector(a);
  if (!htmlEl) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${a}`);
  }
  return htmlEl;
};
console.log(getEl3('.blues'));

//Arrow fuction con return implícito
//Esta función no se puede ejecutar con "return implícito"
