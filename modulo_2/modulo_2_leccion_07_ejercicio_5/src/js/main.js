'use strict';

//<------- Parte 1 ------->

//Crear un nuevo array numbers
const numbers = [15, 7, 4, 11, 14];

//Crear una variable dónde se irán sumando los numeros
let acc = 0;

//Bucle para calcular la suma de los números
for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];
}

//Bucle para calcular la media de los números
console.log(`La media es ${acc / 5}`);

//<------- Parte 2 ------->
//Crear un nuevo array numbers
const numbers2 = [8, 13, 5, 9, 69, 4];
//Crear una variable dónde se irán sumando los numeros
let suma2 = 0;
//Bucle para calcular la suma de los números
for (let i = 0; i < numbers2.length; i++) {
  suma2 += numbers2[i];
}
//Bucle para calcular la media de los números
console.log(`La media es ${suma2 / 6}`);

//<------- Parte 3 ------->
function average(numbers) {
  let acc = 0;
  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }
  return acc / numbers.length;
}
console.log(average(numbers));
console.log(average(numbers2));
console.log(average([10, 10, 10, 10]));
