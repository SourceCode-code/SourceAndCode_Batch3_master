// let str1 = " Aniket "
// console.log(str1.length)
// console.log(str1.substring(2,5))

//  let date = new Date()

// let currentMonth = date.getMonth()+1
// console.log(currentMonth)

// let str_LOng_month = date.toLocaleString("en-gb",{month:"long"})

// console.log(str_LOng_month)


// let str_Long_month = date.toLocaleString("en-gb",{month:"long"})
// console.log(str_Long_month)

// let str1_Long_month = date.toLocaleString("en-gb",{month:"short"})
// console.log(str1_Long_month)

//last easy hack to get time in 12 hours without using above method -->

// let date = new Date()

// let ecurtime = date.toLocaleString("en-gb",{day:"2-digit",month:"2-digit",year:"numeric" , hour:"2-digit", minute:"2-digit",second:"2-digit"})
// console.log(ecurtime)

// let curtime = date.toLocaleDateString("en=gb",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h12"})
// console.log(curtime)


// date.toLocaleString("en-gb",{day:"2-digit",month:"2-digit",year:"numeric" ,hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h12"})
// console.log(ecurtime12)

// let num = 20

// if (num > 0 ){
//     console.log(`the given number ${num} is positive interger`)

// }

// let num1 = -20

// if (num > 0){
//     console.log(`the given number ${num} is positive interger`)
// }

// if (num < 0){
//     console.log(`the given number  ${num} is negative interger`)

// }

let str1 = "  "
let str2 = `  `
let str3 = "7038066562"
let str4 = "Aniket"
let str5 = "true"
let str6 = "!@#$%"
let str7 = '   '

console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)
console.log(typeof str4)
console.log(typeof str5)
console.log(typeof str6)
console.log(typeof str7)

// String Basics
// 1) String

let str8 = `Aniket`
console.log(str8.length)

console.log(str8.length-1)
console.log(str8[1])