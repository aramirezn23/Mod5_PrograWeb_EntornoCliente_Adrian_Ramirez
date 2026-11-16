//formato.js - Números con formato de CR

const precio = 45000; // Número
console.log(precio.toLocaleString("es-CR")); //Separa números en miles
const opciones = { style: "currency", currency: "CRC" }; //Colones
const colones = new Intl.NumberFormat("es-CR", opciones);
console.log(colones.format(precio)); //Colones y decimales
console.log(colones.format(75000 * 1.13)); //Redondea
