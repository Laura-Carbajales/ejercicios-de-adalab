'use strict';
const input = document.querySelector('.js-input');

function handleKeyUpGetName() {
  const value = input.value;
  localStorage.setItem('userName', value);
}

input.addEventListener('keyup', handleKeyUpGetName);
input.value = localStorage.getItem('userName');
