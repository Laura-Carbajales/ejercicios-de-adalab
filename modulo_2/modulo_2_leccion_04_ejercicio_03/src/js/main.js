//Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total.

'use strict';
//Forma1
function disaggregatedPrice(a) {
  const tax = (a * 21) / 100;
  const priceWithoutTax = a - tax;
  return `Precio sin IVA: ${priceWithoutTax}€, IVA: ${tax}€ y Total: ${a}€`;
}

//Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.
//Prueba1
const price1 = disaggregatedPrice(150);
console.log(price1);

//Prueba2
const price2 = disaggregatedPrice(1000);
console.log(price2);

//Prueba3
const price3 = disaggregatedPrice(50);
console.log(price3);
