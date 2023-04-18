//! Convertir de string a number */
//? Usamos la funcion Number para convertir el valor de stringNumber en tipo numero y lo asignamos a la variable age */
let stringNumber = "18";
let age = Number(stringNumber);

/* Confirmamos los tipos de datos */
console.log(typeof stringNumber)
console.log(typeof age);

/* Definimos si la persona puede votar o no */
(age >= 18) ? console.log("The person can vote, is legal age") : console.log("The person can't vote, is so younger");
