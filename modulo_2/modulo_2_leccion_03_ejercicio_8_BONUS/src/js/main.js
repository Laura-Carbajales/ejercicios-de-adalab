// Calcular cuál va a ser el siguiente año bisiesto
// Vamos a escribir un pequeño programa que nos permita saber cuál será el siguiente año bisiesto. Para aportar un poco de información, sabemos que los años bisiestos se producen cada cuatro años a partir del año 0. El primer año bisiesto fue 4, el segundo 8 y así progresivamente. La idea de este ejercicio es que, si estuviésemos en el año 3, al ejecutarlo apareciese en la consola el texto "4", ya que el año 4 sería el siguiente año bisiesto.
// Pista: Tenemos que escribir el año en el que estamos en una constante.

'use strict';
let yearCurrent = 2021;
const yearLeap = yearCurrent % 4;
const nextYearLeap = yearCurrent + (4 - yearLeap);

console.log(nextYearLeap);
