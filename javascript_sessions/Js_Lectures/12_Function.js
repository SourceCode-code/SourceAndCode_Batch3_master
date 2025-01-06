//function --> used to make your code reusable 

// let a = 10
// let b = 20

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a % b)
// console.log(a * b)

// let c = 50
// let d = 90

// console.log(c + d)
// console.log(c - d)
// console.log(c / d)
// console.log(c % d)
// console.log(c * d)

// Adavantages -->
/**
 * 1 keeps your code clean and reasuable 
 * 2 it will make your code dynamic 
 * 3 easy to test
 */

function calcuator(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a / b)
    console.log(a % b)
    console.log(a * b)

}

calcuator(10, 50)

calcuator(-50, 20)


/**
 * syntax 
 * 
 * function nameoffunction (parameter){
 * code
 * 
 * }
 */



// -----------------------------------------------

// different type of function 

/**
 * 1 based on parameter and retrun type -- 3 
 * 2 way of writing  -- 3 
 */

// -------------------------------------------------------

// 1 based on paramter and retrun type 

// 1 function without parameter without retrun type 

function fullname() {
    console.log("siddhant arjun gadakh")
}

fullname()

//2 function  with parameter without retrun type 

function myfullname(name) {
    console.log(name)
}

myfullname("siddhant ")

myfullname("vaibhav")

// 3 function with paramter and with retrun type 

// retrun type -- > 


function myname(name) {
    return name
}

let x =myname("siddhant ")
 let vai = myname("vaibhav")


 console.log(x , "is my name")

console.log( x.toUpperCase())



let name= myname("hello")

console.log(name)


function num (v){
 return v*v
}

let num2sq= num(2)
console.log(num2sq)

console.log(num2sq-1)

let nu4 = num(num2sq

)

console.log(nu4)