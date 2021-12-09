'use strict';
//Adalaber 1
const adalaber1 = {
  name: 'Susana',
  age: 34,
  career: 'periodista',
  run: () => 'Estoy corriendo',
  runAMarathon: (distance) => `Estoy corriendo un maratón de ${distance} kilómetros`,
  showBio: function () {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.career;
  },
};

console.log(adalaber1.showBio());

//Adaleber 2
const adalaber2 = {
  name: 'Rocío',
  age: 25,
  career: 'actriz',
  showBio: function () {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.career;
  },
};

console.log(adalaber1.showBio());
console.log(adalaber2.showBio());
