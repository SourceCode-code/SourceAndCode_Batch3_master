
const { test, expect } = require("@playwright/test") // this line acitvates smart suggestion
const data  = require("../Fixtures/testdata_3.json") // import the json file

data.testdata.forEach((el) => {
test(`${el.firstName} verify the basic of creating for ${el.firstName} a dynamic data2 for  testcases in playwright`, async ({ browser }) => {
    const Context = await browser.newContext() // opens a fresh new browser 
    const page = await Context.newPage()  // opens a new fresh tab in browser


    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html") // visit --
    await page.locator('[name="first_name"]').fill(el.firstName)
    await page.locator('[name="last_name"]').fill(el.lastName)
    await page.locator('[name="email"]').fill(el.email)
    await page.locator('[name="message"]').fill(el.message)
})
})