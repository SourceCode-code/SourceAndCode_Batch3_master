//dates
//display date in below format

let date = new Date()
let newDate = date.getDate()
let newDate1 = newDate<10?`0${newDate}`:`${newDate}`
let newMonth = date.getMonth()+1
let newMonth1 = String(newMonth).padStart(0,2)
let shortmonth = date.toLocaleString("en-gb",{month:"short"})
let longmonth = date.toLocaleString("en-gb",{month:"long"}) 
let newYear = date.getFullYear()
let newhour = date.getHours()
let newhour1 = newhour%12 
let newhour2 = newhour1<10?`0${newhour1}`:`${newhour1}`
let newmin = date.getMinutes()
let newMin1 = newmin<10?`0${newmin}`:`${newmin}`

// dd:mm:yyyy HH:mm (24 hours)
console.log(`${newDate1}/${newMonth1}/${newYear} ${newhour1}:${newMin1}`)

// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
console.log(`${newDate1}/${shortmonth}/${newYear} ${newhour2}:${newMin1}`)

// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
console.log(`${newDate1}/${longmonth}/${newYear} ${newhour2}:${newMin1}`)

// yyyy:mm:DD mm:hh 
console.log(`${newYear}:${newMonth1}:${newDate1} ${newhour2}:${newMin1}`)