const {test,expect} = require("@playwright/test")


test("verify file download",async({page})=>{
await page.goto("https://letcode.in/file")

const downloadpromise =page.waitForEvent("download")

await page.locator('[id="pdf"]').click()
const download = await downloadpromise

await download.saveAs("../playwright/datafiles/downloadfiles/sample1.pdf")




})