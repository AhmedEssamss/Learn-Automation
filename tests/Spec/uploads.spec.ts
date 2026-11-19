import {test, expect} from '@playwright/test';

test('upload files', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileUpload.html');
    await page.locator("//input[@id='input-4']").setInputFiles('test-data/playwright.pdf');
    await page.locator("//button[@title='Upload selected files']").click();
    //await page.waitForTimeout(6000);
    await page.locator("//input[@id='input-4']").setInputFiles([]);
});