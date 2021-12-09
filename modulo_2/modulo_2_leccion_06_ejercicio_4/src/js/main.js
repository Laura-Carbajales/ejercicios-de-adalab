'use strict';
// elemento de HTML
const button = document.querySelector('.js-button');

// handler
function showEvent() {
  console.log(event);
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showEvent);

//La clave type que encontramos en él ¿es una propiedad o un método?.
//Es una propiedad. Los métodos serían, por ejemplo una función.
