/ // ASSIGNMENT 6 & 7 QUESTIONS 

// // 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
// let strTen = '10';
// let numTen = 10;
// let check = Number(strTen)
// console.log(numTen===check)

// // 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
// let num = 9.8
// let num2 = 10
// console.log(parseFloat(num)===num2) //  false
// console.log(Math.round(9.8)===10) //  true

// // 3. Check if 'on' is found in both 'python' and 'jargon'.
// let word1 = 'python';
// let word2 = 'jargon';
// console.log(word1&&word2.includes("on"))

// // 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
// let sentence = "I hope this course is not full of jargon.";
// console.log(sentence.includes('jargon'))

// // 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// // "You cannot end a sentence with because because because is a conjunction."
// let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
// let check = longSentence.indexOf("because")
// let check2 = longSentence.lastIndexOf("because")
// let final = check2-check+"because".length
// console.log(longSentence.substr(check,final))

// // 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
// let firstName = " shubham"
// console.log(typeof(firstName))
// let lastName = " magdum"
// console.log(typeof(lastName))
// let country = "India"
// console.log(typeof(country))
// let city = "pandharpur"
// console.log(typeof(city))
// let age = 24
// console.log(typeof(age))
// let isMarried = false
// console.log(typeof(isMarried))
// let year= 2024
// console.log(typeof(year))

// // 7. Check if the type of '10' is equal to 10 using `parseInt`.
// let num = "10"
// console.log(parseInt(num)===10)

// // 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
// console.log("A"=="B")
// console.log(false)
// console.log(NaN===NaN)
// console.log("A"!=="B")
// console.log(!false)
// console.log(NaN!==NaN)

// // 9. Write three JavaScript statements that provide falsy values.
// console.log("A"=="B")
// console.log(false)
// console.log(NaN===NaN)

// // 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
// //write the output in the comments 
// console.log(4 > 3);         // true    
// console.log(4 >= 3);        //true   
// console.log(4 < 3);         //flase 
// console.log(4 <= 3);        //flase 
// console.log(4 == 4);        //true 
// console.log(4 === 4);       //true
// console.log(4 != 4);        //false
// console.log(4 !== 4);       // flase
// console.log(4 != '4');      //false
// console.log(4 == '4');      //true
// console.log(4 === '4');     //false

// // 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
// let name1 = 'python'
// let name2 = 'jargon'
// console.log(!name1.length==name2.length)

// // 12. Evaluate the following expressions and confirm with `console.log()`:
// //write the output in the comments 
// console.log(4 > 3 && 10 < 12);   // true
// console.log(4 > 3 && 10 > 12);   // false
// console.log(4 > 3 || 10 < 12);   //true
// console.log(4 > 3 || 10 > 12);   //true
// console.log(!(4 > 3));          // flase
// console.log(!(4 < 3));          //true 
// console.log(!(false));          //true 
// console.log(!(4 > 3 && 10 < 12)); //false
// console.log(!(4 > 3 && 10 > 12)); // true
// console.log(!(4 === '4'));    //true    

// // 13. Check if there is no 'on' in both 'dragon' and 'python'.
// let dragon = 'dragon';
// let word1 = 'python';
// let word2 = 'jargon';
// console.log(!word1&&word2.includes("on"))

// // 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
// let base = 3
// let height = 6
// console.log(.6*base*height)

// // 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
// let a =4
// let b = 4
// let c = 4
// console.log(a+b+c)

// // 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
// let x = 3
// let y = 3
// console.log(3*(x+y))
// console.log((x*y))

// // 17. Get the radius   calculate the area and circumference of a circle.
// let radious  = 7
// console.log(Math.PI*radious**2)

// // 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.\
// formula  Y= mx+b
// let y= -2
//m=2
// let x= -y/m
// console.log(x)

// // 19. Compare the slope between two points (2, 2) and (6, 10).
// let a = 2;
// let b = 2;
// let c = 6;
// let d = 10;
// let slope = (d-b)/(c-a)
// console.log(slope);

// // 20. Compare the slope of the two questions above.
//console.log(m===slope)

// // 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// // 22. Compare the length of your first name and your family name.
// let firstName = "shubham"
// let sirname = "magdum"
// console.log(firstName.length/sirname.length)

// // 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
// let myage = 24
// let yourAge =28
// console.log(yourAge-myage)

// // 24. Using prompt, when birth year and calculate if they are old enough to drive.
