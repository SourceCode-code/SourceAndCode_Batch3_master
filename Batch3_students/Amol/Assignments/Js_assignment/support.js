// let date = new Date()
// let curtime = date.getHours()
// // let curday= date.getDate()-2
// // console.log(curday)
// // //let padDate = String(curdate).padStart(2,0)
// // let turDate = curdate<10?`0${curdate}`:curdate
// // console.log(turDate)
// let tenty24 = curtime + 12
// let format = tenty24%12
// let updated = String(format).padStart(2,0)
// let Curmin = date.getMinutes()
// let AMPM = tenty24>12?"PM":"AM"
// console.log(`${updated}:${Curmin} ${AMPM}`)

// Example: "12/07/2022, 10:24:13 PM"
let str = " hello i am learning javascript and currently i am seeing the topic loops"
let STR1 =str.split(" ")
longestWord =""
for(let i=1;i<=STR1.length-1;i++){
 if(STR1[i].length>longestWord.length){
    longestWord=STR1[i]
 }
}
console.log(longestWord)