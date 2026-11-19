# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Spec\LoginWithPOM.spec.ts >> Login page >> invalid login
- Location: tests\Spec\LoginWithPOM.spec.ts:22:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//p[@class=\'oxd-text oxd-text--p oxd-alert-content-text\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('//p[@class=\'oxd-text oxd-text--p oxd-alert-content-text\']') with timeout 5000ms
  - waiting for locator('//p[@class=\'oxd-text oxd-text--p oxd-alert-content-text\']')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../Pages/loginpage';
  3  | 
  4  | 
  5  | 
  6  | 
  7  | test.describe('Login page', () => {
  8  | 
  9  | let loginPage: LoginPage;
  10 | 
  11 | test.beforeEach(async ({ page }) => {
  12 |         loginPage = new LoginPage(page);
  13 |         await loginPage.navigateToLoginPage();
  14 |         console.log("Before Each Test");
  15 |     });
  16 | 
  17 | test('valid login', async ({ page }) => {
  18 |         await loginPage.login("Admin", "admin123");
  19 |         await expect(page.locator("//h6[normalize-space()='Dashboard']")).toBeVisible();
  20 |     });
  21 | 
  22 | test('invalid login', async ({ page }) => {
  23 |         await loginPage.login("Admin", "admin12");
> 24 |         await expect(page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")).toBeVisible();
     |                                                                                                 ^ Error: expect(locator).toBeVisible() failed
  25 |     });
  26 | 
  27 | });
```