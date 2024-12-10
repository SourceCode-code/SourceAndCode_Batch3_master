//dates
//display date in below format

// dd:mm:yyyy HH:mm (24 hours)
let date=new Date()
let current_date1=date.getDate()
let current_Month1=date.getMonth()
let year1=date.getFullYear()
let time2=date.getMinutes()
let hour=date.getHours()
console.log(`${current_date1}:${current_Month1}:${year1} ${hour}:${time2}`)


// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
let day = date.getDate()
let to_short_month=date.toLocaleString("en-gb",{month:"short"})
let year=date.getFullYear()
let time=date.getHours()
let minute=date.getMinutes()
console.log(`${day}:${to_short_month}:${year} ${time}:${minute}`)


// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
let current_day=date.getDate()
let to_long_month=date.toLocaleString("en-gb",{month:"long"})
let current_year=date.getFullYear()
let current_time=date.getHours()
let current_minute=date.getMinutes()
console.log(`${current_day}:${to_long_month}:${current_year} ${current_time}:${current_minute}`)

// yyyy:mm:DD mm:hh
let current_date=date.getDate()
let current_Month=date.getMonth()
let current_year1=date.getFullYear()
let time1=date.getMinutes()
let hours=date.getHours()
console.log(`${current_year1}:${current_Month}:${current_date} ${time1}:${hours}`)
