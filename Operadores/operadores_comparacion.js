let a = 10;
let b = 5;
let c = '5';
let d = 10;

//? Igual a - Simple */
//* Se compara si es igual el valor sin importar el tipo de dato */
let simpleEqual = b == c;
console.log(simpleEqual);

//? Igual a - Compuesta */
//* Se compara si es igual tanto el valor como el tipo de dato */
let composedEqual = b === c;
console.log(composedEqual);

//? Distinto a - Simple */
//* Se compara si es distinto el valor sin importar el tipo de dato */
let simpleDifferent = a != d;
console.log(simpleDifferent);

//? Distinto a - Compuesta */
//* Se compara si es distinto tanto el valor como el tipo de dato */
let composedDifferent = b !== c;
console.log(composedDifferent);