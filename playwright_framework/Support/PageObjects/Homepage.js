import { test, expect } from '@playwright/test';

class Homepage {
    titleselector = '[href] [class="section-title"] h1'


    async VerifyHomepageTitle(page, Title) {
        await expect(page).toHaveTitle(Title)
    }


    // this method is used to click on the title 
    // parameter are --> name of title

    async clickonTitle(page, Titletext) {
        let titlecount = await page.locator(this.titleselector).count()
        for (let i = 0; i < titlecount; i++) {
            let titlename = await page.locator(this.titleselector).nth(i).textContent()
            if (Titletext == titlename) {
                await page.locator(this.titleselector).nth(i).click()
                break
            }
        }

    }


}
export const homepage = new Homepage()
