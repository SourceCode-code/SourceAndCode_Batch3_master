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

let x = myname("siddhant ")
let vai = myname("vaibhav")


console.log(x, "is my name")

console.log(x.toUpperCase())



let name = myname("hello")

console.log(name)


function num(v) {
    return v * v
}

let pri = num(5)
console.log(pri)


//----------------------------------------------------------------------------------------


// way of writing --> 

//1 delecrative type --> in this function you name or delecare thats why its called a delecrative function

function fullnamedeclare(firstname, middlename, lastname) {
    console.log(`my full name is ${firstname} ${middlename} ${lastname}`)
}

fullnamedeclare("sid", "arjun", "gadakh")



// 2 expression type --> because this expression is stored in a varaible so its called expression type function 

let fullname1 = function (firstname, middlename, lastname) {
    return `my full name is ${firstname} ${middlename} ${lastname}`
}

console.log(fullname1("sid", "arjun", "gadakh"))

//3  arrow type function -- because we use arrow instead writing a function its called arrow type function


let fullname2 = (firstname, middlename, lastname) => {
    return `my full name is ${firstname} ${middlename} ${lastname}`
}

let aa = ()=>{
    console.log("hello")
}

aa()


//------------------------------------------------------------------------------------------------------------------


// create function to print the numbers untill given number 

// 0-10

// for(let i=0;i<=10;i++){
//     console.log(i)
// }


// function printnumber(number){
//     for(let i=0;i<=number;i++){
//         console.log(i)
//     }
// }


// printnumber(10)
// printnumber(5)


// create a function to print even number till given 

function printeven (number){

for(let i=0;i<=number;i++){
    if(i%2===0){
        console.log(i)
    }
}
}
console.log("------------------------------------------")
//----------------------------------------------------

let printevennum =(num)=>{
    for(let i=0;i<=num;i++){
        if(i%2===0){
            console.log(i)
        }
    }
}

printevennum(5)
