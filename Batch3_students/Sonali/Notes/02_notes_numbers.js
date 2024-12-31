//Datatypes
//There are two types of datatypes
//Primitive datatype= primitive datatypes are predefined and it is unmutable datatypes(we cannot change it)
/**Examples of primitive datatypes
 * 1.Numbers
 * 2.String
 * 3.Null
 * 4.Undefinied
 * 5.Boolean
*/
//Non-Primitive datatype= Non-primitive datatypes are not predefined and it is mutable datatypes(we can change it)
/**
 * 1.Arrays
 * 2.Objects
 */

//1.Numbers= It includes all integers (+ve and -ve), floating values

//Typeof operator
//This operator is used to check the datatype of given example
//console.log(typeof())
let firstName = "Sonali"
console.log(typeof (firstName))

let myName = "Sonali"
console.log(typeof (myName))

let age = 25
console.log(typeof (age))

//Mathods o number datatypes

//Math=With the help of math we can manipulate the numbers

//1.Round= round your float no to nearest no.

//0-0.4=0
//0.5-0.9=1
//Syntax
//console.log(Math.round())
//Examples

let a = 6.7
console.log(Math.round(a))

let x = 4.294
console.log(Math.round(x))

//ceil=gives the nearest highest no.
//syntax
//console.log(Math.ceil())

let y = 5.78
console.log(Math.ceil(y))

//floor=gives the nearest lowest no.
//syntax
//console.log(Math.floor())

let z = 5.78
console.log(Math.floor(z))

//max=gives the maximum value between all values
console.log(Math.max(3, 8, 4, 0, 9, 6))

//min=gives the minimum value between all values
let aa=(Math.min(3, 8, 4, 0, 9, 6))
console.log(aa)

let str7 = "siddhant"  //8

// how to check length of a string 

console.log(str7.length)


// s  i  d  d  h  a  n  t 
// 0  1  2  3  4  5  6  7 8 

// srting stores the variables in indexes

console.log(str7.length - 1)  // is always the last index 

// to retrive any charcter 

console.log(str7[1]) //i

console.log(str7[str7.length - 1]) //t

console.log(str7)

// substr--> used to extract the variables and store them in another varaible 
//syntax string.substr(startaingindex,number ofcharacters)
let str25 = "SiddhantArjunGadakh"

let newstr1 = str25.substr(0, 3)

console.log(newstr1) //Sid

//substring-->used to extract the variables and store them in another varaible

// sytnax
//string.substring(staringindex,endingindex) --> this will not include your ending index in the outputlet newstr1=str25.substr(0,8)


let newstr2 = str25.substring(0, 3)

console.log(newstr2) //Siddhant



//-----------------------------------------

//trim trimstart trimend

let str26 = " hello "

console.log(str26.length)//7

//trim --> to remove empty space form both start and end we use trim method 

console.log(str26.trim().length) //5
console.log(str26.trimStart().length)//6

console.log(str26.trimEnd().length)//6



let date = new Date()
let current_day = date.getDate()
let current_month = date.getMonth() + 1
let long_Month = date.toLocaleString("en-gb", { month: "long" })
let short_Month = date.toLocaleString("en-gb", { month: "short" })
let current_year = date.getFullYear()
let time = date.getHours()
let ampm = time > 12 ? "PM" : "AM"

let time1 = time % 12
let minute = date.getMinutes()
let sec = date.getSeconds()

console.log(`${current_day}/${current_month}/${short_Month}/${long_Month}/${current_year},${time1}:${minute}:${sec} ${ampm}`)


let a1 = 45677.566
console.log(typeof a1)

a2 = "Sonali"
console.log(typeof a2)

console.log(Math.round(a1))

let a3 = 6789.756
console.log(Math.round(a3))

console.log(Math.ceil(a3))

console.log(Math.ceil(a1))

let a4 = 24.37
console.log(Math.ceil(a4))

console.log(Math.floor(a4))
console.log(Math.floor(a1))

let a5 = 25
console.log(Math.floor(Math.random(a5)))

//1) generate a random dice roll simulation

// 1---6  //
//lowest 1 -->6

console.log(Math.ceil(Math.random() * 6))

//generate a random number from (0-10) exculeisly  0 -->10
console.log(Math.floor(Math.random() * 10))
//9 generate random even number upto 50
console.log(Math.floor(Math.random() * 25) * 2)
//10 generate random odd number form 30 to 90
let a6 = (Math.floor(Math.random() * 30) + 25 * 2 + 1)
console.log(a6)

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let first_Name = "Soanli"
let Middle_Name = "Rajabhau"
let Last_Name = "Khosle"

console.log(first_Name + " " + Last_Name + " " + Middle_Name)
console.log(`My name is ${first_Name} ${Middle_Name} ${Last_Name}`)
console.log(firstName.concat(Middle_Name, Last_Name))

// 1. Generate a random number between 1 and 10 (inclusive) and print it.
console.log(Math.ceil(Math.random()*10))

// 3. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
console.log(Math.ceil(Math.random()*6),Math.ceil(Math.random()*6))
