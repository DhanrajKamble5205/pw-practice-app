import {test as base} from '@playwright/test'
import { PageManager } from './page-object/PageManager'
import {faker} from '@faker-js/faker'

export type TestOptions = { 
    globalsQaURL:String
    formLayoutsPage:String
    pageManager : PageManager
}

export const test  = base.extend<TestOptions> ({
    globalsQaURL: ['', {option:true}],

    formLayoutsPage: async ({page}, use) => {
        await page.goto('/')
        await page.getByRole('link', { name: "Mobiles" }).click();
        await page.getByText(/iPhone 15/i).first().click();
        await page.getByRole('button', { name: "Add to Cart" }).click();
        await page.getByRole('button', { name: "Proceed to Buy" }).click();
        await page.waitForTimeout(1000);

        const randomFullName = faker.person.fullName()
        const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

        await page.locator('#ap_email_login').fill(randomEmail);
        await page.locator('#continue').click();
        await page.waitForResponse('https://unagi.amazon.in/1/events/com.amazon.csm.csa.prod')
        await page.screenshot({ path: 'Screenshot/image.png' });
        await use('')
    },


    pageManager: async({page, formLayoutsPage}, use) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})
