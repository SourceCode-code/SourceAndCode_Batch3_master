/**
 * 
 * Questions 

1 Arr =[“siddhant”,23,52,”arjun”,34,”read”]

Put number and string in 2 different array 


2 Let str = “my name is siddhant”

Output should be 

Ym eman si tanhddis

Siddhant is name my 

3 
Print following pattern 

*
**
***
****
***
**
*


4 

// First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13


5 
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a switch case  which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").*/
 



let arr =['siddhant',23,52,'arjun',34,'read']
//Put number and string in 2 different array

let str =[]
let num =[]


for(let i=0;i<arr.length;i++){

if(typeof arr[i]==="string"){
    str.push(arr[i])
}
if(typeof arr[i]==="number"){
    num.push(arr[i])
}
}

console.log(num)
console.log(str)


let str1 = 'my name is siddhant'


// Ym eman si tanhddis

// Siddhant is name my


console.log(str1.split(" ").reverse().join(" ")) //siddhant is name my

let ar= str1.split(" ")

console.log(ar)
let er=[]
ar.forEach((el)=>{
    er.push(el.split("").reverse().join(""))
})


console.log(er.join(" ")) //ym eman si tnahddis

/**
 * 
 *  
**
***
****
***
**
*
 */


for(let i=0;i<=4;i++){
    console.log('*'.repeat(i))
}

for(let i =3;i>0;i--){
    console.log('*'.repeat(i))
}


/**
 * // First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

 */



 let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'


 let arr1 = text.split(" ")

 console.log(arr1.length) //13


 let arr2 = text.split(",")
 console.log(arr2)

 let sss=arr2.join(" ")

 let r3 = sss.split(".").join("")

 console.log(r3)

 //I love teaching and empowering people I teach HTML  CSS  JS  React  Python


 /**
  * Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a switch case  which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
  */
let wg = 100
let h =6.3
let bmi = wg/(h*h)

console.log(bmi)

switch(bmi){
    case bmi<18.5 : console.log("Underweight") 
    break
    case bmi>18.5 && bmi<24.5 :console.log("Normal") 
    break
    case bmi>25 && bmi <29.9 :console.log("obese")
    break
    default:console.log("enter correct data") 
}

