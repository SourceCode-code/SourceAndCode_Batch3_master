// how create object 


let user = {
    name: "siddhant",
    surname: "gadakh",
    age: 25
}

// method to create object

//1 object literal -->

/**
 * let user = {
    name: "siddhant",
    surname: "gadakh",
    age: 25
}

let user2 ={
 name: "amol",
    surname: "jhadav",
    age: 25
}
 */

//function constrcutor --> we  create object with functions 

function Details(name,surname,age){
    this.name=name
    this.surname=surname
    this.age=age
}


let siddhantdetails = new Details("sid","gadakh",25)
let vaibhav = new Details ("vaibhav","suryawashi",28)

console.log(siddhantdetails)
console.log(vaibhav)

// this keyword --> this keyword is used to refer to current context


//factory functions ---> 

function user2 (name,surname,age){
    return{
        name,
        surname,
        age
    }
}


let siddetails = new user2("sid1","gadakh1",25)
console.log(siddetails)

//---------------------------------------------------------------

// factory functions --> 

function Book(title,author,year){
    return {
        title,author,year
    }
}

let atomichabbit = new Book("atomic habbits ","robert","2017")

console.log(atomichabbit)

//---------------------------------------------------

//----------------------------------------------------------------------------------

//es6 --> class

//oops -->object orenited programing

// hertiance  --> 
// abstraction  -->
//encapsulation -->
//polymrophsim -->
