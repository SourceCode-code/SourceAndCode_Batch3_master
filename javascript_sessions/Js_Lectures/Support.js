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

// let arr =["Amol","kantilal","jadhav",24,97600410,true,undefined,null] //length 

// // console.log(str.length)
// for(let i=0;i<=arr.length-1;i++){
//     console.log(arr[i])
// }

// let num = [2,3,5,6,8,9,10,1,4]
// let check = num.sort((a,b)=> a-b)
// console.log(check) // 

// let arr4 = ["apple","chickoo","pineapple","custrad","banana"]
// // console.log(arr4.reverse()) // 
// // 
// reve = [] 
// reve1=[]
// for (let i=arr4.length-1;i>=0;i--){
// reve.push(arr4[i])      //  add the lat element
// reve1.unshift(arr4[i]) //  add the first element
// }
// console.log(reve)
// console.log(reve1)

let arr7 = [1,2,33,44,55,66,431,34567,76543,23,12,450,0]
// let check = Math.max(...arr7)
// console.log(check)
// let check2= Math.min(...arr7)
// console.log(check2)

// using the loops

// let num = []
// let min= 0
// for (let i=0;i<=arr7.length-1;i++){
//     if(arr7[i]>=min){
//        min =  arr7[i]
//     }
// }
// console.log(min)

// let arr = [1,2,3,3,3,4,4,4,5,5,6,7,7,8,8,8,8,9,2,2,3,3,7,1]
// let newArr=[]
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]===8){
//         newArr.push(i)
//     }
// }
// console.log(newArr[0],newArr[newArr.length-1])

// let arr = [1,2,3,3,3,4,4,4,5,5,6,7,7,8,8,8,8,8,9,2,2,3,3,7,1]
// let arra=[]
// for(let i=arr.length-1;i>=0;i--){
//     if(arr[i]===8){
//         arra.push(i)
//         break
//     }
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]===8){
//         arra.push(i)
//         break
//     }
// }
// }
// console.log(arra)
let newche = [[1,2,[3,4],5],[2,3,45],[1,2,3,4,5]]
let ar =newche.flat()

console.log(ar)