//string-It is a sequence of characters that can be identified by single quotes,double quotes and backtics

//to checktype
//console.log(typeof string)

//to check length of string
//console.log(string.length)

//to see full string
//console.log(string)

//to retrieve any character
//console.log(string[1])

//to get last character
//console.log(string[string.length-1])

//concatation-to join two or more string we use concate method
//us-ng + operator
//console.log(str1+str2)
//using template litearl
//console.log(`${str1}+${str2})

//escape character----(\) to take output on same line, used to declare the long literal string

//(\n)----to take output on new line

//(\t)----It gives 8 spaces when it is used

//substr---used to extract the variable and store them in another variable.
//String.substr(starting index, no of characters)

//substring---this will not include your ending indeex to output
//string.substring(startingindex,endingindex)



let str19 = "5" + 3  //  53 
console.log(str19) 

let str20 = 5 + 5 //10
console.log(str20)  

let str21 = 6 - "6"//0
console.log(str21)

let str22 = 6 - "6"//0
console.log(str22)

let str23 = 4 + 4//8
console.log(str23)  

let str24 = 6 + 3 + "5"//   95 
console.log(str24)  


let a = "Sonali"
console.log(typeof a)
console.log(a.length)
console.log(a)
console.log(a[1])
console.log(a[a.length - 1])


let b = "Sonali Rajabhau Khosle"
console.log(b.length)
console.log(b[9])
console.log(b)
console.log(b[b.length - 1])

//concate examples
let fn="Sonali"
let mn="Rajabhau"
let ln="khosle"

console.log(fn+" "+mn+" "+ln)
console.log(`my name is ${fn} ${mn} ${ln}`)
console.log(fn.concat(mn,ln))

let str="fbdtykfvhjglih\
dytkfuygliuhoggff\
rdjfyktguguihluyug\
dytfvyufygj"
console.log(str)

let str1="fe65yjrfkuyguk\
ggg\nfyjhgbj,y7ilh\
f\ndtdrghdjytfjyh"
console.log(str1)

let str2="sonali\tkhosle"
console.log(str2)

//Methods of string
let str3="sonali khosle"
console.log(str3.toUpperCase())

let str4="i am learning javascript"
console.log(str4.toUpperCase())

let str5="HELLOWORLD"
console.log(str5.toLowerCase())

// console.log(str4.toUpperCase().toLowerCase().toUpperCase().length    .toUpperCase())   
//  because of length function it cant gives output // length is a number method and reamining are string

//String.substr(starting index, no of characters)
//string.substring(startingindex,endingindex)

let str6="javascript"
let newstr1 = str6.substr(0, 3)
console.log(newstr1) 

let newstr2 = str6.substring(0, 3)
console.log(newstr2) 


names=["sonali","rajabhau","khosle"]
for(let i=0;i<names.length;i++)
{
    console.log(names[i].toUpperCase)
}