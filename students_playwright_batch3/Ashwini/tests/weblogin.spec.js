const {test, expect} = require("@playwright/test")

test("Login handling with correct credentials", async({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    expect (page).toHaveTitle("OrangeHRM")
    await page.locator('[name="username"]').fill('Admin')
    expect (page.locator('[name="username"]')).toHaveValue('Admin')
    await page.locator('[name="password"]').fill('admin123')
    expect (page.locator('[name="password"]')).toHaveValue('admin123')
    await page.locator('[type="submit"]').click()

    expect(page.locator('[class="oxd-topbar-header-breadcrumb"]')).toContainText("Dashboard")

})

test("Login handling with incorrect Username", async({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    expect (page).toHaveTitle("OrangeHRM")
    await page.locator('[name="username"]').fill('Admin1')
    expect (page.locator('[name="username"]')).toHaveValue('Admin1')
    await page.locator('[name="password"]').fill('admin123')
    expect (page.locator('[name="password"]')).toHaveValue('admin123')
    await page.locator('[type="submit"]').click()

    expect(page.locator('[class="oxd-topbar-header-breadcrumb"]')).toContainText("Dashboard")

})

test("Login handling with incorrect Password", async({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    expect (page).toHaveTitle("OrangeHRM")
    await page.locator('[name="username"]').fill('Admin')
    expect (page.locator('[name="username"]')).toHaveValue('Admin')
    await page.locator('[name="password"]').fill('admin1234')
    expect (page.locator('[name="password"]')).toHaveValue('admin1234')
    await page.locator('[type="submit"]').click()

    expect(page.locator('[class="oxd-topbar-header-breadcrumb"]')).toContainText("Dashboard")

})