import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Amazon Mobile selection and click on Buy option', async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  
  const randomFullName = faker.person.fullName();
  const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

  await page.getByRole('link', { name: /Mobiles/i }).click();
  await page.getByText(/iPhone 15/i).first().click();

  await page.getByRole('button', { name: /Add to Cart/i }).click();
  await expect(page.getByText('Added to cart')).toBeVisible();

  await page.getByRole('button', { name: /Proceed to Buy/i }).click();
  await page.waitForTimeout(1000);

  await page.locator('#ap_email_login').fill(randomEmail);
  await page.locator('#continue').click();

  await page.getByRole('button', { name: /Send OTP/i }).click();
  await page.screenshot({ path: 'Screenshot/image.png' });
});

test('Electronic product', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: /Electronics/i }).click();

  await page.getByText(/Premium/i).first().click();

  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'Screenshot/image1.png' });
  await page.locator('#navbar-main').screenshot({ path: 'Screenshot/image2.png' });
});
