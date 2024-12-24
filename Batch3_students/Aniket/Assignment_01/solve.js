let date = new Date()
let curday = date.getDate()
let curmonth = date.getMonth()+1
let longmonth = date.toLocaleString("en-bg",{month:"long"})
let curyear = date.getFullYear()
let curhour = date.getHours()
let curmin = date.getMinutes()
let format = curhour%12
let ampm = curhour>12?"PM":"AM"
console.log(`${curday}/${longmonth}/${curyear} ${format}:${curmin}${ampm}`)
