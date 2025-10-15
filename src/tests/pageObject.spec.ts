import {test, expect} from '@playwright/test'
import { NavigationPage } from '../page-object/navigationPage'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.globalsqa.com/')
})

test('Page Object Model',async({page}) => {
    const navigationTo = new NavigationPage(page)
    await navigationTo.Tags()
    await navigationTo.FreeEBooks()
  
})