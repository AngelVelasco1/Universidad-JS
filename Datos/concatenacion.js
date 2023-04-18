//? Normal concatenation 
//! With variables */
let name = 'Angel';
let surName = 'Velasco';
let completeName = name + ' ' + surName;
console.log(completeName);

//! With strings */
let completeName2 = 'Juan ' + ' Mantilla';
console.log(completeName2);

//! With numbers */
//* Cuando sumamos strings con numeros, estos se comportan como strings */
let age = 17;
let age2 = 10;
let stringNumber = name + age + age2;
console.log(stringNumber);

//! With priority numbers */
//* Si queremos darle prioridad a los numeros y que sean tratados como tal, los debemos encerrar entre parentesis() */
let num1 = 5;
let num2 = 10;
let sum = "La suma es: " + (num1 + num2);
console.log(sum);

//? Template literals 
//* Usamos backticks `` para definir una plantilla literal que nos permitira combinar texto junto a variables, referencias usando ${} */
//* Por lo que no necesitamos usar el +, todo lo haremos dentro de backticks.  */
let animal = {
    name: 'Tobi',
    age: 8,
    type: 'cat'
}
console.log(`The animal name is ${animal.name}, her age ${animal.age} and it's a ${animal.type}`);

let color = 'red';
console.log(`El color es ${color}`);