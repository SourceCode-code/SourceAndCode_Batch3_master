// function --> functoion is container to make your code more usable / reusable 


// create a function that will give number of count of voules in the string 

function countvowel(string){
console.log(string.match(/[AEIOU]/gi).length)
}


countvowel("Siddhant")


// high order --> function which take other function as a parameter 

// 1 callback function --> when ever a function takes other function as a parameter it is called as call back function


/**
 * function one(number){
 * number ++
 * }
 * 
 * function two(one()){
 * console.log(one++)
 * }
 * 
 * 
 * 
 * 
 */

const  callback = (n)=>{
    return n**2
}


function cube (callback,n){
    return callback(n)*n
}


console.log(cube(callback,3))


// return
//setinterval 
//settimeout
