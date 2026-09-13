//defining and calling functions
function motivate() {
    console.log("Never stop learning JvaScript!");
};

motivate();
motivate();
motivate();
motivate();

// function parameters
function introduce(name, school) {
    console.log(`My name is ${name}`);
    console.log(`I study at ${school}`);
}

introduce("Beatrice", "GCTU");
introduce("Anna", "KNUST");

//return values
function calculateAge(birthYear = 2006) {
    let currrentYear = 2026;

    return currrentYear - birthYear;
}

let age = calculateAge();
console.log(`You're are ${age} old`);

//scopes
let university = "GCTU";

function showDetails() {
    let course = "Computer Science";

    console.log(university);
    console.log(course);
}

showDetails();

console.log(course);   //won't work here since course is in its local scope