'use strict';
//Elemento HTML
//Botón:
const btn = document.querySelector('.js-btn');
//Input de texto:
const heightInput = document.querySelector('.js-height');
//Párrafo donde se dibujará el arból:
const text = document.querySelector('.js-tree');

//Funciones

//Para los ejercicios 5 & 6
// function createTree() {
//   //Array contenedor del árbol:
//   const tree = [];
//   //constante para extraer el valor del input:
//   const treeHeight = heightInput.value;
//   //tree [0] siempre será una estrella:
//   tree[0] = ['*'];
//   //Bucle que recorre en array 'tree' y le dice el número de arrays 'row' que contendrá:
//   for (let i = 0; i < treeHeight; i++) {
//     const row = [];
//     //Bucle que recorre el array 'row' y le añade tantos '▲' como el número de su indice +1:
//     for (let j = 0; j < i + 1; j++) {
//       row.push('▲');
//     }
//     tree.push(row);
//   }
//   //Se le añade '|' en última posición a 'tree':
//   tree.push(['|']);
//   //Retornamos 'tree':
//   return tree;
// }

//Para el ejercicio 7
function createCompleteTree() {
  //Array contenedor del árbol:
  const tree = [];
  //constante para extraer el valor del input:
  const treeHeight = heightInput.value;
  //tree [0] siempre será una estrella:
  tree[0] = ['*'];
  //Calcular el número de '▲' que va a tener la base del árbol
  const maxWidthBranch = 2 * treeHeight - 1;
  //Calcular el punto medio
  const middle = Math.floor(maxWidthBranch / 2);
  //Bucle que recorre en array 'tree' y le dice el número de arrays 'row' que contendrá:
  for (let i = 0; i < treeHeight; i++) {
    const row = [];
    //Bucle que recorre el array 'row' y le añade tantos '▲' como el número de su indice +1:
    for (let j = 0; j < maxWidthBranch; j++) {
      if (j >= middle - i && j <= middle + i) {
        row.push('▲');
      } else {
        row.push('....');
      }
    }
    tree.push(row);
  }
  //Se le añade '|' en última posición a 'tree':
  tree.push(['|']);
  //Retornamos 'tree':
  return tree;
}

function renderTree(tree) {
  console.log(createCompleteTree());
  //Borramos el contenido de 'text.innerHTML':
  text.innerHTML = '';
  //Creamos un bucle que recorra 'tree':
  for (let i = 0; i < tree.length; i++) {
    //Anidamos otro bucle que recorra 'row' y le vaya pintando los '▲':
    for (let j = 0; j < tree[i].length; j++) {
      text.innerHTML += tree[i][j];
    }
    //Añadimos un salto de linea entre cada elemento de 'tree' para que se vea como árbol y no como una linea de '▲':
    text.innerHTML += '<br>';
  }
}

//Handler
function handleClickCreateTree(event) {
  event.preventDefault();
  //const tree = createTree();
  const completeTree = createCompleteTree();
  renderTree(completeTree);
}

//Listener
btn.addEventListener('click', handleClickCreateTree);
