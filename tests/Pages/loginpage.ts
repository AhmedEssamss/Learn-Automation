import {  type Locator, type Page } from "@playwright/test";

export class LoginPage {
    alertText(alertText: any) {
        throw new Error('Method not implemented.');
    }
    // locators
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly Url: string = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    readonly dashboardHeader: Locator;
    readonly invalidloginmessage: Locator;
    //constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("input[placeholder='Username']");
        this.passwordInput = page.locator("input[placeholder='Password']");
        this.loginButton = page.locator("button[type='submit']");
        this.dashboardHeader = page.locator("h6:has-text('Dashboard')");
        this.invalidloginmessage = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']");
    }

    //methods
    async navigateToLoginPage() {
        await this.page.goto(this.Url);
    }   

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}