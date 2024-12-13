//dates
//display date in below format

// dd:mm:yyyy HH:mm (24 hours)
let date=new Date()
let current_date1=date.getDate()
let current_Month1=date.getMonth()+1
let year1=date.getFullYear() 
let time2=date.getMinutes()
let hour=date.getHours()
console.log(`${current_date1}:${current_Month1}:${year1} ${hour}:${time2}`)


// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
let day = date.getDate()
let to_short_month=date.toLocaleString("en-gb",{month:"short"})
let year=date.getFullYear()
let time=date.getHours()
let time3=time%12
let minute=date.getMinutes()
console.log(`${day}:${to_short_month}:${year} ${time3}:${minute}`)


// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
let current_day=date.getDate()
let to_long_month=date.toLocaleString("en-gb",{month:"long"})
let current_year=date.getFullYear()
let current_time=date.getHours()
let time4=current_time%12
let current_minute=date.getMinutes()
console.log(`${current_day}:${to_long_month}:${current_year} ${time4}:${current_minute}`)

// yyyy:mm:DD mm:hh
let current_date=date.getDate()
let current_Month=date.getMonth()+1
let current_year1=date.getFullYear()
let time1=date.getMinutes()
let hours=date.getHours()
let time5=hours%12

console.log(`${current_year1}:${current_Month}:${current_date} ${time1}:${time5}`)

//Question 2: 
//Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
//(e.g., "Monday, 02 October 2024 15:30").
/*let cur_date=date.getDate()
let cur_day=date.getDay()
//let cur_day1=date.toDateString("en-gb",{day:"long"})
let cur_month=date.toLocaleString("en-gb",{month:"long"})
let cur_year=date.getFullYear()
let cur_time=date.getHours()
let cur_minute=date.getMinutes()
console.log(`${cur_day} ${cur_date} ${cur_month} ${cur_year} ${cur_time}:${cur_minute}`)
*/
let cur_day=date.toLocaleString("en-gb",{weekday:"long",day:"2-digit",month:"long",year:"numeric", hour:"2-digit",minute:"2-digit"})
console.log(cur_day)

//(e.g., "Monday, 02 October 2024 3:30 pm").
let cur_date=date.toLocaleString("en-gb",{weekday:"long",day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hourCycle:"h12"})


//Question 3: 
//Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').
//31 -dec
let year_1=new Date(13-12-2024)
let year_2= new Date(31-12-2014)
console.log(year_2-year_1)





//Question 4: 
//Check if a current  year is a leap year.


