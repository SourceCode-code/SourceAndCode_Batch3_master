//Operators--> the symbols used to perfom any action is called operator ---(4-12-24)

//Assignment operator 

//assignment operator --> used to assign  value to any varaiable
//(=)

let a = 5
//let x =10 , y=20
//compund assignment operators-->
//+= --> this adds and assign  x+=y (x=x+y) //30 which is equal to x=x+y
//-= --> this subrtactrs and assign  x-=y //-10 which is equal to  x=x-y

//arthimatic operators--> this operator are used to perfom arthmatic operatorion
// there is a condition for using arthmatic operators

// arthmatic operation are performed on  --> to perform arthematic opertor both of the data type should 
//should be number 

/**
 * + --> addition
 * - --> substarction
 * / --> divide (numerator)
 * * --> multiplication
 * % --> modulus  (denominator value )
 * ** --> exponentiation (power)
 */


console.log(2 + 3)//5 addition
console.log(2 - 3) //1
console.log(2 * 3)//6
console.log(2 / 3)//0.6
console.log(2 % 3)//2
console.log(2 ** 3)//8

//comparsion operators
/**
 * > -- greater than
 * < --less than
 * >= -- greater than equal to
 * <= -- less than equal to
 * ! --> not 
 * == --> simliar
 * === equality 
 */


console.log(5 > 4) //true
console.log(5 < 9)//true
console.log(5 >= 4)//true
console.log(5 <= 9)//true
console.log(5 != 9)//true
console.log(5 == "5") //true
console.log(5 === "5")//false

console.log(3 !== "3") //false -->true
//in comparsion operator when we use 2 sign it only checks the value 
//  but when we use 3 sign it checks the value and datatype 

//logical operators
// AND (&&)

//T && T ==> T
//F && F ==> F
//T && F ==> F
//F && T ==> F
console.log("------------AND---------------------------")
console.log(4 > 3 && 3 < 4) // true 
console.log(4 < 3 && 3 > 4) //false
console.log(4 > 3 && 3 < 1) //false
console.log(4 < 3 && 3 > 1) //false

//OR(||)

// T || T ==> T
// F || F ==>F
// T || F ==>T
//F || T ==> T
console.log("------------OR---------------------------")
console.log(4 > 3 || 3 < 4) // true 
console.log(4 < 3 || 3 > 4) //false
console.log(4 > 3 || 3 < 1) //true
console.log(4 < 3 || 3 > 1) //true

//NOT !

// !T ==> false
//!F==> TRue 
console.log("------------NOT---------------------------")
console.log(!true) //false
console.log(!false) //true

//--------------------------------------------------------
console.log("------------INCREMENT AND DRECEMENT OPERTOR---------------------------")
// per and post increment or decreament operator
// INCREMENT (++)
console.log("--------INCREMENT---------------------")
// INCREMENT (++)

console.log("-------- pre-INCREMENT---------------------")
let num2 = 5
console.log(++num2) //6
console.log(++num2)//7

console.log("--------POST-INCREMENT ---------------------")

let num3 = 5
console.log(num3++) //5
console.log(num3++) //6
console.log(num3) //7

// INCREMENT (++)
console.log("--------DECREMENT---------------------")
// DECREMENT (--)

console.log("-------- pre-DECREMENT---------------------")
let num4 = 5
console.log(--num4) //4
console.log(num4)//4

console.log("--------POST-DECREMENT ---------------------")

let num5 = 5
console.log(num5--) //5
console.log(num5) //4

//ternary operators ---> (either ,,or ) (if--else)

//syntax --> condition 1 ? output to be displayed if condition 1 is true : display output 2 

let num6 = -5

num6 > 0 ? console.log(`the number ${num6} is positive number`)
    : console.log(`the number ${num6} is negative number`)


// another example 

let status = "DSR SENT"

status === "DSR SENT" ? console.log("work done")
    : console.log("marked as absent")