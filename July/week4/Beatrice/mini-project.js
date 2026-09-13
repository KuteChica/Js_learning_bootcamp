const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter student's name: ", function(name) {
    rl.question("Enter student's score to calculate your grade: ", function(score) {

        function calculateGrade(num, grade) {
            if (num > 100 || num < 0) {
                console.log("Enter a valid score(0-100)!")
            } else {
                if (num >= 80) {
                    grade = "Excelent";
                } else if (num >= 70) {
                    grade = "Good";
                } else if (num >= 50) {
                    grade = "Pass";
                } else if(num <= 50) {
                    grade = "Fail";
                }
            }

            return grade;
        };

        const grade = calculateGrade(score);

        // passed?
        function isPassed(score) {
            const passed = score >= 50 ? "Passed" : "Failed";

            return passed;
        }

        const passed = isPassed(score);

        // displayResult
        function displayResult(name, score, grade, passed) {
            console.log(`Student: ${name}`);
            console.log(`Score: ${score}`);
            console.log(`Grade: ${grade}`);
            console.log(`Status: ${passed}`)

        };


        console.log()

        displayResult(name, score, grade, passed);

        rl.close();
    });
    
});