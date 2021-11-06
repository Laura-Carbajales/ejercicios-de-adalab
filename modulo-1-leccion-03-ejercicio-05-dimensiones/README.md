## Ajustando imagenes

### Enunciado

Hacer un `<div>` de 100x100px usando las propiedades `width` y `height`, incluir dentro una imagen de 100x100px y probar:

- Añadir un padding de 10px.
- Añadir un borde de 5px.
- Cambiar el modelo de caja a border-box y explica qué ha pasado.
- Centrar la caja utilizando el valor auto en los margenes horizontales.

### Respuesta

- Al añadir el `padding`y el `border`la imagen desborda el `div`.
- Al añadirle la propiedad `box-sizing: border-box;`la imagen reduce su contenido para que el `padding`+ `border`+ `img` sean en total 100x100px, y de esta forma vuelve a estar contenida dentro del `div`.
