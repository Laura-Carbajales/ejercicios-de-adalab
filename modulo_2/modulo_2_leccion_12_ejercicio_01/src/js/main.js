'use strict';
const list = document.querySelector('.items');
const numbers = [1, 2, 3];

for (const item of numbers) {
  const liElement = document.createElement('li');
  const liText = document.createTextNode(item);
  liElement.appendChild(liText);

  list.appendChild(liElement);
}
