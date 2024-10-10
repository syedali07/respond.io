const { expect } = require("@playwright/test")
const { title } = require("process")

exports.DashboardPage = class DashboardPage {
    constructor(page){
        this.page=page
        this.settings_btn=page.locator("(//div[@class='v-list-item__append'])[7]")
    }

    async validateLoginSuccess(){
        await expect(this.page).toHaveTitle('Dashboard - respond.io')
    }

    async goToSettings(){
        await this.settings_btn.click()
    }

    async checkUserIsAtDashboard(){
        await this.page.waitForSelector("//div[@class='v-list-item__content']/button")
        // console.log("Page Title:" + (await this.page.title()))

        if ((await this.page.title()) === 'Dashboard - respond.io') {
            return true
        }else{
            return false
        }
    }
}