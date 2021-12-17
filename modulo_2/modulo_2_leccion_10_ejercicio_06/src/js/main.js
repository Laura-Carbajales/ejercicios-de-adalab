'use strict';

//Handler
function getRandomDog() {
  //pedir lista de razas
  fetch('https://dog.ceo/api/breeds/list')
    .then((response) => response.json())
    .then((breedsData) => {
      console.log(breedsData);
      const breeds = breedsData.message;
      //const breeds = Object.keys(breedsData.message);
      console.log(breeds);

      //Tomar una aleatoria, muestra un mensaje que diga la raza
      fetch('https://api.rand.fun/number/integer?max=94')
        .then((numberResponse) => numberResponse.json())
        .then((numberData) => {
          const randomNumber = numberData.result;
          const dogBreed = breeds[randomNumber];
          console.log(breeds[randomNumber]);
          //Pintar la imagen
        });
    });
}

document.addEventListener('click', getRandomDog);
