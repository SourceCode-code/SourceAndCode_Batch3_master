// let str1 = " Aniket "
// console.log(str1.length)
// console.log(str1.substring(2,5))

let date = new Date()

let currentMonth = date.getMonth()+1
console.log(currentMonth)

// let str_LOng_month = date.toLocaleString("en-gb",{month:"long"})

// console.log(str_LOng_month)


let str_Long_month = date.toLocaleString("en-gb",{month:"long"})
console.log(str_Long_month)

let str1_Long_month = date.toLocaleString("en-gb",{month:"short"})
console.log(str1_Long_month)