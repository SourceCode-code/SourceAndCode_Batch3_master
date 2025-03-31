

// async function user_regsitor(user) {
//     return `the ${user} has been registrer`
// }

// async function otp(user) {
//     return `The ${user} otp has been verifed`
// }

// async function set_perf(user) {
//     return `the ${user} perfenreces has been set`
// }

// async function startuse(user) {
//     return ` the ${user} has started the use `
// }


// async function runinsta(user) {
//     let step1 = await user_regsitor(user)
//     setTimeout(() => { "delay" }, 6000)
//     console.log(step1)
//     let step2 = await otp(user)
//     console.log(step2)
//     let step3 = await set_perf(user)
//     console.log(step3)
//     let step4 = await startuse(user)
//     console.log(step4)
// }

// runinsta("Ashu")


//  default way --> sample example 


// async function hey() {
//     await console.log("heyyyyy!!!")
//     await console.log("byeee!!!!!!")
// }

// hey()

async function user_launchApp(user) {
    return `${user} has been launched the app`
}

async function searchiphone(user) {
    return `${user} has searched the iphone in app`
}

async function specification(user) {
    return `${user} has been searched the iphone specification as = iphone 16 128GB: 5G Mobile phone `
}

async function addtocart(user) {
    return `${user} has been added the iphone to cart  `
}

async function addDetails(user) {
    return `${user} has been added the address details as - Bhoomi Orien society, Near Bhumkar chowk, Wakad - 411057 `
}

async function pay(user) {
    return `${user} has been added payed the amount `
}

async function delivery(user) {
    return `Amazon distributor deliver the iphone to ${user} `
}

async function review(user) {
    return `${user} has given 5 ***** review comment to product`
}

async function searchInAmazon(user) {
    let step1 = await user_launchApp(user)
    setTimeout(() => { "delay" }, 6000)
    console.log(step1)
    let step2 = await searchiphone(user)
    console.log(step2)
    let step3 = await specification(user)
    console.log(step3)
    let step4 = await addtocart(user)
    console.log(step4)
    let step5 = await addDetails(user)
    console.log(step5)
    let step6 = await pay(user)
    console.log(step6)
    let step7 = await delivery(user)
    console.log(step7)
    let step8 = await review(user)
    console.log(step8)
}

searchInAmazon("Ashu")
