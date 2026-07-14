# Week 2: Conditional Logic Engines (Mini Project)

## Project Overview

The goal of this mini project is to build a **Student Grade Processing System** that:

* Accepts a student's name.
* Accepts scores for multiple subjects.
* Validates that the scores are between **0 and 100**.
* Calculates the average score.
* Determines the student's performance level.
* Displays a structured student report.

---

# User Input in Node.js

JavaScript running with Node.js does not have a built-in function for accepting keyboard input from the user. To solve this, we use the **`prompt-sync`** package.

## Installation

```bash
npm init -y
npm install prompt-sync
```

* `npm init -y` creates a `package.json` file for the project.
* `npm install prompt-sync` installs the `prompt-sync` package inside the `node_modules` folder.

---

# Importing prompt-sync

```javascript
const prompt = require("prompt-sync")();
```

### Explanation

* `require("prompt-sync")` imports the package.
* `()` initializes it so we can use the `prompt()` function.

---

# Getting User Input

```javascript
let studentName = prompt("Enter student's name: ");
```

### Explanation

* Displays the message **"Enter student's name:"**.
* Waits for the user to type something.
* Stores the input in the variable `studentName`.

Example:

```
Enter student's name: Bridget
```

The variable now contains:

```javascript
studentName = "Bridget";
```

---

# Displaying Output

```javascript
console.log("Student Name:", studentName);
```

### Explanation

`console.log()` prints information to the terminal.

Example Output:

```
Student Name: Bridget
```

---

# Getting Numeric Input

```javascript
let math = Number(prompt("Enter Math score: "));
```

### Why use `Number()`?

The `prompt()` function always returns a **string**, even if the user types numbers.

Example:

User types:

```
80
```

JavaScript receives:

```javascript
"80"
```

This is a **string**, not a number.

Using:

```javascript
Number(prompt(...))
```

converts the string into a numeric value.

Example:

```javascript
Number("80")
```

becomes:

```javascript
80
```

---

# Why Conversion is Important

Without `Number()`:

```javascript
let math = "80";
let english = "70";

console.log(math + english);
```

Output:

```
8070
```

Because JavaScript joins two strings together.

With `Number()`:

```javascript
let math = Number("80");
let english = Number("70");

console.log(math + english);
```

Output:

```
150
```

Because JavaScript performs mathematical addition.

---

# Variables Used

```javascript
let studentName;
let math;
let english;
let science;
```

Variables store information that the program will use later.

* `studentName` stores the student's name.
* `math` stores the Math score.
* `english` stores the English score.
* `science` stores the Science score.

---

# Key Concepts Learned

* How to initialize a Node.js project with `npm`.
* How to install external packages using `npm install`.
* How to import a package using `require()`.
* How to receive user input using `prompt-sync`.
* How to display output using `console.log()`.
* The difference between **strings** and **numbers**.
* Why `Number()` is necessary for mathematical calculations.
* How variables are used to store user input.

---

# Summary

In this lesson, I created the foundation of a Student Grade Processing System. I learned how to make a JavaScript program interactive by accepting user input through the terminal. I also learned that `prompt()` returns a string, so numeric input must be converted using `Number()` before performing calculations. These concepts prepare me for the next stage of the project, where I will use conditional statements (`if`, `else if`, `else`, and `switch`) to validate scores and determine a student's performance.
