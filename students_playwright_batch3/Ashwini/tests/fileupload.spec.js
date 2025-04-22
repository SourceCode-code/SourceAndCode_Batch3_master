const {test, expect} = require ("@playwright/test")

test("file upload", async({page})=>{
    await page.goto("https://webdriveruniversity.com/File-Upload/index.html?filename=")
    await page.locator('[id="myFile"]').setInputFiles("../students_playwright_batch3/Ashwini/datafiles/Motivational lines")

    page.on("dialog", async(alert)=>{
        await expect(alert.message()).toContain("Your file has now been uploaded!")
        await alert.accept()
    })

    await page.locator('[id="submit-button]').click()
    await expect(page.url()).toContain("https://webdriveruniversity.com/File-Upload/index.html?filename=Motivational+lines.docx")
})

