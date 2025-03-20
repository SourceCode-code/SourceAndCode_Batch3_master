const { test, expect } = require("@playwright/test") // this line acitvates smart suggestion 

// test suite --> combination of testcases 
// testcases --> single feature to test 

test("verify the basic of creating a testcases in playwright", async ({ browser }) => {
    const Context = await browser.newContext() // opens a fresh new browser 
    const page = await Context.newPage()  // opens a new fresh tab in browser

// visit --
// type 
})



//playwright     -->async in nature
//async and await -->


//steps --> open browser   --
//         open a new tab
//         url amazon
//         ipohone 13
//         verify

// testing always works in pair -->

/**
 *  open browser --> action 
 * verifyt the browser is open -->asseration
 * 
 * 
 * 
 */