"use strict";
const firstTitle = document.querySelector(".title");
const titleContent = "La Adalaber seleccionada es: ";
const firstName = document.querySelector(".name1");
const secondName = document.querySelector(".name2");
firstTitle.innerHTML = titleContent + firstName.textContent;
firstTitle.innerHTML = titleContent + secondName.textContent;
