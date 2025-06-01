const { test, expect, request } = require("@playwright/test")
let token
test.beforeAll(async () => {
    let api = await request.newContext()
    let request = await api.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
        data: {
            "userEmail": "john2k19wick@gmail.com",
            "userPassword": "vaibhavS@95"
        }
    })
    expect(response.ok()).toBeTruthy()
    console.log(response)
    let loginresponse = await respose.json()
    console.log(loginresponse.token)
    token = loginresponse
    console.log(token)

})

test("Verify skipping of login flow ", async({page}) => {
page.addInitScript(value =>{
    window.localStorage.setItem("token", value)
}, token)

await page.goto('https://rahulshettyacademy.com/client')
await page.waitForTimeout(5000)
})