//loops-----used to perform repetitive task
//for -----for finite output 90% used
//while----10% used

//for(initialization;Condition;increment/decrement operator){
//code
//}
// example 1 --> print form 0 to 10  
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//example 2 --> 20 -- 0
for (let i = 20; i >= 0; i--) {
    console.log(i)
}

// print the table of 2 2*1=2
let num = 2
for (let i = 0; i <= 10; i++) {
    console.log(` ${num} x ${i} = ${num * i}`)

}

for(let i=0;i<=10;i++){
    console.log(`${num*i}`)
}

// print the sqaure of each number untill 25
for(let i=0;i<=25;i++){
    console.log(`${i*i}`)
}

// print the even numbers till 10
for( let i=0;i<=10;i++){
    if(i%2==0){
        console.log(i)
    }
}
let sum=0
for(let i=0;i<=100;i++){
    if(i%2==0){
console.log(i)
    }
}