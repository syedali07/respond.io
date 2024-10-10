const { expect } = require("@playwright/test")

exports.Workspaces = class Workspaces {
    constructor(page){
        this.prevWorkspaceActionBtn = page.getByRole('row', { name: 'Another 1' }).getByRole('button')
        this.deleteAction = page.getByText('Delete')
        this.deleteTextField = page.getByPlaceholder('Another')
        this.deleteBtn = page.getByRole('button', { name: 'Delete' })
        this.addWorkspaceBtn = page.getByRole('button', { name: 'Add Workspace' })
        this.workspaceNameField = page.getByPlaceholder('Name your workspace e.g.')
        this.addWorkspace_nextButton = page.getByRole('button', { name: 'Next' })
        this.workspaceSuccessMessage = page.locator("//p[@class='dls-txt-body dls-text-text-primary']").getByText('Workspace added Successfully.')
        this.addUserBtn = page.getByRole('button', { name: 'Add User' })
        this.secondEmailAddField = page.locator("(//input[@placeholder='Email Address'])[2]")
        this.selectAccess = page.getByRole('dialog').locator('i').nth(2)
        this.managerAccessOption = page.getByText('Manager')
        this.inviteBtn = page.getByRole('button', { name: 'Invite Users' })
        this.userAddSuccessMessage = page.locator("//p[@class='dls-txt-body dls-text-text-primary']").getByText('Users added to workspace')
    }   

    async clickPrevWorkSpaceActionButton(){
        await this.prevWorkspaceActionBtn.click()
    }

    async deleteExistingWorkSpace(){
        await this.deleteAction.click()
        await this.deleteTextField.click()
        await this.deleteTextField.fill('Another 1')
        await this.deleteBtn.click()
    }

    async addWorkspace(){
        await this.addWorkspaceBtn.click()
        await this.workspaceNameField.click()
        await this.workspaceNameField.fill("Another 1")
        await this.addWorkspace_nextButton.click()
    }

    async addUserToWorkspace(){
        await this.addUserBtn.click()
        await this.secondEmailAddField.click()
        await this.secondEmailAddField.fill("muhammed_ali101@hotmail.com")
        await this.selectAccess.click()
        await this.managerAccessOption.click()
        await this.inviteBtn.click()
    }

    async validateWorkspaceAddedSuccessfully(){
        await expect(this.workspaceSuccessMessage).toBeVisible()
        await expect(this.workspaceSuccessMessage).toContainText('Workspace added Successfully.')
    }

    async validateUserAddedSuccessfully(){
        await expect(this.userAddSuccessMessage).toBeVisible()
        await expect(this.userAddSuccessMessage).toContainText("Users added to workspace Successfully.")
    }

}