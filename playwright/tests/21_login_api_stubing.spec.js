const { test, expect, request } = require("@playwright/test")
let token // undefined
test.beforeAll(async () => {
    let api = await request.newContext()
    let response = await api.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
        data: {
            "userEmail": "john2k19wick@gmail.com",
            "userPassword": "vaibhavS@95"
        }
    })
    expect(response.ok()).toBeTruthy()
    console.log(response)
    let loginresponse = await response.json()

    console.log(loginresponse.token)
    token = loginresponse.token
    console.log(token)
})

test("verify skipping of login flow ", async ({ page }) => {

    page.addInitScript(value => {
        // development code 
        window.localStorage.setItem("token", value)
    }, token)

    await page.goto('https://rahulshettyacademy.com/client')
    await page.waitForTimeout(10000)

})