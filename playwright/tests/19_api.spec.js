//API --> Application programing interface

//API--> api is a communication link between front end and backend

//website  --->
//front end -->the code which is used to build the ui of the webviste and is visible in dom  --> (html , css , js , react, anugalr )
//backend   --> the code which is used to bulit the server effincey server logic --> (.net , python,java )
//server   --->(sql , mongodb--> databse)
//devops -->

// it techincal roles

// front end developer
// backend developer
//full stack developer
// mannual testor
// api testor
// database engineer
// automation testor
//devops

//----------------------------------------------------------
//example

//customer --> order something to eat  ||         (user perform some action on front )
//chef --> prepare the actual order   ||           (the action is done in back end )
//waiter -->communication link          ||         (api is the communication link )

//API -->

//there are two type of services

// SOAP -->xml (the api carries data in xml format) --(this is an old service )
// REST -->json (the carries data in json format) --(this is a new service )


// testing tools -->
//SOAP -- SOAP UI
// REST --> POSTMAN, SWAGGER


//REST-->

//GET  --> it gets all the data
//POST --> Create new data
//PUT  --> update created data
//UPDATE-->update created data
//PATCH-->update created data
//DELETE --> delete the data 


// when you test single api --> api request
// multiple apis (cllection api )--> collection 

// url -->
// base url                                               path paramter
//https://opensource-demo.orangehrmlive.com        /web/index.php/auth/login
//base url                                           query parameter
//  https://reqres.in                           /api/users?page=2

const { test, expect, request } = require("@playwright/test")


test("verify the get api ", async ({ request }) => {

    let req = await request.get("https://reqres.in/api/users?page=2")

    console.log(await req.status()) //200
    console.log(await req.json()) // convert response into json

    let response = await req.json()


    expect(req.status()).toBe(200)

    expect(response.per_page).toBe(6)


    //
    expect(response.data[3].first_name).toEqual("Byron")


})

test("verify post api ", async ({ request }) => {

    let req = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "Vaibhav",
            "job": "leader"
        }, headers: {
            "x-api-key": "reqres-free-v1"
        }
    })

    let response = await req.json()
    console.log(req.status()) //201
    console.log(response)
    expect(req.status()).toBe(201)

    expect(response.name).toEqual("Vaibhav")



})