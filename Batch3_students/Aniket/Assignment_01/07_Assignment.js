//dates
//display date in below format

// dd:mm:yyyy HH:mm (24 hours)

// let date = new Date()

// let curday1 = date.getDate()
// let curmonth1 = date.getMonth()+1
// //let longmonth1 = date.toLocaleString("en-bg",{month:"long"})
// let curyear1 = date.getFullYear()
// let curhour1 = date.getHours()
// let curmin1 = date.getMinutes()
// let format1 = curhour1%12
// let ampm1 = curhour1>12?"PM":"AM"
// console.log(`${curday1}/${curmonth1}/${curyear1} ${format1}:${curmin1}${ampm1}`)





// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
// let date = new Date()
// let curday = date.getDate()
// let curmonth = date.getMonth()+1
// let longmonth = date.toLocaleString("en-bg",{month:"short"})
// let curyear = date.getFullYear()
// let curhour = date.getHours()
// let curmin = date.getMinutes()
// let format = curhour%12
// let ampm = curhour>12?"PM":"AM"
// console.log(`${curday}/${longmonth}/${curyear} ${format}:${curmin}${ampm}`)


// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
// let date = new Date()
// let curday = date.getDate()
// let curmonth = date.getMonth()+1
// let longmonth = date.toLocaleString("en-bg",{month:"long"})
// let curyear = date.getFullYear()
// let curhour = date.getHours()
// let curmin = date.getMinutes()
// let format = curhour%12
// let ampm = curhour>12?"PM":"AM"
// console.log(`${curday}/${longmonth}/${curyear} ${format}:${curmin}${ampm}`)

// yyyy:mm:DD mm:hh 
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let hour = date.getHours()
let min = date.getMonth()
console.log(`${year}/${month}/${date} ${min}:${hour}`)

// completed Assignment

