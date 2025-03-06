// encapsulation --> encapsulation is a principle where data  (properties ) and method are bundled together
//in a object or a class , restarting the access to some object component 
// it helps protect the internal state of an object or class and show only nesscary details 

// why 
/**
 * 1 to control the acccess to data 
 * 2 to protect the object or the class  by unauthories access
 * 3 to make your code organised and easy to maintaion
 */


// example 

class Person{
    #age // private variable
constructor(name,age){
    this.name = name 
    this.#age = age
}

getinfo(){
    return `${this.name} is ${this.#age} year old `
}

#isAdult(){
    return this.#age >=18
}

canvote(){
    return this.#isAdult()?"he can vote ":"he cant vote "
}
}


let sid = new Person ("siddhant",26)

console.log(sid) //Person { name: 'siddhant' }

console.log(sid.getinfo())
console.log(sid.canvote())


//inhertance    -->child class inherts parents properties and method 
//abstarction   -->we hide unnessary detials and showing required funcationly (to make user experice easy)
//encapsulation -->restrict accesss to class property and method to proctect the inner state of the class 
//polymorphism  -->












