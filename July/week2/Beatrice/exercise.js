// comparison operators

const price = 150;

console.log(price > 100);

console.log(price < 200);

console.log(price === 150);

console.log(price != 300);

// logical operators
const usernameCorrect = true;
const passwordCorrect = true;
console.log(usernameCorrect && passwordCorrect);

const hasEmail = false;
const hasPhoneNumber = true;
console.log(hasEmail || hasPhoneNumber);

const isBanned = false;
console.log(!isBanned);

//conditionals
const age = 17;
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You're not eligible to vote");
}

const password = "javascript123";
if (password === "javascript123") {
    console.log("Access Granted");
}
else {
    console.log("Access Denied");
}


// else if 
const temperature = 32;

if (temperature > 35) {
    console.log("It's very hot");
} else if (temperature >= 25) {
    console.log("The weather is warm");
} else {
    console.log("It's cold");
}

// nested if 
if (usernameCorrect) {
    if (passwordCorrect) {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("Username not found.");
}

// switch statements
const role = "admin";
switch (role) {
    case "admin":
        console.log("Full access");
    break
    case "editor":
        console.log("Can edit content");
    break
    case "viewer":
        console.log("Read-only access");
    break
    default:
        console.log("Unknown role")
}

//ternary operator
const score = 45;

const result = score >= 50 ? "Pass" : "Fail";
console.log(result)