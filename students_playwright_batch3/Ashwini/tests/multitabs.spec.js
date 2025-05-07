const { test, expect } = require("@playwright/test")


test("Handling multiwindow in playwright", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://webdriveruniversity.com/")

    const [contactus_page]= await Promise.all([ 
        context.waitForEvent('page'),
            page.locator('[id="contact-us"]').click()
        ])

    await contactus_page.locator('[name="first_name"]').fill("Ashu")
    await contactus_page.locator('[name="last_name"]').fill("Kadam")
    await contactus_page.locator('[name="email"]').fill("demo1234@gmail.com")
    await contactus_page.locator('[name="message"]').fill("OK..........")

    let header=await page.locator('[href="Contact-Us/contactus.html"] h1').textContent()

    await expect(header).toContain("CONTACT US")
    
})

