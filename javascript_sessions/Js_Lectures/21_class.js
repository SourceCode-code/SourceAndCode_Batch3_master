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

    get GET_role() {
        return this.role
    } // role --> current 

    set Changerole(updaterole) {
        this.role = role
    } // upadate update role -->

    get update_role() {
        return this.updaterole
    } // upadate role 

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


/**
 * 
 * 
 * {
 * name:"fghj",
 * lastbame:"fghj",
 * role:admin
 * upadterole:testuser
 * }
 */


//---------------------------------------------------------------

// method created in class using default way and by get and set are applicable on instance 

//static --> this keyword is used to create a method which is applicable on class itself 

class info {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    get fullname() {
        const fullname = `${this.name} ${this.surname}`
        return fullname
    }

   static  showdate() {
        let date = new Date()
        let currentdate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        return currentdate
    }

}


let sid1 = new info("sid", "gadakh")


console.log(sid1.fullname)

console.log(info.showdate())

//-----------------------------------------------------------------

//sync and async -->

console.log("fghjkl")
console.log("jhgfdcfvgh")
console.log("fghjkl")
console.log("jhgfdcfvgh")


// js --> synchorous -->


// async ---> ( playwright , cypress )---> async 


//async --> sync (promises /// async await // callback hell)

//promises --- cypress
// // async await  -- playwright 