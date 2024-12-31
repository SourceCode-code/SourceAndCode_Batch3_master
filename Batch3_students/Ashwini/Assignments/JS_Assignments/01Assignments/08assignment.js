/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.
console.log("---------less than 18----------")
let age=17
if(age>=18){
    console.log("You are old enough to drive")
}
else
{
    console.log("You are not old enough to drive")
}
/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */
console.log("---------greater than 18----------")
let age1=30
if(age1>=18){
    console.log("You are old enough to drive")
}
else
{
    console.log("You are not old enough to drive")
}



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
console.log("---------even number----------")
let num2=22
if(num2%2 == 0)
{
    console.log("The given number is even")
}

/**
 * Enter a number: 22
 * 22 is an even number.
 */
 //let num1=Math.floor(Math.random())*10
  
 /* Enter a number: 99
 * 99 is an odd number.
 */
 console.log("---------odd number----------")
 let num3=99
 if(num3%2 != 0)
 {
     console.log("The given number is odd")
 }

/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F

let marks;
if(let marks <= 100 && marks >= 80)
    console.log(`Students are scored A grade`)
    break;
elseif(let marks <= 79 && marks >= 70)
    console.log(`Students are scored B grade`)
    break;
elseif(let marks <= 69 && marks >= 60)
    console.log(`Students are scored C grade`)
    break;
elseif(let marks <= 59 && marks >= 50)
    console.log(`Students are scored D grade`)
    break;
elseif(let marks <= 49 && marks > 0)
    console.log(`Students are failed`)


// 2. Check the season based on user input month.


// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
let day = "Thursday"

let formatday = day.toLocaleLowerCase()

switch (formatday) {

    case "monday": console.log("Work from Office ")
    case "tuesday": console.log("Work from Office ")
    case "wednesday": console.log("Work from Office ")
        break
    case "thrusday": console.log("WFH")
    case "friday": console.log("WFH")
        break
    case "saturday": console.log("holiday ")
    case "sunday": console.log("holiday ")
        break
    default: console.log("enter correct data ")
}


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