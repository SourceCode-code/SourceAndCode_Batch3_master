// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "hello World !";
console.log(greeting)
console.log(typeof greeting)
console.log("---Ans.1---")

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price = 199.99;
console.log(Math.ceil(price))
console.log("---Ans.2---")

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name = "Atharva Vijay Pandit";
console.log(name.length)
console.log("---Ans.3---")

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstName = "Atharva";
let middleName = "Vijay"
let lastName = "Pandit"
console.log(`${firstName} ${middleName} ${lastName}`) // Using template literals
console.log(firstName + " " + middleName + " " + lastName) // Using + operator
console.log("---Ans.4---")
// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = 'Javascript'
console.log(language[4])
console.log("---Ans.5---")

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
let evenRandomNumber = Math.floor(Math.random() * 20) + 1
console.log(evenRandomNumber)
console.log("---Ans.6---")

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let longLiteralString = `this is javascript , it is a quirky language;
we need to see it through a different perspective/`
console.log(longLiteralString)
console.log("---Ans.7---")

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!

let escapeCharacters = `I am learning JavaScript.\nIt's "fun" to learn JavaScript!`
console.log(escapeCharacters)
console.log("---Ans.8---")

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85;
console.log(Math.floor(amount))
console.log(Math.ceil(amount))
console.log(Math.round(amount))
console.log("---Ans.9---")

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote = "Learning Javascript is awesome";
console.log(quote.length);
console.log(quote.indexOf('J'));
console.log("---Ans.9---")

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str = "Hello World!";
console.log(str.replace(/ /g, "\t"));
console.log("---Ans.12---")

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log(str1 + " " + str2)
console.log(`${str1} ${str2}`)
console.log("---Ans.13---")



// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let string = "qwertyuiopasdfghjklzxcvbnm";
let randomIndex = Math.floor(Math.random() * string.length);
console.log(string[randomIndex]);
console.log("---Ans.14---")

//15 write a program to generate a random odd number form 15-150
let min = 15;
let max = 150;
let randomOdd = Math.floor(Math.random() * (max - min)) + min;
if (randomOdd % 2 == 0) {
    randomOdd = randomOdd + 1
}
console.log(randomOdd);
console.log("---Ans.15---")
