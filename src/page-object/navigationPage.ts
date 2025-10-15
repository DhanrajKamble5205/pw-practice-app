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

     async Tags() {
       const menuItems = ['About', 'CheatSheets', 'Free Ebooks', 'Tester’s Hub', 'Contact Us'];
        for (const item of menuItems) {
        await this.page.getByText(item).first().click();
        await this.page.waitForTimeout(500); // short pause between clicks
        }
     }

     async FreeEBooks() {
    // Step 1 - Machine Learning ebooks
        await this.page.getByText('Free Ebooks').first().hover();
        const MachineLearningLink = this.page.locator('[style="display: block;"] ul.sub-menu li',
            { hasText: 'Free Machine Learning Ebooks' });
        await MachineLearningLink.click();

        // const MachineLearningDownload = this.page.locator('ul.wp-block-list li',
        //     { hasText: 'A Course in Machine Learning' }).getByRole('link', { name: '[Download]' });
        // await MachineLearningDownload.waitFor({ state: 'visible', timeout: 10000 });
        // await MachineLearningDownload.scrollIntoViewIfNeeded();
        // await MachineLearningDownload.click();
        await this.page.waitForTimeout(1000);
        console.log('✅ Machine Learning sections visited Successfully.');

    // Step 2 - Deep Learning ebooks
        await this.page.getByText('Free Ebooks').first().hover();

        const deepLearningLink = this.page.locator('[style="display: block;"] ul.sub-menu li',
            { hasText: 'Free Deep Learning eBooks' });
        await deepLearningLink.click();
        await this.page.waitForTimeout(1000);
        console.log('✅ Deep Learning sections visited Successfully.');

// Step 3 - Free Elasticsearch eBooks
            await this.page.getByText('Free Ebooks').first().hover()
            const ElasticsearcheBooksLink = this.page.locator('[style="display: block;"] ul.sub-menu li', 
                {hasText:"Free Elasticsearch eBooks"})
            await ElasticsearcheBooksLink.click()  
            await this.page.waitForTimeout(1000);
            console.log('✅ Elasticsearch eBooks sections visited Successfully.');

// Step 4 - Free Tensorflow eBooks
            await this.page.getByText('Free Ebooks').first().hover()
            const TensorfloweBooksLink = this.page.locator('[style="display: block;"] ul.sub-menu li', 
                {hasText:"Free Tensorflow eBooks"})
            await TensorfloweBooksLink.click()
            await this.page.waitForTimeout(1000); 
            console.log('✅ Tensorflow Learning sections visited Successfully.'); 
        

    }
}
