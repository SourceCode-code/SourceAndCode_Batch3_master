

//Exercises: Level 1

//1 Declare a function fullName and it print out your full name.

function fullname() {
  console.log(`${"Ashwini"} ${"Tanaji"} ${"Kadam"}`)
}
fullname()

//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
  console.log(firstName, lastName)
}
fullName("Ashwini", "Kadam")

//3 Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
  return console.log(a + b);
}
addNumbers(4, 5)

//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  return console.log(length * width)
}
areaOfRectangle(4, 5)

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  return console.log(2 * (length + width))
}
perimeterOfRectangle(4, 5)

//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, heigth) {
  return console.log(length * width * heigth)
}
volumeOfRectPrism(4, 5, 6)

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const pi = 9.18
function areaOfCircle(radius) {
  return console.log(pi * radius * radius)
}
areaOfCircle(5)

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
  return console.log(2 * pi * radius)
}
circumOfCircle(5)

// 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityOfSubstance(mass, volume) {
  return console.log(mass / volume)
}
densityOfSubstance(25, 10)

// 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedOfObject(distance, time) {
  return console.log(distance / time)
}
speedOfObject(200, 20)
// 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const gravity = 9.8
function weightOfSubstance(mass) {
  return console.log(mass * gravity)
}
weightOfSubstance(50)

// 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(celciustemp) {
  return console.log((celciustemp * (9 / 5)) + 32)
}
convertCelsiusToFahrenheit(32)

// 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function bodyMassIndex(weight, height) {
  return console.log(weight / (height * height))
}
bodyMassIndex(50, 153)

if (true) {

}
//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  if (month <= "February" && month >= "May") {
    console.log("Summer season")
  }
  else if (month <= "June" && month >= "September") {
    console.log("Rainy season")
  }
  else if (month <= "October" && month >= "January") {
    console.log("Winter season")
  }
}
checkSeason("January")
checkSeason("February")

// 15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// function findMax(){
//  console.log(findMax(4,6,8))
// }
// findMax()
//findMax(4,6,8)
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0


// Exercises: Level 2

// 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08

// 5 Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

function swapValues(a,b){
let temp=0,  x, y;
temp=x;
x=y;
y=temp;
return console.log(x,y)
}
swapValues(5,6)
// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

function reverseArray([a,b,c,d]){

}

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// 14 Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// 15 Writ a function which generates a randomUserIp.

// 16 Write a function which generates a randomMacAddress

// 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'

function randomHexaNumberGenerator(){
  return console.log(randomHexaNumberGenerator());
}

// 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE

// Exercises: Level 3

// 1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// 2 Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)

// 3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// 4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// 6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// 7 Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// 9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// 10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// 11 Call your function sum, it takes any number of arguments and it returns the sum.

// 12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// 13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// 14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

// 15  Write a function called isPrime, which checks if a number is prime number.

// 16 Write a functions which checks if all items are unique in the array.

// 17 Write a function which checks if all the items of the array are the same data type.

// 18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// 19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// 20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
