//Array-Used to store multiple values
//Two types of decleration
let array = []
let array1 = Array()
console.log(array)
console.log(array1)

//Each vakue in array stored as indexes
//          0         1         2     3    4

//Array has one property------>length
let arr1 = ["Sonali", "Rajabhau", "Khosle", 26, "Pune"]
console.log(arr1.length)
console.log(arr1.length - 1)


//we perform 4 operations on a non primitive datatype
//Retrieve,update,add,delete

//to retrieve character from string we use str[]

let str = "sonali"
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

let strr = "rajabhaukhosle"
console.log(strr.split(""))

str1 = "sonalirajabhaukhosle"
let str2 = str1.split("")
console.log(str2)

let str3 = str1.split("a")
console.log(str3)

//update array
let arr2 = ["Sonali", "rajabhau", "khosle", "pune", 26]
arr2[0] = "sonu"
console.log(arr2)

arr2[3] = "dhamoni"
console.log(arr2)

arr2[4] = 27
console.log(arr2)

let arr3 = ["I", "am", "learning", "javascript"]
arr3[3] = "playwright"
console.log(arr3)

delete arr3[1]
console.log(arr3)

//delete arr2[1]
//console.log(arr2)

//push()---used to add element at last of array
//let arr2=["Sonu","rajabhau","khosle","dhamoni",27]
arr2.push("sonukhosle@gmail.com")
console.log(arr2)

let arr4 = ["i am sonu"]
arr4.push("Khosle")
console.log(arr4)

//unshift---used to add element in the beginning of array
arr2.unshift("female")
console.log(arr2)

//pop--used to delete last element of array
arr2.pop("sonukhosle@gmail.com")
console.log(arr2)

//shift--used to element array at the first of array
arr2.shift("female")
console.log(arr2)

//splice--
//arr2.splice(0,2)
//console.log(arr2)

arr2.splice(3, 2)
console.log(arr2)

//slice--
let arr5 = ["Sonu", "rajabhau", "khosle", "dhamoni", 27]

let arr7 = arr5.slice(1, 4)
console.log(arr7)

//join--used to convert array into string
let str4 = arr2.join()
console.log(str4)


//sort
let arr6=["5","8","9","1","4","0","2","7","67","000","876"]
let arr8=arr6.sort()
console.log(arr8)

let arr9 = ["apple", "chickoo", "pineapple", "custrad", "banana"]
let arr10=arr9.sort()
console.log(arr10)

let arr13=["5","8","9","1","4","0","2","7","6"]
let arr11=arr13.reverse()
console.log(arr11)

let arr12=arr9.reverse()
console.log(arr12)
console.log(arr9.includes("custrad"))

console.log(arr13.includes("0"))

let num1 = [1, 2, 3]
let num2 = [4, 5, 6]
let num3 = [7, 8, 9]
console.log(num1.concat(num3,num2))

let arr14=["Sonu"]
let arr15=["rajabhau"]
let arr16=["khosle"]
console.log(arr16.concat(arr14,arr15))


//flat--used to convert multiple integreted array into one
let arr17 = [1, 2, 3, [1], [true, false], "string", [4, 5, 6]]
let arr18=arr17.flat()
console.log(arr18)

let arr19 = ["apple", "chickoo", "pineapple",[1,2], "custrad",[true,false], "banana"]
let arr20=arr19.flat()
console.log(arr20)

let arr21 = [1, 2, 33, 44, 55, 66, 431, 34567, 76543, 23, 12, 450, 0]
console.log(Math.max(...arr21))
console.log(Math.min(...arr21))
console.log(arr21.reverse())
console.log(arr21.sort())

let arrr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(i=0;i<arrr1.length;i++){
    console.log(arrr1[i])
}

//add 2 in every element
let arrr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19]
let add2=[]
for(i=0;i<arrr2.length;i++){
    add2.push(arrr2[i]+2)
}
console.log(add2)


let arrr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19]
let array3=[]
for (let i=0;i<arrr3.length;i++){
    array3.push(arrr3[i]*6)
}
console.log(array3)

//let arr2 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// filter elements above 5 and add them in to a array 
let filter5=[]
for(let i=0;i<arr2.length;i++){
    if(arrr2[i]>=5){
filter5.push(arrr2[i])
    }
}
console.log(filter5)

let arrr4 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// filter elements above 7 and add them in to a array 
let filter=[]
for(let i=0;i<arrr4.length;i++){
    if(arrr4[i]>=7){
        filter.push(arrr4[i])
    }
}
console.log(filter)


let multi6=[]
for(let i=0;i<arrr4.length;i++){
    multi6.push(arrr4[i]*8)
}
console.log(multi6)

let arrr5 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let evenarr=[]
let oddarr=[]
for(i=0;i<arrr5.length;i++){
if(arrr5[i]%2===0){
    evenarr.push(arrr5[i])
}
else{oddarr.push(arrr5[i])}
}
console.log(evenarr)
console.log(oddarr)

let names=["sonali","rajabhau","khosle","ganesh","govind"]
let upper=[]
for(let i=0;i<names.length;i++){
    if(names[i].startsWith("g")){
        upper.push(names[i])
    }
}

console.log(upper)

//let names=["sonali","rajabhau","khosle","ganesh","govind"]
let name=[]
for(let i=0;i<names.length;i++){
    if(names[i].endsWith("i")){
        name.push(names[i])
    }
}
console.log(name)

let arrr6 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let sum=0
for (let i= 0;i<arrr6.length;i++){
    sum=sum+arrr6[i]
}
console.log(sum)

let arrr7 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,19]
let revarr = []
for (let i = arrr7[arrr7.length - 1]; i = 0; i--) {
  console.log(arrr7[i])
}
console.log(revarr)

let arrr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// multiple 5 in every element of the array and give me a new array 
let multiple5=[]
for(let i=0;i<arrr8.length;i++){
    multiple5.push(arrr8[i]*5)
}
console.log(multiple5)