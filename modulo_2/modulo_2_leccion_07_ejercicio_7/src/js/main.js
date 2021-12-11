'use strict';
//Crear objetos
const adalaber1 = {
  name: 'María',
  age: 29,
  job: 'diseñadora',
};
const adalaber2 = {
  name: 'Lucía',
  age: 31,
  job: 'ingeniera quimica',
};
const adalaber3 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
};
const adalaber4 = {
  name: 'Rocío',
  age: 25,
  job: 'actriz',
};
const adalaber5 = {
  name: 'Inma',
  age: 21,
  job: 'diseñadora',
};

//Crear array
const adalabers = [adalaber1, adalaber2, adalaber3, adalaber4, adalaber5];

//Crear funcion 1 (numero de adalabers en el listado)
function countAdalabers(list) {
  return list.length;
}
console.log(countAdalabers(adalabers));

//Crear funcion 2 (media de edad)
function averageAge(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i].age;
  }
  return sum / list.length;
}
console.log(averageAge(adalabers));

//Crear funcion 2 (media de edad con bucle for...of)
function averageAge2(list) {
  let sum = 0;
  for (const adalaber of list) {
    sum += adalaber.age;
  }
  return sum / list.length;
}
console.log(averageAge2(adalabers));

//Cear la función para saber la adalaber más joven
function theYoungest(list) {
  //variable para ir gusrdando la edad minima de las adalabers mientras se recorre el bucle
  let minAge = 100;
  //variable para ir gusrdando el nombre de la adalaber mas joven mientras se recorre el bucle
  let youngest = '';
  for (let i = 0; i < list.length; i++) {
    if (list[i].age < minAge) {
      youngest = list[i].name;
      minAge = list[i].age;
    }
  }
  return youngest;
}
console.log(theYoungest(adalabers));

//Cear la función para saber las diseñadoras
function countDesigners(list) {
  let designers = 0;
  for (const adalaber of list) {
    if (adalaber.job === 'diseñadora') {
      designers++;
    }
  }
  return designers;
}
console.log(countDesigners(adalabers));
