//class --> class is more than object, its blue print to create objects and method 

//class --> defined will defined your property and behviour 


//-->
/**
 * object 
 * 
 * let user = {
 * qwer:"qwer"
 * }
 */

// class --> 

/**
 class user {
 //code 
 
 } 

 let person = new user()

 */

//--------------------------------------------->

class details {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

let siddetails = new details("siddhant", "gadakh", 25)

console.log(siddetails)



//----------------------------------------------------

class user {
    constructor(name = "user1", surname = "test1", role = "student") {
        this.name = name
        this.surname = surname
        this.role = role
    }
}
//{ name: user1, surname: test1, role: student }
let d = new user()

console.log(d)

let c = new user("test2", "test3", "admin")
console.log(c)



//-------------------------------------------------------------------------

//--------------------->

class personal_Details {
    constructor(name, surname, role) {
        this.name = name
        this.surname = surname
        this.role = role
    }

    // this is not a function this is a method 
    displayFullname() {
        const fullname = `${this.name} ${this.surname}`
        return fullname
    }

    get GET_role(){
        return this.role
    }

    set Changerole(updaterole){
        this.role=role
    }

    get update_role(){
        return this.updaterole
    }

}


let user1 = new personal_Details("siddhant", "gadakh", "admin")

console.log(user1)
console.log(user1.displayFullname())
console.log(user1.GET_role)//admin

user1.updaterole = "test-user1" //testuser

console.log(user1)
console.log(user1.updaterole)// test-user


//------------------------------------------------

//setter and getter method 

// set keyword 
//get keyword 


// let arr = [1, 2, 3]

// arr.push(4)

// console.log(arr)