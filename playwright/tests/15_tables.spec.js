const { test, expect } = require("@playwright/test")



test("verify tables ", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let firstnames = await page.locator('[id="t01"] tbody tr td:nth-child(1)')
    let age = await page.locator('[id="t01"]>tbody>tr>td:nth-child(3)')
    let endcount = await page.locator('[id="t01"] tbody tr td:nth-child(1)').count()

    for (let i = 0; i < endcount; i++) {
        let fname = await firstnames.nth(i).textContent()
        let agge = await age.nth(i).textContent()
        console.log(`${fname} age is ${agge}`)
    }
})

