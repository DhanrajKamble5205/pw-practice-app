import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/practice')
 
  })
  // input text in the field
  test('Input text value', async({page}) => {
    await page.getByPlaceholder('Start Typing...').pressSequentially('First test',{delay: 500})
  })

  // radio button
test ('Radio button example', async({page}) => {
    await page.locator('#bmwradio').check()
    await page.locator('#benzradio').check()
    const radioStatus = await page.locator('#bmwradio').isChecked()
   // expect(radioStatus).toBeTruthy()

    //OR
    //expect(await page.locator('#bmwradio')).toBeChecked()

    expect(await page.locator('#bmwradio').isChecked()).toBeFalsy()
    expect(await page.locator('#benzradio').isChecked()).toBeTruthy()
})

test('Check Box', async({page}) => {
    await page.locator('#bmwcheck').check()
    await page.locator('#bmwcheck').uncheck();

    const allCheckBox = page.getByRole('checkbox')

    for(const box of await allCheckBox.all()){
        await box.check()
        expect(await box.isChecked()).toBeTruthy()

        await box.uncheck()
        expect(await box.isChecked()).toBeFalsy()
    }

})

test('List & Dropdown', async({page}) => {
 await page.locator('#carselect').selectOption({ label: 'Benz' });
})

test('Tooltip example', async({page}) => {
 await page.getByRole('button',{name: "Mouse Hover"}).hover()
})

