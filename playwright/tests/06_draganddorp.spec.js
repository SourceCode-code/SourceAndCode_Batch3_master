const { test, expect } = require("@playwright/test")

test("verify drag and drop", async ({ page }) => {


    await page.goto("https://webdriveruniversity.com/Actions/index.html")
    // way 1

    let dargable = await page.locator('[id="draggable"]')
    let dropable = await page.locator('[id="droppable"]')
    let css = await page.locator('[id="droppable"] p')

    // // drag and drop 
    // await dargable.dragTo(dropable)
    // //asserations 
    // await expect(css).toHaveAttribute("style", "background-color: rgb(244, 89, 80); height: 100%;")


    // way 2 
    await dargable.hover()
    await page.mouse.down()
    await dropable.hover()
    await page.mouse.up()
    await expect(css).toHaveAttribute("style", "background-color: rgb(244, 89, 80); height: 100%;")
//https://the-internet.herokuapp.com/drag_and_drop





})

// asseartion
// comapre

// red = green 