import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {

    await page.goto('http://www.uitestingplayground.com/ajax')
    await page.locator('#ajaxButton').click()

})

test('Auto wait checking',async({page}) => {
    const sucessbut =  page.locator('.bg-success').textContent
    await expect(sucessbut).toEqual('Data loaded with AJAX get request.')
})