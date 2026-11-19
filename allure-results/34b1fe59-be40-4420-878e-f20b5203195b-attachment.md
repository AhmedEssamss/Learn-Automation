# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Spec\LoginWithPOM.spec.ts >> Login page >> valid login
- Location: tests\Spec\LoginWithPOM.spec.ts:18:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h6:has-text(\'Dashboard\')')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('h6:has-text(\'Dashboard\')') with timeout 5000ms
  - waiting for locator('h6:has-text(\'Dashboard\')')

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Invalid credentials
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../Pages/loginpage';
  3  | import jsonData from '../../test-data/UserData.json';
  4  | 
  5  | // Parse the JSON data into a JavaScript object
  6  | const parseData = JSON.parse(JSON.stringify(jsonData));
  7  | 
  8  | test.describe('Login page', () => {
  9  | 
  10 | let loginPage: LoginPage;
  11 | 
  12 | test.beforeEach(async ({ page }) => {
  13 |         loginPage = new LoginPage(page);
  14 |         await loginPage.navigateToLoginPage();
  15 |         console.log("Before Each Test");
  16 |     });
  17 | 
  18 | test('valid login', async ({ page }) => {
  19 |         await loginPage.login(parseData.username, parseData.password);
> 20 |         await expect(loginPage.dashboardHeader).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  21 |     });
  22 | 
  23 | test('invalid login', async ({ page }) => {
  24 |         await loginPage.login(parseData.username, "wrongpassword");
  25 |         await expect(loginPage.invalidloginmessage).toBeVisible();
  26 |     });
  27 | 
  28 | });
```