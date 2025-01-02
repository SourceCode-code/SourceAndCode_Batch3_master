//Array-Used to store multiple values
//Two types of decleration
let  array=[]
let array1=Array()
console.log(array)
console.log(array1)

//Each vakue in array stored as indexes
 //          0         1         2     3    4

 //Array has one property------>length
let arr1=["Sonali","Rajabhau","Khosle",26,"Pune"]
console.log(arr1.length)
console.log(arr1.length-1)


//we perform 4 operations on a non primitive datatype
//Retrieve,update,add,delete

//to retrieve character from string we use str[]

let str="sonali"
console.log(str[3])

//to retrieve element from array we use arr[]

//let arr1=["Sonali","Rajabhau","Khosle",26,"Pune"]
console.log(arr1[1])
console.log(arr1[4])
console.log(arr1[5])

//if we want to retrieve lenth of special word in array
console.log(arr1[1].length)

console.log(`the length of ${arr1[2]} is ${arr1[2].length}`)

console.log(arr1.indexOf(26))

//conversion of string to array
//let str="sonali"
console.log(str.split(""))

let strr="rajabhaukhosle"
console.log(strr.split(""))

str1="sonalirajabhaukhosle"
let str2=str1.split("")
console.log(str2)

let str3=str1.split("a")
console.log(str3)

//update array
let arr2=["Sonali","rajabhau","khosle","pune",26]
arr2[0]="sonu"
console.log(arr2)

arr2[3]="dhamoni"
console.log(arr2)

arr2[4]=27
console.log(arr2)

let arr3=["I","am","learning","javascript"]
arr3[3]="playwright"
console.log(arr3)

delete arr3[1]
console.log(arr3)

delete arr2[1]
console.log(arr2)


