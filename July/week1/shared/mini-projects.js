const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your birth year: ", function(birthYear){
    console.log(birthYear);

    birthYear = Number(birthYear);
    let currentYear = 2026;
    let age = currentYear - birthYear;

    console.log("You are " + age + " years old.")
    
});


