
// Simple Questions
// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log("Length of string : " + str1.length)

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log("Last character : " + str2[str2.length - 1])


// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log("Upper case : " + str3.toUpperCase())

// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log("Include method : " + str4.includes("code"))

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log("Trim method : " + str5.trim())


// Tough and Advanced Questions
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
//let newstr1 = str6.substr(0, 5)
let newstr2 = str6.substring(0, 5)
console.log("Substring method : " + newstr2)

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
console.log("Split method : " + str7.split(" "))

// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log("Replace method : " + str8.replace("banana", "pineapple"))

// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log("Chaining method : " + str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log("Index method : " + str10[5])

// 11. Write a check if  a string and returns true if it includes the word "API",
let strNo1 = "API Testing"
console.log("Include method : " + strNo1.includes("API")) //true

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
let newStr1 = str12.substring(str12[str12.length - 1] - 4, str12[str12.length - 1])
console.log("Last 4 char : " + newStr1)
//let newStr1= substr

// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log("Lowercase : " + str13.toLowerCase())

// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log("Replace method : " + str14.replace("test", "exam"))
//thanks 

//-------------------------------------------------------------------------------------------------//
// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge='30 Days Of JavaScript'
console.log(challenge)

// 2. Print the string on the browser console using console.log()
let aa="Hello, I am beginner of Cypress learner"
console.log(aa)

// 3. Print the length of the string on the browser console using console.log()
let aa1="Hello, I am beginner of Cypress learner"
console.log(aa1.length)

// 4. Change all the string characters to capital letters using toUpperCase() method
let aa2="Hello, I am beginner of Cypress learner"
console.log("Uppercase method : "+aa2.toUpperCase())

// 5. Change all the string characters to lowercase letters using toLowerCase() method
let aa3="Hello, I am beginner of Cypress learner"
console.log("Lowercase method : "+aa2.toLowerCase())

// 6. Cut (slice) out the first word of the string using substr() or substring() method
// Using substring method
let aa4="Cypresslearner"
console.log("Slice/cut the word : "+aa4.substring(0,7))

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let aa5="Days Of JavaScript from 30 Days Of JavaScript"
console.log("Slice out the phrase : "+aa5.split(""))

// 8. Check if the string contains a word Script using includes() method
let aa6="JS script creation is in progress"
console.log("Include method : "+aa6.includes("script"))

// 9. Split the string into an array using split() method
let aa7="JS script creation is in progress"
console.log("Split method using array: "+aa7.split(""))

// 10. Split the string 30 Days Of JavaScript at the space using split() method
let aa8="30 Days Of JavaScript"
console.log("Slice out the phrase by space : "+aa8.split(" "))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let aa9='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log("Split method by comma : "+aa9.split(","))

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let aa10="30 Days Of JavaScript"
console.log("Replace method : "+aa10.replace("JavaScript", "Pythan"))

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let aa11='30 Days Of JavaScript'
console.log("charAt method : "+aa11.charAt(15))

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let aa12='30 Days Of JavaScript'
console.log("charCodeAt method : "+aa12.charCodeAt("J"))

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let aa13="30 Days Of JavaScript"
console.log("indexOf method 1st occurance : "+aa13.indexOf("a"))

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let aa14="30 Days Of JavaScript"
console.log("indexOf method last occurance : "+aa14.lastIndexOf("a"))

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
let aa15="It takes courage to grow up and become who you really are."
console.log("indexOf method 1st occurance: "+aa15.indexOf("It"))

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.
let aa16="To bring about change, you must not be afraid to take the first step."
console.log("indexOf method last occurance: "+aa16.lastIndexOf("first"))

// 19. Use search to find the position of the first occurrence of the word because in the following sentence.
let aa17="Attitude is a little thing that makes a big difference."
console.log("search method : "+aa17.search("little"))

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
let aa18="  Nothing is impossible.  "
console.log("trim method blanck space: "+aa18.trim(" "))
// console.log("trim method starting space: "+aa18.trimStart(" "))
//console.log("trim method ending space: "+aa18.trimEnd(" "))

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let aa19="30 Days Of JavaScript"
console.log("startwith method : "+aa19.startsWith("30"))

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let aa20="30 Days Of JavaScript"
console.log("endswith method : "+aa20.endsWith("JavaScript"))

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
let aa21="30 Days Of JavaScript"
console.log("match method : "+aa21.match("a"))

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let aa22="30 Days of"
let aa23=" JavaScript"
console.log("concat method : "+aa22.concat(aa23))

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
let aa24="30 Days Of JavaScript"
console.log("repeat method : "+aa24.repeat(2))

// Exercise: Level 2

// 1. Using console.log() print out the following statement:
let aa25="Keep your face always toward the sunshine, and shadows will fall behind you."
console.log(aa25)

// 2. Using console.log() print out the following quote by Mother Teresa:
let aa26="Some people come in our life as blessings. Some come in your life as lessons."
console.log("Mather Teresa quote : "+aa26)

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence2 = 'I hope this course is not full of jargon.';
console.log("include method : "+sentence2.includes("jargon"))

// 7. Generate a random number between 0 and 100 inclusively.
let num1=Math.floor(Math.random()*100)
console.log("Random number bet 0-100 : "+num1)

// 8. Generate a random number between 50 and 100 inclusively.
let num2=Math.floor(Math.random()*(100-50)+50)
console.log("Random number bet 50-100 : "+num2)

// 9. Generate a random number between 0 and 255 inclusively.
let num3=Math.floor(Math.random()*250)
console.log("Random number bet 0-250 : "+num3)

// 10. Access the 'JavaScript' string characters using a random number.
let jsString = 'JavaScript';
console.log("String to number conversion : "+Math.floor(Math.random(Number(jsString))*10))

// 11. Use console.log() and escape characters to print the following pattern:
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// 12. Use substr to slice out the phrase because because because from the following sentence:
let aa27="because because because"
console.log("substr method : "+aa27.substr(0,7))