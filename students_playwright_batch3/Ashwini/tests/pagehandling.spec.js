const {test, expect} =require("@playwright/test")

test("Contact Us page handling", async({broswer}) => {
    
const context = await broswer.newContext()
const page = await context.newPage()
await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
await expect(page.toHaveTitle("CONTACT US"))
await page.locator('[name = "first_name"]').fill("Ashwini")
await expect(page.locator('[name = "first_name"]')).toHaveValue("Ashwini")
await page.locator('[name = "last_name"]').fill("Kadam")
await expect(page.locator('[name = "last_name"]')).toHaveValue("Kadam")
await page.locator('[name = "email"]').fill("ashwiniom3105@gmail.com")
await expect(page.locator('[name = "email"]')).toHaveValue("ashwiniom3105@gmail.com")
await page.locator('[name = "message"]').fill("Ok")
await expect(page.locator('[name = "message"]')).toHaveValue("Ok")
await page.locator('[type = "submit"]').click()

})
