'use strict';
//Forma 1
const adalaber1 = {
  name: 'Susana',
  age: 34,
  career: 'periodista',
  run: () => 'Estoy corriendo',
  runAMarathon: (distance) => `Estoy corriendo un maratón de ${distance} kilómetros`,
};

console.log(adalaber1.run());
console.log(adalaber1.runAMarathon(50));
