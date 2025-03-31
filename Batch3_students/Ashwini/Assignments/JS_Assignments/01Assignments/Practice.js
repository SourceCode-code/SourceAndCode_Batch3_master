// Write a single line comment which says, comments can make code readable

// comments can make code readable

// Write another single comment which says, Welcome to 30DaysOfJavaScript

//Welcome to 30DaysOfJavaScript

// Write a multiline comment which says, comments can make code readable, easy to reuse and informative

/* comments can make code readable, 
*easy to reuse and informative
*/

// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

let a = "vaibhav"
let z = true

console.log(z)
// Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

// Declare four variables without assigning values

let a1, a2, a3, a4;

// Declare four variables with assigned values

let a5 = 10, a6 = 20, a7 = 30, a8 = 40;

console.log(a5, a6, a7, a8)

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Ashu";
let lastName = "Kadam";
let maritalStatus = "Married";
let country = "India";

console.log(firstName, lastName, maritalStatus, country)

// Declare variables to store your first name, last name, marital status, country and age in a single line

let firstName_1 = "Ashu", lastName_1 = "Kadam", maritalStatus_1 = "Married", country_1 = "India";

// Declare two variables myAge and yourAge and assign them initial values and log to the console.

let myAge, yourAge;

// 2. assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x)); //7 => It will round to the nearest integer

// Hint: It will round to the nearest integer. write in comment

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
// Hint: Use typeof to determine the data type.
console.log(typeof gravity)

// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.

console.log(Math.ceil(num)) //6  => Rounds up to the nearest integer
console.log(Math.floor(num)) //5 => Rounds down to the nearest integer

//---------------------------------------------------------------------------------//


// 1. Generate a random number between 1 and 10 (inclusive) and print it.
// Hint: Use Math.random() and Math.floor() to generate random numbers.
console.log(Math.floor(Math.random() * 10))

// 2. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
//let num1 = 5.7;
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.

console.log("Ceil method : " + Math.ceil(5.7))
console.log("Floor method : " + Math.floor(5.7))
// 3. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

console.log("1st dice : " + Math.floor(Math.random() * 5 + 1))
console.log("2nd dice : " + Math.floor(Math.random() * 5 + 1))

// 4. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
// Hint: Understand how the number is being generated and what range it falls in.
// Output = output will be between 5 - 14 numbers.

//5 generate  randomBetween(10, 20) should generate a number between 10 and 20.
//console.log(randomBetween(10, 20));

console.log(Math.floor(Math.random() * 10) + 10);

// 5 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

console.log(Math.floor(Math.random()))

// 7. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;

console.log("2 decimal places number", Math.ceil(number * 100) / 100)

// 8. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.


//9 generate random even number upto 50
console.log("Even numbers..............")
randomEven = Math.floor(Math.random() * ((50 - 0) / 2)) * 2;
console.log(randomEven);

//10 generate random odd number form 30 to 90
console.log("Odd numbers..............")
randomOdd = Math.floor(Math.random() * ((90 - 30) / 2) + 1) * 2;
console.log(randomOdd);

//11 write program to generate a 10 digit random mobile number 
console.log("Random mobile number : " + Math.floor(Math.random() * 10000000000))

let company = ["google", "amazon", "facebook", "oracle", "microsoft", "aaple"]

let findo = company.filter((el, index, arr) => {
   return el.includes("o")
})
console.log(findo)

let str25 = "SiddhantArjunGadakh"
let newstr2 = str25.substring(0, 3)

console.log(newstr2) //Sid

let str29 = "apple"

console.log(str29.length) //5

console.log(str29.repeat(10))

let randomNumber = Math.ceil(Math.random() / 5 * (55 - 25)) + 25
console.log(randomNumber)