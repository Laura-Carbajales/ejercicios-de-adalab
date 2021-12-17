'use strict';

function handleClickGitHubProfile(event) {
  event.preventDefault();
  const input = document.querySelector('.js-search');
  const orgName = input.value;

  fetch(`https://api.github.com/orgs/${orgName}`)
    .then((response) => response.json())
    .then((data) => {
      const repos = data.repos_url;
      return fetch(repos);
    })
    .then((response) => response.json())
    .then((listData) => {
      const list = document.querySelector('.js-list');
      for (const item of listData) {
        const listDataContent = `<li>${item.name}</li>`;
        list.innerHTML += listDataContent;
      }
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', handleClickGitHubProfile);
