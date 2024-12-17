// loops --> in js the loops are used to perform repative tasks
// for -->used 90% of the time 
// while -->used 10% time 


// 1 FOR() Loop --> when your output is defeintive or finite

/** syntax
 * 
 * for(initializtion;condition;increment/drecement operator){
 * 
 * //code 
 * 
 * }
 */

// example 1 --> print form 0 to 10 

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//example 2 --> 20 -- 0
console.log("-------------------------------------------------------------------------")
for (let i = 20; i >= 0; i--) {
    console.log(i)
}

console.log("----------------------example string---------------------------------------------------")


let str = "siddhantertyui"


for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

console.log("----------------------example  table of num---------------------------------------------------")


// print the table of 2 
//output -->
//2X0=0
//2x1=2
//2x10=20

// 2 x 1 ==2
// 2 x 2  ==4
let num = 2
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i}  == ${num * i}`)
}


// ----------------------------------------------------------------------
console.log("----------------------example sqaure---------------------------------------------------")

// print the sqaure of each number untill 25

for (let i = 0; i <= 25; i++) {
    console.log(`${i * i}`)
}

// print the even numbers till 10



for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 0
// 2
// 4
// 6
// 8
// 10


//-------------------------------------------------

console.log(`-------------------odd numbers ------------------------------------`)
// print number  odd uptill 10


for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

//-----------------------------------------------------

// find the count of vowels in the given string 

//a e i o u
console.log(`-------------------vowels ------------------------------------`)
let str1 = "siddhantarjun"
let count = 0

for (let i = 0; i < str1.length; i++) {
    if (str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u") {

        count++
    }

}
console.log(count)


console.log(`-------------------conjucatnes ------------------------------------`)

let count1 = 0


for (let i = 0; i < str1.length; i++) {
    if (str1[i] != "a" || str1[i] != "e" || str1[i] != "i" || str1[i] != "o" || str1[i] != "u") {

        count++
    }

}
console.log(count)


// print the following pattern 

/**
 i        i^2          i^3
 0       0            0
 1       1             1
 2        4            8 
 * 
 * 
 * 
 * 




 */

 for(let i =0;i<=10;i++){
    console.log(`${i}  ${i*i}  ${i*i*i}`)
 }



 // ---------------------------------------------------------

 // use loop and itertate form 0 to 10  and calcuate sum of all even numbers 

let sum =0 //2 
for(let i =0;i<=100;i++){

if(i%2==0){
  sum +=i 
}
}
console.log(sum)

/** */

//   less than <  greater than ---lesss than

// > -- greater than 