//Tarifas.js Este documento estudia funciones para crear cotizaciones

function formatoColones(monto) { //Acá se desarrolla la declaración
  return `¢$(monto.toLocaleString("es-CR"))`; //Texto con formato
}

const precioConIva = (monto) => Math.round(monto * 1.13); // flecha

function totalSesiones (monto, cantidad) { //2 parámetros
  if (isNaN(cantidad) || cantidad < 1) {
    return "Cantidad Inválida";
  }

  const total1 = precioConIva(monto) * cantidad; //Local
  return formatoColones(total1);
}

console.log(formatoColones(45000));
console.log(totalSesiones(45000,2));
console.log(totalSesiones(75000,0));

//REVISAR ESTE DOCUMENTO INCOMPLETO Y TERMINAR