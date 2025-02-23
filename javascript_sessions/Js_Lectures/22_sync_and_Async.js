// //--- sync --> your code will be running in the given seqence 
// console.log("hello")
// console.log("world")
// console.log("!!!!!!!!!!!")

// //async --> the code which is easy to complie will run first 

// //-------------------------------

// // javascript --> js is a syncrous langauges 
// // playwright and cypress --> are ansync in nature 


// //------------------------------------------ example of sync code 

// console.log("step 1 : get the requirement")

// console.log("step 2 : create a mannual testcase")

// console.log("step 3 : automation testcase creation")

// console.log("step 4 :exceuete the testcase")

// console.log("step 5 :merge with master ")


// //--------------------------- async code 
// console.log("------------------------------------------------------")


// setTimeout(() => {
//     console.log("step 3 : automation testcase creation")
// }, 5000)
// setTimeout(() => {
//     console.log("step 1 : get the requirement")
// }, 3000
// )

// setTimeout(() => {
//     console.log("step 2 : create a mannual testcase")
// }, 4000)


// setTimeout(() => {
//     console.log("step 4 :exceuete the testcase")
// }, 2000)


// setTimeout(() => {
//     console.log("step 5 :merge with master ")
// }, 500)


// //setinterval --> output comes at interval
// //settimeout  --> output comes onces  after given time 



// //----------------------------------------------------------


// // rule to remeber -->

// // your code should always be sync 

// //--------------------------------

// //---------------------------------------------------------------

// // async ---> sync 

// //1 callback hell 
// //2 promise
// //3async and await 


// //1 callback hell ( )------------------------>

// // steps to create an instagram account 

// //----------------------------------

// //1 user regsister
// //2 otp verification
// //3 perfrence --
// //4 start acitivity




function user_regsitor(user, callback) {
    setTimeout(() => {
        console.log(`the user ${user} has been registered successfully`)
        callback()
    }, 5000)
}

function verify_otp(user, callback) {
    setTimeout(() => {
        console.log(`the otp for ${user} has been verfied  successfully`)
        callback()
    }, 8000)
}

function set_perfeences(user, callback) {
    setTimeout(() => {
        console.log(`perefecnes  for ${user} has been  set successfully`)
        callback()
    }, 3000)
}

function start_use(user, callback) {
    setTimeout(() => {
        console.log(`${user} can start the use `)
        callback()
    }, 2000)
}

// user_regsitor(user,callback)
// verify_otp(user,callback)
// set_perfeences(user,callback)
// start_use(user,callback)
console.log("------------------------------------------------------")

user_regsitor("siddhant", () => {
    verify_otp("siddhant", () => {
        set_perfeences("siddhant", () => {
            start_use("siddhant", () => {
                console.log("log out ")
            })
        })
    })
})


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