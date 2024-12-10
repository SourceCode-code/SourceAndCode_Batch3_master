//Date--> date and time 

//to get time and date in js 
const date = new Date() //year months days 

//getFullYear() ---gets full year in 4 digit (yyyy)

let Getcurrentyear = date.getFullYear()

console.log(Getcurrentyear)//2024

//-----------------------------------------------
//getMonth()--> this method give us month in from of index -->0(janurary) --11 (december)

let currentmonth = date.getMonth() + 1

console.log(currentmonth) //11


// if you want to print month in words  --.toLocaleString("langauge",{month:"long"})
// december 
//dec

let str_LOng_month = date.toLocaleString("en-gb", { month: "long" })

console.log(str_LOng_month) //December
let str_short_month = date.toLocaleString("en-gb", { month: "short" })
console.log(str_short_month)//Dec 

// date --> getDate()--> this method is used to get the cuurent date(1-31||1-30)

let getcurrentdate = date.getDate()

console.log(getcurrentdate) //9

//----------------------------------------------------------------

//display the current date in format of date/month/year

console.log(`${getcurrentdate}/${str_short_month}/${Getcurrentyear}`) //9/12/2024



//dates
//display date in below format

// dd:mm:yyyy HH:mm (24 hours)
// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
// yyyy:mm:DD mm:hh 

//09/12/2024
// 10/12/2024

//dd:mm:yyyy
let day = date.getDate() - 1 //10
let month = date.getMonth() + 1 //12
let year = date.getFullYear() //20204

//           <10  -- 10
let cdate = day < 10 ? `0${day}` : day
let cmonth = month < 10 ? `0${month}` : month

console.log(`${cdate}/${cmonth}/${year}`) //10/12/2024

//---------------------------------------------------alernative 

//.padstart(how many digit or length , element to be added )--> used to fill a string 
//.
let pdate = String(day).padStart(2, 0)

console.log(pdate) //09
let pmonth = String(month).padStart(2, 0)
console.log(pmonth)

//-------------------time -->

let hr = date.getHours()
let min = date.getMinutes()

// display time in 12 hour format  am - pm

let ampm = hr > 12 ? "PM" : "AM"

console.log(ampm) //PM

console.log(`time - ${hr}:${min} ${ampm}`) //time - 21:48 PM

// to get the 12 hour format
let cur12 = hr % 12


//9;56 pm
// to pad the string
let padhr = String(cur12).padStart(2, 0)
let padmin = String(min).padStart(2, 0)
console.log(`time - ${padhr}:${padmin} ${ampm}`)  //time - 09:52 PM



// 13--1//14--2