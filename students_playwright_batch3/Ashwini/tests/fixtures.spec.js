const { test, expect } = require("@playwright/test")
const data = require("../Fixtures/data_2.json")

test("Basic test case in playwright", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

    await page.locator('[name="first_name"]').fill(data.testdata[0].firstName)
    await page.locator('[name="last_name"]').fill(data.testdata[0].lastName)
    await page.locator('[name="email"]').fill(data.testdata[0].email)
    await page.locator('[name="message"]').fill(data.testdata[0].message)

    
})

test("Dynamic test data creation for test case in playwright", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    let first_Name=data.testdata[1].firstName
    let last_name=data.testdata[1].lastName
    let email=data.testdata[1].email
    let msg=data.testdata[1].message

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

    await page.locator('[name="first_name"]').fill(first_Name)
    await page.locator('[name="last_name"]').fill(last_name)
    await page.locator('[name="email"]').fill(email)
    await page.locator('[name="message"]').fill(msg)

    await page.locator('[type="submit"]').click()

    await expect(page.waitForSelector('#contact_reply > h1')).toContain("Thank You for your Message!")
})
