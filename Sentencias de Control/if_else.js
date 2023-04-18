/* Sintaxis */
let condition = true;

if (condition) {
    console.log('The conditiom is true')
}
else {
    console.log('The conditiom is false')
}

/* Simple Example */
let num = 5;

if (num === 1) {
    console.log('The number is 1')
} else if (num === 2) {
    console.log('The number is 2')
} else if (num === 3) {
    console.log('The number is 3')
}
else {
    console.log("Unknown number")
}

/* Example - Season of year */
let month = 12;
let season;

if (month >= 1 && month <= 4) {
    season = "Spring"
}
else if (month >= 5 && month <= 7) {
    season = "Summer"
}
else if (month >= 8 && month <= 10) {
    season = "Autum"
}
else if (month >= 11 && month <= 12) {
    season = "Winter"
}
else {
    console.log('Invalid Value')
}
console.log(season);

/* Example - Day Hour */
let hour = 5;
let message;

if (hour >= 6 && hour <= 11) {
    message = "Good morning"
    console.log(message)
}
else if (hour >= 12 && hour <= 18) {
    message = "Good afternoon"
    console.log(message)
}
else if (hour >= 19 && hour <= 24) {
    message = "Good evening"
    console.log(message)
}
else if (hour >= 0 && hour < 6) {
    message = "Sleeping"
    console.log(message)
}
else {
    message = "Invalid hour"
    console.log(message)
}

/* Advanced Example */
let data = null;

if (data.length > 0) {
    console.log(`Data isn't null and has ${data.length} elements`)
} else {
    console.log("The data is null or has zero elements")
}