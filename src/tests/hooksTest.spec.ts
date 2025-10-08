import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})

test.describe('Suite1',() => {
    test.beforeEach(async({page}) => {
        await page.getByText('FormLayout').click()
    })
    test('Navigate to datepicker page', async({page})=> {
        await page.getByText('DatePicker').click()
    })
})