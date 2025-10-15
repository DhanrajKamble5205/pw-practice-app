import { Page } from "@playwright/test";
import { FormLayoutsComponent } from "../app/pages/forms/form-layouts/form-layouts.component";
import { delay } from "rxjs-compat/operator/delay";
import { timeout } from "rxjs-compat/operator/timeout";

export class NavigationPage {
    readonly page:Page

    constructor (page:Page) {
        this.page = page
    }

    async DeepLearning() {
    await this.page.getByText('Free Ebooks').first().click()
    await this.page.waitForTimeout(200)
    await this.page.getByRole('link', { name: 'Deep Learning eBooks' }).click();   
    }

     async MachineLearning() {
    await this.page.getByText('Free Ebooks').first().click()
    await this.page.waitForTimeout(200)
    await this.page.getByRole('link', { name: 'Machine Learning eBooks' }).click(); 
    await this.page.waitForTimeout(200)
    await this.page.mouse.wheel(0, 400);
    await this.page.waitForTimeout(200)
    const locator = this.page.locator('ul.wp-block-list li',{hasText:'A Course in Machine Learning'})
                    .getByRole('link', { name: '[Download]' }).click();
    // await this.page.waitForSelector('ul.wp-block-list');
    await this.page.waitForTimeout(60000)
    
    //await locator.waitFor({ state: 'visible', timeout: 60000 });
    // await locator.scrollIntoViewIfNeeded();
    // await locator.click();

    }

    async TensorfloweBooks() {
    await this.page.getByText('Free Ebooks').first().click()
    await this.page.waitForTimeout(200)
    await this.page.getByRole('link', { name: 'Tensorflow eBooks' }).click();   
    }

    async ElasticsearcheBooks() {
    await this.page.getByText('Free Ebooks').first().click()
    await this.page.waitForTimeout(200)
    await this.page.getByRole('link', { name: 'Elasticsearch eBooks' }).click();   
    }

}
