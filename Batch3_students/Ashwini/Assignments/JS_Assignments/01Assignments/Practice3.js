// //write a simple promises -->

// let pro = new Promise((reslove, rejected) => {
//     let success = true

//     if (success === true) {
//         reslove("the operation has been successfull")
//     }
//     else {
//         rejected("error try again")
//     }
// }).then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

let abc = new Promise((resolve, rejected) => {
    let role = true

    if(role == false)
{
    resolve(" Now you should take the ownership ")
}
else
{
    rejected("Still you need to take efforts")
}

}).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})