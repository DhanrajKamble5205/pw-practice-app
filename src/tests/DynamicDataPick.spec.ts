import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
await page.goto('https://showcase.primefaces.org/');
})

test('Date Picker', async ({page}) => {
await page.locator('#sl_datepicker').click()
await page.getByText('java.util.Date').click()
await page.locator('#form\\:german_input').isVisible()
await page.locator('.ui-state-default', { hasText: '17' }).click()

let date = new Date()
date.setDate(date.getDate()+5)
const expectedDate = date.getDate().toString()
await page.locator('.ui-datepicker-calendar td a').getByText(expectedDate).click();

})