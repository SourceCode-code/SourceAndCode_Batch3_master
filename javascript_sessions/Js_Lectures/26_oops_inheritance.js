// oops --> object oriented programing structure 

/**
 * inheritance 
 * abstraction
 * encapsulation 
 * ploymorphism
 */

/**
 * where will i use this 
 * 
 * this concepts helps you created better framework (POM) in any tool
 * ( in interview oops is ont asked details  only theroy defeination is asked )
 */


//-------------------------------------Inheritance---------------------------------------------------

//Inheritance
/**
 * Inheritance in javascript is one class allows other class to inheirt its properties and method called as Inheritance
 * 
 * uses ---> 
 * promtoting code reusability and craeting hierarachiacl relationship between a class
 * 
 * 
 * 
 */


// example 

class Animal{
    constructor(name) {
        this.name= name 
        
    }
    Eat(){
        console.log(`the ${this.name} is eating `)
    }
}

// super keyword --> when you to access the property of a parent in a child class you use super keyword 
// extend --> this keyword is used to define the parent or the class parent that is being inherted 
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed= breed
    }
    Bark(){
        console.log(`the ${this.name} is barking`)
    }
}


const mydog = new Dog("tommy","Husky")

console.log(mydog)

mydog.Bark()
mydog.Eat()

//------------------------------------------------------------------------

class cat extends Animal{

    constructor(name,breed,age){
        super(name)
        this.breed = breed
        this.age=age
    }

    meow(){
        console.log(`the cat is meowing `)
    }
}

const pers = new cat("tom","persion",5)



pers.meow()
pers.Eat()

// * Inheritance in javascript is one class allows other class to inheirt its properties and method called as Inheritance

//overriding  --> when child class updates the inhertated method is called overriding 
//overloading --> when you define multiple function with same name but different parameter it is called overloading 


