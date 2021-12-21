'use strict';
//HTML
const selectInput = document.querySelector('.js-select');
console.log(selectInput.value);
const img = document.querySelector('.img');
img.style.width = '200px';
img.style.height = '200px';

function handleGetValue() {
  console.log(selectInput.value);
  if (selectInput.value === 'gijon') {
    img.src =
      'https://media.istockphoto.com/photos/san-pedro-church-in-gijon-promenade-picture-id508707568?k=20&m=508707568&s=612x612&w=0&h=okhSd97dv1mvpEwARlIDrZ-2McaSJaPjLwXNmIsEiwc=';
  } else if (selectInput.value === 'oviedo') {
    img.src =
      'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/blog/espana_asturias_oviedo_callemonoviedo_1200x678_1_jose_francisco_sanchez_diaz__www.fototropia.com_.jpg?itok=epYtUTSG';
  } else if (selectInput.value === 'aviles') {
    img.src =
      'https://www.turismoasturias.es/documents/11022/3572964/Panoramica+1_Sabugo_Portada.jpg/205128da-1a59-4e27-a994-a1ee94537dae?t=1538644927684';
  }
}

//
selectInput.addEventListener('change', handleGetValue);
