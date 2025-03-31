
//**
// open amazon  --(5000)
// search iphone --(9000)
// click on required specification --(7000)
// add to cart --(2000)
// add details --(12000)
// buy now and pay  --(15000)
// deliver --(30000)
// send review (5000)
// order success fully  --(3000)
//  */



// async and await ---> playwright 

function openAmazon(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`${user} has been opened the app successfully`)
            reslove(user)
        }, 5000)
    })
}

function searchiphone(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`${user} has been searched the iphone `)
            reslove(user)
        }, 9000)
    })
}

function specification(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`${user} has been searched the iphone specification as = iphone 16 128GB: 5G Mobile phone `)
            reslove(user)
        }, 7000)
    })
}

function addtocart(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`${user} has been added the iphone to cart `)
            reslove(user)
        }, 2000)
    })
}

function adddetails(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`${user} has been added the address details as - Bhoomi Orien society, Near Bhumkar chowk, Wakad - 411057 `)
            reslove(user)
        }, 12000)
    })
}

function pay(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`${user} has been added payed the amount `)
            reslove(user)
        }, 15000)
    })
}

function delivery(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`Amazon distributor deliver the iphone to ${user} `)
            reslove(user)
        }, 15000)
    })
}

function review(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`${user} has given ***** review comment to product `)
            reslove(user)
        }, 5000)
    })
}

openAmazon("Ashwini").then(searchiphone).then(specification).then(addtocart).then(adddetails).then(pay).then(delivery).then(review)