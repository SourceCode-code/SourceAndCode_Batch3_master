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
        else{
            reject("person doesnt meet critery")
        }
    }, 3000)
})

skills.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})


//--------------------------------------------------------------------



/**
 * 
 * 
 * let x = "hello"
 * 
 * let y = x
 * 
 * 
 * 
 * y+=" world"
 * 
 * console.log(x)
 * 
 * 
 * 
 */

//hello world --> sonali 
//hello 

//  let x = "hello"
//  let y = x
//  y+=" world"
//  console.log(x)
 

//  // y = X+y

//  console.log(y)

