'use strict';
//Forma 1
const adalaber1 = {
  name: 'Susana',
  age: 34,
  career: 'periodista',
};

//Forma 2
const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.career = 'actriz';

// Muestra en la web una frase como esta: 'Mi nombre es Susana, tengo 34 años y soy periodista'
const text = document.querySelector('.js-paragraph');
text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.career}.`;

// Muestra en la web una frase como esta: 'Mi nombre es Rocío, tengo 25 años y soy actriz'
text.innerHTML += ` Mi nombre es ${adalaber2['name']}, tengo ${adalaber2['age']} años y soy ${adalaber2['career']}.`;
