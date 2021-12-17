'use strict';

function getDogImage1() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('.img1');
      img.src = data.message;
      img.alt = 'Un chihuahua';
    });
}
const btn1 = document.querySelector('.js-dog');
btn1.addEventListener('click', getDogImage1);

function getDogImage2() {
  fetch('https://dog.ceo/api/breed/labrador/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('.img2');
      img.src = data.message;
      img.alt = 'Un labrador';
    });
}
const btn2 = document.querySelector('.js-other-dog');
btn2.addEventListener('click', getDogImage2);
