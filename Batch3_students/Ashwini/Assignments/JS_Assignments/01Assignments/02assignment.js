// assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// Hint: It will round to the nearest integer. write in comment

// output=7

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
// Hint: Use typeof to determine the data type.
console.log(typeof (gravity)) //number

// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.

console.log(Math.ceil(num)) //6
console.log(Math.floor(num)) //5


// 1. Generate a random number between 1 and 10 (inclusive) and print it.
// Hint: Use Math.random() and Math.floor() to generate random numbers.

console.log("Random number generation between 1 & 10 inclusively is ", Math.floor(Math.random() * 10));

// 2. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.
console.log("Nearest up integer", Math.ceil(num)) //6
console.log("Nearest down integer", Math.floor(num)) // 5

// 3. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
console.log("The output for first dice roll is", Math.floor(Math.random() * 5) + 1)
console.log("The output for second dice roll is", Math.floor(Math.random() * 5) + 1)

// 4. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log("Output of following code is", Math.floor(randomVal * 10) + 5); //5-14
// write the output and reason in commnets 
// output = any random number with nearest down integer + add 5 in that output which is ranges from 6-14

// Hint: Understand how the number is being generated and what range it falls in.

//5 generate  randomBetween(10, 20) should generate a number between 10 and 20.
//console.log(randomBetween(10, 20));

console.log("Random number generation between 10-20", Math.floor(Math.random() * 10) + 10)

// 5 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

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
//11 generate random prime number form 45-200
console.log("Prime numbers..............")


//12 write program to generate a 10 digit random mobile number 
console.log("Random mobile number is", Math.floor(Math.random() * 10000000000))