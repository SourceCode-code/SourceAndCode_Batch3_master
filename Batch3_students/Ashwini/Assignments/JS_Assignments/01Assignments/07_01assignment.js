// Assignment: JavaScript Date and Time Exercises

/* 
Question 1: 
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 
Also, display the current time in various formats.


dd:mm:yyyy HH:mm (24 hours)
dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
yyyy:mm:DD mm:hh 

*/

let age = 25

 let secondslived = age*(365*24*60*60) //assume this is not a leap year 
console.log(secondslived) //788400000

let assumption = 100
let secondslived2 = assumption*(365*24*60*60) //assume this is not a leap year 
console.log(secondslived2)  //  3153600000

/* 
Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").
(e.g., "Monday, 02 October 2024 3:30 pm").
*/
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
/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').

31 -dec


*/

/* 
Question 4: 
Check if a current  year is a leap year.

*/

