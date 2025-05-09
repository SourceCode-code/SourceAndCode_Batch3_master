
// // Simple Questions
// // 1. Find the length of the string "hello world".
// let str1 = "hello world";
// console.log(str1.length)

// // 2. Retrieve the last character of the string "automation".
// let str2 = "automation";
// console.log(str2.length-1)

// // 3. Convert the string "learning" to uppercase.
// let str3 = "learning";
// console.log(str3.toUpperCase())


// // 4. Check if the string "coding" includes the word "code".
// let str4 = "coding";
// console.log(str4.includes("code"))


// // 5. Trim the spaces from the string "   JavaScript   ".
// let str5 = "   JavaScript   ";
// console.log(str5.trim())


// // Tough and Advanced Questions
// // 6. Extract the first 5 characters from the string "PlaywrightAutomation".
// let str6 = "PlaywrightAutomation";
// console.log(str6.substr(0,5))



// // 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
// let str7 = "Cypress is fun";
// console.log("answer 7",str7.split(""))


// // 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
// let str8 = "banana apple";
// console.log(str8.replace("apple,banana"))

// // 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
// let str9 = "JavaScript";
// console.log(str9.toUpperCase().toLowerCase().toUpperCase())



// // 10. Find the character at the 5th position in the string "Functional Testing".
// let str10 = "Functional Testing";
// console.log(str10[5])

// // 11. Write a check if  a string and returns true if it includes the word "API",
// let str11=`if a string and returns true if it includes the word "API".`
// console.log(str11.includes("API"))


// // 12. Extract the last 4 characters from the string "automation testing".
// let str12 = "automation testing";
// //console.log(str12.length-4,str12.length)
// console.log("q no 12",str12.substr(str12.length-4,str12.length))

// // 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
// let str13 = " HELLOworld ";
// console.log(str13.toLowerCase().trim())


// // 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
// let str14 = "test your code with a test case";
// console.log(str14.replace('test','exam'))





// //thanks 

// //-------------------------------------------------------------------------------------------------//
// // Exercise: Level 1

// // 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challeng = '30 Days Of JavaScript'

// // 2. Print the string on the browser console using console.log()

// console.log(challeng)

// // 3. Print the length of the string on the browser console using console.log()

// console.log(challeng.length)

// // 4. Change all the string characters to capital letters using toUpperCase() method
// console.log (challeng.toUpperCase())

// // 5. Change all the string characters to lowercase letters using toLowerCase() method

// console.log (challeng.toLowerCase())
// // 6. Cut (slice) out the first word of the string using substr() or substring() method
//  // Using substring method
//  console.log("---------",challeng.substring(0,2))

// // 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// console.log(challeng.substr(3,challeng.length))


// // 8. Check if the string contains a word Script using includes() method
// challeng.includes("Script")


// // 9. Split the string into an array using split() method
 console.log(challeng.split())

// // 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challeng.split(" "))


// // 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
 let word='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(challeng.split(","))


// // 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
 console.log(challeng.replace("JavaScript",'python'))
// // 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challeng.charAt(15))

// // 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challeng.charCodeAt(J))

// // 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let s="30 Days Of JavaScript"
console.log(s.indexOf("a"))


// // 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(s.lastIndexOf("s"))


// // 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:


// // 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.


// // 19. Use search to find the position of the first occurrence of the word because in the following sentence.


// // 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.


// // 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true


// // 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true


// // 23. Use match() method to find all the a’s in 30 Days Of JavaScript


// // 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'


// // 25. Use repeat() method to print 30 Days Of JavaScript 2 times


// // Exercise: Level 2

// // 1. Using console.log() print out the following statement:
// // 2. Using console.log() print out the following quote by Mother Teresa:


// // 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
// let sentence2 = 'I hope this course is not full of jargon.';


// // 7. Generate a random number between 0 and 100 inclusively.


// // 8. Generate a random number between 50 and 100 inclusively.
// console.log("answer of qno 8",Math.random(Math.ceil()*49))

// // 9. Generate a random number between 0 and 255 inclusively.


// // 10. Access the 'JavaScript' string characters using a random number.
// let jsString = 'JavaScript';


// // 11. Use console.log() and escape characters to print the following pattern:
// // 1 1 1 1 1
// // 2 1 2 4 8
// // 3 1 3 9 27
// // 4 1 4 16 64
// // 5 1 5 25 125
// console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 2 7\n4 1 4 16 6 4\n5 1 5 25 125")

// // 12. Use substr to slice out the phrase because because because from the following sentence://
