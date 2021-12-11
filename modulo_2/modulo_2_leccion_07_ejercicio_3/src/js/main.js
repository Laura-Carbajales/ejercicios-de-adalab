'use strict';
//Crear variable:
let acc = 0;
//Crear el bucle:
for (let i = 0; i < 10; i++) {
  acc += 2;
}
//Pintar frase:
console.log(`El resultado es: ${acc}`);

// Otra forma
let acc2;
for (acc2 = 0; acc2 < 20; acc2 = acc2 + 2) {}
console.log(`El resultado es: ${acc2}`);
