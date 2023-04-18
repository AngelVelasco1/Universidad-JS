// Operador de Suma
let num1 = 20;
let num2 = 25;
let sum = num1 + num2;
console.log(`El resultado de la suma es ${sum}`);

// Operador de resta
let num3 = 10;
let num4 = 25;
let rest = num3 - num4;
console.log(`El resultado de la resta es ${rest}`);

// Operador de Multiplicacion
let num5 = 200;
let num6 = 100;
let mult = num5 * num6;
console.log(`El resultado de la multiplicacion es ${mult}`);

// Operador de division
let div = num1 / num2;
console.log(`El resultado de la division es ${div}`);

// Operador de Modulo
let mod = num5 % num6;
console.log(`El resultado del modulo es ${mod}`);

// Operador de exponente
let num7 = 5;
let num8 = 3
let exp = num7 ** num8;
console.log(`El resultado de la exponenciacion es ${exp} (5*5*5)`);

//! Decremento e Incremento */

//? Incremento  */
//* PreIncremento (Primero se incrementa y luego se almacena) */
let numIncrement = 5;
let storage = ++numIncrement;
console.log(`Se incrementa en uno el numero pasando de 5 a ${numIncrement}`);
console.log(`La variable que almacena el numero recibe su valor incrementado ${storage}`)

//* PostIncremento (Primeros se almacena y luego se incrementa) */
let numPostIncrement = 10
storage = numPostIncrement++;
console.log(`Primero se le asigna el valor sin incrementar a la variable dando ${storage} y luego se incrementa dandonos ${numPostIncrement}`)

//? Decremento */
//* PreDrecremento */
let numDecrement = 22;
storage = --numDecrement;
console.log(`El numero se decrementa en uno pasando de 22 a ${numDecrement}, storage alamacena el valor decrementado ${storage}`)

//* PostDecremento */
let numPostDecrement = 22;
storage = numPostDecrement--;
console.log(`Se le asigna el valor sin incrementar a storage ${storage} y luego se decrementa pasando de 22 a ${numPostDecrement}`)