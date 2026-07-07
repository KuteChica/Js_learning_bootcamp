# 📚 Week 1 Notes – JavaScript Fundamentals

## Topics Covered

- Variables
- Data Types
- Operators
- let vs const
- == vs ===

---

# Variables

A variable is a named container used to store data.

Syntax:

```javascript
let age = 20;
const country = "Ghana";
```

Examples:

```javascript
let name = "Beatrice";
let isStudent = true;
const pi = 3.142;
```

---

# let vs const

## let

Use `let` when the value can change.

```javascript
let score = 50;

score = 80;
```

## const

Use `const` when the value should not change.

```javascript
const country = "Ghana";
```

Best Practice:

- Use `const` by default.
- Use `let` only when the value needs to change.

---

# Data Types

## Number

```javascript
25;
3.14;
```

## String

Text enclosed in quotes.

```javascript
"JavaScript";
"React";
```

## Boolean

Represents true or false.

```javascript
true;
false;
```

## Null

Represents an intentional empty value.

```javascript
let middleName = null;
```

## Undefined

A variable that has been declared but not assigned a value.

```javascript
let phoneNumber;

console.log(phoneNumber);
```

Output:

```
undefined
```

---

# Operators

Arithmetic Operators

| Operator | Meaning             | Example |
| -------- | ------------------- | ------- |
| +        | Addition            | 5 + 3   |
| -        | Subtraction         | 10 - 4  |
| \*       | Multiplication      | 6 \* 4  |
| /        | Division            | 20 / 5  |
| %        | Modulus (Remainder) | 10 % 3  |

Example:

```javascript
console.log(10 % 3);
```

Output:

```
1
```

---

# == vs ===

## ==

Checks only the value.

```javascript
10 == "10";
```

Output:

```
true
```

because JavaScript converts the string into a number.

---

## ===

Checks both value and data type.

```javascript
10 === "10";
```

Output:

```
false
```

because one is a Number and the other is a String.

Best Practice:

Always prefer using `===`.

---

# String Concatenation

Join strings using the `+` operator.

```javascript
let name = "Beatrice";

console.log("Hello " + name);
```

Output:

```
Hello Beatrice
```

---

# Things I Learned

- Variables store data.
- `let` is used for values that change.
- `const` is used for values that stay the same.
- JavaScript has different data types.
- `%` returns the remainder after division.
- `===` is safer than `==`.
- Parentheses control the order of calculations.

---

# Mistakes I Made

❌ Wrong

```javascript
let age = age + 5;
```

Reason:
The variable `age` had already been declared.

✅ Correct

```javascript
age += 5;
```

or

```javascript
age = age + 5;
```

---

# Questions to Review

- Why does `"20" + 1` become `"201"`?
- Why is `true == 1` true but `true === 1` false?
- When should I choose `let` instead of `const`?

---

# Week 1 Project

Interactive Age Calculator

Goal:

- Ask the user for their birth year.
- Calculate their age.
- Display the result.
- Handle invalid input.
