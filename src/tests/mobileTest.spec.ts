import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.in/')
 
  })

test('Input text value', async({page}) => {
   const button = page.getByRole('button',{name:"Continue shopping"})
    if (await button.count() > 0 && await button.first().isVisible()) {
     await button.first().click();
} else {
    await page.getByPlaceholder('Search Amazon.in').fill('Mobile')
    await page.locator('.nav-input').last().click()
    await page.getByText('Apple iPhone 15 (128 GB) - Black').click()

    }
  })