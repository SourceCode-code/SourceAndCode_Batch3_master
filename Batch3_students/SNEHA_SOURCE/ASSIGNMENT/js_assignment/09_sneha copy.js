// ASSIGNMENT NO 10

// // // 1) Iterate 0 to 10 using for loop, do the same using while
// for (let i = 0; i <= 10; i++) {

//     console.log(i)
// }

// //using while loop
// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }



// //   // 2) Iterate 10 to 0 using for loop, do the same using while
// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// //using while loop
// let i1 = 10
// while (i1 > 0) {

//     i--
// }
// for (let i = 0; i >= 10; i++) {
//     console.log(i)
// }

// //using while loop
// let i12 = 0
// while (i > 10) {

//     i12++
// }
// console.log(i12)



//   // 3) Iterate 0 to n using for loop
console.log("----------answer 3--------------------")

let n = 6
for (let i = 0; i <= n; i++) {
    console.log(i)
}
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######



let number = "#"
for (let i = 0; i <= 7; i++) {
    console.log(number.repeat(i))
}



//   // 5) Print the following pattern using loop
//   // i    i^2   i^3
//   // 0    0     0
//   // 1    1     1
//   // 2    4     8
//   // 3    9     27
//   // 4    16    64
//   // 5    25    125
//   // 6    36    216
//   // 7    49    343
//   // 8    64    512
//   // 9    81    729
//   // 10   100   1000
for (let i = 0; i <= 10; i++) {
    console.log(`${i}   ${i*i}  ${i*i*i}`)

}





//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}



//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i=0;i<=100;i++){
    if(!(i%2==0)){
        console.log(i)
    }
}



//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i=1;i>=100;i=i+2){
    console.log(i)
}


//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum1=0
for(let i=0;i<=100;i++){
    sum1=sum1+i
    }
        console.log(sum1)

    console.log("...........................................")


    

//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sum=0
for(let i=1;i<=100;i=i+2){
 sum=sum+i
}
console.log(sum)    


//   // 11) Develop a small script which generates a six-character random id.
let stri="a,s,d,f,g,h,j,k,l,z,x,,v,b,n,m,q,w,e,r,t,y,u,i,o,p"
console.log(Math.round(Math.random()*100000(stri.length)))




//   // 12) Develop a small script which generates any number of characters random id.
console.log(Math.ceil(Math.random()*6))

//   // 13) Write a script which generates a random hexadecimal number.

//   // 14) Write a script which generates a random rgb color number.
let red=(Math.round(Math.random()*256))
let green=(Math.round(Math.random()*256))
let blue=(Math.round(Math.random()*256))
console.log(`${red} ${green} ${blue}`)


//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *




//2

// ****
// *  *
// ****

let stars =4
for(let i=0;i<=2;i++){
    console.log("*".repeat(stars))
}


//3

// 4444
// 333
// 22
// 1
// 
for(let i=4;i>=1;i--){

   console.log(string(i).repeat(i))
}





// // 4
// 1111
// 222
// 33
// 4

let numb=4
for(let i=1;i<=4;i++){
    console.log(String(i).repeat(numb--))
}



//16) check if the given string is a palindrome 
let str = "racecar"
let rev=""
for(let i=str.length-1;i>=0;i--){
    rev+=str[i]
}
console.log(revStr===str)



// true
//false

//17) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"
let str1=" hello i am learning javascript and currently i am seeing the topic loops"
let str12=str1.split()
let longest=""
for(let i=0;i>=str1.length;i++){
    if(str1[i]==longest.length)
        longest==str12[i]
}
console.log(longest)
