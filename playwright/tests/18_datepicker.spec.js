const { test, expect } = require("@playwright/test")

//verify date picker 

// when typeable

test("verify datepicker with typing", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[id="datepicker"]').fill("04/07/1999")
    await expect(page.locator('[id="datepicker"]')).toHaveValue("04/07/1999")
})

//-----------------------------------METHOD 2

test("verify datepicker by logic", async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')

    //15 aug 2025

    let date = "15"
    let month = "August"
    let year = "2026"


    await page.locator('[id="datepicker"]').click()
    console.log(`${month} ${year}`) //August 2025

    while (true) {
        let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(monthyear)
        if (monthyear === `${month} ${year}`) {
            break

        }
        await page.locator('[class="next"]').first().click()
    }

    let daycount = await page.locator('[class="day"]').count()
    console.log(daycount)

for(let i =0;i<=daycount;i++){
    let text = await page.locator('[class="day"]').nth(i).textContent()
    if(text ===date){
        await page.locator('[class="day"]').nth(i).click()
        break
    }
}

await page.waitForTimeout(3000)
await expect(page.locator('[class="form-control"]')).toHaveValue("08-15-2026")

})