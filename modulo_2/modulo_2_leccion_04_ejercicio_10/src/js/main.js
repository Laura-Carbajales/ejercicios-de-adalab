'use strict';

function boxCal(borderBox, width, padding, boderSize) {
  const widthContentBox = width - padding - boderSize;
  const widthBorderBox = width + padding + boderSize;

  if (borderBox) {
    return console.log(
      `El ancho del contenido es: ${widthContentBox}px y el ancho total de la caja es: ${width}px.`
    );
  } else {
    return console.log(
      `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${widthBorderBox}px.`
    );
  }
}

console.log(boxCal(true, 50, 10, 5));
console.log(boxCal(false, 50, 10, 5));
