# Añadir nuevas tareas al ToDo list

## Enunciado

Queremos que la usuaria pueda añadir nuevas tareas a su listado. Partiendo de la última versión del Todo list queremos:
Añadir un input de texto en algún sitio de la página.
Cuando este input cambie debemos guardarlo en el estado de React, por ejemplo en newTaskInput.
Añadir un botón con el texto "Crear nueva tarea".
Cuando la usuaria pulse en este botón debemos pushear al array de tareas un nuevo objeto.
El objeto debe tener la propiedad task, cuyo valo es lo que haya en ese momento en newTaskInput.
El objeto debe tener la propiedad completed con valor false.
Si todo está bien hecho React renderizará el componente y aparecerá en pantalla la nueva tarea.
También puedes hacer que cuando la usuaria pulse en el botón "Crear nueva tarea", el valor del input de texto se limpie. Para ello debes:
Modificar el estado de newTaskInput.
Controlar el input de texto.
