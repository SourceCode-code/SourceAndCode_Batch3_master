//closure --> if inner function access the outer variables then it is called as closure 




function outer() {
    let count = 0
    function inner() {
        count++
        return count
    }
    return inner()
}

let qq = outer()
console.log(qq)


// recursion --> rescursion is process when a function call itself 

function sumtoN(n){
    if(n===1)return 1
    return n+sumtoN(n-1)
}

console.log(sumtoN(15))

//sumtoN()
//


//--------------oopps 

