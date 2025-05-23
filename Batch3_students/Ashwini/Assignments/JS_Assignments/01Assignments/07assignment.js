//dates
//display date in below format

// dd:mm:yyyy HH:mm (24 hours)
// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
// yyyy:mm:DD mm:hh

let date=new Date()

let currentYear=date.getFullYear()
console.log("Current year : "+currentYear)

let currentMonth=date.getMonth()+1
console.log("Current month : "+currentMonth)

let strLongMonth=date.toLocaleString("en-gb",{month:"long"})
console.log("Current long month : "+strLongMonth)

let strShortMonth=date.toLocaleString("en-gb",{month:"short"})
console.log("Current short month : "+strShortMonth)

let currentDate=date.getDate()
console.log("Today's date : "+currentDate)

//let currentTime=date.getTime()
//console.log("Current time : "+currentTime)

let currentHours=date.getHours()
console.log("Current hours : "+currentHours)

let currentMins=date.getMinutes()
console.log("Current mins : "+currentMins)

//dd:mm:yyyy HH:mm (24 hours)

console.log("Current date : "+ `${currentDate}:${currentMonth}:${currentYear} ${currentHours}:${currentMins}`)

// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)

console.log("Current date : "+ `${currentDate} ${strShortMonth} ${currentYear} ${currentHours}:${currentMins}`)

//dd:mm:yyyy HH:mm (12 hours) // (month should be like october)

console.log("Current date : "+ `${currentDate} ${strLongMonth} ${currentYear} ${currentHours}:${currentMins}`)

//yyyy:mm:DD mm:hh

console.log("Current date in reverse format : "+ `${currentYear}:${currentMonth}:${currentDate} ${currentMins}:${currentHours}`)

//console.log(date.getUTCDay())
//console.log(date.getDay())

