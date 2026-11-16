//Métodos de las cadenas y plantillas

const escrito = "  retrato familiar  "; //Con espacios demás
const servicio = escrito.trim(); //Elimina espacios
console.log(escrito.length, servicio.length); //Cantidad de letras
console.log(servicio.toUpperCase()); // Cambia a mayúsculas
console.log(servicio.includes("familiar")); //Contiene X palabra
console.log(servicio.slice(0, 7)); //De la letra 0 a las 6 = retrato
console.log(`Servicio: ${servicio}`); //Plantillas con $, se utilizan las comillas con ASCII ALT+96
