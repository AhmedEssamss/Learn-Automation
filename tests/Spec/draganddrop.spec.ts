import {test, expect} from '@playwright/test';
test('drag and drop files', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/drag-and-drop');
    const targeta = page.locator("#column-b");
    const targetb = page.locator("#column-a");
    await targeta.dragTo(targetb);
});

test('slider', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/horizontal-slider');
    const slider = page.locator("//input[@value='0']");
    await slider.evaluate(e => {
        e.setAttribute('value', '3.5');
    })
    await page.pause();
    
});

test('Alerts', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    // 1 alerts
    /* page.on('dialog', async dialog => {
        await dialog.accept();
    })
    await page.locator("#alertBtn").click(); */

    // 2 confirmation alerts
    /* page.on('dialog', async dialog => {
        await dialog.dismiss();
    })
    await page.locator("#confirmBtn").click();
    await expect(page.locator("#demo")).toHaveText("You pressed Cancel!"); */

    // 3 prompt alerts
     page.on('dialog', async dialog => {
        await dialog.accept("Ahmed Essam");
    })
    await page.locator("#promptBtn").click();
    await expect(page.locator("#demo")).toHaveText("Hello Ahmed Essam! How are you today?"); 
    
});