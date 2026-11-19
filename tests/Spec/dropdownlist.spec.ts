import {test,expect} from '@playwright/test';

test('dropdownlist', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dropdown');
   // await page.locator('#country').selectOption('Egypt');
    //await page.locator('#country').selectOption({ "label": "Egypt" });
   // await page.locator('#country').selectOption('EG');
     // await page.locator('#country').selectOption({ "index": 2 });

      const selectedOption =  page.locator('#country');
       await selectedOption.selectOption('EG');
        await expect(selectedOption).toHaveValue('EG');

});