//Question from Assignment 7\\
let date  = new Date()
let date1 = date.getDate()
let Date1 = date1<10?`0${date1}`:`${date1}`
let Year = date.getFullYear()
let month = date.getMonth()+1
let month1 = String(month).padStart(0,2)
let shortmonth = date.toLocaleString("en-gb",{month:"short"})
let longmonth = date.toLocaleString("en-gb",{month:"long"})
let hour = date.getHours()
let hour1 = hour%12 
let hour2 = hour1<10?`0${hour1}`:`${hour1}`
let min = date.getMinutes()
let min1 = min<10?`0${min}`:`${min}`

// dd:mm:yyyy HH:mm (24 hours)

console.log(`${Date1}:${month1}:${Year}${hour1}:${min1}`)
// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
console.log(`${Date1}:${shortmonth}:${Year} ${hour2}:${min1}`)
// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
console.log(`${Date1}:${longmonth}:${Year} ${hour2}:${min1}`)
// yyyy:mm:DD mm:hh 
console.log(`${Year}:${month1}:${Date1} ${hour2}:${min1}`)

console.log("-----Ans-1-----")




// Question 2: 
// Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
// (e.g., "Monday, 02 October 2024 15:30").


// (e.g., "Monday, 02 October 2024 3:30 pm").
let date2 = new Date()
let day = date2.toLocaleString("en-gb",{weekday:"long"})
let day1 = date2.getDate()
let day2 = day1<10?`0${day1}`:`${day1}`
let Month = date2.getMonth()+1
let Month1 = String(Month).padStart(0,2)
let month3 = date2.toLocaleString("en-gb",{month:"long"})
let year = date2.getFullYear()
let Hour = date2.getHours()
let Hour1 = Hour%12
let Min = date.getMinutes()
let ampm = Hour > 12 ? "PM" : "AM"
console.log(`${day}, ${day2} ${month3} ${year} ${Hour}:${Min} ${ampm}`)
console.log("-------Ans.2------------")




// Question 3: 
// Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').

// 31 -dec

let today = new Date();

let targetDate = new Date("2024-12-31")

let difference = targetDate - today;

let daysLeft = Math.ceil(difference /( 1000 * 60 *60 *24) )

console.log(`The total Days left until 31 December are : ${daysLeft}`)
console.log("------Ans.3----------")
/* 
Question 4: 
Check if a current  year is a leap year.
*/
let Year1 = new Date();
let Cur2024 = Year1.getFullYear();
let BooleanCheck = (Cur2024%4 === 0 && Cur2024%100 != 0 || Cur2024%400===0);
let LeapYearCheck = (leapyear = BooleanCheck ? `2024 is a leap year` : `Year 2024 is not a leap year`);
console.log(LeapYearCheck);
console.log("-------------Answer.4-----------------")


