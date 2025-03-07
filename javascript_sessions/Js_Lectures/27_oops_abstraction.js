//  abstarction --> this is used to make the code neet and clean and the main purpose is to hide the 
// implementation of details it simplies complicated system



/**
 * 1 simplify the code 
 * 2 make the application easier to use and understand 
 * 3 reduce complexity 
 */ 


// js doesnt have bulit in abstarction 
// howeevr we acheive abstarction through various techinques 

//how 

// you will use class and use public and private keywords to access and implementation
// # --> defines private method 


// example 

class Bike {
//private method
#enterkey(){
    console.log("the key has been successfulyy verifed ")
}
//private method
#startengine(){
    console.log("the user has started the engine")
}
//public 
start(){
    this.#enterkey()
    this.#startengine()
    console.log("the bike has started moving")
}

}


let r1 = new Bike()

r1.start()