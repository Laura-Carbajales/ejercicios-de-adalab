'use strict';
//Crear el objeto "cesta de peras"
const cestaDePeras = {
  max: 30,
  min: 5,
  currentNumber: 25,
  startingNumber: 5,
  addPear: function (add) {
    return cestaDePeras.currentNumber + add;
  },
  takeOutPear: function (takeOut) {
    return cestaDePeras.currentNumber - takeOut;
  },
  reset: function () {
    return 0 + cestaDePeras.startingNumber;
  },
};

console.log(cestaDePeras.max);
console.log(cestaDePeras.min);
console.log(cestaDePeras.currentNumber);
console.log(cestaDePeras.startingNumber);
console.log(cestaDePeras.addPear(5));
console.log(cestaDePeras.takeOutPear(5));
console.log(cestaDePeras.reset());
