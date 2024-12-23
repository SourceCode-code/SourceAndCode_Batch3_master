/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(typeof strTen)
console.log(typeof numTen)
console.log(typeof Number(strTen))

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let aa='9.8'
console.log(typeof aa)
console.log(parseFloat(aa))
console.log(Math.ceil(Number(aa)))

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.match("on"))
console.log(word2.match("on"))

// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.match("jargon"))

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
console.log(longSentence.substr(0,"because because because"))

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName="Ashwini", lastName="Kadam", country="India", city="Pune"
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let aa1='10'
console.log(parseInt(aa1))

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
let aa7="eryekfdjsgfdg"
let aa8=100
console.log(Boolean(aa7))
console.log(Boolean(aa8))
console.log("---------------")

// 9. Write three JavaScript statements that provide falsy values.
let aa4=""
let aa5=null
let aa6=0
let aa9
console.log(Boolean(aa9))
console.log(Boolean(aa5))
console.log(Boolean(aa6))
console.log(Boolean(aa4))
console.log("---------------")

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);    //true         
console.log(4 >= 3);    //true         
console.log(4 < 3);           //false  
console.log(4 <= 3);           //false  
console.log(4 == 4);            //true
console.log(4 === 4);           //true
console.log(4 != 4);            //false
console.log(4 !== 4);            //false
console.log(4 != '4');           //false
console.log(4 == '4');           //true
console.log(4 === '4');          //false
console.log("-----------------------")
// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let aa2='python'
let aa3='jargon'
console.log(aa2.length)
console.log(aa3.length)
console.log(aa2.length<6 && aa3.length>7)

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 

console.log("----------------------------------")
console.log(4 > 3 && 10 < 12);  //true
console.log(4 > 3 && 10 > 12);  //false
console.log(4 > 3 || 10 < 12);  //true
console.log(4 > 3 || 10 > 12);  //true
console.log(!(4 > 3));          //false
console.log(!(4 < 3));          //true
console.log(!(false));          //true
console.log(!(4 > 3 && 10 < 12));  //false
console.log(!(4 > 3 && 10 > 12));  //true
console.log(!(4 === '4'));      //true
console.log("---------------")
// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python = 'python'
console.log(dragon.match("on"))
console.log(python.match("on"))

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base=3, height=4;
let area=.5*base*height
console.log("Area of triangle : "+area)

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let a=5, b=6, c=7;
let perimeter=a+b+c;
console.log("Perimeter of triangle : "+perimeter)

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let length=10, width=6;
let area1=length*width;
let perimeter1=2*(length+width)
console.log("Area of rectangle : "+area1)
console.log("Perimeter of rectangle : "+perimeter1)

// 17. Get the radius   calculate the area and circumference of a circle.
let pi=9.8, radius=5;
let area2=pi*radius**2;
let circumference=2*pi*radius;
console.log("Area of circle : "+area2)
console.log("Circumference of circle : "+circumference)

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.

// 19. Compare the slope between two points (2, 2) and (6, 10).

// 20. Compare the slope of the two questions above.

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.
let firstName1="Ashwini", familyName="Kadam Patil"
console.log("First name legth : "+firstName1.length)
console.log("Family name length : "+familyName.length)
console.log(firstName1.length>=7 && familyName.length<=11)

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge=25, yourAge=26;
let diff=myAge-yourAge
console.log("Difference between 2 no's : "+diff)

// 24. Using prompt, when birth year and calculate if they are old enough to drive.
let driveAge=18
driveAge === 18 ? console.log("You can able to drive on road")
    : console.log("You are below 18")
