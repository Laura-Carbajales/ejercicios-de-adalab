'use strict';
//Parte 1
const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenNumbers = [];
for (let i = 0; i < lostNumbers.length; i++) {
  if (lostNumbers[i] % 2 === 0) {
    evenNumbers.push(lostNumbers[i]);
  }
}
console.log(evenNumbers);

//Parte 2
const multipleOf3Numbers = [];
for (let i = 0; i < lostNumbers.length; i++) {
  if (lostNumbers[i] % 3 === 0) {
    multipleOf3Numbers.push(lostNumbers[i]);
  }
}
console.log(multipleOf3Numbers);

//Parte 3
const result = evenNumbers.concat(multipleOf3Numbers);
console.log(result);
