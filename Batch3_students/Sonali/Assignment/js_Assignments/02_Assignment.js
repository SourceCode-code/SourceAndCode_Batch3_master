
// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x)); //7
// Hint: It will round to the nearest integer. write in comment

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
console.log(typeof (gravity))


// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
console.log(Math.ceil(num)) //highest nearest number using ceil
console.log(Math.floor(num))//lowest nearest number using floor


// 1. Generate a random number between 1 and 10 (inclusive) and print it.
let num5= (Math.floor(Math.random() * 9) + 1)
console.log(num5)
// Hint: Use Math.random() and Math.floor() to generate random numbers.

// 2. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num1 = 5.7;

console.log(Math.ceil(num1))
console.log(Math.floor(num1))
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.

// 3. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
//console.log(Math.floor(Math.random()*5)+1,Math.floor(Math.random()*5)+1)
//or 
let dice1 = Math.floor((Math.random() * 5) + 1)
let dice2 = Math.floor((Math.random() * 5) + 1)
console.log(dice1, dice2)


// 4. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5); //14 when we multiply random value to 10 it gives output in float but using floor method we get 9 and adding 4 to 9 we get 14
// write the output and reason in commnets 

// Hint: Understand how the number is being generated and what range it falls in.

//5 generate  randomBetween(10, 20) should generate a number between 10 and 20.
console.log(Math.floor(Math.random() * 10) + 10)
//console.log(randomBetween(10, 20));

// 6 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
console.log(Math.random() * 3.8 + 5.5)


// 7. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
x=1234.5678
let rounded=Math.round(x*100)/100
console.log(rounded)

// 8. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

//9 generate random even number upto 50
console.log(Math.ceil(Math.random() * 25) * 2)

let evennumber= Math.ceil(Math.random()*25)
console.log(evennumber*2)
// 1
//0

//10 generate random odd number form 30 to 90

let oddnumber= Math.ceil(Math.random()*25)
console.log((evennumber*2)+1)
//11 generate random prime number form 45-200

//12 write program to generate a 10 digit random mobile number 
let mob_no=Math.floor(Math.random(9)*9999999990)
console.log(mob_no)