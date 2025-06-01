const { test, expect } = require("@playwright/test")

test("Verify session login with typing", async ({ browser }) => {
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin123")
    await page.locator('[type="submit"]').click()

    let dashboard = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(dashboard).toBeVisible()
    await expect(dashboard).toContainText("Dashboard")

    //storage cookies
    await page.context().storageState({ path: "../students_playwright_batch3/Ashwini/Fixtures/loginsession.json" })

})

test("Verify logined user", async({browser})=>{
    
    let context = await browser.newContext({storageState:"../students_playwright_batch3/Ashwini/Fixtures/loginsession.json"})
    let page = await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page.locator('[class="oxd-glass-button orangehrm-upgrade-button"]')).toContainText("Upgrade")

})