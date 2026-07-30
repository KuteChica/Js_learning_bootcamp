const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter a number to create its multiplication table: ", function(number){
    number = Number(number);

    if (number !== NaN) {
        console.log("Invalid input, Enter a number");
        rl.close();
    } else {
        number = Number(number);
        console.log(`${number} Times Table: `)
        for (let multiplier = 0; multiplier <= 12; multiplier++) {
            let product = number * multiplier;
            console.log(`${number} * ${multiplier} = ${product}`);
        }
    }
    rl.close();
})