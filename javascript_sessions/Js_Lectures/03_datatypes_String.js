// datatypes in js 

// primitive  --> primtive are predefiend they are im mutable  (number ,string)
// non primitive --> nonprimtive are not  predefiend they are  mutable(array,object)


//1 string--> string is a sequence of charcter that can be idenfied by doublequotes(""),single qutoes(''),backticks(``)

let str = ""               //string 
let str1 = "hello " //sgtring
let str3 = '724568752'  // string // 
let str4 = `!@#$%` // string
let str5 = 'true' //string
let str6 = "                "//string
console.log(typeof str)
console.log(typeof str1)

console.log(typeof str3)
console.log(typeof str4)
console.log(typeof str5)
console.log(typeof str6)


let num = 8567

// string basics -->
// length -->
let str7 = "siddhant"  //8

// how to check length of a string 

console.log(str7.length)


// s  i  d  d  h  a  n  t 
// 0  1  2  3  4  5  6  7 8 

// srting stores the variables in indexes

console.log(str7.length - 1)  // is always the last index 

// to retrive any charcter 

console.log(str7[1]) //i

console.log(str7[str7.length - 1]) //t

console.log(str7)



// concatation of string --> when you have to join 2 or more string you do concatiaon

let str8 = "hello"
let str9 = "world!!"

// you can do conaction by 2 method 

// using (+)"operator"


console.log(str8 + " " + str9)

//output -->helloworld!!

// `` backticks 

//" "   , ' ' , ``
// using backtick and ${} -- template literall -->

console.log(`i am learning js and my first output was :- ${str8} ${str9}`)

let str11 = "siddhant"
let str12 = "gadakh"

console.log("hello my first name is " + str11 + " and my last name is " + str12)
//-----------
console.log(`hello my first name is ${str11} and my last name is ${str12}`)


//----------------------------------------------------
//escapes characters -->


//(\) is used to delecare a long literal string
let srt13 = "qwertyuiolkjhgfdsazxcvbnjkijuytredsfghj\
sdfghjgfdcvbnmjkhgfcv\
jhgfdcvbbhkjhy\
jhfvbnm"
console.log(srt13)

//(\n):- to get a output on a new line 
let srt14 = "qwertyuiolkjhgfdsazxcvbnjkijuytredsfg\
hj\nsdfghjgfdcvbnmjkhg\
fcv\njhgfdcvbbhkjhy\njhfvb\
nm\njh\
fvbnm"

console.log(srt14)
/**
 * qwertyuiolkjhgfdsazxcvbnjkijuytredsfghj
sdfghjgfdcvbnmjkhgfcv
jhgfdcvbbhkjhy
jhfvbnm
jhfvbnm
 */

//(\t)--> indicates tab key gives 8 space when ever used 


let str15 = "siddhant\tgadakh"
console.log(str15)

// \'
// \"

let str16 = "hello my \"name\" is "

console.log(str16)

//----------------------------------------------------------------------------------------

// methods of string 

let str17 = "welcome to string in js "

//----- length

console.log(str17.length) //24

//toUpperCase()


// syntax--- name of your string.toUpperCase()
let str18 = str17.toUpperCase()
console.log(str18) //WELCOME TO STRING IN JS

// toLowerCase()

console.log(str18.toLowerCase()) //welcome to string in js

//method concatition 
// U          l                 U         length   Uppercase
// console.log(str17.toUpperCase().toLowerCase().toUpperCase().length   .toUpperCase())
//           string                string        string      number    


// (+ )---> concation  (string )--> concat 

//(+)--> addition --> 

let str19 = "5" + 3  // 5  -->  //  string
let str20 = 5 + 5// 10
let str21 = 6 - "6"// 6 //0
let str23 = 4 + 4//8
let str24 = 6 + 3 + "5"// 9 5 // nmber string 


// "hello"+"world " --> 
53 // string
10 //number
0 //number
8 //number
95 //strig

console.log(typeof str19)
console.log(typeof str20)
console.log(typeof str21)
console.log(typeof str23)
console.log(typeof str24)


// substr--> used to extract the variables and store them in another varaible 
//syntax string.substr(startaingindex,number ofcharacters)
let str25 = "SiddhantArjunGadakh"

let newstr1 = str25.substr(0, 3)

console.log(newstr1) //Sid

//substring-->used to extract the variables and store them in another varaible

// sytnax
//string.substring(staringindex,endingindex) --> this will not include your ending index in the outputlet newstr1=str25.substr(0,8)


let newstr2 = str25.substring(0, 3)

console.log(newstr2) //Siddhant



//-----------------------------------------

//trim trimstart trimend

let str26 = " hello "

console.log(str26.length)//7

//trim --> to remove empty space form both start and end we use trim method 

console.log(str26.trim().length) //5
console.log(str26.trimStart().length)//6

console.log(str26.trimEnd().length)//6



//---- 
//includes--> checks if the word is present in your string 

const str27= "hey i am learning javascript"

console.log(str27.includes("learning")) //true

// replace -->  this method replaces the word with another word
// syntx ---> string.replace(word to be replace,word that is to be replaced with )
let newstr3=str27.replace("javascript","cypress playwright")

console.log(newstr3)


// startWith() EndsWith() --> check wheater the string will started and end with the same or given charcater

console.log(str27.startsWith("h"))
console.log(str27.endsWith("t"))

// indexof
//lastindexof
//concat
//repeat
//match
//split
//

// indexof--> gives you the index of the first occrance of the character 

let str28="siddhant"
console.log(str28.indexOf("d")) //2


//lastindexof()---> gives you the last occuranceof that character
console.log(str28.lastIndexOf("d"))//3


// concat --> used to join 2 or more strings 

//(+),`........`

let fn = "siddhant"
let mn="arjun"
let ln="gadakh"
// concatation of 2 string 
console.log(fn.concat(mn))
// concatation of 3 string 
console.log(fn.concat(mn,ln)) //siddhantarjungadakh
//
console.log(ln.concat(fn,mn)) //gadakhsiddhantarjun


//repeat --> used to repeat the word upto a certain length

let str29= "apple"

console.log(str29.length) //5

console.log(str29.repeat(10))


////match---> give you the details of the wpords in string 

let str30="I AM LEARNING JS AND CURRENTLY I AM STUDY STRING "

console.log(str30.match("STRING"))

/**
 * 
 * [
  'STRING',
  index: 42,
  input: 'I AM LEARNING JS AND CURRENTLY I AM STUDY STRING ',
  groups: undefined
]
 */


//split -->spilt is used to convert 1 string into many on given character
//spilting at space
console.log(str30.split(" ")) //
//syntax -->

//srtingName.methodname(" ")// at what character to split

//spliting at character
console.log(str30.split("L"))

//spliting at every character 
console.log(str30.split(""))
/**
 * 'I', ' ', 'A', 'M', ' ', 'L', 'E', 'A',
  'R', 'N', 'I', 'N', 'G', ' ', 'J', 'S',
  ' ', 'A', 'N', 'D', ' ', 'C', 'U', 'R',
  'R', 'E', 'N', 'T', 'L', 'Y', ' ', 'I',
  ' ', 'A', 'M', ' ', 'S', 'T', 'U', 'D',
  'Y', ' ', 'S', 'T', 'R', 'I', 'N', 'G',
  ' '
 */

  
