const { test, expect } = require("@playwright/test") // this line acitvates smart suggestion
const exp = require("constants")

test("verify iframes in playwright", async ({ browser }) => {
  let Context = await browser.newContext()
  let page = await Context.newPage()

  //iframes --------->
  await page.goto('https://letcode.in/frame')
  await page.locator('[name="fname"]').fill("siddhant")
  await expect(page.locator('[name="fname"]')).toHaveValue("siddhant")
  await page.frameLocator('[id="firstFr"]').locator('[name="fname"]').fill("siddhant")
  await expect(page.frameLocator('[id="firstFr"]').locator('[name="fname"]')).toHaveValue("siddhant")
  let secondframe = await page.frameLocator('[id="firstFr"]').frameLocator('[src="innerframe"]')
  await secondframe.locator('[name="email"]').fill("siddhant123@gmail.com")
  await expect(secondframe.locator('[name="email"]')).toHaveValue("siddhant123@gmail.com")
})