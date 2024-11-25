
// 1. Generate a random number between 1 and 10 (inclusive) and print it.
// Hint: Use Math.random() and Math.floor() to generate random numbers.
console.log(Math.floor(Math.random()*10))
//----------------------------------------------------------------------------------------
// 2. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.
Math.floor(num)//output is 5
Math.ceil(num)//output is 6
//--------------------------------------------------------------------------------------------

// 3. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
let a=Math.floor(Math.random()*6)
let b=Math.floor(Math.random()*6)
console.log(a,b)
//----------------------------------------------------------------------------------------------

// 4. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
//starting of the value is 5 and last value 15 because floor value get int no that is 0*10+5=5
//1*10+5=15
// Hint: Understand how the number is being generated and what range it falls in.
//----------------------------------------------------------------------------------------------

 
//5 generate  randomBetween(10, 20) should generate a number between 10 and 20.
//console.log(randomBetween(10, 20));
// let randomvalue=Math.random();
// console.log(Math.floor(randomvalue * 20)+5)
//---------------------------------------------------------------------------------------------
// 5 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
let val=Math.random()
console.log("answer of q no 5",val*10)+6  //i will try but not getting proper answer
//--------------------------------------------------------------------------------------

// 7. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
//..let number = 1234.56789;

// 8. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

//9 generate random even number upto 50

//10 generate random odd number form 30 to 90

//11 generate random prime number form 45-200

//12 write program to generate a 10 digit random mobile number 
console.log(Math.round(Math.random()*11)+1)