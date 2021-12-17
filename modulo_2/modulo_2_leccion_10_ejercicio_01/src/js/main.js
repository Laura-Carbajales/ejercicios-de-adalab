'use strict';

function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result1').innerHTML = data.result;
    });
  fetch('https://api.rand.fun/number/integer')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result2').innerHTML = data.result;
    });
}
document.querySelector('.js-emoji').addEventListener('click', getEmoji);
