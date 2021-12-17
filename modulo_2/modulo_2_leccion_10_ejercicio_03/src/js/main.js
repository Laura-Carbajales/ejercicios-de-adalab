'use strict';

function handleClickGitHubProfile(event) {
  event.preventDefault();
  const input = document.querySelector('.js-search');
  const userName = input.value;
  const name = document.querySelector('.js-name');
  const img = document.querySelector('.js-img');
  const number = document.querySelector('.js-number');
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      name.innerHTML = data.name;
      img.src = data.avatar_url;
      number.innerHTML = data.public_repos;
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', handleClickGitHubProfile);
