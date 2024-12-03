
// Simple Questions
// 1. Find the length of the string "hello world".

let str1 = "hello world";
console.log(str1.length)


// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2[str2.length - 1])


// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase())


// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log(str4.includes("coding"))


// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim().length)


// Tough and Advanced Questions
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";


// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
console.log(str7.split(""))


// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
let str = str8.replace("banana", "pineapple")
console.log(str)


// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10[4])

// 11. Write a check if  a string and returns true if it includes the word "API",
str11="API"
console.log(str11.includes("API"))

// 12. Extract the last 4 characters from the string "automation testing".
//let str12 = "automation testing";
//console.log(str12.substring(substring(length-4)))


// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase(). trim())

// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test","Exam"))
//thanks 

//-------------------------------------------------------------------------------------------------//
// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge= "30 Days of Javascript"


// 2. Print the string on the browser console using console.log()
console.log("Learning Javascript")


// 3. Print the length of the string on the browser console using console.log()
str1="Learning Javascript"
console.log(str1.length)


// 4. Change all the string characters to capital letters using toUpperCase() method
let str20="30 Days of Javascript"
console.log(str20.toUpperCase())


// 5. Change all the string characters to lowercase letters using toLowerCase() method
let str21="30 Days of Javascript"
console.log(str21.toLowerCase())



// 6. Cut (slice) out the first word of the string using substr() or substring() method
// Using substring method

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.


// 8. Check if the string contains a word Script using includes() method
let challenge1= "30 Days of Javascript"
console.log(challenge1.includes("script"))



// 9. Split the string into an array using split() method
let challenge2= "30 Days of Javascript"
console.log(challenge2.split(""))


// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge2.split(" "))



// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str29="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(str29.split(","))


// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let str31="30 Days Of JavaScript"
console.log(str31.replace("JavaScript","python"))


// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(str31[15]) //i



// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let str32="30 Days of Javascript"
console.log(str32.indexOf("J")) //0



// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(str32.indexOf("a"))


// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(str32.lastIndexOf("a"))



// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
console.log(str32.indexOf("a"))



// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.
console.log(str32.lastIndexOf("t"))


// 19. Use search to find the position of the first occurrence of the word because in the following sentence.


// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
let str17="30 Days of Javascript"
console.log(str17.trim())



// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let str24="30 Days of Javascript"
console.log(str24.startsWith("3"))


// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let str23="30 Days of Javascript"
console.log(str23.endsWith("t"))


// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
let str28="30 Days of Javascript"
console.log(str28.match("a"))


// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let str26="30 Days of"
let str27="Javascript"
console.log(str26.concat(str27))


// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
let str25="30 Days of Javascript"
console.log(str25.repeat(2))


// Exercise: Level 2

// 1. Using console.log() print out the following statement:
// 2. Using console.log() print out the following quote by Mother Teresa:


// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence2 = 'I hope this course is not full of jargon.';
console.log(sentence2.includes("jargon"))


// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*100))


// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random()*50+50))


// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*255))

// 10. Access the 'JavaScript' string characters using a random number.
//let jsString = 'JavaScript';
//console.log(Math.random(jsString))


// 11. Use console.log() and escape characters to print the following pattern:
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
let str22 = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27 4 1 4 16 64\n5 1 5 25 125"
console.log(str22)



// 12. Use substr to slice out the phrase because because because from the following sentence:
