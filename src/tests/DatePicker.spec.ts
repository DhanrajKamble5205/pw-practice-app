import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
await page.goto('https://showcase.primefaces.org/');
})

test('Date Picker', async ({page}) => {
await page.locator('#sl_datepicker').click()
await page.getByText('java.util.Date').click()
await page.locator('#form\\:timeDe_input').click()
await page.waitForTimeout(500)
await page.locator('[aria-label="Oktober 14"]').last().click()
await page.waitForTimeout(500)
})