const{test,expect}=require("@playwright/test")

test("check the login functionality of Orange HRM",async ({browser}) => {
    let context=await browser.newContext()
    let page=await browser.newPage()
    //visiting url
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   //verify title
    await expect(page).toHaveTitle("OrangeHRM")
    //verify url
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //enter username
    await page.locator('input[name="username"]').fill("Admin")
    //verify username
    await expect(page.locator('input[name="username"]')).toHaveValue("Admin")
    //enter password
    await page.locator('input[name="password"]').fill("admin123")
    //verify password
    await expect(page.locator('input[name="password"]')).toHaveValue("admin123")
    //verify login button
    await page.locator('button[type="submit"]').click()

})