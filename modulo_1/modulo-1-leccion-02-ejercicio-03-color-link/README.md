## Coloreame esos links

### Enunciado

El color es una de la propiedades que se heredan así que si tenemos esta estructura:

```html
<article>
  <h2>Título</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  <aside class="links">
    <h3>Enlaces relaccionados</h3>
    <ul>
      <li><a href="#">Enlace 1</a></li>
      <li><a href="#">Enlace 2</a></li>
      <li><a href="#">Enlace 3</a></li>
      <li><a href="#">Enlace 4</a></li>
    </ul>
  </aside>
</article>
```

y al `<aside>` con clase `.links` le aplicamos una regla que ponga el texto rojo, ¿qué quedará en rojo?

### Respuesta

Se ha coloreado sólo el `<h3>` contenido en el `<aside>`, ya que los `<a>` por defecto son azules y subrayados. Para que los `<a>` sean rojos, primero debemos resetear el estilo por defecto de `<a>`.
