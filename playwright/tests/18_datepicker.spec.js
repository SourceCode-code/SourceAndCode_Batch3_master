const { test, expect } = require("@playwright/test")

//verify date picker 

// when typeable

test("verify datepicker with typing", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[id="datepicker"]').fill("04/07/1999")
    await expect(page.locator('[id="datepicker"]')).toHaveValue("04/07/1999")
})