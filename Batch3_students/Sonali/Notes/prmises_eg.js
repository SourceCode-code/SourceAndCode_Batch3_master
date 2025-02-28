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