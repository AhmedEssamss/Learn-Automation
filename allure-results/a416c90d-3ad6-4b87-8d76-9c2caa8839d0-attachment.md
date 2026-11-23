# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Spec\LoginWithPOM.spec.ts >> Login page >> valid login
- Location: tests\Spec\LoginWithPOM.spec.ts:35:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {  type Locator, type Page } from "@playwright/test";
  2  | 
  3  | export class LoginPage {
  4  |     alertText(alertText: any) {
  5  |         throw new Error('Method not implemented.');
  6  |     }
  7  |     // locators
  8  |     readonly page: Page;
  9  |     readonly usernameInput: Locator;
  10 |     readonly passwordInput: Locator;
  11 |     readonly loginButton: Locator;
  12 |     readonly Url: string = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  13 |     readonly dashboardHeader: Locator;
  14 |     readonly invalidloginmessage: Locator;
  15 |     //constructor
  16 |     constructor(page: Page) {
  17 |         this.page = page;
  18 |         this.usernameInput = page.locator("input[placeholder='Username']");
  19 |         this.passwordInput = page.locator("input[placeholder='Password']");
  20 |         this.loginButton = page.locator("button[type='submit']");
  21 |         this.dashboardHeader = page.locator("h6:has-text('Dashboard')");
  22 |         this.invalidloginmessage = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']");
  23 |     }
  24 | 
  25 |     //methods
  26 |     async navigateToLoginPage() {
> 27 |         await this.page.goto(this.Url);
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  28 |     }   
  29 | 
  30 |     async login(username: string, password: string) {
  31 |         await this.usernameInput.fill(username);
  32 |         await this.passwordInput.fill(password);
  33 |         await this.loginButton.click();
  34 |     }
  35 | 
  36 | }
```