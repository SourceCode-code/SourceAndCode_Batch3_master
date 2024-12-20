/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(typeof Number(strTen))
console.log(typeof numTen)


// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let a1=9.8
console.log(parseFloat(a1)===10)
console.log(Math.round(a1)===10)

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes("on"))
console.log(word2.includes("on"))



// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"))


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
console.log(longSentence.length)



// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName="sonali"
console.log(typeof firstName)

let lastName="khosle"
console.log(typeof lastName)

let country="India"
console.log(typeof country)

let city="Pune"
console.log(typeof city)

let age=25
console.log(typeof age)

let ismarried="no"
console.log(typeof ismarried)

let year=2024
console.log(typeof year)


// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let num=10
console.log(parseInt(num)===10)


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
let num1=3
console.log(Boolean(num1))
let num2=-5
console.log(Boolean(num2))
let name=Boolean("sonali")
console.log(name)



// 9. Write three JavaScript statements that provide falsy values.
let a
console.log(Boolean(a))
let num3=0
console.log(Boolean(num3))
let str=""
console.log(Boolean(str))

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);   //true           
console.log(4 >= 3);  //true          
console.log(4 < 3);  //false         
console.log(4 <= 3); //false            
console.log(4 == 4); //true            
console.log(4 === 4); //true          
console.log(4 != 4);  //false          
console.log(4 !== 4); //false           
console.log(4 != '4'); //false         
console.log(4 == '4');  //true          
console.log(4 === '4'); //false        

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let str1="python"
let str2="jargon"
console.log(str1.length,str2.length)
console.log(str1.length!==str2.length)


// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);  //true 
console.log(4 > 3 && 10 > 12); //false  
console.log(4 > 3 || 10 < 12);  //true
console.log(4 > 3 || 10 > 12); //true 
console.log(!(4 > 3)); //false         
console.log(!(4 < 3));  //true         
console.log(!(false)); //true          
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4'));  //true     

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
console.log(dragon.includes("on"))

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.

// 17. Get the radius   calculate the area and circumference of a circle.

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.

// 19. Compare the slope between two points (2, 2) and (6, 10).

// 20. Compare the slope of the two questions above.

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.
let first_Name="Sonali"
let last_Name="Khosle"
console.log(first_Name.length,last_Name.length)
console.log(first_Name.length==last_Name.length)


// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myage=25
let yourAge=30
console.log(yourAge-myage)

// 24. Using prompt, when birth year and calculate if they are old enough to drive.


