//dates
//display date in below format

// dd:mm:yyyy HH:mm (24 hours)
// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
// yyyy:mm:DD mm:hh 

//let date=new Date()
//console.log(date)
// let date1=date.getDate()
// let month=date.getMonth()
// let getcurrentyear=date.getFullYear()
// console.log(`${"let date1"}/${"let str_short"}/${"let getcurrentyear"}`)
// // let_date=date.getDate()
// let_month=date.toLocalString("en-gb",{month:"short"})
// let_year=getcurrentyear()
// console.log(`${let_date}/${let_month}/${let_year}`)
//const dat=new Date()
("=====================================")


let ccdate1=new Date()
let date=(ccdate1.getDate())
let month=(ccdate1.getMonth())
let year=(ccdate1.getFullYear())
let hour=(ccdate1.getHours())
let min=(ccdate1.getMinutes())
console.log(`${date}-${month}-${year} ${hour}:${min}`)
//let ccdate=day<10?`0${day}`:day
//let ccmonth=day<10?`0${day}`:month

// let ccdate11=new Date()
let date1=(ccdate1.getDate())
let longmonth=(ccdate1.toLocaleString("en-gb"),{month:"long"})
let year1=(ccdate1.getFullYear())
let time1=ccdate1.getHours()
let time=time%12
let hour1=(ccdate1.getHours())

let min1=(ccdate1.getMinutes())
console.log(`${ccdate1}-${longmonth}-${year1} ${time1}:${time}`)


