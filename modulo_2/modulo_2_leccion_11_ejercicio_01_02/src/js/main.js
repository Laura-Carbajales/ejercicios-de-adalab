//<------------------- Ejercicio 1 ------------------->
//* URL base del API: https://swapi.py4e.com/api/

//* Necesita autenticación: No se requiere autenticación.

//* Método HTTP que deben usar las peticiones a este API: GET

//* URL para acceder a la info del personaje "Luke Skywalker": http https://swapi.py4e.com/api/people/1/

//* URL para acceder a la info de la película "A New Hope": http https://swapi.py4e.com/api/films/1/

//* ¿A qué otros recursos puedo acceder desde el API además de personajes y pelis?: planets, species, starships & vehicles.

//* URL para acceder al listado de personajes, ¿está paginada?: http https://swapi.py4e.com/api/people/ (Sí, está paginado).

//* ¿Cómo puedo buscar personajes mediante la URL?: http https://swapi.py4e.com/api/people/?search=Luke

//* cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee: https://swapi.py4e.com/api/people/?search=Luke&format=wookiee

//<------------------- Ejercicio 2 ------------------->
'use strict';

function handleClickGetCharacter(event) {
  event.preventDefault();
  const input = document.querySelector('.js-search');
  const charName = input.value;

  fetch(`https://swapi.py4e.com/api/people/?search=${charName}`)
    .then((response) => response.json())
    .then((data) => {
      const list = document.querySelector('.js-list');
      const listChar = data.results;
      for (const item of listChar) {
        const listCharContent = `<li>${item.name}</li>`;
        list.innerHTML += listCharContent;
      }
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', handleClickGetCharacter);
