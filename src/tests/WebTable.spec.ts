import { test, expect } from '@playwright/test';
import { timeout } from 'rxjs-compat/operator/timeout';

// test.beforeEach(async ({page}) => {
// await page.goto('https://showcase.primefaces.org/');
// })

test('Web table', async ({page}) => {
await page.locator('#sl_datatable').click()
await page.getByText('Crud').click()
await page.locator('[aria-label="Filter Category"]').pressSequentially('Clothing',{delay:200})
await page.locator('[aria-label="Filter Name"]').pressSequentially('Blue T-Shirt',{delay:200})
// await page.locator('[aria-label="Filter Code"]').pressSequentially('8a24b404',{delay:200})
await page.locator('#form\\:dt-products\\:0\\:j_id_50').click();
await page.locator('#dialogs\\:price_input').clear();
await page.locator('#dialogs\\:price_input').fill('30');
await page.waitForTimeout(3000);  
await page.getByText('Save').first().click()
await page.waitForTimeout(5000); 
// expect(page.locator('tr td span :text-is("$30.00")')).toHaveText('$30.00')
});

