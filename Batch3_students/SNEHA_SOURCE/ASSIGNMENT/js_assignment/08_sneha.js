/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.
let age = 13
if (age >= 18) {
    console.log("you are old enogh to drive")
}
else {
    console.log(`you are left with ${18 - age} to turn 18`)
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
let myage = 27
let yourage = 31
if (myage < yourage) {
    console.log(`you are ${myage - yourage} older tham me`)
}
else {
    console.log(`i am ${myage - yourage} older than you`)

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
    console.log("'a' is greater than 'b'")

}
else {
    console.log("'b' is greater than 'a'")
}


// Using ternary operator
a > b ? console.log("a is greater") : "b is greater"

/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
let number = 99
if (number % 2 == 0) {
    console.log(`${number} is even no`)
}
else {
    console.log(`${number} is odd no`)

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

let score = 85
if (score > 80 && score < 100) {
    console.log('grade A')
}
else if
    (score > 70 && score < 79) {
    console.log('grade b')
}
else if (score > 60 && score < 69) {
    console.log('grade c')
}
else if (score > 50 && score < 59) {
    console.log('grade d')
}
else if (score > 0 && score < 49) {
    console.log('grade e')
}




// 2. Check the season based on user input month.
let month = "september"
let m1 = month.toLowerCase
let summer = "march,april,may "
let mansoon = "june,july,august"
let winter = "september,october,november,december,january"
if (summer.includes(month)) {
    console.log("this is ${month} is summer ")
}
else if (summer.includes(month)) {
    console.log(`this is ${month} this is monsoon`)
}

else {
    console.log(`this is ${month} this is winter`)
}
// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
let day = "friday"
let lower = day.toLowerCase
let day1 = "monday,tuesday,wednesday,thursday,friday,saturday"
let day2 = "saturday"
let day3 = "sunday"
if (day1.includes(lower)) {
    console.log("its your working day")
}
else if (day2.includes(lower)) {
    console.log("its weekend")
}
else {
    console.log("its holiday enjoy your day")

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
let mday="jaunuary"
let lcase=mday.toLowerCase()
let day31="january,march,may,july,august,october december"
let day30="april,june,september,november"
let day28_29="february"
if(lcase.includes(mday)){
    console.log(`there is ${mday} 31 days`)
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



let marks=70
if(marks<=90){
    console.log("grde a")
}
else if(marks>=80 && marks<=70){
    console.log("grade b")
}
else if(marks>=70 && marks<=60){
    console.log("grade c")
}
else if(marks>=60 && marks<=45){
    console.log("grade d")
}


