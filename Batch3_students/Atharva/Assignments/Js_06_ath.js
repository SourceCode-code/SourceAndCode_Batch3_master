/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
let y = typeof strTen === 'number' ? strTen : Number(strTen)
console.log(y === numTen); 
console.log("----Ans-1----")

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let A = ('9.8')
let B = 10
console.log(parseFloat(A) === B); // false
let C = Math.round(parseFloat(A)) //10
console.log(C === B); // true
console.log("----Ans-2----")


// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
let Result = word1.includes('on') && word2.includes('on')
console.log(Result)
console.log("----Ans-3-----")

// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
let result = sentence.includes('jargon')
console.log(result)
console.log("----Ans-4----")


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
let Word = longSentence.length
//console.log(Word)
let result1 = longSentence.substr(30,25)
console.log(result1)
console.log("----Ans.5-----")

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = 'Joe';
let lastName = 'Delton';
let country = 'USA';
let age = 27
let isMarried = true
let year = 2024
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log( typeof age)
console.log(typeof isMarried)
console.log(typeof year)
console.log("----Ans-6----")


// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let Num ='10'
console.log(parseInt(Num) == 10)
console.log("----Ans-7----")


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
let x = 1 == 1
let Y = "hola" && "hola" == "hola"
let z = 98 > 97 
console.log(x)
console.log(Y)
console.log(z)
console.log("----Ans-8----")


// 9. Write three JavaScript statements that provide falsy values.
let a = 0 == 1
let b = false && false
let c = 0 > 1
console.log(a)
console.log(b)
console.log(c)
console.log("----Ans-9----")


// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3); // true              
console.log(4 >= 3);//true             
console.log(4 < 3); //fasle          
console.log(4 <= 3);//false           
console.log(4 == 4); //true           
console.log(4 === 4); //true         
console.log(4 != 4); //false           
console.log(4 !== 4);//false            
console.log(4 != '4');//false           
console.log(4 == '4');//true          
console.log(4 === '4');//false    
console.log("-----Ans.10-----")    

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let Word1 = "python"
let Word2 = "jargon"
console.log(Word1.length)
console.log(Word2.length)
console.log(Word1.length === Word2.length) 
console.log("-----Ans.11-----")

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12); //true  
console.log(4 > 3 && 10 > 12); //false  
console.log(4 > 3 || 10 < 12); //true  
console.log(4 > 3 || 10 > 12); //true  
console.log(!(4 > 3)); //false         
console.log(!(4 < 3)); //true          
console.log(!(false)); //true          
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true   
console.log("-----Ans.12------")    

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python = 'python' 
let RESULT = !dragon.includes("on") && !python.includes("on")
console.log(RESULT) // false
console.log("-----Ans.13-----")

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base = 5;
let height = 9;
let Area = (.5*base*height);
console.log(Area)
console.log("-----Ans.14-----")

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let a1 = 3;
let b1 = 8;
let c1 = 7;
let perimeterOfTriangle = (a1 + b1 + c1)
console.log(perimeterOfTriangle)
console.log("-----Ans.15-----")

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let x1 = 15;
let y1 = 20;
console.log(2*(x1 + y1))
console.log((x1*y1))
console.log("-----Ans.16-----")

// 17. Get the radius   calculate the area and circumference of a circle.
let radius = 9
console.log(3.14*radius**2)
console.log("-----Answer.17------")

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.
//to calculate the slope : formula is Y= mx + b
let y2= -5
let m = 6
let x2 = -y/m
console.log(x2)
console.log("-----Answer.18------")

// 19. Compare the slope between two points (2, 2) and (6, 10).
let t = 2
let u = 4
let o = 9
let p = 2
let slope = (p-u)/(o-t)
console.log(slope)
console.log("-----Answer.19------")

// 20. Compare the slope of the two questions above.
console.log(m === slope)
console.log("-----Answer.20------")

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.


// 22. Compare the length of your first name and your family name.
let firstname = "atharva";
let lastname = "pandit"
console.log(firstname.length/lastname.length)
console.log("-----Answer.22------")

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 25;
let yourAge = 35;
let diff = yourAge - myAge
console.log(diff)
console.log("-------Answer.23---------")

// 24. Using prompt, when birth year and calculate if they are old enough to drive.
let validAge = 18;
let Age = 17
Age >= validAge ? console.log("You're Old enough to Drive"):console.log("You're not old enough to drive")
console.log("------Ans.24-----------")


/////////////////---------Assignment-06--------\\\\\\\\\\




