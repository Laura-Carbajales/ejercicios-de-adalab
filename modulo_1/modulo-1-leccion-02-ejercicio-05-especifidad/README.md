## Conociendo la especificidad

### Enunciado

Partiendo de este código:

- ¿Por qué los enlaces son verdes y no rojos?
- Hacer que los enlaces sean rojos.
- Rehacer el HTML usando `<div>` en lugar de `<ul>` y `<li>`. ¿Qué pasa?
- Comentar el CSS que no se puede tocar y reescribirlo usando solo selectores de clase, es decir, sin utilizar selectores de etiqueta.
- BONUS: Cambiar ahora entre `<div>` y `<ul>`/`<li>`.

###Respuesta

- Por la regla de la "especifidad". Sobre `<a>`se extán aplicando dos selectores:

  ```
  a {
  color: red;
  }
  ```

  ```
  ul.news**item a.news**item-link {
  color:green;
  }
  ```

  Como el segundo selector es mucho más especifica, prevalece por encima de la primera.

- Para ello eliminamos o "comentamos" el segundo selector y los links se vuelven rojos.

- Todos los selectores de etiqueta dejan de funcionar.
