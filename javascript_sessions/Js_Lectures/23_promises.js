// promises --> (cypress )

// promises are the way to reslove async code in sync 

// promises --> commitment

//1 fullfilled --  success
//2 rejected --  failure 
//3 pending -- 


// pending --> intial stage (not started )
// fulfiiled --> operation has been successfully performed 
// rejection --> operation has failed 

//----------------------------------------------------

// example of promises 

//write a simple promises -->

let pro = new Promise((reslove, rejected) => {
    let success = true

    if (success === true) {
        reslove("the operation has been successfull")
    }
    else {
        rejected("error try again")
    }
}).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})

//----------------------------------------------------------

let skills = new Promise((reslove, reject) => {
    setTimeout(() => {
        let arr = ["html", "css", "js", "cy"]
        if (arr.length > 1) {
            reslove(arr)
        }
        else {
            reject("person doesnt meet critery")
        }
    }, 3000)
})

skills.then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})


//--------------------------------------------------------------------

// //1 user regsister
// //2 otp verification
// //3 perfrence --
// //4 start acitivity


function userregistor(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`the ${user} has been successfully registor `)
            reslove(user)
        }, 5000)
    })
}

function sendotp(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`the ${user} the otp has been verified `)
            reslove(user)
        }, 3000)
    })
}

function set_perfeences(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`the ${user}  perefeneces has been set`)
            reslove(user)
        }, 2000)
    })
}

function start_use(user) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(`the ${user} can start aticvity`)
            reslove(user)
        }, 500)
    })
}

// userregistor("sid")
// sendotp("sid")
// set_perfeences("sid")
// start_use("sid")
//callback hell 
/**
 * user_regsitor("siddhant", () => {
    verify_otp("siddhant", () => {
        set_perfeences("siddhant", () => {
            start_use("siddhant", () => {
                console.log("log out ")
            })
        })
    })
})
 */

userregistor("SID")
    .then(sendotp)
    .then(set_perfeences)
    .then(start_use)




setTimeout(() => {
    console.log(`pasue`)

}, 5000)
userregistor("pritam").then(sendotp).then(set_perfeences).then(start_use).then((message) => {
    console.log(message)
})



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

