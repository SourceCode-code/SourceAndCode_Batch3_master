const { test, expect, request } = require("@playwright/test")
const req = require("constants")

test("Verify get request", async ({ request }) => {

    let req = await request.get("https://reqres.in/api/users?page=2")

    console.log(req.status())
    
    console.log(req.json())

    let response = await req.json()

    expect(req.status()).toBe(200)

    expect(response.per_page).toBe(6)

    expect(response.data[0].first_name).toEqual("Michael")

})

test("Verify post request", async ({ request }) => {
    let req = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "morpheus",
            "job": "leader"
        },
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })

    console.log(req.status())

    let response = await req.json()

    console.log(response)

    expect(req.status()).toBe(201)

    expect(response.name).toEqual("morpheus")


})

test("Verify Put request", async ({ request }) => {
    let req = await request.put("https://reqres.in/api/users/2", {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        },
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })
    console.log(req.status())

    let response = await req.json()

    console.log(response)

    expect(req.status()).toBe(200)

    expect(response.job).toEqual("zion resident")

})

test("Verify Delete request", async ({ request }) => {

    let req = await request.delete("https://reqres.in/api/users/2", {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })

    console.log(req.status)

    expect(req.status()).toBe(204)

})