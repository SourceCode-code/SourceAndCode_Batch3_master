/* lauch the app 
 * select restraut 
 * select food and qaunity 
 * go to cart 
 * enter adderss and details 
 * pay 
 * wait for delievery 
 * get food 
 * review 
 */
function launch_app(user, callback) {
    setTimeout(() => {
        console.log(`${user} will launch the app`)
        callback()
    }, 500)
}
function select_restaurant(user, callback) {
    setTimeout(() => {
        console.log(`${user} will select the restaurant`)
        callback()
    }, 4000)
}

function select_foodquantity(user, callback) {
    setTimeout(() => {
        console.log(`${user} will select food and quantity`)
        callback()
            , 2000
    })
}

function go_to_cart(user, callback) {
    setTimeout(() => {
        console.log(`${user} will go to cart`)
        callback()
    }, 500)
}

function enter_addressdeatils(user, callback) {
    setTimeout(() => {
        console.log(`${user} will enter address and details`)
        callback()
    }, 10000)
}

function pay(user, callback) {
    setTimeout(() => {
        console.log(`${user} will make the payment`)
        callback()
    }, 5000)
}

function waiting_delivery(user, callback) {
    setTimeout(() => {
        console.log(`${user} waiting for delivery`)
        callback()
    }, 6000)
}

function get_food(user, callback) {
    setTimeout(() => {
        console.log(`${user} get the food`)
        callback()
    }, 7000)
}

function review(user, callback) {
    setTimeout(() => {
        console.log(`${user} gives the review`)
        callback()
    }, 4000)
}




launch_app("sonali", () => {
    select_restaurant("sonali", () => {
        select_foodquantity("sonali", () => {
            go_to_cart("sonali", () => {
                enter_addressdeatils("sonali", () => {
                    pay("sonali", () => {
                        waiting_delivery("sonali", () => {
                            get_food("sonali", () => {
                                review("sonali", () => {

                                })
                            })
                        })
                    })
                })
            })

        })
    })
})

