import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')
})

test('DragAndDrop',async({page}) => {
    await page.get
})