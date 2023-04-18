let stringNumber = "17";
let age = Number(stringNumber);

if(isNaN(age)) {
    console.log("The age is not a number, change the value to a number")
} 
else {
    (age >= 18) ? console.log("The person can vote, is legal age") : console.log("The person can't vote, is so younger");
}