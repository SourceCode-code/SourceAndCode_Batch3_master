// Number --> number is a primitive type of data 

// what is considered as a number in js 

//-intergers -> (-infinty to +infinty)
//-float numbers -> 9.81 , 8.000001, 100.1,-20.1

let age = 25 
const gravity = 9.81
let pi = 3.14 
let num = -200
let num1=-100.1

// how to check the data type of a varaible (type of)

console.log(typeof age) //number
console.log(typeof gravity)//number
console.log(typeof num)//number
console.log(typeof num1)//number

// --------------------------------------------------------------//
// methods of number datatypes

// Math --> : when you use math method you can manipulate the numbers 

//1) Round --> rounds your float number to nearest interger

// if float number is below 0.5  -- rounds down to 0
// if float number is equal or above 0.5 --> add 1 to exisiting number

let num2= 9.76
let num3=2.5
let num4=2.00000001

//syntax 

console.log(Math.round(num2)) //9.76 --> 1

console.log(Math.round(num3)) // 
//3

console.log(Math.round(num4)) // 2

// ceil --> Converts a float number to the nearest highest number

// let num2= 9.76
// let num3=2.5
// let num4=2.1
console.log("ceil method output --------------------")
//synatx
console.log(Math.ceil(num2)) //10

console.log(Math.ceil(num4)) //3

// floor -->  Converts a float number to the nearest lower number 
console.log("floor method output --------------------")

// let num2= 9.76
// let num3=2.5
// let num4=2.1
let num5=9.99999999
//syntax

console.log(Math.floor(num5)) // 9

// min -->  gives you a mininumum form the set of numbers
//syntax
console.log("MIN method output --------------------")
console.log(Math.min(1,2,3,4,5,9,0,10))  //0

// max--> gives you a maxmimum form the set of numbers 
console.log("MAX method output --------------------")
console.log(Math.max(1,2,3,4,5,9,0,10))  //10

