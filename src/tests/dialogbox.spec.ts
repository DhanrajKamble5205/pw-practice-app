import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/js-dialogs')
 
  })

test('Dialog Box', async({page}) => {

page.on('dialog', dialog => {
expect(dialog.message()).toEqual('I am a Js Confirm')
dialog.accept()

})
await page.getByRole('button',{name: "Js Confirm"}).click()
})