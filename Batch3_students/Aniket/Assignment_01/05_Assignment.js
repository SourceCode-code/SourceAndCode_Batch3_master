

// Simple Questions
// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)//11

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2.length-1)


// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase)


// 4. Check if the string "coding" includes the word "code".0
let str4 = "coding";
console.log(str4.includes("code"))


// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim().length) 


// Tough and Advanced Questions
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".


// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
console.log(str7.split("  "))


// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replace("banana apple","banana pineapple"))


// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase())
console.log(str9.toLowerCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
// let str10 = "Functional Testing";
// console.log(str10.substring(0,5))

// 11. Write a check if  a string and returns true if it includes the word "API",
// let string ="API"
// console.log(string.includes())


// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12.endsWith(4,0))//--------------------------->

// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLocaleLowerCase())
console.log(str13.trim().length)

// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test","exam"))
//thanks 

//-------------------------------------------------------------------------------------------------//
// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenged = "30 day of javaScript";


// 2. Print the string on the browser console using console.log()

let string = "browser"
console.log(string)


// 3. Print the length of the string on the browser console using console.log()

let str = "browser"
console.log(str.length)

// 4. Change all the string characters to capital letters using toUpperCase() method

let str50 = "browser"
console.log(str50.toUpperCase())

// 5. Change all the string characters to lowercase letters using toLowerCase() method

let str51 = "browser"
console.log(str51.toLowerCase())


// 6. Cut (slice) out the first word of the string using substr() or substring() method
 // Using substring method

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.


// 8. Check if the string contains a word Script using includes() method


// 9. Split the string into an array using split() method

let str52 = "Array"
console.log(str52.split(" "))

// 10. Split the string 30 Days Of JavaScript at the space using split() method

let str53 = "30 days of JavaScript"
console.log(str53.split(' ')
)

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let str59 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(str59.split(' , '))//------------------------------------------->


// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

let str60 = "30 day of javaScript"
console.log(str60.replace("30 day of java script","30 day of Python"))

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
 
let str61 = "30 day of javascript"
console.log(str61.charAt())//---------------------->

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()


// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
 
let str62 = "30 day of javascript"
console.log(str62.lastIndexOf("0"))//1

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

let str63 = "30 day of javascript"
console.log(str63.lastIndexOf("t"))//19

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:

let str64 = "30 day of javascript"
console.log(str64.lastIndexOf("day"))// 3


// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.

let str65 = "30 day of javascript"
console.log(str65.lastIndexOf("javascript"))// 10



// 19. Use search to find the position of the first occurrence of the word because in the following sentence.

let str66 = "30 day of javascript"
console.log(str66.lastIndexOf("day"))// 3



// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

let str67 = " 30 day of javascript "
console.log(str67.trim().length)

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let str68 = " 30 day of javascript "
console.log


// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true


// 23. Use match() method to find all the a’s in 30 Days Of JavaScript

let str58 = "30 day of JavaScript"
console.log(str58.match("30 day of JavaScript"))

// Output:-

// [ 'Array' ]
// [ '30', 'days', 'of', 'JavaScript' ]
// [
//   '30 day of JavaScript',
//   index: 0,
//   input: '30 day of JavaScript',
//   groups: undefined
// ]

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
 let str56 = "30 Day Of"
 let str57 = "JavaScript"
 console.log(str56.concat(str57))

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
 
let = str55 = "30 Day Of JavaScript"
console.log(str55.repeat(2))


// Exercise: Level 2

// 1. Using console.log() print out the following statement:

// 2. Using console.log() print out the following quote by Mother Teresa:

let str54 = " Mother Teresa"
console.log(str54)

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