
// 1. Generate a random number between 1 and 10 (inclusive) and print it.
// Hint: Use Math.random() and Math.floor() to generate random numbers.
let A = Math.floor(Math.random() * 10) + 1;
console.log(A)
console.log("------1-------")

// 2. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
console.log(Math.ceil(num)); // Output: 6
console.log(Math.floor(num)) // Output: 5
console.log("-------2--------")
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.

// 3. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

let Dice1 = Math.floor(Math.random()*6)+1;
let Dice2 = Math.floor(Math.random()*6)+1;
console.log(`${Dice1} ${Dice2}`)
console.log("-------3---------")

// 4. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
console.log("-----4-----------")// outputs a random number between 5 and 14
// write the output and reason in commnets 
// Hint: Understand how the number is being generated and what range it falls in.

//5 generate  randomBetween(10, 20) should generate a number between 10 and 20.
let randomBetween = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(randomBetween);
console.log("---------5--------")

// 6  generate a random number between 5.5-9.3
let randomBetween1 = ((Math.random() * (9.3-5.5)+5.5))
console.log(randomBetween1)
console.log("---------6---------")
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

// 7. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
console.log((Math.round(number * 100) / 100))
console.log("------------7--------------")

// 8. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let Num = 28
let iy = Num/5
console.log((Math.round(iy)*5))
console.log("---------8-----------")

//9 generate random even number upto 50
let randomEven = Math.floor(Math.random() * 26)*2
console.log((randomEven))
console.log("--------9-----------")

//10 generate random odd number form 30 to 90
console.log(Math.floor(Math.random()*31)*2+31)
console.log("------10---------")
//11 generate random prime number form 45-200

console.log("----------11------------")
//12 write program to generate a 10 digit random mobile number 
console.log(Math.floor(Math.random()*100000)*100000)
console.log("----------12------------")