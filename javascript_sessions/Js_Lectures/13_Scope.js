// to declare variable we use (let, const,var )


// let 
let value =1
console.log(value)
value=10// you can update the value when its delecred by let 
console.log(value)
// let is a block scope varaible 

// const
//- once the value is assigned it cant be changed
const q =10
// q=20 
console.log(q)
// const block scope varaible 


// var 
 
var value1 =1
console.log(value1)
value1=10// you can update the value when its delecred by let 
console.log(value1)
// let is a globe scope varaible 

// Globe scope and block scope 

// Globe scope 

//- varaibles delecred outside of any function or block and they are accessable through out the block as well as the page


var x=20 //

function printx(){
    console.log(x) // 20
}
printx()
if(true){
    console.log(x) //20
}

console.log(x) //20


// // block scope --> if varaible is delecred in a block it cannot be accesbile outside the block its called and blockscope or local 
// //scope 

function printy(){
    let y=30
    console.log(y)
}
printy()

function printy1(){
    let y = 50
    console.log(y)
}

printy1()