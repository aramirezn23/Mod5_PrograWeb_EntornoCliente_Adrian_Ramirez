// dom.js - Recorre el árbol de nodos de index.html (al final del body)

//Texto que está dentro de la etiqueta title
console.log(`Título de la página: ${document.title}`);

//Es el nodo html: la raíz de todos los elementos
const raiz = document.documentElement;
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);

//Accede al nodo body
const cuerpo = document.body;

//Recorre los hijos directos de body o saltando los nodos script
for (const hijo of cuerpo.children) {
  if (hijo.tagName !== "SCRIPT") {
    //Muestra la etiqueta del hijo y su id (ejemplo: MAIN ID CONTENIDO)
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}

//CHILDREN[1] = segundo hijo de body, posicion 1 en main
const principal = cuerpo.children[1];

//parentElement sube un nivel, el padre de main es body
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);

//firstElementChild : Baja un nivel, al primer hijo de main
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);

//children.lenght cuenta cuantos hijos directos (secciones) hay en main
console.log(`Secciones dentro de <main>: ${principal.children.length}`);