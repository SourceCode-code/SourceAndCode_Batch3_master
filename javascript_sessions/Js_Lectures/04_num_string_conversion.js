// conversion form a number to string and vice versa 

//example

console.log(100+"200") //100200
console.log("200"+100)//200100

// how to convert string into number 

let x2="100"
//parseint--> 
//syntax 
//parseInt(number in string)
console.log( parseInt(x2)) //12.4-->12


let x3="100.345"

console.log(parseFloat(x3))

//simple solution 

// USING NUMBER 

Number(x3) //

// now conversion number to string

//.tostring

let phno=7020400749

console.log(typeof phno.toString()) //string

//
console.log( typeof String(phno))


let num2=55555555

console.log(typeof num2)

let str3= String(num2)

console.log( typeof str3)