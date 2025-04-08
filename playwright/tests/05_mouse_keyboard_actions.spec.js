const { test, expect } = require("@playwright/test")

/**
 * click
 * 
 * right click 
 * double click
 *  hover
 */

test("verify dynmaic click", async ({ browser }) => {
    let Context = await browser.newContext()
    let page = await Context.newPage()

    // visit 
    await page.goto('https://demoqa.com/buttons')
    //
    await page.locator('[class="mt-4"] [class="btn btn-primary"]').nth(1).click()
    // verify 
    await page.waitForSelector('[id="dynamicClickMessage"]')
    // 
    await page.waitForTimeout(2000)
    //asseration
    await expect(page.locator('[id="dynamicClickMessage"]')).toContainText("You have done a dynamic click")
    //.toContainText(" dynamic click") -- this will partically verify your text 
})

test('verify right click',async({page})=>{

 // visit 
 await page.goto('https://demoqa.com/buttons')
 //
 await page.locator('[id="rightClickBtn"]').click({button:"right"})
 await page.waitForSelector('[id="rightClickMessage"]')
//
await page.waitForTimeout(2000)

await expect(page.locator('[id="rightClickMessage"]')).toHaveText("You have done a right click")
// this required the extact text


})

test('verify double click ',async({page})=>{

    // visit 
    await page.goto('https://demoqa.com/buttons')
    //
    await page.locator('[id="doubleClickBtn"]').dblclick()
    await page.waitForSelector('[id="doubleClickMessage"]')
   //
   await page.waitForTimeout(2000)
   
   await expect(page.locator('[id="doubleClickMessage"]')).toHaveText("You have done a double click")
   // this required the extact text
   
   })