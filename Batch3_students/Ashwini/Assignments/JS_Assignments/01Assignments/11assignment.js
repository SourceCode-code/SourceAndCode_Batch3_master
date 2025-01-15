// 1 based on paramter and retrun type 

// 1 function without parameter without retrun type 

function firstname() {
    console.log("Ashwini")
}

firstname()

function lastname() {
    console.log("Kadam")
}

lastname()

function favname() {
    console.log("Bhoomi")
}

favname()

function sonName(){
    console.log("Om")
}

sonName()

function daughterName(){
    console.log("Aaradhya")
}

daughterName()

console.log("--------------------------------------------")
//2 function  with parameter without retrun type 

function firstName(name) {
    console.log(name)
}

firstName("Ashwini")

firstName("Ashu")

function stateName(state){
    console.log(state)
}

stateName("Maharashtra")
stateName("Delhi")
stateName("Karnataka")

function capitalName(city){
    console.log(city)
}

capitalName("Mumbai")
capitalName("Delhi")
capitalName("Kolkata")
capitalName("Chennai")

console.log("----------------------------------------------")
// 3 function with paramter and with retrun type 

function myname(name) {
    return name
}

let ash = myname("Ashwini")

console.log(ash , "is my name")

console.log(ash.toUpperCase())
//console.log(ash.length())


function nickName(nicname){
    return nicname
}
let name1 = nickName("Bhoomi")
//let ash1 = myname("Bhoomi")

console.log(name1, "is my nick name")
console.log(name1.toUpperCase())

function favName(name){
    return name
}
let nm = favName("Om")
let nm1 = favName("Ovi")
console.log(nm)
console.log(nm.toUpperCase())
console.log(nm1)
console.log(nm1.toUpperCase())