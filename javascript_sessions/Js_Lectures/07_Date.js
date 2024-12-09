//Date--> date and time 

//to get time and date in js 
const date = new Date() //year months days 

//getFullYear() ---gets full year in 4 digit (yyyy)

let Getcurrentyear= date.getFullYear()

console.log(Getcurrentyear)//2024

//-----------------------------------------------
//getMonth()--> this method give us month in from of index -->0(janurary) --11 (december)

let currentmonth = date.getMonth()+1

console.log(currentmonth) //11


// if you want to print month in words  --.toLocaleString("langauge",{month:"long"})
// december 
//dec

let str_LOng_month = date.toLocaleString("en-gb",{month:"long"})

console.log(str_LOng_month) //December
let str_short_month = date.toLocaleString("en-gb",{month:"short"})
console.log(str_short_month)//Dec 

// date --> getDate()--> this method is used to get the cuurent date(1-31||1-30)

let getcurrentdate= date.getDate()

console.log(getcurrentdate) //9

//----------------------------------------------------------------

//display the current date in format of date/month/year

console.log(`${getcurrentdate}/${str_short_month}/${Getcurrentyear}`) //9/12/2024