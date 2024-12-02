// // 1. Generate a random number between 1 and 10 (inclusive) and print it.
// // Hint: Use Math.random() and Math.floor() to generate random numbers.
// console.log(Math.floor(Math.random()*11))
// console.log(Math.ceil(Math.random()*10))
// // 2. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
// let num = 5.7;

// // Hint: Rounds up to the nearest integer.
// console.log(Math.ceil(num))
// // Hint: Rounds down to the nearest integer.
// console.log(Math.floor(num))

// // 3. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// // Hint: Each dice roll should return a number between 1 and 6.
// let firstDice = Math.ceil(Math.random()*6)
// let secondDice = Math.ceil(Math.random()*6)
// console.log(firstDice,secondDice)

// // 4. What will be the result of the following code? Explain why.
// let randomVal = Math.random();
// console.log(Math.floor(randomVal * 10) + 5); // 14 because Math.random()*10 it will gives value of 9.99 but in condition we use Math.floor because of that its goes  0 to 9 and then it will add 5 so that is 14 (5-14)
// // write the output and reason in commnets 

// // Hint: Understand how the number is being generated and what range it falls in.

// //5 generate  randomBetween(10, 20) should generate a number between 10 and 20.
// //console.log(randomBetween(10, 20));
// console.log("ans of question no 5",Math.ceil(Math.random()*10+10))

// // 5 generate a random number between 5.5-9.3
// //Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
// console.log((Math.random()*(9.3-5.5)+5.5))

// // 7. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
// let number = 1234.56789;
// console.log((Math.round(number*100))/100)

// // 8. Write a program  that rounds any given number to the nearest multiple of 5.
// // Example:if 28 is given  should return 30, 32 should return 30
// let num1 = 59
// let kk = num1/5
// console.log((Math.round(kk))*5)

// //9 generate random even number upto 50
// let num3 = Math.ceil(Math.random()*25)
// console.log(2*(num3))

// //10 generate random odd number form 30 to 90
// let num4 = Math.ceil(Math.random()*25)
// console.log(2*(num4)+1)

// //11 generate random prime number form 45-200
// let x = Math.round(Math.random()*(20-5)+5)
// let  y = Math.ceil(Math.random()*(9-2)+2)
// console.log("qestion no.11",x/y===0,x)

// //12 write program to generate a 10 digit random mobile number 
// console.log(Math.floor(Math.random()*999999999+9000000000))

// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "Hello World"
console.log(typeof(greeting))


// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price = 199.99
console.log(Math.ceil(price))

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name = "Amol.kantilal Jadhav"
console.log(name.length)

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstName ="Amol"
let MiddleName = "Kantilal"
let lastName= "Jadhav"
console.log(firstName+" "+MiddleName+" "+lastName)
console.log(`${firstName} ${MiddleName} ${lastName}`)

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = 'JavaScript'
console.log(language[4])

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
let even = (Math.ceil(Math.random()*10))
console.log(even*2)
// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let long = "nfodnco\nhdvonvoxc\nv0wjjdonco nocnv0wjsdvnoxjjvbosuh\ndf0pJFPMXVNIUSHF0J\nFEFMLFNOHFEPFLNOH\nHFH0IQRRQJFBIVB9UOFHEOFH9\nUHHOFNLNDAFOIAHFOJ\nPJF0JAOMEFLANFOJGOINKV Z\nXLNOOjggosjojognsoibnlsdno\nngohtongogngohogsor"
console.log(long)

// 8. Write a program that uses escape characters to display the following:
let ttr =  "I am learning JavaScript."
console.log(ttr)
//    It's "fun" to learn JavaScript!
console.log("It\'s \"fun\" to learn JavaScript!")

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85
console.log(Math.floor(amount))
console.log(Math.ceil(amount))
console.log(Math.round(amount))

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote = "Learning JavaScript is awesome!"
console.log(quote.length)
console.log(quote.indexOf('J'))

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str = 'Hello,\t World!'
console.log(str)

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log(str1+str2)
console.log(`${str1} ${str2}`)


// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let string ="qwertyuiopasdfghjklzxcvbnm"
let ranel = Math.round(Math.random()*string.length)
console.log(string[ranel])

//15 write a program to generate a random odd number form 15-150
let odd = Math.ceil(Math.random()*(75-15)+15)
console.log(2*(odd)+1)