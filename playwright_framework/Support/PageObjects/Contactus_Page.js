import { test, expect } from '@playwright/test';

class Contactus_Page {
 

//enter the data in input field 
async enterdatainInputField(page,FieldName,data){
await page.locator(`[id="contact_form"] input[placeholder="${FieldName}"]`).fill(data)

}
   


}
export const contactus_Page = new Contactus_Page()
