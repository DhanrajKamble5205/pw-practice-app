import { test, expect } from '@playwright/test'

test.beforeEach ('Comman Url part', async({page}) => {
await page.goto("https://www.amazon.in/")
await page.locator(':test-is ("Search Amazon.in")')
})

test ('Amazon Mobile selection and click on Buy option', async({page}) => {
    await page.locator(':test-is ("Search Amazon.in")')