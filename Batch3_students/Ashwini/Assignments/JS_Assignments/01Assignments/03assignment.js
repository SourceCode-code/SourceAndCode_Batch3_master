// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "Hello World"
console.log(typeof greeting) // string

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
const price = 199.99
console.log(Math.ceil(price)) //200

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name = "Ashwini"
console.log("String length : " + name.length) //7

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let fn = "Ashwini"
let mn = "Tanaji"
let ln = "Kadam"
console.log("Full name : " + fn + " " + mn + " " + ln + " ")
console.log("Full name : " + fn.concat(mn, ln))

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = "Javascript"
console.log("4th index : " + language.indexOf("s"))

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
console.log(Math.floor(Math.random()*(20-0)+1))

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let srt13 = "qwertyuiolkjhggfsdjfgjdvbncxvbxnfdsazxcvbnjkijuytredsfghj\
sdfghjgfdcdujskfhdjkgbxjbvcmvbnmjkhgfcv\
jhgfdcvbbhkfhdkjvmcvbcnkjhy\
jhfvshfdkhigerhgdkfhgkfdjvhfbnm"
console.log(srt13)

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!


// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85
console.log("Round method result : " + Math.round(amount))
console.log("Ceil method result : " + Math.ceil(amount))
console.log("Floor method result : " + Math.floor(amount))


// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote = "Learning JavaScript is awesome!"
console.log("String length : " + quote.length)
console.log("Indexof og 'J' : " + quote.indexOf("J"))

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str = 'Hello,\t World!'
console.log("To escape character : " + str)

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log("Concatenation of both strings : " + str1 + str2)


// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let str3 = "qwertyuiopasdfghjklzxcvbnm"
//console.log("random element : "+Math.random(str3))

//15 write a program to generate a random odd number form 15-150
randomOdd = Math.floor(Math.random()*((150-15)/2+1))*2+15;
console.log("Odd number : "+randomOdd);