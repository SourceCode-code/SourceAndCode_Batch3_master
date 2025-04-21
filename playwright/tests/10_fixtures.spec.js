const { test, expect } = require("@playwright/test") // this line acitvates smart suggestion
const data  = require("../Fixtures/testdata_1.json") // import the json file

test("verify the basic of creating a testcases in playwright", async ({ browser }) => {
    const Context = await browser.newContext() // opens a fresh new browser 
    const page = await Context.newPage()  // opens a new fresh tab in browser

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html") // visit --
    await page.locator('[name="first_name"]').fill("siddhant")
    await page.locator('[name="last_name"]').fill("gadakh")
    await page.locator('[name="email"]').fill("demo123@gmail.com")
    await page.locator('[name="message"]').fill("filled with static data for testing purpose")
})


test("verify the basic of creating a dynamic data for  testcases in playwright", async ({ browser }) => {
    const Context = await browser.newContext() // opens a fresh new browser 
    const page = await Context.newPage()  // opens a new fresh tab in browser


    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html") // visit --
    await page.locator('[name="first_name"]').fill(data.firstName)
    await page.locator('[name="last_name"]').fill(data.lastName)
    await page.locator('[name="email"]').fill(data.email)
    await page.locator('[name="message"]').fill(data.message)
})
test("verify the basic of creating a dynamic data2 for  testcases in playwright", async ({ browser }) => {
    const Context = await browser.newContext() // opens a fresh new browser 
    const page = await Context.newPage()  // opens a new fresh tab in browser


    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html") // visit --
    await page.locator('[name="first_name"]').fill(data.firstName)
    await page.locator('[name="last_name"]').fill(data.lastName)
    await page.locator('[name="email"]').fill(data.email)
    await page.locator('[name="message"]').fill(data.message)
})


