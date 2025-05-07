const {test, expect} = require("@playwright/test")

test(".pdf file download", async({page})=>{
    await page.goto("https://letcode.in/file")

    const downloadpromise = page.waitForEvent("download")

    await page.locator('[download="sample.pdf"]').click()

    const download = await downloadpromise

    await download.saveAs("../students_playwright_batch3/Ashwini/datafiles/Motivation.pdf")

})

test(".xlsx file download", async({page})=>{
    await page.goto("https://letcode.in/file")

    const downloadpromise = page.waitForEvent("download")

    await page.locator('[download="sample.xlsx"]').click()

    const download = await downloadpromise

    await download.saveAs("../students_playwright_batch3/Ashwini/datafiles/Motivation.xlsx")

})

test(".test file download", async({page})=>{
    await page.goto("https://letcode.in/file")

    const downloadpromise = page.waitForEvent("download")

    await page.locator('[download="sample.txt"]').click()

    const download = await downloadpromise

    await download.saveAs("../students_playwright_batch3/Ashwini/datafiles/Motivation.txt")

})