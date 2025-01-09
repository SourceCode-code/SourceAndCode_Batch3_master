//Datatypes -----------------------------------------------------------------(04-12-24)

// booleans:- the values in js which are called as true and false are called as boolean 


// console.log(5==6)

//true values :--->
//1 all non empty string are considered as true 

let str=Boolean("hello")
console.log(str) //true

//2 all the numbers are considered as true (postive number and negative number )expect zero 

let num=Boolean(42)
console.log(num) //true


//false value :-->
//1 an empty string is a false value 
//2 zero number is a false value 
//3 undefined is a false 
//4 null is also a false value 
//5 NAN false value 
let a
console.log(Boolean(a)) //false
let n=Boolean(null)
console.log(n) //false




