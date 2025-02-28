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