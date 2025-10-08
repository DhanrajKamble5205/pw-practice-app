import { test, expect } from '@playwright/test'

test ('The first test', async({page}) => {
await page.goto("https://www.amazon.in/")

await page.getByText('Mobile').click()
await page.getByText('Apple iPhone 15 (128 GB) - Black').first().click()
await page.locator('#add-to-cart-button').nth(1).click();
await page.getByText('Added to cart').isVisible
await page.locator('#sc-buy-box-ptc-button').click()
})

test ('Finding Child element', async({page}) => {
    await page.locator('')
})