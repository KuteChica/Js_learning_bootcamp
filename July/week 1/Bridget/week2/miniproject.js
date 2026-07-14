// // this is a mini project that 
// // Accepts a student's name.
// // Accepts scores for multiple subjects.
// // Checks if the scores are valid (0–100).
// // Calculates the average score.
// // Determines the student's grade/performance.
// // Displays the final report.
// let studentName;
// let math;
// let english;
// let science;
// let score1;
// let score2;
// let score3;
// let grade;

// const prompt = require("prompt-sync")();

// studentName = prompt("Enter student's name: ");

// console.log("Student Name:", studentName);


const prompt = require("prompt-sync")();

let studentName = prompt("Enter student's name: ");

console.log("Student Name:", studentName);

// asking for student subject scores//
let math =Number(prompt("enter math score:"));
let english=Number(prompt("enter english score:"));
let science =Number(prompt("enter sciencescore:"));
let average=( math +english +science)/3;



console.log("student Name:",studentName);
console.log("Math:", math);
console.log("English:",english);
console.log("Science:",science);
console.log("average:", average);

if (average >=80){
  console.log("excellent : A");

}else if (average <=79){
  console.log("good : B")
}else{
  console.log("failed")
}
