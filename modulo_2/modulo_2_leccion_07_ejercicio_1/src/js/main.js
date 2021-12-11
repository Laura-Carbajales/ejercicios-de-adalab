'use strict';
//Crear un array movies con un listado de 3 películas.
const movies = [
  'HP y la piedra filosofal',
  'HP y la cámara secreta',
  'HP y el prisionero de Azkaban',
];

//Añade al array anterior otra película más.
movies[3] = 'HP y el cáliz de fuego';
console.log(movies);

//Tienes que modificar la película que menos te guste de las que hay en el array por el nombre de otra que te guste más.
movies[3] = 'El señor de los anillos: las dos torres';
console.log(movies);

//De nuevo, modifica la película que menos te guste del array por otra.
movies[2] = 'Maléfica';
console.log(movies);

//Encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos workWithMovies.
function workWithMovies() {
  console.log(movies);
}
workWithMovies();
