const { test, expect } = require("@playwright/test")

//locators --> locator are the codes which is used to idnetfy a unique postion of elememts 
//getbyAlText() --> gets the elements by alt value
//getbyLabel   --> gets the elements by label value
//getByPlaceholder --> give elements by palceholder -->{used only in case input box }

test("smart locators getbyAlText()", async ({ page }) => {

    await page.goto('https://letcode.in/test/#_vignette')
    
    // await page.locator('[alt="letcode"]').toBeVisible()
    let ele = await page.getByAltText("letcode")
    await expect(ele).toBeVisible()
})



test("verify getbyLabel",async({page})=>{
 await page.goto('https://letcode.in/test/#_vignette')
 let el = await page.getByLabel('main navigation')
 await expect(el).toBeVisible()


})


test("verify get by placeholder",async({page})=>{

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
await page.getByPlaceholder('First Name').fill("hello")
})


//
test("verify getby text",async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let text = await page.getByText('Dropdown Menu(s), Checkboxe(s) & Radio Button(s)')
    await expect(text).toBeVisible()
})












