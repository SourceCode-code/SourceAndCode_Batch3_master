// 1. Generate a random number between 1 and 10 (inclusive) and print it.
// Hint: Use Math.random() and Math.floor() to generate random numbers.

//console.log(Math.floor(Math.random()*))

// 2. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
//let num = 5.7;

console.log(Math.ceil(num)) 
//output:-6

console.log(Math.floor(num))
// output:- 52 

// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.

// 3. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

console.log("the output for dice roll is ",(Math.floor(Math.random()*5)+1))   

// 4. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 

// Hint: Understand how the number is being generated and what range it falls in.

//5 generate  randomBetween(10, 20) should generate a number between 10 and 20.
//console.log(randomBetween(10, 20));

// 5 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

// 7. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
//let number = 1234.56789;

// 8. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

//9 generate random even number upto 50
   
let even = Math.ceil(Math.random()* 50)

//10 generate random odd number form 30 to 90

let even1 = Math.ceil(Math.random()*(45-30)+30)
console.log(even)

//11 generate random prime number form 45-200

//12 write program to generate a 10 digit random mobile number
 let num = Math.ceil(Math.random()* 9999999999)