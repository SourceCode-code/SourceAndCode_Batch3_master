/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.
let num = 18
if (num >= 18) {
    console.log(`You are old to enough`)
}
else {
    console.log(`You are left with ${18 - num} to turn 18`)
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
let myage = 35
let yourage = 30
if (myage < yourage) {
    console.log(`you are ${yourage - myage} years older than me`)
}
else {
    console.log(`I am ${myage - yourage} years older than you`)
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
if (a > b) {
    console.log(`a is greater than b`)
}
else {
    console.log(`b is greater than a`)
}
// Using ternary operator

a > b ? console.log(`${a} is greater than ${b}`) : (`${b} is greater than ${a}`)


/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
let num4 = 10
if (num4 % 2 == 0) {
    console.log(`${num4} is an even number`)
}
else {
    console.log(`${num4} is an odd number`)
}

/**
 * Enter a number: 22
 * 22 is an even number.
 *
 * Enter a number: 99
 * 99 is an odd number.
 */


/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let num5 = 70
if (num5 >= 80 && num5 <= 100) {
    console.log(`A grade`)
}
else if (num5 >= 70 && num5 <= 79) {
    console.log(`B grade`)
}
else if (num5 >= 60 && num5 <= 69) {
    console.log(`C distinction`)
}
else if (num5 >= 50 && num5 <= 59) {
    console.log(`D grade`)
}
else {
    console.log(`F grade`)
}


// 2. Check the season based on user input month.
let season = "may"
let month = season.toLowerCase()
let summer = 'march, april, may, june'
let Monsoon = 'july, august, september, october'
let Winter = 'november, december, january, february'

if (summer.includes(season)) {
    console.log(`this month ${month} is summer`)
}
else if (Monsoon.includes(season)) {
    console.log(`this month ${month} is monsoon`)
}
else {
    console.log(`this month ${month} is winter`)
}






// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.

let days = "wednesday"
let day = days.toLowerCase()

let working_Day = `monday,tuesday,wednesday,thursday,friday`
let holidays = `saturday,sunday`

if (working_Day.includes(day)) {
    console.log(`${day} is a working day`)
}
else {
    console.log(`${day} is a weekend`)
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
let cur_day="february"
let day1=cur_day.toLowerCase()

let days_29='February'
let days_31 = 'january,march,may,july,august,october,december'
let days_30 ='april,june,september,november'

if(days_31.includes(day1)){
    console.log(`${day1} has 31 days`)
}
else if(days_30.includes(day1)){
    console.log(`${day1} has 30 days`)
}
else{
    console.log(`${day1} has 29 days`)
}




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


let num6 = 69
switch (true) {
    case num6 >= 90 && num6 <= 100: console.log("A")
        break
    case num6 >= 80 && num6 <= 89: console.log("A-")
        break
    case num6 >= 70 && num6 <= 79: console.log("B")
        break
    case num6 >= 60 && num6 <= 69: console.log("C")
        break
    case num6 >= 45 && num6 <= 59: console.log("D")
        break
    default: console.log("F")
        break
}
