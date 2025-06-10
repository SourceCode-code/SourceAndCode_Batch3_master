import { test, expect } from '@playwright/test';

class Homepage {



async VerifyHomepageTitle(page,Title){
    await expect(page).toHaveTitle(Title)
}

}
export const homepage = new Homepage()
