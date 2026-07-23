const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your birth year: ", function(birthYear){
    
    const currentYear = new Date().getFullYear();
    birthYear = Number(birthYear);
    // conditionals
    if (birthYear > currentYear) {
        console.log("Invalid birth year");

        return
    } else {

        console.log(`Current Year: ${currentYear}`);

        const age = currentYear - birthYear;

        console.log("You are " + age + " years old.");

        // can vote?
        if (age >= 18) {
            console.log("You are eligible to vote");
        } else {
            console.log("You're not eligible to vote")
        }

        rl.close();
    }
    
    
    
});


