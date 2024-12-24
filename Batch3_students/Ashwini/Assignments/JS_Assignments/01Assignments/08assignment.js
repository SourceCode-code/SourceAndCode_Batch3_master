/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.


/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */




// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.



/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 4;
let b = 3;

// Using if...else
if(a>b)
    console.log(`The number ${a} is grater than ${b} number`)
else
    console.log(`The number ${b} is grater than ${a} number`)

// Using ternary operator


/**
 * 4 is greater than 3
 */
let num=4, num1=3
    
num > num1 ? console.log(`The number ${num} is grater than ${num1} number`)
: console.log(`The number ${num1} is grater than ${num} number`)


// 4. Check if a number is even or odd.


/**
 * Enter a number: 22
 * 22 is an even number.
 */
 //let num1=Math.floor(Math.random())*10
  
 /* Enter a number: 99
 * 99 is an odd number.
 */


/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F

if(let num2<=100 && num3>=80)
    console.log(`Students are of A score`)
    break;
elseif(let num4<=79 && num5>=80)
    console.log(`Students are of B score`)
    break;
elseif(let num6<=69 && num7>=60)
    console.log(`Students are of C score`)
    break;
elseif(let num8<=59 && num9>=50)
    console.log(`Students are of D score`)
    break;
elseif(let num10<=49 && num11>0)
    console.log(`Students are failed`)


// 2. Check the season based on user input month.



// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.



/**
 * What is the day today? Saturday
 * Saturday is a weekend.
 *
 * What is the day today? FrIDAy
 * Friday is a working day.
 */


/**
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.
//switch


/**
 * Enter a month: January
 * January has 31 days.
 */

// develop a program to get marks for student 
// switch case
// 90> above -- a
// 80-90 --> a-
//80-70 -->b
//70-60 -->c
//60-45--d
//<45 --f