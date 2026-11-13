//Comparativos y lógicos (Con resultad booleano)
//Script en uso en galeria.html

const precio = 45000;
console.log(precio > 40000);
console.log(precio === 45000);
console.log("45000" === 45000);
console.log(precio !== 38000);
const hayFecha = true;
const pagado = false;
console.log(hayFecha && pagado); //Acá se usa la condición de AND, si X es positivo y Y es negativo, Z es false, etc.
console.log(hayFecha || pagado); //Acá se usa la condición de OR, si X es positivo y Y es negativo, Z es true, etc.
console.log(!pagado); //Acá se utiliza NOT
