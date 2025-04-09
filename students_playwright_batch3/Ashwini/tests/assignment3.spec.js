const (test, expect) =require("@playwright/test")

test("Verify handling mouse actions - single click", async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://demoqa.com/buttons")

    await page.locator('[class="mt-4"] [class="btn btn-primary"]').nth(1).click()

    await page.waitForSelector('[id="dynamicClickMessage"]')

    await page.waitForTimeout(3000)

    await expect page.locator('[id="dynamicClickMessage"]').toContainText("You have done a dynamic click")



})