# Ejercicio 1

## Nadie sin avatar

Paso a paso:

- Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img.
- Ahora vamos a plantear que userAvatar pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto molona y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. ¡Ahora no debería verse ninguna imagen en la página!
- Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
  - si tenemos el avatar del usuario se muestre este.
  - si no tenemos datos del avatar del usuario, se muestre el avatar por defecto.
