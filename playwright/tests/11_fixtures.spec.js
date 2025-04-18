const { test, expect } = require("@playwright/test") // this line acitvates smart suggestion
const data = require("../Fixtures/testdata_2.json") // import the json file


test("verify the basic of creating a dynamic data1 for  testcases in playwright", async ({ browser }) => {
    const Context = await browser.newContext() // opens a fresh new browser 
    const page = await Context.newPage()  // opens a new fresh tab in browser


    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html") // visit --
    await page.locator('[name="first_name"]').fill(data.testdata[0].firstName)
    await page.locator('[name="last_name"]').fill(data.testdata[0].lastName)
    await page.locator('[name="email"]').fill(data.testdata[0].email)
    await page.locator('[name="message"]').fill(data.testdata[0].message)
})


test("verify the basic of creating a dynamic data2 for  testcases in playwright", async ({ browser }) => {
    const Context = await browser.newContext() // opens a fresh new browser 
    const page = await Context.newPage()  // opens a new fresh tab in browser


    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html") // visit --
    await page.locator('[name="first_name"]').fill(data.testdata[1].firstName)
    await page.locator('[name="last_name"]').fill(data.testdata[1].lastName)
    await page.locator('[name="email"]').fill(data.testdata[1].email)
    await page.locator('[name="message"]').fill(data.testdata[1].message)
})