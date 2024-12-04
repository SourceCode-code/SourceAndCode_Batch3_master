
// Simple Questions
// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)
console.log("---Ans.-1---")


// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2[str2.length - 1])
console.log("---Ans.-2---")


// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
let rt = str3.toUpperCase()
console.log(rt)
console.log("---Ans.-3---")

// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
let result = str4.includes("code") 
console.log(result)
console.log("---Ans.-4---")


// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
let trimmedStr = str5.trim();
console.log(trimmedStr)
console.log("---Ans.-5---")


// Tough and Advanced Questions
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substr(0,5))
console.log("---Ans.-6---")


// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
let words = str7.split(' ');
for (let i = 0; i < words.length; i++) {
    console.log(words[i])
}
console.log("---Ans.-7---")


// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
let srt = str8.replace("banana", "pineapple")
console.log(srt)
console.log("---Ans.8---")

// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
let Result = str9.toUpperCase().toLowerCase().toUpperCase()
console.log(Result)
console.log("---Ans.9---")

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
let char = str10.charAt(5);
console.log(char)
console.log("---Ans.10---")
// 11. Write a check if  a string and returns true if it includes the word "API",
let str11 = "API Testing";
let Result1 = str11.includes("API");
console.log(Result1)
console.log("---Ans.11---")
// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
let last = str12.substring(14)
console.log(last)
console.log("---Ans.12---")

// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
let df = str13.toLowerCase()
console.log(df)
console.log("---Ans.13---")
// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
let str14 = "test your code with a test case";
let str15 = str14.replace("test", "exam", 1);
console.log(str15)
console.log("---Ans.14---")

//thanks 

//-------------------------------------------------------------------------------------------------//
// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days of Javascript"
console.log(challenge)
console.log("---level-1-Ans.1---")

// 2. Print the string on the browser console using console.log()
//Output = 30 Days of Javascript

// 3. Print the length of the string on the browser console using console.log()
//length = 21

// 4. Change all the string characters to capital letters using toUpperCase() method
let y = challenge.toUpperCase()
console.log(y)
console.log("---Level-1-Ans-4--")

// 5. Change all the string characters to lowercase letters using toLowerCase() method
let z = challenge.toLowerCase()
console.log(z)
console.log("---Levle-1.Ans-5---")

// 6. Cut (slice) out the first word of the string using substr() or substring() method
 // Using substring method
let gh = challenge.substring(0, 5)
console.log(gh)
console.log("----Level-1.Ans-6-----")

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let j = challenge.substring(2)
console.log(j)
console.log("---Level-1.Ans-7---")

// 8. Check if the string contains a word Script using includes() method
let k = challenge.includes('script')
console.log(k)
console.log("---Level-1.Ans-8---")

// 9. Split the string into an array using split() method
let g = challenge.split(' ')
console.log(g)
console.log("---Level-1.Ans-9---")

// 10. Split the string 30 Days Of JavaScript at the space using split() method
let f = challenge.split(" ")
console.log(f)
console.log("---Level-1.Ans-10---")

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let b = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let a = b.split(', ')
console.log(a)
console.log("---Level-1.Ans-11---")

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let jl = challenge.replace("Javascript","Python")
console.log(jl)
console.log("---Level-1.Ans-12----")

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let yt =  challenge.charAt(15)
console.log(yt)
console.log("---Level-1.Ans-13----")

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let jh = challenge.charCodeAt(0)
console.log(jh)
console.log("---Level-1.Ans-14---")

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let ty = challenge.indexOf('a')
console.log(ty)
console.log("---Level-1.Ans-15---")

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let tyu = challenge.lastIndexOf('a')
console.log(tyu)
console.log("---Level-1.Ans-16---")

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:



// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.


// 19. Use search to find the position of the first occurrence of the word because in the following sentence.


// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.


// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true


// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true

let vb = challenge.endsWith('JavaScript')
console.log(vb)
console.log("---Level-1.Ans-22---")


// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
let tu = challenge.match('a')
console.log(tu)
console.log("---level-1.Ans-23---")

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let tyu1 = challenge.concat('JavaScript')
console.log(tyu1)
console.log("---level-1.Ans-24---")
// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
let tyu2 = challenge.repeat(2)
console.log(tyu2)
console.log("---level-1.Ans-25---")


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
