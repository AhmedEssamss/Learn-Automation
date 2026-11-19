import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';




test.describe('Login page', () => {

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        console.log("Before Each Test");
    });

test('valid login', async ({ page }) => {
        await loginPage.login("Admin", "admin123");
        await expect(loginPage.dashboardHeader).toBeVisible();
    });

test('invalid login', async ({ page }) => {
        await loginPage.login("Admin", "admin12");
        await expect(loginPage.invalidloginmessage).toBeVisible();
    });

});