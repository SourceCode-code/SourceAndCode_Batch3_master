/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
let check = Number(strTen)
console.log(strTen==numTen)
console.log(check)
// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let round=parseFloat('9.8') 
let a=parseFloat==10
console.log(a)
console.log(Math.round(round))

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log(word1 && word2.includes("on"))


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"))


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';


// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.

let firstname="sneha"
let lastname="anap"
let country="india"
let city="sangamner"
let age=25
let ismarried="true"
let year=2024
console.log(firstname)
console.log(lastname)
console.log(country)
console.log(city)
console.log(age)
console.log(ismarried)
console.log(year)
// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let numer="10"
console.log(parseInt(numer)===10)

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log(true)
console.log("string"=="string")
console.log()

// 9. Write three JavaScript statements that provide falsy values.

console.log(false)
console.log(NaN===NaN)
console.log(!4==4)
console.log(".........................................")

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);    //true         
console.log(4 >= 3);         //true    
console.log(4 < 3);     //false  
console.log(4 <= 3);    //false         
console.log(4 == 4);    //true        
console.log(4 === 4);   //true        
console.log(4 != 4);    //false        
console.log(4 !== 4);   //false         
console.log(4 != '4');    //false      
console.log(4 == '4');    // true
console.log(4 === '4');   //false
console.log("====================================")       

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let a1="python"
let a2="jargon"
console.log(!a1.length==a2.length)
// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log("-----------------------------------------------------------")
console.log(4 > 3 && 10 < 12);   //true
console.log(4 > 3 && 10 > 12);   //false
console.log(4 > 3 || 10 < 12);   //true
console.log(4 > 3 || 10 > 12);   //true
console.log(!(4 > 3));          //false
console.log(!(4 < 3));           //true
console.log(!(false));           //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4'));        //true

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python='python';
console.log(!dragon==python.includes("on"))

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base=65
let height=56
console.log(.5*base*height)

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

let a12=24
let b=56
c=54
console.log(a12+b+c)
// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let x=23
let y=34
console.log(2*(x*y))
console.log(x*y)
// 17. Get the radius   calculate the area and circumference of a circle.

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.

// 19. Compare the slope between two points (2, 2) and (6, 10).

// 20. Compare the slope of the two questions above.

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.
let FirstName="sneha"
let FamilyName="anap"
console.log(FirstName.length==FamilyName.length)

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge=26
let yourAge=30
console.log(myAge-yourAge)

// 24. Using prompt, when birth year and calculate if they are old enough to drive.
let validAge=18
let myage=34
myage>validAge?console.log("they are old enough to drive."):("they are not enogh to drive")

