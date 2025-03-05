//async and await --> used to make async code sync 
//async await is aletrnaitive --> promise 

// playwright tool is bulit on async and await 

// async function Sayhello() {
//     return "hello"
// }

// console.log(Sayhello())

//--------------------------------------------------------------

async function user_regsitor(user) {
    return `the ${user} has been registrer`
}

async function otp(user) {
    return `The ${user} otp has been verifed`
}

async function set_perf(user) {
    return `the ${user} perfenreces has been set`
}

async function startuse(user) {
    return ` the ${user} has started the use `
}


async function runinsta(user) {
    let step1 = await user_regsitor(user)
    setTimeout(() => { "delay" }, 6000)
    console.log(step1)
    let step2 = await otp(user)
    console.log(step2)
    let step3 = await set_perf(user)
    console.log(step3)
    let step4 = await startuse(user)
    console.log(step4)
}

runinsta("sid")


//  default way --> sample example 


async function hey() {
    await console.log("heyyyyy!!!")
    await console.log("byeee!!!!!!")
}

hey()

//-------------------------------------------------------

// async code sync -->


//1 callback hell --> we use callback function to deal with async code and convert it into sync
//2 promsies --> we uses .then blocks to simple write the code and convert it into sync code
//3 aynsc and await --> we use async function and write the code in function using await statements 






