import { test, expect } from '@playwright/test';

test('Frames', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');

  /*   const frames =  page.frames();
    const frame = page.frameLocator('#singleframe');
    await frame.locator("input[type='text']").fill('Ahmed'); */

    await page.locator(".analystic[href='#Multiple']").click();
    const frame1 = await page.frameLocator("//iframe[@src='MultipleFrames.html']");
    const frame2 = await frame1.frameLocator("iframe[src='SingleFrame.html']");
    await frame2.locator("//input[@type='text']").fill('Ahmed Essam');

});