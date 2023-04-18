/* Advanced Example */
let guess = 7;
let playAgain = true;

while (playAgain) {
    let num = parseInt(prompt("Enter a number"));
    switch (true) {
        case num > guess:
            alert("The number is too high");
            playAgain = confirm("Do u wanna play again?");
            break;

        case num < guess:
            alert("The number is too low");
            playAgain = confirm("Do u wanna play again?");
            break;

        default:
            alert(`Correct, The guess number is ${guess} `);
            playAgain = confirm("Do u wanna play again?");
    }
}
/* Season of year */
let month = 4;
let season;

switch (true) {
    case month >= 1 && month <= 4:
        season = "Spring";
        console.log(`The season is ${season}`);
        break;
    case month >= 5 && month <= 7:
        season = "Summer";
        console.log(`The season is ${season}`);
        break;
    case month >= 8 && month <= 10:
        season = "Autum"
        console.log(`The season is ${season}`);
        break;
    case month >= 11 && month <= 12:
        season = "Winter"
        console.log(`The season is ${season}`);
        break;

    default:
        console.log("Invalid month value");
}
