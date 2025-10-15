import { Page } from "@playwright/test";
import { FormLayoutsComponent } from "../app/pages/forms/form-layouts/form-layouts.component";
import { delay } from "rxjs-compat/operator/delay";
import { timeout } from "rxjs-compat/operator/timeout";
import { time } from "echarts";

export class NavigationPage {
    readonly page:Page

    constructor (page:Page) {
        this.page = page
    }

    async MachineLearning() {
        await this.page.getByText('Free Ebooks').first().click()
        await this.page.locator('[style="display: block;"] ul.sub-menu li', 
            {hasText:"Free Machine Learning Ebooks"}).click()

        const locator = this.page.locator('ul.wp-block-list li',
            {hasText:'A Course in Machine Learning'})
            .getByRole('link', { name: '[Download]' }).click();
        // await this.page.waitForSelector('ul.wp-block-list');
        await this.page.waitForTimeout(60000)
        
        //await locator.waitFor({ state: 'visible', timeout: 60000 });
        // await locator.scrollIntoViewIfNeeded();
        // await locator.click();
            await this.page.waitForTimeout(500)
    }

    async DeepLearning() {
        await this.page.getByText('Free Ebooks').first().hover()
        await this.page.locator('[style="display: block;"] ul.sub-menu li', 
            {hasText:"Free Deep Learning eBooks"}).click()   
            await this.page.waitForTimeout(500)
    }

    async TensorfloweBooks() {
        await this.page.getByText('Free Ebooks').first().hover()
        await this.page.locator('[style="display: block;"] ul.sub-menu li', 
            {hasText:"Free Tensorflow eBooks"}).click()
            await this.page.waitForTimeout(500)  
    }

    async ElasticsearcheBooks() {
        await this.page.getByText('Free Ebooks').first().hover()
        await this.page.locator('[style="display: block;"] ul.sub-menu li', 
            {hasText:"Free Elasticsearch eBooks"}).click()  
            await this.page.waitForTimeout(500) 
    }

}
