const{test,expect}=require("@playwright/test")

test("verify the download functionality",async({page})=>{

    await page.goto("https://letcode.in/file")

    const promisedownload=page.waitForEvent("download")

    await page.locator('[id="xls"]').click()

    const downolad=await promisedownload

    await downolad.saveAs("../sonali/fixture/downolad/file01.exe")
})