const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your birth year: ", function(birthYear){

    const currentYear = new Date().getFullYear();
    birthYear = Number(birthYear);
    console.log(`Current Year: ${currentYear}`);
    

    const age = currentYear - birthYear;

    console.log("You are " + age + " years old.");

    rl.close();
    
});


