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
console.log( array)

// how to delecare array 

// 1 directly delacring array 

let array1 =["hello"]
 console.log(array1)

// 2 how to delcare array 

let array2 = Array()
console.log(array2)


let array3 =  []
let array4 = Array()
console.log(array3)
console.log(array4)
//----------------------------------------------------------------------
//each value in array is stored in indexes

//             0         1        2      3    4
let arr = ["siddhant","arjun","gadakh",26,"7020400749"]
console.log(arr) //


// array has one property --> length 

console.log(arr.length) //5

// we always perform 4 operation on a nonprimitive datatype 

// retrving , deletling , updating, adding 

// how to get any element form array 

//getting element form string
let str = "siddhant"
console.log(str[0]) //  

// getting element form array 

console.log(arr[0])
console.log(arr[1])

// ------------------------ 
console.log(`the length of ${arr[0] } is ${ arr[0].length}`)

// conversion of string to array 

// let str = "siddhant"
let name = "amol Kantilal Jadhav"
let strar= str.split("")

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

arr[3]=27


console.log(arr) //[ 'sid', 'arjun', 'gadakh', 27, '7020400749' ]

// ------------------------------- how to delete 

delete arr[4]
console.log(arr)



//------------------------------------------------------------------------

// methods used on array 


//-----------------------------------------------------------------------

//push()--> to add any element in the array at last or end use use push

let arr1 = ["siddhant","arjun","gadakh",26,"7020400749"]

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

// syntax splice(starting index , number elemnts ) // substr

arr1.splice(1,3)



console.log(arr1)

//slice ()-- method used to remove any element form the array 
//syntax -- slice(starting index , ending index)  --> doesnt include ending index in output

let arr2 =['male','siddhant','arjun','gadakh',26,'7020400749','siddhantsource@gmail.com']

let cc =arr2.slice(1,6) // not including 

console.log(cc)

//-------------------------------------------------------------
 // how to convert array into string 
//join--> used to convert array to string 
//synatx arrayname.join("chacrter to join")
 let str3=arr2.join("-->")

 console.log( str3) //male-->siddhant-->arjun-->gadakh-->26-->7020400749-->siddhantsource@gmail.com


