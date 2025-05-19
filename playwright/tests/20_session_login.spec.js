const { test, expect } = require("@playwright/test")
const exp = require("constants")

//verify date picker 

// when typeable

test("verify datepicker with typing", async ({ browser }) => {
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill("admin123")
    await page.locator('[type="submit"]').click()

    // 

    let dashboard = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')


    await expect(dashboard).toBeVisible()
    await expect(dashboard).toContainText("Dashboard")

    // to save session and cookies
    await page.context().storageState({ path: "../playwright/Fixtures/loginsession.json" })

})


test("verify logined user ", async ({ browser }) => {

    let context = await browser.newContext({ storageState: "../playwright/Fixtures/loginsession.json" })
    let page = await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page.locator('[class="oxd-glass-button orangehrm-upgrade-button"]')).toContainText(" Upgrade")

})

// api login through api and stubbing that token in ui 