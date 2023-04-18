/* Modify an element of array */
let premierTeams = ["Newscastle", "Man City", "Man United", "Liverpool"];

premierTeams[1] = "Manchester City";
console.log(premierTeams[1]);

/* Add and element of array */
premierTeams.push("Chelsea");
console.log(premierTeams)

/* Validity types of elements */
console.log(premierTeams instanceof Array);