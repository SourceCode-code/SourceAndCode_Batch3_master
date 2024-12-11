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
let firstName="Sonali"
console.log(typeof(firstName))

let myName="Sonali"
console.log(typeof(myName))

let age=25
console.log(typeof(age))

//Mathods o number datatypes

//Math=With the help of math we can manipulate the numbers

//1.Round= round your float no to nearest no.

//0-0.4=0
//0.5-0.9=1
//Syntax
//console.log(Math.round())
//Examples

let a=6.7
console.log(Math.round(a))

let x=4.294
console.log(Math.round(x))

//ceil=gives the nearest highest no.
//syntax
//console.log(Math.ceil())

let y=5.78
console.log(Math.ceil(y))

//floor=gives the nearest lowest no.
//syntax
//console.log(Math.floor())

let z=5.78
console.log(Math.floor(z))

//max=gives the maximum value between all values
console.log(Math.max(3,8,4,0,9,6))

//min=gives the minimum value between all values
console.log(Math.min(3,8,4,0,9,6))

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






