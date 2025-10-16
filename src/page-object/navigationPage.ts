import { Locator, Page ,expect } from "@playwright/test";
import { FormLayoutsComponent } from "../app/pages/forms/form-layouts/form-layouts.component";
import { delay } from "rxjs-compat/operator/delay";
import { timeout } from "rxjs-compat/operator/timeout";
import { time } from "echarts";

export class NavigationPage {
        readonly page:Page
        readonly FreeEBooksLoct : Locator
        readonly MachineLearningLoct : Locator
        readonly DeepLearningLoct : Locator
        readonly ElasticsearchLoct : Locator
        readonly TensorflowLoct : Locator

    constructor (page:Page) {
        this.page = page
        this.FreeEBooksLoct = page.getByText('Free Ebooks')
        this.MachineLearningLoct = page.locator('[style="display: block;"] ul.sub-menu li',
            { hasText: 'Free Machine Learning Ebooks' });
        this.DeepLearningLoct = page.locator('[style="display: block;"] ul.sub-menu li',
            { hasText: 'Free Deep Learning eBooks' });
        this.ElasticsearchLoct = page.locator('[style="display: block;"] ul.sub-menu li', 
                {hasText:"Free Elasticsearch eBooks"});
        this.TensorflowLoct = page.locator('[style="display: block;"] ul.sub-menu li', 
                {hasText:"Free Tensorflow eBooks"});
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
        await this.FreeEBooksLoct.first().hover();
        const MachineLearningLink = this.MachineLearningLoct
        await MachineLearningLink.click();

        // const MachineLearningDownload = this.page.locator('ul.wp-block-list li',
        //     { hasText: 'A Course in Machine Learning' }).getByRole('link', { name: '[Download]' });
        // await MachineLearningDownload.waitFor({ state: 'visible', timeout: 10000 });
        // await MachineLearningDownload.scrollIntoViewIfNeeded();
        // await MachineLearningDownload.click();
        await this.page.waitForTimeout(1000);
        console.log('✅ Machine Learning sections visited Successfully.');

    // Step 2 - Deep Learning ebooks
            await this.FreeEBooksLoct.first().hover();

            const deepLearningLink = this.DeepLearningLoct
            await deepLearningLink.click();
            await this.page.waitForTimeout(1000);
            console.log('✅ Deep Learning sections visited Successfully.');

// Step 3 - Free Elasticsearch eBooks
            await this.FreeEBooksLoct.first().hover();
            const ElasticsearcheBooksLink = this.ElasticsearchLoct
            await ElasticsearcheBooksLink.click()  
            await this.page.waitForTimeout(1000);
            console.log('✅ Elasticsearch eBooks sections visited Successfully.');

// Step 4 - Free Tensorflow eBooks
            await this.FreeEBooksLoct.first().hover();
            const TensorfloweBooksLink = this.TensorflowLoct
            await TensorfloweBooksLink.click()
            await this.page.waitForTimeout(1000); 
            console.log('✅ Tensorflow Learning sections visited Successfully.'); 
        

    }
// Parametrized Method declation
    async ContactUs(name:string, email:string, subject:string) {
            click();
        await this.page.waitForTimeout(5000)
        await this.page.getByRole('textbox',{name:"Name"}).fill(name)
        await this.page.getByRole('textbox',{name:"Email"}).fill(email)
        await this.page.getByRole('textbox',{name:"Subject"}).fill(subject)
        await this.page.getByPlaceholder('Message').fill('This is a test message')
        //await this.page.locator('.rc-anchor-content #recaptcha-anchor').first().click()
        await this.page.getByRole('button',{name:"Send"}).click()
        expect(await this.page.locator('.warning_msg closable').isVisible())

        console.log('✅ Contact Us testcase passed successfully.');
    }
}
