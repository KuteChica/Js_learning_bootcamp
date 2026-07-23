const readlne = require("readline");

const rl = readlne.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What's your name: ", function(username){
    rl.question("What was you score: ", function(score){
        
        score = Number(score);

        if (score < 0 || score > 100) {
            console.log(`Hello ${username}, please enter a valid score`)

            rl.close()
        } else {

            console.log(`Hello ${username}!`)
            if (score >= 80) {
                console.log("Grade: Excellent");
            } else if (score >= 70) {
                console.log("Grade: Very Good");
            } else if (score >= 50) {
                console.log("Grade: Pass");
            } else {
                console.log("Grade: Fail")
            }

            const status = score >= 50 ? "Pass" : "Fail";

            console.log(`Status: ${status}`)

            rl.close();
        }
    })
});