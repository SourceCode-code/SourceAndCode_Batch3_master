// non primitive datatype --> arrays objects 

//array :- a datatype used to store multiple values 

/**
 * how to determine if the datatype is an array 
 * if you see any datatype within [] sqaure bracket its called as array
 *  each value is a comma seprated value 
 * 
 */

// example of array --> 

let array = []
console.log(array)

// how to delecare array 

// 1 directly delacring array 

let array1 = ["hello"]
console.log(array1)

// 2 how to delcare array 

let array2 = Array()
console.log(array2)


let array3 = []
let array4 = Array()
console.log(array3)
console.log(array4)
//----------------------------------------------------------------------
//each value in array is stored in indexes

//             0         1        2      3    4
let arr = ["siddhant", "arjun", "gadakh", 26, "7020400749"]
console.log(arr)


// array has one property --> length 

console.log(arr.length) //5

// we always perform 4 operation on a nonprimitive datatype 

// retrving , deletling , updating, adding 

// how to get any element form array 

//getting element form string
let str = "siddhant"
console.log(str[0])

// getting element form array 

console.log(arr[0])
console.log(arr[1])

// ------------------------ 
console.log(`the length of ${arr[0]} is ${arr[0].length}`)

// conversion of string to array 

// let str = "siddhant"

let strar = str.split("")

console.log(strar)
/**
 * [
  's', 'i', 'd',
  'd', 'h', 'a',
  'n', 't'
]
 */

let str2 = "siddhant arjun gadakh"

let strar2 = str2.split(" ")
console.log(strar2) //[ 'siddhant', 'arjun', 'gadakh' ]

// -----------------------------

let strar3 = str2.split("a")
console.log(strar3)


//-------------------------------------------------------

// let arr = ["siddhant","arjun","gadakh",26,"7020400749"]

// how to update any element in array 

arr[0] = "sid"

console.log(arr) //[ 'sid', 'arjun', 'gadakh', 26, '7020400749' ]

arr[3] = 27


console.log(arr) //[ 'sid', 'arjun', 'gadakh', 27, '7020400749' ]

// ------------------------------- how to delete 

delete arr[4]
console.log(arr)



//------------------------------------------------------------------------

// methods used on array 


//-----------------------------------------------------------------------

//push()--> to add any element in the array at last or end use use push

let arr1 = ["siddhant", "arjun", "gadakh", 26, "7020400749"]

arr1.push("siddhantsource@gmail.com")

console.log(arr1)

/**
 * ['siddhant','arjun','gadakh',26,'7020400749','siddhantsource@gmail.com']
 */

//unshift()--->to add any element in the array at first or start use use unshift

arr1.unshift("male")

console.log(arr1)
/**
 * ['male','siddhant','arjun','gadakh',26,'7020400749','siddhantsource@gmail.com']
 */

//----------------------------------------------------------------------
//delete the element

// pop()---> removes your last element form the array

arr1.pop()

console.log(arr1)

//[ 'male', 'siddhant', 'arjun', 'gadakh', 26, '7020400749' ]

//shift()---> removes the first element from array 

arr1.shift()

console.log(arr1)

//[ 'siddhant', 'arjun', 'gadakh', 26, '7020400749' ]

//splice()----> method used to remove any element form the array 
++
// syntax splice(starting index , number elemnts )


arr1.splice(1, 3)



console.log(arr1)

//slice ()-- method used to remove any element form the array 
//syntax -- slice(starting index , ending index)  --> doesnt include ending index in output

let arr2 = ['male', 'siddhant', 'arjun', 'gadakh', 26, '7020400749', 'siddhantsource@gmail.com']

let cc = arr2.slice(1, 6)

console.log(cc)

//-------------------------------------------------------------
// how to convert array into string 
//join--> used to convert array to string 
//synatx arrayname.join("chacrter to join")
let str3 = arr2.join("-->")


console.log(str3) //male-->siddhant-->arjun-->gadakh-->26-->7020400749-->siddhantsource@gmail.com




// sort()--> if you want to sort any array aplhabaticalyy

let arr4 = ["apple", "chickoo", "pineapple", "custrad", "banana"]


console.log(
  arr4.sort()) //[ 'apple', 'banana', 'chickoo', 'custrad', 'pineapple' ]

let arr5 = ["2", "5", "8", "7", "1", "2", "6", "7", "6", "19", "666"]

console.log(arr5.sort())

// [1,2,......666]


// reverse ()--->   this is used to reveser your array 

console.log(arr4.reverse()) //[ 'pineapple', 'custrad', 'chickoo', 'banana', 'apple' ]

// inculdes --> if  the element is present 

console.log(arr4.includes("banana"))
console.log(arr4.includes("Banana"))


// concat --> this is used to join 2 or more array 

let num1 = [1, 2, 3]
let num2 = [4, 5, 6]
let num3 = [7, 8, 9]

console.log(num1.concat(num2, num3)) //[1, 2, 3, 4, 5,6, 7, 8, 9]

// flat --> used to convert multiple intergated arrays into one 

let arr6 = [1, 2, 3, [1], [true, false], "string", [4, 5, 6]]

console.log(arr6.flat()) //[ 1, 2, 3, 1, true, false, 'string', 4, 5, 6 ]

// find max and min number form the array

let arr7 = [1, 2, 33, 44, 55, 66, 431, 34567, 76543, 23, 12, 450, 0]

// find the largest number form the array 
console.log(Math.max(...arr7)) //76543

// find the smallest number form the array 
console.log((Math.min(...arr7))) //0


//---------------------------------------------------------------------

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < arr8.length; i++) {
  console.log(arr8[i])
}



//---------------------------------------------------------------


let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19]

let added2 = []
// add 2 in every element of this 

for (let i = 0; i < arr9.length; i++) {
  added2.push(arr9[i] + 2)

}

console.log(added2)


//----------------------------------------------------

//let arr9 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// filter elements above 5 and add them in to a array 

let filter5 = []

// let i =5 ;i<=5;i++ 
// console.log()


for (let i = 0; i <= arr9.length; i++) {
  if (arr9[i] >= 5) {
    filter5.push(arr9[i])
  }
}

console.log(filter5)


// [
//   5,  6,  7,  8,  9,
//  10, 11, 12, 13, 14,
//  15
// ]



//--------------------------------------------------------------

//let arr9 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let oddarr = []
let evenarr = []

for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] % 2 === 0) {
    evenarr.push(arr9[i])
  }
  else {
    oddarr.push(arr9[i])
  }
}


console.log(evenarr)
console.log(oddarr)


//----------------------------------------------------


let names = ["siddhant", "arjun", "pritam", "amol", "vaibhav"]

// // for(let i =0 ;i <names.length;i++){
// //   console.log(names[i].toUpperCase())
// // }


// let upper = []


// for(let i =0 ;i <names.length;i++){
//  if(names[i].startsWith("a")){
//   upper.push(names[i])
//  }
// }


// console.log(upper)



//------------------------------------------------------

//let arr9 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let sum = 0


for (let i = 0; i < arr9.length; i++) {
  sum = sum + arr9[i]
}


console.log(sum)


//----------------------------------------------------------

//let arr9 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,19]

// for(let i=15;i<=arr9.length;i--){
//   console.log(arr9[i])
let revarr = []
for (let i = arr9[arr9.length - 1]; i = 0; i--) {
  console.log(arr9[i])
}


//          0 1 2 3 4 5 6 7 8 9
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// multiple 5 in every element of the array and give me a new array 

let table5 = []

for (let i = 0; i < arr10.length; i++) {
  table5.push(arr10[i] * 5)
}


console.log(table5)


// map() --> is used to itearte on every element of the array ( you can perform any operatoin on every element of array )


// let tableof5 = arr10.map((el,index,arr)=>{
//   return  el*5
// })

// console.log(tableof5)

//let arr10 = [1,2,3,4,5,6,7,8,9,10]
let tableof6 = arr10.map((el, index, arr) => {
  return el * 6
})

console.log(tableof6)

//----------------------------------------------------------------------------------

//let arr10 = [1,2,3,4,5,6,7,8,9,10]

// find all the even number and store them in an array 

let evenarray = []
let oddarray = []
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] % 2 == 0) {
    evenarray.push(arr10[i])
  }
  else if (arr10[i] % 2 != 0) {
    oddarray.push(arr10[i])
  }
}

console.log(evenarray) //[ 2, 4, 6, 8, 10 ]
console.log(oddarray) //[ 1, 3, 5, 7, 9 ]


//------------------------------------------------------------------------


//filter()--> this method is used to filter the elements form and array and add it into new element 

let evennumbers = arr10.filter((el, index, arr) => { return el % 2 == 0 })

console.log(evennumbers) //[ 2, 4, 6, 8, 10 ]

let oddnumbers = arr10.filter((el, index, arr) => { return el % 2 != 0 })
console.log(oddnumbers)


//let arr10 = [1,2,3,4,5,6,7,8,9,10]


let great5 = arr10.filter((el, index, arr) => {
  return el >= 5
})



console.log(great5) //[ 5, 6, 7, 8, 9, 10 ]

//-----------------------------------------------------------------


//let arr10 = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < arr10.length; i++) {
  console.log(arr10[i])
}


// forEach()==> a method which is used to perfrom action on array 

// map()--> gives you elements in a new array   { in map we use retrun keyword}
//foreach ==> does not give element in the  new array  { we dont use return keyword }


arr10.forEach((el, index, arr) => {
  console.log(el)
})




//-----------------------------------------------------


// let names = ["siddhant","arjun","pritam","amol","vaibhav"]

names.forEach((el, index, arr) => {
  console.log(el.toUpperCase())
})

/**
SIDDHANT
ARJUN
PRITAM
AMOL
VAIBHAV
 */


let uppername = names.map((el,index,arr)=>{ return el.toUpperCase()})

console.log(uppername) //[ 'SIDDHANT', 'ARJUN', 'PRITAM', 'AMOL', 'VAIBHAV' ]


let aname= names.filter((el,index,arr)=>{return el.startsWith("a")})

console.log(aname)

