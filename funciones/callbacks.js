/* Basic Example */

/* Principal Function */
function sumar(a, b, callback) {
    let result = a + b;
    callback(result);
}
/* Callback Function */
function imprimirResultado(result) {
    console.log(`The result is ${result}`)
};

sumar(50, 20, imprimirResultado);

/* Advanced Example */