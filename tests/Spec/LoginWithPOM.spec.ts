import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import jsonData from '../../test-data/UserData.json';
import tsData from '../../test-data/testUser.ts';

// Parse the JSON data into a JavaScript object
//const parseData = JSON.parse(JSON.stringify(jsonData));

test.describe('Login page', () => {

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        console.log("Before Each Test");
    });

test('valid login', async ({ page }) => {
        await loginPage.login(tsData.username, tsData.password);
        await expect(loginPage.dashboardHeader).toBeVisible();
    });

test('invalid login', async ({ page }) => {
        await loginPage.login(tsData.username, "wrongpassword");
        await expect(loginPage.invalidloginmessage).toBeVisible();
    });

});