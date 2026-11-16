//ACÁ SE VA A TRABAJAR EL EJERCICIO 1 - INSCRIPCION A UN TALLER

const nombre = "Panaderia: Masa Madre";
const precioTaller = 95000;
const matriculaPersona = 10000;
const personasInscribir = 2;
let cupos = 8;

console.log("Taller:", nombre);
console.log("Precio por persona:", precioTaller + matriculaPersona);
console.log("Total para 2 personas:", 2 * (precioTaller + matriculaPersona));
cupos = cupos -= 2;
console.log("Cupos disponibles:", cupos);
hayCupos = cupos > 0;
console.log("¿Hay cupos?", hayCupos);
precioyCupos = 2 * (precioTaller + matriculaPersona) < 250000 && hayCupos > 0;
console.log("¿Menos de 250 000 y con cupos?", precioyCupos);