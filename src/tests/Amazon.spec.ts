import { test, expect } from '@playwright/test'

test ('Amazon Mobile selection and click on Buy option', async({page}) => {
await page.goto("https://www.amazon.in/")

await page.getByText('Mobile').click()
await page.getByText('Apple iPhone 15 (128 GB) - Black').first().click()
await page.locator('#add-to-cart-button').nth(1).click();
await page.getByText('Added to cart').isVisible()
await page.locator('#sc-buy-box-ptc-button').click()

await page.locator('#ap_email_login').fill('kdhanraj21@gmail.com')
await page.locator('#continue').click()
await page.getByRole('button', { name: 'Send OTP' }).click();

})
