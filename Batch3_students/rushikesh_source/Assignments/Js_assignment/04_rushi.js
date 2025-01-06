
// Simple Questions
// 1. Find the length of the string "hello world".
//let str1 = "hello world";
//console.log(str1.length)//11

// 2. Retrieve the last character of the string "automation".
//let str2 = "automation";
//console.log(str2.length)//10
//console.log(str2[str2.length-1])

// 3. Convert the string "learning" to uppercase.
//let str3 = "learning";
//console.log(str3.toUpperCase())

// 4. Check if the string "coding" includes the word "code".
//let str4 = "coding";
//console.log(str4.includes("code"))

// 5. Trim the spaces from the string "   JavaScript   ".
//let str5 = "   JavaScript   ";
//console.log(str5.length)//16
//console.log(str5.trim().length)//10

// Tough and Advanced Questions
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
//let str6 = "PlaywrightAutomation";


// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
//let str7 = "Cypress is fun";
//console.log(str7.split(""))

// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
//let str8 = "banana apple";
//console.log(str8.replace("banana","pineapple"))

// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
//let str9 = "JavaScript";
//console.log(str9.toUpperCase().toLocaleLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
//let str10 = "Functional Testing" ;
//console.log(str10[5])

// 11. Write a check if  a string and returns true if it includes the word "API",

// 12. Extract the last 4 characters from the string "automation testing".
//let str12 = "automation testing";

// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
//let str13 = " HELLOworld ";
//console.log( str13.toUpperCase().trim().length) 

// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
//let str14 = "test your code with a test case";
//console.log(str14.replace("test" , "exam" ))

//thanks 
//-------------------------------------------------------------------------------------------------//
// Exercise: Level 1
// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
//let Challenge = "30 Days Of JavaScript"

// 2. Print the string on the browser console using console.log()
//let challenge = "30 Days Of JavaScript" 
//console.log(Challenge)
// 3. Print the length of the string on the browser console using console.log()
 //console.log(challenge.length)

// 4. Change all the string characters to capital letters using toUpperCase() method
//console.log(challenge.toUpperCase())

// 5. Change all the string characters to lowercase letters using toLowerCase() method
//console.log(challenge.toLowerCase())

// 6. Cut (slice) out the first word of the string using substr() or substring() method
 // Using substring method
 //console.log(challenge.substring(0,2))

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
//console.log(challenge.substring(3,challenge.length))

// 8. Check if the string contains a word Script using includes() method
//console.log(challenge.includes("Script"))

// 9. Split the string into an array using split() method
//console.log(challenge.split(''))

// 10. Split the string 30 Days Of JavaScript at the space using split() method
//console.log(challenge.split(' '))

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
//let sentence2 = 'I hope this course is not full of jargon.';


// 7. Generate a random number between 0 and 100 inclusively.


// 8. Generate a random number between 50 and 100 inclusively.


// 9. Generate a random number between 0 and 255 inclusively.

// 10. Access the 'JavaScript' string characters using a random number.
//let jsString = 'JavaScript';


// 11. Use console.log() and escape characters to print the following pattern:
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// 12. Use substr to slice out the phrase because because because from the following sentence:



// ---------------------------using for practis------------------------------------------------



// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
// let greeting = "Hello World"
// console.log(typeof greeting)

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
//let price = 199.99
//console.log(Math.ceil(price))

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
//let fullname = " rushikesh Omprakash Jadhav " 
//console.log(fullname.length)
// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
//let firstName = "rushikesh"
//let MiddleName = "omprakash"
//let lasname = "jadhav"
//let fullname = ((firstName) + " " + (MiddleName) + " " + (lasname ))
//console.log(fullname)


// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
//let language = 'JavaScript'
//console.log(language[4] ) 


// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
//console.log(Math.random()*20)
// let even = (Math.ceil(Math.random()*9)*2)
// console.log(even)


// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
//let long = "asfgdhjuikdhcbn\ngfjklo\nstyahi\njfhygn\njhbbggdb\nfrsgv"
//console.log(long)


// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
// let program = " It\'s \"fun\" to learn JavaScript\! "
// console.log(program)


// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
//let amount = 45.85
//console.log(Math.floor(amount))
//console.log(Math.ceil(amount))
//console.log (Math.round(amount))


// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
//let quote = "Learning JavaScript is awesome!"
//console.log(quote.indexOf("J"))
//console.log(quote.length)


// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
//let str = 'Hello, World!'
//let str1 = "Hello\tWorld!"
//console.log(str1)

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
//let str1 = 'abc';
//let str2 = 'def';
//let str1 = 'abc'
//let str2 = 'def'
//console.log(str1 + str2)

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.

//15 write a program to generate a random odd number form 15-150




// ------------------------------test-----------------------

const str27= "jadhav"

console.log(str27.substring(1,4))
//console.log(str27.endsWith("t"))


