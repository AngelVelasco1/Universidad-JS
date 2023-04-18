/* And ( && ) */
//? Ambas condiciones deben cumplirse para ser verdadero */
let a = 11;
let valMin = 0; let valMax = 10;

if(a >= valMin && a <= valMax) {
    console.log(`The number is between ${valMin} and ${valMax}`);
} else {
    console.log(`The number is outside the range of ${valMin} and ${valMax}`);
}

/* Or ( || ) */
//? Tan solo es necesario que una condicion se cumpla para ser verdadero */
let freeDay = true; 
let vacation = false;

if (freeDay || vacation) {
    console.log(`The dad will go to watch the game of her son`)
} else {
    console.log(`The dad will not go to watch the game of her son`)
}