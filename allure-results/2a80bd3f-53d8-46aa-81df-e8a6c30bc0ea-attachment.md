# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Spec\LoginWithPOM.spec.ts >> Login page >> invalid login for invalid password
- Location: tests\Spec\LoginWithPOM.spec.ts:37:9

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
  3  | import jsonData from '../../test-data/UserData.json';
  4  | import tsData from '../../test-data/testUser.ts';
  5  | import paramData from '../../test-data/Parametrize.ts';
  6  | 
  7  | // Parse the JSON data into a JavaScript object
  8  | //const parseData = JSON.parse(JSON.stringify(jsonData));
  9  | let loginPage: LoginPage;
  10 | 
  11 | test.beforeAll(' before all tests', async () => {
  12 |     console.log("Before all tests");
  13 | })
  14 | 
  15 | test.afterAll(' after all tests', async () => {
  16 |     console.log("After all tests");
  17 | })
  18 | 
  19 | test.afterEach(' after each test', async ({ }, testInfo) => {
  20 |     console.log(`After each test : ${testInfo.title}`);
  21 | })
  22 | 
  23 | test.beforeEach(async ({ page }, testInfo) => {
  24 |     console.log(`Before each test : ${testInfo.title}`);
  25 |     loginPage = new LoginPage(page);
  26 |     await loginPage.navigateToLoginPage();
  27 | });
  28 | test.describe('Login page', () => {
  29 | 
  30 | 
  31 |     test('valid login', async ({ page }) => {
  32 |         await loginPage.login(tsData.username, tsData.password);
  33 |         await expect(loginPage.dashboardHeader).toBeVisible();
  34 |     });
  35 | 
  36 |     paramData.forEach(({ username, password, type }) => {
  37 |         test(`invalid login for ${type}`, async ({ page }) => {
  38 |             await loginPage.login(username, password);
> 39 |             await expect(loginPage.invalidloginmessage).toBeVisible();
     |                                                         ^ Error: expect(locator).toBeVisible() failed
  40 |         });
  41 |     });
  42 | 
  43 | });
```