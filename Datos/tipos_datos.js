/* Tipo string */
let namee = "Carlos";
console.log(namee);

/* Tipo number */
let number = 2000;
console.log(number);

/* Tipo object */
let dog = {
    name: "Tobi",
    age: 25,
    move: ['Jump', 'Run', 'Walk']
};
console.log(dog);

/* Tipo null - object */
let noneValue = null;
console.log(typeof noneValue);

/* Tipo array - object */
let pets = ['dog', 'cat', 'parrot', 'rabbit'];
console.log(pets);
console.log(typeof pets);
/* empty array */
let none = "";
console.log(none)

/* Tipo boolean */
let isStudent = true;
let isTeacher = false;
console.log(isStudent);
console.log(isTeacher);

/* Tipo symbol - function */
let symbol = Symbol(25);
console.log(typeof symbol);

/* Tipo class */
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
console.log(person);
console.log(typeof person);

/* Tipo undefined */
let undefined;
console.log(undefined);

