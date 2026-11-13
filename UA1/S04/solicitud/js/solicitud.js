//Trabajo diario -- Pedir datos con prompt

const nombre = prompt("¿Cuál es su nombre?"); //TEXTO
const fotos = prompt ("¿Cuántas fotos impresas quiere"); //TEXTO
console.log ("Hola, " + nombre + "."); //UNE CADENAS
console.log("Fotos + 1:",fotos + 1); //NO SUMA
console.log("Fotos + 1:",Number(fotos) + 1); // NUMBER SUMA
console.log("¿Pidió fotos?", Number(fotos) > 0) //COMPARAR