/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.
let age = 16
if(age>=18){
    console.log('You are old enough to drive')
}
else{
    console.log(`you are ${18-age} years left to turn 18`)
}

/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */


// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.
let myAge = 25
let yourAge =30
if(myAge<yourAge){
    console.log(`you are ${yourAge-myAge} years older than me `)
}
else{
    console.log(`I am ${myAge-yourAge} years older than you `)
}
/**
 * Enter your age: 30
 * You are 5 years older than me.
 */


// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 4;
let b = 3;
// Using if...else
if(a>b){
    console.log("'a' is greater than 'b'")
}
else{
    console.log("'b' is greater than 'a'")
}

// Using ternary operator
a>b?console.log("'a' is greater than 'b'"):console.log("'b' is greater than 'a'")
/**
 * 4 is greater than 3
 */


// 4. Check if a number is even or odd.
let num =22
if(num%2==0){
    console.log(`${num} is an even number`)
}
else{
    console.log(`${num} is an odd number`)
}
/**
 * Enter a number: 22
 * 22 is an even number.
 *
 * Enter a number: 99
 * 99 is an odd number.
 */


//* Exercises: Level 2

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let score = 100
if(score>=80 && score<=100){
    console.log("you get A grade")
}
else if(score>=70&&score<=79){
    console.log("you get B grade")
}
else if(score>=60&&score<=69){
    console.log("you get C grade")
}
else if(score>=50&&score<59){
    console.log("you get D grade")
}
else if (score>=0&&score<49){
    console.log("you get F grade")
}


// 2. Check the season based on user input month.
let month = "august"
let Month = month.toLowerCase()
let Summer = 'march, april, may'
let Monsoon = 'june, july, august, september'
let Winter = 'october, november, december,january, february'

if(Summer.includes(Month)){
    console.log(`This is ${Month} so enjoy Summer`)
}
else if(Summer.includes(Month)){
    console.log(`This is ${Month} so enjoy Monsoon`)
}
else{
    console.log(`This is ${Month} so enjoy Winter`)
}


// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
let TodaysIS = "Saturday"
let today = TodaysIS.toLowerCase()
let workingDays =` monday, tuesday, wednesday, thursday, friday`
let weekend = "saturday"
let holiday = "sunday"
if(holiday.includes(today)){
    console.log("It's sunday, Enjoy your Weekend Party hard !!!!")
}
else if (weekend.includes(today)){
    console.log("It's Weekend, Finish your work ASAP tomorrow is SUNDAY !!! ")
}
else{
    console.log("It's working day, We have to work for our company ")
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

