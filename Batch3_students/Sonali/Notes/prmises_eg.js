let pro=new Promise((resolve,reject)=>{


let success=true
if(success===1){
    resolve("u r on right track")
}
else{
    reject("wrong")
}
})
.then((message)=>{
    console.log(message)
})

    .catch((error)=>{
        console.log(error)
})

// //1 user regsister
// //2 otp verification
// //3 perfrence --
// //4 start acitivity


function user_registration(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log(`${user} registered successfully`)
resolve(user)
        },700)
    })
}



function otp_verify(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} otp verified successfully`)
            resolve(user)
        },500)
    })
}

function prefences(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} will set prefences`)
            resolve(user)
        },1000)
    })
}

function start_Activity(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} will start the activity`)
            resolve(user)
        },2000)
    })
}

user_registration("SONALI")
.then(otp_verify)
.then(prefences)
.then(start_Activity)


console.log("-------------------------------------------------")
// open amazon  --(5000)
// search iphone --(9000)
// click on required specification --(7000)
// add to cart --(2000)
// add details --(12000)
// buy now and pay  --(15000)
// deliver --(30000)
// send review (5000)
// order success fully  --(3000)



function open_Amazon(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} opens amazon`)
            resolve(user)
        },5000)
    })
}

function search_iphone(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} searches for iphone`)
            resolve(user)
        },9000)
    })
}

function specification(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} searches for required specification`)
            resolve(user)
        },7000)
    })
}

function addToCart(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} will add products to cart`)
            resolve(user)
        },2000)
    })
}

function add_Details(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} adds the details`)
            resolve(user)
        },12000)
    })
} 

function buy_Pay(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} will buy the iphone and makes payment`)
            resolve(user)
        },15000)
    })
}

function delivery(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} gets the delivery`)
            resolve(user)
        },3000)
    })
}

function send_Review(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} gives the review of iphone` )
            resolve(user)
        },500)
    })
}

function order_Successful(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${user} gets msg of order successful`)
            resolve(user)
        },400)
    })
}


open_Amazon("Sonali Khosle")
.then(search_iphone)
.then(specification)
.then(addToCart)
.then(add_Details)
.then(buy_Pay)
.then(delivery)
.then(send_Review)
.then(order_Successful)