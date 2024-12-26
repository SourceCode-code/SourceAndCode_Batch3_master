// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while
console.log("------------------For loop---------------")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("------------------While loop-------------")
let i1 = 0;
while (i1 < 10) {
    i1++;
    console.log(i1)
}


//   // 2) Iterate 10 to 0 using for loop, do the same using while
console.log("------------------For loop---------------")
for (let i3 = 10; i3 >= 1; i3--) {
    console.log(i3)
}
console.log("------------------While loop-------------")
let i2 = 10;
while (i2 >= 1) {
    i2--;
    console.log(i2)
}

//   // 3) Iterate 0 to n using for loop
console.log("------------------n numbers using for loop-------------")
let n = 20;
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

//for(let i=1; i<=7; i++)
//{
//        console.log(`${i}.repeat(i)`)
//}

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
//let num=1; count;
console.log("------------------for loop pattern-------------")
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i * i}  ${i * i * i}`)
}

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
console.log("------------------even numbers-------------")
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("Even numbers : " + i)
    }
}

//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
console.log("------------------odd numbers-------------")
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log("Odd numbers : " + i)
    }
}

//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers

//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
console.log("------------------sum of all numbers-------------")
let sum = 0
for (let i = 0; i <= 100; i++) {
    console.log("All numbers : " + i)
    sum += i
}

console.log("Sum of all numbers : " + sum)

//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
console.log("------------------sum of all even numbers-------------")
let evenSum = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("Even numbers : " + i)
        evenSum += i
    }
}
console.log("Sum of all numbers : " + evenSum)

console.log("------------------sum of all odd numbers-------------")

let oddSum = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log("Odd numbers : " + i)
        oddSum += i
    }
}
console.log("Sum of all odd numbers : " + oddSum)


//   // 11) Develop a small script which generates a six-character random id.


//   // 12) Develop a small script which generates any number of characters random id.


//   // 13) Write a script which generates a random hexadecimal number.

//   // 14) Write a script which generates a random rgb color number.

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



//3

// 4444
// 333
// 22
// 1

// // 4
// 1111
// 222
// 33
// 4




//16) check if the given string is a palindrome 
let str = "racecar"


// true
//false

//17) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"