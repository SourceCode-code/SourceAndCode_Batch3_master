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

// ---------------- time zone --
// how to set a date 

// last easy hack to get time in 12 hours without using above method -->

// time formating 

//

//(9:11 pm) --12 format -->  (21:12) -- 24 hours format 

let hrs= date.getHours()
let mins= date.getMinutes()

console.log(`${hrs}:${min}`)

//------------------------------------------

let findamorpm= hrs>12?"PM":"AM"


console.log(`${hrs}:${min} ${findamorpm}`) //21:14 PM


let mewhr = hrs%12

console.log(`${mewhr}:${min} ${findamorpm}`) //9:16 PM 

// 
let paddinghr = String(mewhr).padStart(2,0)

let paddingmin = String(min).padStart(2,0)


console.log(`${paddinghr}:${paddingmin} ${findamorpm}`) //--09:18 PM





//-------------------------------------------------------------------------------------(11-12-24)


// last easy hack to get time in 12 hours without using above method -->

let ecurtime= date.toLocaleString("en-gb",{day:"2-digit",month:"2-digit",year:"numeric" , hour:"2-digit",minute:"2-digit",second:"2-digit"})
//11/12/2024
// 11/12/2024, 21:21:46
console.log(ecurtime)
//11/12/2024, 09:25:39 pm
let ecurtime12= date.toLocaleString("en-gb",{day:"2-digit",month:"2-digit",year:"numeric" ,hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h12"})
console.log(ecurtime12)



// //----------------------------------------------------------------------------------
// //set date --> this f7unction is used to manipulate the date 
 
// let manipulatedate = new Date()
// // it gives us cuurent year 
// let y1 = manipulatedate.getFullYear() //2024
// // set function modifies your acutal date object 
// let y2= manipulatedate.setFullYear(y1 +5)
// // shows output of +5 always 
// console.log(manipulatedate.getFullYear()) //2025



// // manuplates the month 

// let curmonth = manipulatedate.getMonth()+1
// console.log(curmonth)  //12

// // ------------------------

// let manipulatemonth = manipulatedate.setMonth((curmonth+1)-6)

// // (curmonth+1) //-- 1 --12



// console.log(manipulatedate.getMonth()) //7

// //-------------------------------------------------------

// //date -------------------->


// let curdate = manipulatedate.getDate()
// console.log(curdate) //11

// //set date -- >will manipluate the date 
// let newdate = manipulatedate.setDate(curdate +4) //11

// console.log(newdate)

// console.log(manipulatedate.getDate()) // 15

//to manipulate month --> setMonth()
//to manipluate date --> setDate()
//to manipluate year --> setYear()

console.log("------------------------------------------")
let ccdate = new Date()


let todate= ccdate.getDate() //11
let tomonth = ccdate.getMonth()
let toyear= ccdate.getFullYear()

console.log(`${todate}/${tomonth}/${toyear}`)

//------------------------------------------------------


//to manipulate month --> setMonth() --
//to manipluate date --> setDate()
//to manipluate year --> setYear()



let newdate2 = ccdate.setDate(todate+2)

console.log(`${ccdate.getDate()}/${tomonth}/${toyear}`)//16/11/2024

let currentdate = ccdate.getDate() //16

console.log(currentdate)



