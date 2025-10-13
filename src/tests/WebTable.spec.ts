import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
await page.goto('https://showcase.primefaces.org/');
})

test('Web table', async ({page}) => {
await page.locator('#sl_datatable').click()
await page.getByText('Crud').click()
await page.locator('[aria-label="Filter Category"]').pressSequentially('Clothing',{delay:200})
await page.locator('[aria-label="Filter Name"]').pressSequentially('Blue T-Shirt',{delay:200})
// await page.locator('[aria-label="Filter Code"]').pressSequentially('8a24b404',{delay:200})
await page.locator('#form\\:dt-products\\:0\\:j_id_50').click();
await page.locator('#dialogs\\:price_input').fill('30.0');
await page.getByRole('button',{name:"Save"}).click()
expect(page.locator('tr td span :text-is("$30.00")'))
});

