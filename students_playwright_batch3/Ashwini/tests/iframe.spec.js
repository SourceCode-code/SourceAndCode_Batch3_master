const {test, expect}=require("@playwright/test")

test("Handle the iframe", async({browser}) => {

let Context=await browser.newContext()
let page= await Context.newpage()

await page.goto('https://letcode.in/frame')
await page.locator('[name="fname"]').fill("Ashwini")
await expect(page.locator('[name="fname"]')).toHaveValue("Ashwini")
await page.frameLocator('[id="firstFr"]').locator('[name="fname"]').fill("Ashwini")
await expect(page.frameLocator('[id="firstFr"]').locator('[name="fname"]')).toHaveValue("Ashwini")
let secondframe = await page.frameLocator('[id="firstFr"]').locator('[src="innerframe"]')
await secondframe.locator('[name="email"]').fill("ashwinikadam123@gmail.com")
await expect(secondframe.locator('[name="email"]')).toHaveValue("ashwinikadam123@gmail.com")



})