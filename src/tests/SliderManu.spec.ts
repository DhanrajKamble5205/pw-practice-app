import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
await page.goto('https://showcase.primefaces.org/');
})

test('Slide Manu Option', async ({page}) => {
await page.getByText('SlideMenu').click()
await page.locator('.ui-menuitem-text').first().click()
await page.waitForTimeout(500)
await page.locator('.ui-slidemenu-content .ui-menuitem-text', 
    { hasText: 'Delete' }).first().click();

expect(await page.getByText('Data deleted')).toBeTruthy()
})