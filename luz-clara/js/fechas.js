//fechas.js Fechas con Date

const hoy = new Date(); //Fecha y hora del día de hoy
console.log(hoy.getFullYear()); //Año
console.log(hoy.getMonth()); //Mes
console.log(hoy.getDate()); //Día
console.log(hoy.toLocaleDateString("es-CR")); //Formato de CR
const sesion = new Date(2026,11,5);
console.log(sesion.toLocaleDateString("es-CR",{dateStyle:"full"}));
