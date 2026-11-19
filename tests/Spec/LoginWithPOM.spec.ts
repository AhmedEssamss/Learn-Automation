import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import jsonData from '../../test-data/UserData.json';
import tsData from '../../test-data/testUser.ts';
import paramData from '../../test-data/Parametrize.ts';

// Parse the JSON data into a JavaScript object
//const parseData = JSON.parse(JSON.stringify(jsonData));

test.describe('Login page', () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
    });

    test('valid login', async ({ page }) => {
        await loginPage.login(tsData.username, tsData.password);
        await expect(loginPage.dashboardHeader).toBeVisible();
    });

    paramData.forEach(({ username, password, type }) => {
        test(`invalid login for ${type}`, async ({ page }) => {
            await loginPage.login(username, password);
            await expect(loginPage.invalidloginmessage).toBeVisible();
        });
    });

});