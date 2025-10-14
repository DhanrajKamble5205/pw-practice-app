import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
await page.goto('https://showcase.primefaces.org/');
})

test('Date Picker', async ({page}) => {
await page.locator('#sl_datepicker').click()
await page.getByText('SlideMenu').click()
await page.locator('.ui-menuitem-text').first().click()
await page.waitForTimeout(500)

// const scrollable = page.locator('.ui-slidemenu-content',{hasText: "Delete"});
// await scrollable.evaluate(el => el.scrollIntoView = el.scrollTo);
await page.locator('.ui-slidemenu-content .ui-menuitem-text', 
    { hasText: 'Delete' }).first().click();

expect(await page.getByText('Data deleted')).toBeTruthy()
})