//Acá se trabaja el ejercicio #1 de la S05

//Variables y constantes
nombre = " panaderia: masa madre";
nombre = (nombre.trim());
nombre = nombre.toUpperCase();
//-------------------------------------------
fecha = new Date(2026,10,21)
precioTotal = 105000
//-------------------------------------------
moneda = {style:"currency", currency:"CRC"};
precioTotal = precioTotal.toLocaleString("es-CR");
precioTotal =


//Procesos e información en consola
console.log("Taller:", nombre);
console.log("Inicia:",fecha.toLocaleDateString("es-CR", {dateStyle:"full"}));
console.log(precioTotal)


