// a simple calculator to show knowledge on variables in js and operators as well//

// first we have to create our variables//
let firstnumber;
let secondnumber;
let operator;
let result;

// code to ask user for input//
firstnumber = Number(prompt("enter first number"));
secondnumber = Number(prompt("enter second number"));
operator = prompt("enter +, -, * or /");

if (operator === "+") {
  result = firstnumber + secondnumber;
} else if (operator === "-") {
  result = firstnumber - secondnumber;
} else if (operator === "*") {
  result = firstnumber * secondnumber;
} else if (operator === "/") {
  result = firstnumber / secondnumber;
} else {
  console.log("invalid operator");
}

if (result !== undefined) {
  console.log("result:", result);
}

