const { test, expect } = require("@playwright/test") // this line acitvates smart suggestion


test("verify shadow elements", async ({ page }) => {
    await page.goto("https://letcode.in/shadow")
    await page.locator('[id="fname"]').fill("hey!!!!!!!!!")
    await page.keyboard.press("Tab")
    await page.keyboard.type("BYE!!!!!!")
})