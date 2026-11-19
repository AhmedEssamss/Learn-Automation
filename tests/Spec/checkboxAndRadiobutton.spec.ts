import {test, expect} from '@playwright/test';

test('checkbox and radiobutton', async ({ page }) => {
/*     await page.goto('https://practice.expandtesting.com/checkboxes');
    ait page.locator('#checkbox1').check();
    await expect(page.locator('#checkbox2')).toBeChecked(); */

    // Radiobutton
    await page.goto('https://practice.expandtesting.com/radio-buttons');
    await page.locator('#red').check();
    await expect(page.locator('#blue')).not.toBeChecked();
    await page.locator('#football').click();
});