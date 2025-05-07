const { test, expect } = require("@playwright/test")

test("Shadow page handling", async ({ browser }) => {

    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://letcode.in/shadow")

    await page.locator('[id="fname"]').fill("Ashu")
    await page.keyboard.press("Tab")
    await page.keyboard.type("Ashu")
    await expect(page.keyboard.type("Ashu"))

    await page.locator('id="lname"').fill("kadam")
    await page.keyboard.press("Tab")
    await page.keyboard.type("kadam")
    await expect(page.keyboard.type("kadam"))

    await page.locator('[id="email"]').fill("ashu1234@gmail.com")
    await page.keyboard.press("Tab")
    await page.keyboard.type("ashu1234@gmail.com")
    await expect(page.keyboard.type("ashu1234@gmail.com"))


})