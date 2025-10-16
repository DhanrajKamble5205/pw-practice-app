import { Page } from "@playwright/test";

export class DatePicker {
    private readonly page:Page

    constructor (page:Page){
        this.page = page

    }

    async SelectCommanDate (numofData:number){
        await this.page.getByText('Tester’s Hub').first().hover()
        await this.page.getByText('Demo Testing Site').first().hover()
        await this.page.locator('#menu-item-2827').click()
        await this.page.waitForTimeout(500)
        await this.page.locator('iframe.demo-frame #datepicker ').first().click()
        await this.page.locator('table.ui-datepicker-calendar',{hasText:"16"}).click()
    }
}