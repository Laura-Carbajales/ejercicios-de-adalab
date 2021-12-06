'use strict';
// elemento de HTML
const paragraph = document.querySelector('.paragraph1');
// handler
function showNewParagraph() {
  const div = document.querySelector('.container');
  div.innerHTML += `<p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ab laudantium doloribus asperiores sequi accusamus dolorem, reiciendis neque alias nam laborum numquam laboriosam natus consequuntur temporibus, ipsum quisquam maiores exercitationem.</p>`;
}
// listener sobre el elemento, con tipo de evento y handler
paragraph.addEventListener('mouseover', showNewParagraph);
