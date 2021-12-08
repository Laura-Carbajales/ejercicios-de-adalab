'use strict';
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// // elemento de HTML
const button = document.querySelector('.button');

function handleLiClick(event) {
  console.log(event.currentTarget.innerHTML);
}

// // handler
function handleAddList() {
  const ul = document.querySelector('.list');
  ul.innerHTML = `<li class="item-1">${inception}</li><li class="item-2">${theButterFlyEffect}</li><li class="item-3">${eternalSunshineOfTheSM}</li><li class="item-4">${blueVelvet}</li><li class="item-5">${split}</li>
  `;

  const item1 = document.querySelector('.item-1');
  const item2 = document.querySelector('.item-2');
  const item3 = document.querySelector('.item-3');
  const item4 = document.querySelector('.item-4');
  const item5 = document.querySelector('.item-5');

  item1.addEventListener('click', handleLiClick);
  item2.addEventListener('click', handleLiClick);
  item3.addEventListener('click', handleLiClick);
  item4.addEventListener('click', handleLiClick);
  item5.addEventListener('click', handleLiClick);
}

// // listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', handleAddList);
