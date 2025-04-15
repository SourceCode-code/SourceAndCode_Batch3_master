const { test, expect } = require("@playwright/test")

test("Confirmation popup", async ({ page }) => {
    await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")
    await page.locator('[id="button4"]').click()

    page.on("Dialog", async (simplealert) => {
        await simplealert.message()

        await expect(simplealert.message()).toContain("Press a button!")
        await simplealert.dismiss()
        console.log(simplealert.message())

    })
    await page.waitForTimeout(3000)
    let text = await page.locator('[id="confirm-alert-text]').textContent()
    await expect(text).toContain("You pressed Cancel!")

})

test("Model confirm popup", async ({ page }) => {
    await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")
    await page.locator('[id="button2"]').click()

    page.on("Dialog", async (complexalert) => {
        await complexalert.message()

        await expect(complexalert.message()).toContain("It’s that Easy!! Well I think it is.....")
        await complexalert.accept()
        console.log(complexalert.message())

    })

})

test("Javascript loader alert", async({page})=>{
    await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")
    await page.locator('[id="button1"]').click()

    page.on("Dialog", async(javascriptalert)=>{
        await javascriptalert.message()
        await expect(javascriptalert.message()).toContain("I am an alert box!")
        await javascriptalert.accept()
        console.log(javascriptalert.message())
    })
