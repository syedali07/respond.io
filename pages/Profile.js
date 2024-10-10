const { expect } = require("@playwright/test")

exports.ProfilePage = class ProfilePage {
    constructor(page){
        this.page = page
        this.workspace_btn = page.getByRole('link', { name: ' Workspaces' })
    }

    async goToWorkspaces(){
        await this.workspace_btn.click()
    }

    async validatePageTitle(){
        await expect(this.page).toHaveTitle("Profile - respond.io")
    }
}