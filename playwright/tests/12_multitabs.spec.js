const { test, expect } = require("@playwright/test") // this line acitvates smart suggestion

test("verify handling multiwindow a testcases in playwright", async ({ browser }) => {
    const Context = await browser.newContext() // opens a fresh new browser
    const page = await Context.newPage()  // opens a new fresh tab in browser

    await page.goto('https://webdriveruniversity.com/')

    // await page.locator('[id="contact-us"]').click()

    const [contactus_page] = await Promise.all([
        Context.waitForEvent('page'),  // wait for new page to open
        page.locator('[id="contact-us"]').click()
    ])

    await contactus_page.locator('[name="first_name"]').fill("siddhant")
    await contactus_page.locator('[name="last_name"]').fill("gadakh")
    await contactus_page.locator('[name="email"]').fill("demo123@gmail.com")
    await contactus_page.locator('[name="message"]').fill("filled with static data for testing purpose")


    let header = await page.locator('[href="Contact-Us/contactus.html"] h1').textContent()


    await expect(header).toContain("CONTACT US")
})