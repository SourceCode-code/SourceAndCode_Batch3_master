import { test, expect } from '@playwright/test';
const { homepage } = require("../Support/PageObjects/Homepage")
const {contactus_Page} = require("../Support/PageObjects/Contactus_Page")
const data = require("../TestData/testdata.json")

test("verify filling of contact us ", async ({ browser }) => {

    const Context = await browser.newContext()
    const page = await Context.newPage()

    //testdata 
    let Homepagetitle = data.Testdata[0].HomepageTitle
    let Contactus_title = data.Testdata[0].Contactus_title


    //visit the base-url 
    await page.goto('/')
    // verify the homepage title 
    await homepage.VerifyHomepageTitle(page, Homepagetitle)
    const [contactus_page] = await Promise.all([
        Context.waitForEvent("page"),
         //click on the contact us page title
        await homepage.clickonTitle(page, Contactus_title)
    ])
    // verify contact us page title 
    await homepage.VerifyHomepageTitle(contactus_page,"WebDriver | Contact Us")
    // verify first name 
  await  contactus_Page.enterdatainInputField(contactus_page,"First Name","hello 123")




})