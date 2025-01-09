// Write a single line comment which says, comments can make code readable
//comments can make code readable

// Write another single comment which says, Welcome to 30DaysOfJavaScript
//Welcome to 30DaysOfJavaScript

// Write a multiline comment which says, comments can make code readable, easy to reuse and informative
/**
 * hii
 * fiii
 * 
 */

// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

let a = "vaibhav"
let str="vaibhav"
let boo

let z = true

console.log(z)
// Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

// Declare four variables without assigning values

// Declare four variables with assigned values

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

// Declare variables to store your first name, last name, marital status, country and age in a single line

// Declare two variables myAge and yourAge and assign them initial values and log to the console.




// assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));//7
// Hint: It will round to the nearest integer. write in comment

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
console.log(typeof gravity)
// Hint: Use typeof to determine the data type.


// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;//6 //5
// Hint: Rounds up to the nearest integer.
 // Hint: Rounds down to the nearest integer.

 //---------------------------------------------------------------------------------//

 /**
  * 
  * 
  */
// 1. Generate a random number between 1 and 10 (inclusive) and print it.
// Hint: Use Math.random() and Math.floor() to generate random numbers.
let num1=Math.floor(Math.random()*10)
console.log(num1)

// 2. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
//let num = 5.7; //6//5
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.

// 3. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
let dice=(Math.ceil(Math.random()*6))
let dice1=Math.ceil(Math.random()*6)
console.log(dice,dice1)

// 4. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 

// Hint: Understand how the number is being generated and what range it falls in.

//5 generate  randomBetween(10, 20) should generate a number between 10 and 20.
let r=(Math.ceil(Math.random()*10)+10)
console.log(r);

// 5 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
let randomflat=(Math.random()*3.8+5.5)
console.log(randomflat)

// 7. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
let num2=Math.round(number*100)/100
console.log(num2)

// 8. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

//9 generate random even number upto 50
let even=Math.floor(Math.random()*25)
console.log(even*2)

//10 generate random odd number form 30 to 90
let odd=Math.ceil(Math.random()*60+1)
console.log(odd*2+1)

//11 write program to generate a 10 digit random mobile number
let mobno=(Math.ceil(Math.random(9)*9999999999) )
console.log(mobno)
  


// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting="hello world"
console.log( typeof greeting)


// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price=199.99
console.log(Math.ceil(price))

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name="Sonali rajabhau khosle"
console.log(name.length)

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstName="sonali"
let middleName="rajabhau"
let lastName="khosle"
let add=firstName+" "+middleName+" "+lastName
console.log(add)


// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language="javascript"
console.log(language[3])


// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
let even1=Math.ceil(Math.random()*10)
console.log(even1*2)

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let str0="hbsjdhuwkdbwkf..\
bjzbjhfjhfbz,\
vuygbjbhjvuyjg"
console.log(str0)

// 8. Write a program that uses escape characters to display the following:
let strrr=" I am learning JavaScript.\
   It's fun to learn JavaScript"

console.log(strrr)
// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount=45.85
console.log(Math.ceil(amount))
console.log(Math.floor(amount))
console.log(Math.round(amount))

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote="Learning JavaScript is awesome!"
console.log(quote.length)

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let strr5="hello\tworld"
console.log(strr5)

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let strr1 = 'abc';
let str2r = 'def';
console.log(`${strr1} ${str2r}`)


// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let str6="qwertyuiopasdfghjklzxcvbnm"
console.log(Math.random(str6))

//15 write a program to generate a random odd number form 15-150



// Simple Questions
// 1. Find the length of the string "hello world".
let str1 = "hello world";


// 2. Retrieve the last character of the string "automation".
let str2 = "automation";


// 3. Convert the string "learning" to uppercase.
let str3 = "learning";


// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";


// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
let strr="str5.trim().length"
console.log(strr)


// Tough and Advanced Questions
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let strr6 = "PlaywrightAutomation";
let strrr6=strr6.substr(0,5)
console.log(strrr6)



// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";


// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";


// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";

// 11. Write a check if  a string and returns true if it includes the word "API",
let srr="API"
console.log(srr.includes("API"))

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
//console.log(str12.substring(substring(length-4)))

//console.log(str12.substring(substring(length-4)))

// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase().trim())

// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
let str14 = "test your code with a test case";
//thanks 

//-------------------------------------------------------------------------------------------------//
// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.


// 2. Print the string on the browser console using console.log()


// 3. Print the length of the string on the browser console using console.log()


// 4. Change all the string characters to capital letters using toUpperCase() method


// 5. Change all the string characters to lowercase letters using toLowerCase() method


// 6. Cut (slice) out the first word of the string using substr() or substring() method
 // Using substring method

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.


// 8. Check if the string contains a word Script using includes() method


// 9. Split the string into an array using split() method


// 10. Split the string 30 Days Of JavaScript at the space using split() method


// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.


// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.


// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.


// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()


// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript


// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.


// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:


// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.


// 19. Use search to find the position of the first occurrence of the word because in the following sentence.


// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.


// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true


// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true


// 23. Use match() method to find all the a’s in 30 Days Of JavaScript


// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'


// 25. Use repeat() method to print 30 Days Of JavaScript 2 times


// Exercise: Level 2

// 1. Using console.log() print out the following statement:
// 2. Using console.log() print out the following quote by Mother Teresa:


// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence2 = 'I hope this course is not full of jargon.';


// 7. Generate a random number between 0 and 100 inclusively.


// 8. Generate a random number between 50 and 100 inclusively.


// 9. Generate a random number between 0 and 255 inclusively.

// 10. Access the 'JavaScript' string characters using a random number.
let jsString = 'JavaScript';


// 11. Use console.log() and escape characters to print the following pattern:
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// 12. Use substr to slice out the phrase because because because from the following sentence:





/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;


// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.


// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';


// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.


// 7. Check if the type of '10' is equal to 10 using `parseInt`.


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.


// 9. Write three JavaScript statements that provide falsy values.


// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);              
console.log(4 >= 3);             
console.log(4 < 3);             
console.log(4 <= 3);             
console.log(4 == 4);            
console.log(4 === 4);           
console.log(4 != 4);            
console.log(4 !== 4);            
console.log(4 != '4');           
console.log(4 == '4');           
console.log(4 === '4');          

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);   
console.log(4 > 3 && 10 > 12);   
console.log(4 > 3 || 10 < 12);   
console.log(4 > 3 || 10 > 12);   
console.log(!(4 > 3));          
console.log(!(4 < 3));           
console.log(!(false));           
console.log(!(4 > 3 && 10 < 12)); 
console.log(!(4 > 3 && 10 > 12)); 
console.log(!(4 === '4'));        

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.

// 17. Get the radius   calculate the area and circumference of a circle.

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.

// 19. Compare the slope between two points (2, 2) and (6, 10).

// 20. Compare the slope of the two questions above.

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.

// 24. Using prompt, when birth year and calculate if they are old enough to drive.




// Assignment: JavaScript Date and Time Exercises

/* 
Question 1: 
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 
Also, display the current time in various formats.

dd:mm:yyyy HH:mm (24 hours)
dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
yyyy:mm:DD mm:hh 

*/

let age = 25

 let secondslived = age*(365*24*60*60) //assume this is not a leap year 
console.log(secondslived) //788400000

let assumption = 100
let secondslived2 = assumption*(365*24*60*60) //assume this is not a leap year 
console.log(secondslived2)  //  3153600000

/* 
Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").


(e.g., "Monday, 02 October 2024 3:30 pm").

*/

/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').

31 -dec


*/

/* */
//Question 4: 
//Check if a current  year is a leap year.
let date7=new Date()
let year6=date7.getFullYear()
if(year6%4==0&&year6%100==0&&year6%400!=0){
    console.log("leap year")
}
else(
    console.log("not leap year")
)




//dd:mm:yyyy HH:mm (24 hours)
let date=new Date()
let day=date.getDate()
let pdate=String(day).padStart(2,0)
let month=date.getMonth()+1
let pmonth=String(month).padStart(2,0)
let year=date.getFullYear()
let hour=date.getHours()
let phour=String(hour).padStart(2,0)
let min=date.getMinutes()
let pmin=String(min).padStart(2,0)
console.log(`${pdate} ${pmonth} ${year}  ${phour}:${pmin}`)


//dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
let date1=date.getDate()
let pdate1=String(date1).padStart(2,0)
let short_month=date.toLocaleString("en-gb",{month:"short"}) 
let year1=date.getFullYear()

let hour1=date.getHours()
let phr=String(hour1).padStart(2,0)
let hr=phr%12

let min1=date.getMinutes()
let pmin1=String(min1).padStart(2,0)

console.log(`${pdate1} ${short_month} ${year1} ${hr}:${pmin1}`)


//dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
let date2=date.getDate()
let pdate2=String(date2).padStart(2,0)
let long_month=date.toLocaleString("en-gb",{month:"long"})
let year2=date.getFullYear()
let hour2=date.getHours()
let hrs=hour2%12
let phrs=String(hrs).padStart(2,0)
let min2=date.getMinutes()
let pmin2=String(min2).padStart(2,0)
console.log(`${pdate2} ${long_month} ${year2} ${phrs}:${pmin2}`)

//yyyy:mm:DD mm:hh 
let year3=date.getFullYear()
let mon=date.getMonth()+1
let pmon=String(mon).padStart(2,0)
let day3=date.getDate()
let pday3=String(day3).padStart(2,0)
let min3=date.getMinutes()
let pmin3=String(min3).padStart(2,0)
let hr1=date.getHours()
let hr2=hr1%12
let phr1=String(hr2).padStart(2,0)
console.log(`${year2} ${pmon} ${pday3} ${pmin3}:${hr1}`)



//Prompt the user to enter the number of years they have lived. 
//Then, calculate the number of seconds a person can live. 
//Assume someone lives 100 years as the maximum. 
//Also, display the current time in various formats.
let age1=25
let seconds=(age)*365*24*60*60
console.log(seconds)
let age2=100
let agehundred=(age2)*365*24*60*60
console.log(agehundred)

//Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
//(e.g., "Monday, 02 October 2024 15:30").
let daysofWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
let days=daysofWeek[date.getDay()]
let day4=date.getDate()
let pday4=String(day4).padStart(2,0)
let mon1=date.toLocaleString("en-gb",{month:"long"})
let year4=date.getFullYear()
let hr3=date.getHours()
let min4=date.getMinutes()
console.log(`${days}, ${pday4} ${mon1} ${year4} ${hr3}:${min4} `)

//(e.g., "Monday, 02 October 2024 3:30 pm").
let daysofWeek1=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
let days2=daysofWeek1[date.getDay()]
let day5=date.getDate()
let pday5=String(day4).padStart(2,0)
let mon2=date.toLocaleString("en-gb",{month:"long"})
let year5=date.getFullYear()
let hr4=date.getHours()
let hr5=hr4%12
let phr4=String(hr5).padStart(2,0)
let min5=date.getMinutes()
let ampm=hr5<12?"AM":"PM"
console.log(`${days2}, ${pday5} ${mon2} ${year5} ${phr4}:${min5} ${ampm} `)

let date6=new Date()
let manipulatedate=date6.getDate()
let mandate=date6.setDate(manipulatedate+6)
console.log(date6.getDate())


let date8=new Date()
let datereverse=date8.getDate()
let newdate=date8.setDate(datereverse+2)
console.log(date8.getDate())

let a1=new Date()
let aa=a1.getDate()
let a2=a1.setDate(aa+10)
console.log(a1.getDate())

let a3=new Date()
let a4=a3.getDate()
let a5=a3.setDate(a4+10)
console.log(a3.getDate())

let aa4=new Date()
let aa5=aa4.getDate()
let aa6=aa4.setDate(aa5+5)
console.log(aa4.getDate())

let amonth=new Date()
let amonth1=amonth.getMonth()+1
let amon=amonth.setMonth(amonth1+3)
console.log(amonth.getMonth())

let ayear=new Date()
let ayear1=ayear.getFullYear()
let ayear2=ayear.setFullYear(ayear1+5)
console.log(ayear.getFullYear())

let arr9 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let evenarr=[]
let oddarr=[]
for(let i=0;i<arr9.length;i++){
    if(arr9[i]%2==0){
        evenarr.push(arr9[i])
    }
    else(
        oddarr.push(arr9[i])
    )
}
console.log(evenarr)
console.log(oddarr)

let arr_5=[]
for(let i=0;i<arr9.length;i++){
    if(arr9[i]>=7)
        arr_5.push(arr9[i])
}
console.log(arr_5)


/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.
let age_1=18
if(age_1>=18){
    console.log("you are old enough to drive car")
}
else{
    console.log("no")
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
let myage=27
let yourage=30
if(myage<yourage){
    console.log(`you are ${yourage-myage}  year older than me`)
}
else{
console.log("older")
}

/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a6 = 2;
let b = 3;

// Using if...else
if(a6>b){
    console.log("a is greter than b")
}
else{
    console.log("b is greter than a")
}
(a6>b)?console.log("a"):console.log("b")

// Using ternary operator

/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
let evenno=13
if(evenno%2==0){
    console.log("no is even")
}
else{
    console.log("no is odd")
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
let score=85
if(score>=80&&score<=100){
    console.log("A")
}
else if(score>=70&&score<=79){
    console.log("B")
}
else if(score>=60&&score<=69){
    console.log("C")
}
else if(score>=50&&score<=59){
    console.log("D")
}
else{
    console.log("F")
}


// 2. Check the season based on user input month.
//let season=may
//let month1=season.toLowerCase()
//let summer='march,april,may,june


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


let randomno=(Math.floor(Math.random()*10)+10)
console.log(randomno)