## No puedo vivir sin rems

### Enunciado

Partiendo de estos documentos:

```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles/main.css">
  <title>:)</title>
</head>
<body>
  <div class="smiley">:)</div>
</body>
</html>
```

```
html {
  font-size: 16px;
}
.smiley {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-family: 'courier new';
  font-weight: bold;
  font-size: 50px;
  color: #424242;
  background: #ffcc00;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
```

- Pasar las medidas en píxels a rem.
- ¿Qué tamaño de fuente tengo que poner para que mi careto mida 50x50?

```
.smiley {
width: 3.125rem;
height: 3.125rem;
font-size: 1.563rem;
```

- ¿Y para que mida 200x200?

```
.smiley {
width: 12.5rem;
height: 12.5rem;
font-size: 6.25rem;
```
