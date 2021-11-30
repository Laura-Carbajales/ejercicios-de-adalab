'use strict';
const list = document.querySelector('.list');

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const listItem1 = `<li><img src="${firstDogImage}"> ${firstDogName}<li/>`;
const listItem2 = `<li><img src="${secondDogImage}"> ${secondDogName}<li/>`;
const listItem3 = `<li><img src="${thirdDogImage}"> ${thirdDogName}<li/>`;
list.innerHTML = `${listItem1} ${listItem2} ${listItem3}`;
