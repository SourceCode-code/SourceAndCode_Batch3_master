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
// let str = " hello i am learning javascript and currently i am seeing the topic loops"
// let STR1 =str.split(" ")
// longestWord =""
// for(let i=1;i<=STR1.length-1;i++){
//  if(STR1[i].length>longestWord.length){
//     longestWord=STR1[i]
//  }
// }
// console.log(longestWord)


//$$$$
//$  $
//$$$$

// let array = ["amol","Jadhav",25,9767004310]
// let array1 = Array("amol","Jadhav",25,9767004310)
// console.log(array)
// console.log(array1)

// let str = ["Amol","kantilal","jadhav",24,97600410,true,undefined,null]
// // console.log(str[1]) // retrive
// // str[0]="AMOL"
// // console.log(str) //  update 
// // delete str[0]
// // console.log(str) //  delete
// let kk = str.splice(2,3)
// console.log(kk)
//      #
//     ##
//    ###
//    ####
//    #####
// let start = 1
// for(let i=5;i>=1;i--){
//     console.log(" ".repeat(i)+"#".repeat(start))
//     start+=1.5
// }
 

// let year = 2024
// if(year%4==0){
//     console.log("this is leap lear")
// }
// else{
//     console.log("this is not leap year")
// }
// let date3 = new Date()
// let curYear = date3.getFullYear()+1 //2024
// curYear%4==0||curYear%100!==0&&curYear%400==0?console.log(`${curYear} is a leap year`):console.log(`${curYear} is not leap year`)




// console.log(str[2]) // retrive // [] to find or retrive the values from given string 
// console.log(str.indexOf("Amol")) // using indexOf() you can find index number from the given string or array
// str[0]="AMMOOLL"
// console.log(str) // update method
// delete str[4]
// console.log(str)

 // adding 
 // push  --  adding the value at the end of given array
 //unshift --  adding the value at the start of given array
// str.push("myinfo")
// console.log(str)
// str.unshift("Firstname")
// console.log(str)

// // POP this is use for delete the last value of given array
// str.pop()
// console.log(str)

// // Shift this is use to delete the first element or value of given array

// str.shift()
// console.log(str)
 // splice  --  it is use to adding a value / or delete value
 
//  let str = ["Amol","kantilal","jadhav",24,97600410,true,undefined,null]
//  //Splice = (Starting indexx, number of char)// delete 
//  str.splice(3,3) //  it will modify the given array
// console.log(str)

// Slice = gitve you new array
// let check = str.slice(1,5) // last index not inclusive
// console.log(check)

// let name= "Amol Kantilal Jadhav"
// console.log(name.split(" "))

let arr =["Amol","kantilal","jadhav",24,97600410,true,undefined,null] //length 

// console.log(str.length)
for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i])
}

