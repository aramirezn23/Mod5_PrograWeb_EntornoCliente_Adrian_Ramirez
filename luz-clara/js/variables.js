//Variables js let puede cambiar; const no cambia
//Script en uso en galeria.html

const estudio = "Luz Clara..;" //CONSTANTE SIEMPRE IGUAL
let citas = 3; //VARIABLE
console.log(estudio, citas); //Se muestran los valores anteriores
citas = 4; //Citas cambia el valor
console.log(estudio, citas); //Valor de citas ahora es 4
console.log(estudio);
estudio = "Prueba de cambio de constante";
console.log(estudio); //NO CAMBIA PORQUE ESTÁ DEFINIDA COMO CONSTANTE
