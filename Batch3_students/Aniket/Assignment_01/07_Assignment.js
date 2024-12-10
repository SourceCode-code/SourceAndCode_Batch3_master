//dates
//display date in below format

// dd:mm:yyyy HH:mm (24 hours)

let date = new Date()

let str = `${date1}:${month}:${year} ${hours}:${min}`; 

let date1 =date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()
let hours = date.getHours()
let min = date.getMinutes()

console.log(str)

// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
// yyyy:mm:DD mm:hh 



