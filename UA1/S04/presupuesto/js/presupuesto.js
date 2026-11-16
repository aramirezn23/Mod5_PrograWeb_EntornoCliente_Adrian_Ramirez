//Acá se trabaja el js para el ejercicio #2

const precioPersona = 105000;
nombre = prompt("¡Hola humano, cuál es tu nombre?");
cantidadPersonas = prompt("¿Cuántas personas se van a inscribir?");
Number(cantidadPersonas);
total = precioPersona * cantidadPersonas;
esGrupo = cantidadPersonas >= 3;

console.log("Hola", nombre);
console.log("Cantidad de personas:", cantidadPersonas);
console.log("Total:", total);
console.log("¿Es un grupo (3 personas o más)?", esGrupo);
