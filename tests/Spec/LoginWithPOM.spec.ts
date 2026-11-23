import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import jsonData from '../../test-data/UserData.json';
import tsData from '../../test-data/testUser.ts';
import paramData from '../../test-data/Parametrize.ts';

// Parse the JSON data into a JavaScript object
//const parseData = JSON.parse(JSON.stringify(jsonData));
let loginPage: LoginPage;

test.beforeAll(' before all tests', async () => {
    console.log("Before all tests");
})

test.afterAll(' after all tests', async () => {
    console.log("After all tests");
})

test.afterEach(' after each test', async ({ }, testInfo) => {
    console.log(`After each test : ${testInfo.title}`);
})

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Before each test : ${testInfo.title}`);
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
});
test.describe('Login page', () => {

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