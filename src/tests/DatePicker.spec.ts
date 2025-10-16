import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.globalsqa.com/');
})

test('Date Picker', async ({page}) => {
    await page.getByText('Tester’s Hub').first().hover()
    await page.getByText('Demo Testing Site').first().hover()
    await page.locator('#menu-item-2827').click()
    await page.waitForTimeout(500)

    // async function selectDate(page, day: string, month: string, year: string) {
// 1. Get the iframe by its class or selector
    const frame = page.frameLocator('[src="../../demoSite/practice/datepicker/default.html"]'); //
    const dateInput = frame.locator('input.hasDatepicker table.ui-datepicker-calendar').first();
    await dateInput.click();

    // Construct dynamic selector using data attributes
    const dateLocator = frame.locator(
        `td[data-handler="selectDay"][data-month="${9}"][data-year="${2025}"] >> a:text-is("${19}")`);
    
    await dateLocator.click()
    
    // }
    //await selectDate(page, "20", "9", "2025");

})