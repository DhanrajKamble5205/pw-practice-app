import {test} from '@playwright/test'

test ('The first test',async({page}) => {
await page.goto("https://www.youtube.com")
await page.getByText('Shorts').check
await page.getByText('Home').check
})