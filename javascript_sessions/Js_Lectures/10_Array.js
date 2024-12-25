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

//            0         1        2      3    4
let arr = ["siddhant","arjun","gadakh",26,"7020400749"]
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
console.log(`the length of ${arr[0] } is ${ arr[0].length}`)

// conversion of string to array 

// let str = "siddhant"

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

