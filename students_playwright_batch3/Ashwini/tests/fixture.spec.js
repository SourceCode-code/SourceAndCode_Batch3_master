const { test, expect } = require("@playwright/test")
const data = require("../Fixtures/data.json")

test("Basic test case in playwright", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

    await page.locator('[name="first_name"]').fill("Ashu")
    await page.locator('[name="last_name"]').fill("Kadam")
    await page.locator('[name="email"]').fill("demo1234@gmail.com")
    await page.locator('[name="message"]').fill("OK..........")

    
})

test("Dynamic test data creation for test case in playwright", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

    await page.locator('[name="first_name"]').fill(data.firstname)
    await page.locator('[name="last_name"]').fill(data.lastname)
    await page.locator('[name="email"]').fill(data.email)
    await page.locator('[name="message"]').fill(data.message)

    await page.locator('[type="submit"]').click()

    await expect(page.waitForSelector('#contact_reply > h1')).toContain("Thank You for your Message!")
})
