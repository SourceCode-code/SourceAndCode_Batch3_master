
//Assignment_07____dates

//display date in below format

// dd:mm:yyyy HH:mm (24 hours)
const date = new Date()
let hour = date.getHours()
let min = date.getMinutes()

let ampm = hour>12? "AM":"PM" 

let date1 = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()

console.log(`${date1}/${month}/${year}  ${hour}:${min} ${ampm}`)



// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)


let date2 = date.getDate()


let str_short_month = date.toLocaleString("en-gb",{month:"short"})


let currentyear = date.getFullYear()

console.log(`${date2}/${str_short_month}/${currentyear}`)



// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)

let date3 = date.getDate()

let str_LOng_month = date.toLocaleString("en-gb",{month:"long"})

let year4 = date.getFullYear()

console.log(`${date3}/${str_LOng_month}/${year4} ${hour}:${min}`)



// yyyy:mm:DD mm:hh 

const year5  = date.getFullYear()

const month5 = date.getMonth()+1

const date5 = date.getDate()

console.log(`${year5}/${month5}/${date} ${min}:${hour}`)


