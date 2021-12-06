# Ejercicio 10

## Calculador de modelo de caja

Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: `border-box` y `content-box`. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: `El ancho del contenido es: 30px y el ancho total de la caja es: 34px`.
La función tendrá 4 parámetros:

- El primero será un booleano para especificar si es border-box o no.
- El segundo será un número con el width de la caja.
- El tercero será un número con el padding.
- El cuarto será un número con el `border-size`.

Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.
