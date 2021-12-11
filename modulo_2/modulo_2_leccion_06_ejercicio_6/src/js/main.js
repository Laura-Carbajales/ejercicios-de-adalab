'use strict';
//Crear el objeto "cesta de peras"
const cestaDePeras = {
  max: 10,
  min: 5,
  actualNumber: 6,
  inicialNumber: 0,
  add: function () {
    this.actualNumber++; //Es lo mismo que: += 1;
  },
  takeOut: function () {
    this.actualNumber--; //Es lo mismo que: -= 1;
  },
  reset: function () {
    this.actualNumber = 0;
  },
};

console.log(cestaDePeras.max);
console.log(cestaDePeras.min);
console.log(cestaDePeras.actualNumber);
console.log(cestaDePeras.inicialNumber);
console.log(cestaDePeras.add());
console.log(cestaDePeras.takeOut());
console.log(cestaDePeras.reset());
