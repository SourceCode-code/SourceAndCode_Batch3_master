import { test, expect } from '@playwright/test';
const {homepage} = require("../Support/PageObjects/Homepage")
const data = require("../TestData/testdata.json")

test("verify filling of contact us ",async({browser})=>{

const Context = await browser.newContext()
const page = await Context.newPage()

//testdata 
let Homepagetitle = data.Testdata[0].HomepageTitle


//visit the base-url 
await page.goto('/')
// verify the homepage title 
await homepage.VerifyHomepageTitle(page,Homepagetitle)
//click on the contact us page title 
// await page.locator('[id="contact-us"]').click()


})