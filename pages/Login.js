import { expect } from "@playwright/test"

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page
        this.username_field = page.locator("//input[@placeholder='Email address']")
        this.password_field = page.locator("//input[@placeholder='Password']")
        this.signIn_button=page.getByRole('button', { name: 'Sign in' })
    }

    async login(username, password){
        await this.username_field.fill(username)
        await this.password_field.fill(password)
        await this.signIn_button.click()
    }
    
    async validatePageTitle(){
        await expect(this.page).toHaveTitle('respond.io')
    }
}