## Cajas sobre cajas

### Enunciado

Vamos a definir un documento HTML con 3 cajas contenedoras div (div1, div2 y div3):

- La primera con unas dimensiones de 500x500px y color de fondo amarillo.
- La segunda con dimensiones 300x300px y color de fondo verde.
- La tercera con dimensiones 150x150px y color de fondo azul.

Usando posicionamiento absoluto establecemos para el div2 y el div3 el mismo origen que para el div1, de modo que las cajas se superpongan y el efecto generado sea ver cuadrado azul sobre uno verde que a su vez está sobre uno amarillo.

Ahora tenemos que hacer que las cajas estén centradas vertical y horizontalmente añadiendo:

- 40px de padding y 2px de borde al div1.
- 75px de padding al div2.
- 20px de borde de puntos al div3.
  Para esto usad box-sizing: border-box;.
