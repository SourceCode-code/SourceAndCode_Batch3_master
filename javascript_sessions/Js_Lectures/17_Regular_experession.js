// Regular Expression 

// its a small programing syntax used to find pattern in a data 

// pattern --> a patteren could be any text or any form of pattern which have some simalitry 

// Flag --> falgs are the optional parameter which defines the way of searching 

/**
 * Types of flages commonly used 
 * g :a gobal flag (it will search the pattern in all in the whole string )
 * i : this is case insenstive flag  ( this will match the pattern even if some syntax is upper or lower )
 * m : multiline (allows to search in multi line )
 * 
 */


// how to write a regular expression 

//1 you can use regualr experrion synatx 

let re = new RegExp("siddhat")

console.log(re)

// used direct syntax 

let dr = /siddhant/

// test()---> test method will show if your requalr exp is true or false 
// find in the below string wheater the word learning is present 

let str = "i am currently Learning javascript"


let result = /learning/i.test(str)
 
 console.log(result)



 // count the numer of time the world learning is reapeated 

 let str2 = "i am learning js , i am also LEARNING Cypress , i am aslo learning a new tool playwright "

//  let final= str2.toLocaleLowerCase()
// let word = final.split(" ")
// let learning = []
//  for(i=0;i<word.length;i++){
// if(word[i]==="learning"){
//     learning.push(word[i])
// }
//  }
//  console.log(learning.length)


console.log(str2.match(/learning/gi).length)

// -------------------------------------------------


let str3 = " i am studying python , i am also learnong the basic of PYTHON , python is an easy languge to study /\
i would reccommend everyone to learning pYTHon"


// js 

console.log(str3.replace(/python/gim,"js"))


// ---------------------------

let str4 = "h@#el@#l@#o m@#y@# n@#a@#m@#e i@#s@# s@#i@#d@#d@#h@#a@#n@#t"

console.log(str4.replace(/@#/gi,""))



