// function --> functoion is container to make your code more usable / reusable 


// create a function that will give number of count of voules in the string 

function countvowel(string) {
    console.log(string.match(/[AEIOU]/gi).length)
}


countvowel("Ashwini")


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

const callback = (n) => {
    return n ** 2
}


function cube(callback, n) {
    return callback(n) * n
}


console.log(cube(callback, 3))


// return --> when one function return another function it is called as retruring 
/**
 * when out put of one function is another function 
 * 
 * 
 */

// const higherorder = n => {
//     const dosomething = m => {
//         const dowhatever = t => {
//             return 2 * n + 3 * m * t

//         }
//         return dowhatever
//     }
//     return dosomething
// }

// console.log(higherorder(2)(3)(4))


// //setinterval --> if you want a output at a certain interval 
// // example if you want a function to call it self after a certain 



// // function sayHello(){
// //     console.log("hello")
// // }

// // setInterval(sayHello,3000)


// // -- output after every 3 sec hello print 


// //settimeout --> a function which delay the out by given a certain 
// console.log("hello") // 
// function bye() {
//     console.log("goodbye")

// }


// setTimeout(bye, 5000)

// // console.log("thank you")

// function th() {
//     console.log("thank you")


// }

// setTimeout(th, 6000)


// json
// object creation
//sync and async (promsies and callback hell)
// intro to oops 



// setInterval -- setTimeout  -->  advance types of callback functions


let interval = setInterval(() => {
    console.log("this will repeat after 2 sec")
}, 2000)


setTimeout(() => {
    clearInterval(interval)
    console.log("the message has ended")
}, 6000)