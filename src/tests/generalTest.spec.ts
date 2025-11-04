import {test, expect} from '@playwright/test'

test('Navigate to another page',async({page}) => {
await page.goto('https://www.globalsqa.com/')
await page.getByText('Free Ebooks').first().click()
await page.waitForTimeout(200)
await page.getByRole('link', { name: 'Machine Learning eBooks' }).click(); 
   
await page.locator('path #dropShadowTop ')
    await page.waitForTimeout(3000)
   
    const locator = page.locator('ul.wp-block-list li',{hasText:'A Course in Machine Learning'})
                    .getByRole('link', { name: '[Download]' })
   // await page.waitForTimeout(50000)
    await locator.click();
})