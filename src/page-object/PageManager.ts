import { Page } from "@playwright/test";
import { promises } from "dns";
import { NavigationPage } from '../page-object/navigationPage'
import { DatePicker } from '../page-object/DatePicker'

export class PageManager {
    private readonly page:Page
    private readonly navigationPage:NavigationPage
    private readonly DatePicker:DatePicker 

    constructor(page:Page){
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.DatePicker = new DatePicker(this.page)
    }

    navigateTo(){
        return this.navigationPage
        
    }
    fromLayoutsPage(){
            return this.page.locator('#navbar').screenshot({ path: 'Screenshot/Layout.png'})
        }
    DatePick(){
        return this.DatePick
    }
}