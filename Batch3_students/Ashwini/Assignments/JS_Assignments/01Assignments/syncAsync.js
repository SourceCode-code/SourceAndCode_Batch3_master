// //1 callback hell ( )------------------------>

// // steps to create an instagram account 

// //----------------------------------

// //1 user regsister
// //2 otp verification
// //3 perfrence --
// //4 start acitivity




// function user_regsitor(user, callback) {
//     setTimeout(() => {
//         console.log(`the user ${user} has been registered successfully`)
//         callback()
//     }, 5000)
// }

// function verify_otp(user, callback) {
//     setTimeout(() => {
//         console.log(`the otp for ${user} has been verfied  successfully`)
//         callback()
//     }, 8000)
// }

// function set_perfeences(user, callback) {
//     setTimeout(() => {
//         console.log(`perefecnes  for ${user} has been  set successfully`)
//         callback()
//     }, 3000)
// }

// function start_use(user, callback) {
//     setTimeout(() => {
//         console.log(`${user} can start the use `)
//         callback()
//     }, 2000)
// }

// // user_regsitor(user,callback)
// // verify_otp(user,callback)
// // set_perfeences(user,callback)
// // start_use(user,callback)
// console.log("------------------------------------------------------")

// user_regsitor("siddhant", () => {
//     verify_otp("siddhant", () => {
//         set_perfeences("siddhant", () => {
//             start_use("siddhant", () => {
//                 console.log("log out ")
//             })
//         })
//     })
// })


// -----------------------------------
// we dont use this method --> 

// 1  no error readabilty 
// 2  complexity to write is to much 
// 3  exertmly diffuclty 
// 4  we have better alernavites 

// --------------->

// promises
// async and await 

// zomato and swiggy 

/**
 * lauch the app 
 * select restraut 
 * select food and qaunity 
 * go to cart 
 * enter adderss and details 
 * pay 
 * wait for delievery 
 * get food 
 * review 
 */

function launchApp(user, callback) {
    setTimeout(() => {
        console.log(`the user ${user} has been launched the Zomato app successfully`)
        callback()
    }, 5000)
}

function selectRestaurant(restaurent, callback) {
    setTimeout(() => {
        console.log(`the user has been selected ${restaurent} successfully`)
        callback()
    }, 4000)
}

function selectFood(food, callback) {
    setTimeout(() => {
        console.log(`the user has been selected ${food} with quantity successfully`)
        callback()
    }, 7000)
}

function visitCart(cart, callback) {
    setTimeout(() => {
        console.log(`the user has visited the ${cart} successfully`)
        callback()
    }, 3000)
}

function addAddress(address, callback) {
    setTimeout(() => {
        console.log(`the user has added the address ${address} with details successfully`)
        callback()
    }, 7000)
}


function doPay(pay, callback) {
    setTimeout(() => {
        console.log(`the user has paid the ${pay} payment successfully`)
        callback()
    }, 8000)
}

function getFood(food, callback) {
    setTimeout(() => {
        console.log(`the user has received the ${food} successfully`)
        callback()
    }, 9000)
}

function giveReview(review, callback) {
    setTimeout(() => {
        console.log(`the user has given the review ${review} successfully`)
        callback()
    }, 1000)
}

//launchApp(user, callback)
//selectRestaurant(restaurent, callback) 
//visitCart(cart, callback)
//addAddress(address, callback)
//doPay(pay, callback)
//getFood(food, callback) 
//giveReview(review, callback)

launchApp("Ashwini", () => {
    selectRestaurant("Orchid Hotel", () => {
        visitCart("cart with all added food items ", () => {
            addAddress("701, Bhoomi Orien, Wakad ", () => {
                doPay("5000", () => {
                    getFood("food", () => {
                        giveReview("****", () => {
                            console.log("successfully done the logout from Zomato app ")
                        })
                    })
                })
            })
        })
    })
})

