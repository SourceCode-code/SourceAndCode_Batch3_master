// when we have to make any decision in js  based on condition
// conditions -->

//if() --
//if else --(ternary opertor)
//else if  --
//switch cases ---

// if()---> when you have a single condition ton check you use if ()

/**
 * 
 * if(condition){
 * out the will be shown here 
 * if condition is met
 * }
 * 
 * 
 */

//--------------------------------------------------------------------------

// check if   the given number is positive interger 

let num = 10

if (num > 0) {
    console.log(`the given number ${num} is positive interger`)
}


//  example 2 --check if   the given number is positive interger or a negtaive interger


// if (num > 0) {
//     console.log(`the given number ${num} is positive interger`)
// }
// if(num<0){
//     console.log(`the given number ${num} is negative interger`)
// }
// // this is not the best the way to check multiple conditions 



//--------------------------------------------------------

console.log("_______________if else()________________________________")

// when you have check 2 condition then you should use if else()
// your condition should be either 

let num1 = -50

//num1>0?console.log(`the given number ${num1} is positive interger`): console.log(`the given number ${num1} is negative interger`)

/**
 * 
 * 
 * if(condition){
 * out the will be shown here 
 * if condition is met
 * }
 * else{
 * the output if first condition is wrong
 * }
 * 
 * 
 * 
 * 
 */
if (num1 > 0) {
    console.log(`the given number ${num1} is positive interger`)
}
else {
    console.log(`the given number ${num1} is negative interger`)
}


// example 2 

//check if the wehater is raining to carry a umberlla 
let israining = false

if (israining === true) {
    console.log("please carry your raincoats and umberlla's ")
}
else {
    console.log("dont carry your rainscoats")
}

console.log("_______________else if ()________________________________")

//else if()----------> when you have more than 2 condition to check you use else if ()

//sytnax
// * if(condition){
// * out the will be shown here 
// * if condition is met
// * }

//elseif (condition 2){
//output of condition 2
//}


// * else{
// *default condition
// * }

//------------------------------------------------


// check whetar the number is positive , negative , zero 

let num3 = 0

if (num3 > 0) {
    console.log(`the given number ${num3} is positive interger`)
}

else if (num3 < 0) {
    console.log(` the number  ${num3} is negative number`)
}

else {
    console.log(` the number  ${num3} is zero`)


}




//-------------------------------------------------------------
//if()----- checks one condition
//if else ()--- checks 2 conditions
//else if ()--> more than 2 


//switch case -->

/**syntax 
 * 
 * switch(true){
 * case1 condition : output
 * case2 condition : output
 * case3 condition : output
 * default :output
 * 
 * }
 */


// check number poostive or negative 

let num4 = -50

switch (true) {
    //case 1 if num >0
    case num4 > 0: console.log("num is positive ")
        break
    case num4 < 0: console.log("num is negaitve ")
        break
    case num4 === 0: console.log("num is neutral ")
        break
    default: console.log("enter correct data")
        break
}


// break -- this is used to terminate your loop 

//-------------------------------------------------------------------

// deveop a program for a it orga to check wheater to do wfh or wfo 

// wfo days -- monday , tuesday , wednesday

//wfh -- thrusday , firday 
// sat , sun 


let day = "monday"

let formatday = day.toLocaleLowerCase()
switch (formatday) {

    case "monday":
    case "tuesday":
    case "wednesday": console.log("you have to go to ofc ")
        break
    case "thrusday":
    case "friday": console.log("WFH")
        break
    case "saturday":
    case "sunday": console.log("holiday ")
        break
    default: console.log("enter correct data ")
}
