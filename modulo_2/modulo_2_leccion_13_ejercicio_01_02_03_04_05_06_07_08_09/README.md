# Ejercicio 1

## Inflar las notas

¡Ya tenemos las notas del examen! Los profes, como somos así, las hemos metido en un array: const marks = [5, 4, 6, 7, 9];. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa de la buena :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo map para crear un nuevo array inflatedMarks con las notas modificadas. Finalmente, mostraremos en la consola las notas modificadas para ver que funciona correctamente. ¡Al lío!

# Ejercicio 2

## Saludar es de buena educación

Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?

# Ejercicio 3

## Gracias por confiar en nosotros

Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map?

```const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];
```

# Ejercicio 4

## Solo los premium

Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Pero ahora queremos tener un listado de usuarios (en un array premiumUsers) que solo tenga los usuarios premium. ¿Sabremos hacerlo con filter?

# Ejercicio 5

## Los pares pueden entrar

Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de nuestra web:

`const pins = [2389, 2384, 2837, 5232, 8998];`

De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrar las contraseñas usando filter?

# Ejercicio 6

## Los usuarios que pueden entrar

Ya hemos conseguido las contraseñas pertenecientes a cada usuario. ¿Podrías darnos un array con los usuarios que pueden acceder a la aplicación, es decir, los que tienen como PIN un número par?

```const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];
```

# Ejercicio 7

## El ganador de los estudiantes

Como en el ejemplo anterior vamos a averiguar quién ha ganado usando reduce, pero queremos saber el ganador de los estudiantes, por lo que tendremos que filtrar primero quiénes lo son.

```
const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];
```

# Ejercicio 8

## Encuentra el usuario

- En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo.

- Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array de usuarios? Usa el método findIndex para encontrar su posición y bórralo usando splice.

# Ejercicio 9

## La media de la carrera

Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce?
