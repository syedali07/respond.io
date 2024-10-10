import {test, expect} from '@playwright/test';
import { Env } from '../files/Env';
import { LoginPage } from '../pages/Login';
import { DashboardPage } from '../pages/Dashboard';
import { ProfilePage } from '../pages/Profile';
import { Workspaces } from '../pages/Workspaces';

test.beforeEach(async ({page}) => {

    await page.goto('https://app.respond.io/user/login')
})

test('Login Success', async ({page}) => {
    
    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)
    const profilePage = new ProfilePage(page)
    
    await loginPage.validatePageTitle()
    await loginPage.login("syedmuhammadali1337@gmail.com", "Somepassword!1")
    
    if (await dashboardPage.checkUserIsAtDashboard()) {
        //Asserting successful login
        await dashboardPage.validateLoginSuccess()
    } else{
        //Asserting successful login
        await profilePage.validatePageTitle()
    }
});

test('Add User Workspace Successfully', async ({page}) => {

    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)
    const profilePage = new ProfilePage(page)
    const workspace = new Workspaces(page)

    await loginPage.login("syedmuhammadali1337@gmail.com", "Somepassword!1")

    if (await dashboardPage.checkUserIsAtDashboard()) {
        
        await dashboardPage.goToSettings()
        await profilePage.goToWorkspaces()

        await workspace.clickPrevWorkSpaceActionButton()
        await workspace.deleteExistingWorkSpace()
        await workspace.addWorkspace()
        //Validating if the workspace was successfully added
        await workspace.validateWorkspaceAddedSuccessfully()
        await workspace.addUserToWorkspace()
        //Validating if the user was successfully added to the workspace
        await workspace.validateUserAddedSuccessfully()
    } else{
        
        await profilePage.goToWorkspaces()

        await workspace.clickPrevWorkSpaceActionButton()
        await workspace.deleteExistingWorkSpace()
        await workspace.addWorkspace()
        //Validating if the workspace was successfully added
        await workspace.validateWorkspaceAddedSuccessfully()
        await workspace.addUserToWorkspace()
        //Validating if the user was successfully added to the workspace
        await workspace.validateUserAddedSuccessfully()
    }
})