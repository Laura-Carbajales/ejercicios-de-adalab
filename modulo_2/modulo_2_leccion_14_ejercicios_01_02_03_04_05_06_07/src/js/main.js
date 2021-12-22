'use strict';
//Ejercicio 1
let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);

//Ejercicio 2
let counter2 = 0;

const incrementAndShowCounter2 = () => {
  counter2++;
  if (counter2 <= 12) {
    const time2 = document.querySelector('.time2');
    time2.innerHTML = counter2;
    const div = document.querySelector('.grapes_container');
    div.innerHTML += `<img class="grape" src="../assets/images/uva.jpeg"/>`;
  }
};

setInterval(incrementAndShowCounter2, 1000);

//Ejercicio 3
let counter3 = 0;

const incrementAndShowCounter3 = () => {
  counter3++;
  const time3 = document.querySelector('.container__small');
  if (counter3 <= 59) {
    time3.innerHTML = `Escrito hace ${counter3} segundo`;
  } else if (counter3 >= 59) {
    time3.innerHTML = `Escrito hace 1 minuto`;
  }
};

setInterval(incrementAndShowCounter3, 1000);

//Ejercicio 4
const sessionExpired = () => {
  const popUp = document.querySelector('.container4');
  popUp.classList.remove('hidden');
};

setTimeout(sessionExpired, 15000);

//Ejercicio 5
let counter5 = 0;
let temp;

const incrementAndShowCounter5 = () => {
  counter5++;
  if (counter5 <= 12) {
    const time5 = document.querySelector('.time5');
    time5.innerHTML = counter5;
    const div5 = document.querySelector('.grapes_container5');
    div5.innerHTML += `<img class="grape" src="../assets/images/uva.jpeg"/>`;
  } else if (counter5 >= 12) {
    console.log(counter5);
    clearInterval(temp);
  }
};

temp = setInterval(incrementAndShowCounter5, 1000);

//Ejercicio 6
//HTML
const btnStart = document.querySelector('.container6__start');
const btnStop = document.querySelector('.container6__stop');

//Constantes
let counter6 = 0;
let temp6;

//Functions - Handler
const incrementAndShowCounter6 = () => {
  counter6++;
  const time6 = document.querySelector('.container6__counter');
  time6.innerHTML = counter6;
};
function handleStart() {
  temp6 = setInterval(incrementAndShowCounter6, 1000);
}
function handleStop() {
  clearInterval(temp6);
}

//Listener
btnStart.addEventListener('click', handleStart);
btnStop.addEventListener('click', handleStop);

//Ejercicio 7
//HTML
const btn7 = document.querySelector('.container7__btn');

//Constantes
let counter7 = 0;
let temp7;

//Functions - Handler
const incrementAndShowCounter7 = () => {
  counter7++;
  console.log(counter7);
  if (counter7 >= 10) {
    btn7.classList.remove('hidden');
  }
};
function handleBtn() {
  clearInterval(temp6);
  btn7.classList.add('hidden');
  counter7 = 0;
  temp6 = setInterval(incrementAndShowCounter7, 1000);
}

temp6 = setInterval(incrementAndShowCounter7, 1000);
//Listener
btn7.addEventListener('click', handleBtn);

//Ejercicio 8
