import { test, expect } from '@playwright/test';

test('element action', async ({ page }) => {
  await page.goto('https://wathiqaty-website-dev.dafa.dev/login');
  
  // 1. Locate the phone input
  const phoneInput = page.getByRole('textbox', { name: 'أدخل رقم جوالك' });
  
  // 2. Click it first to remove the readonly state / focus it
  await phoneInput.click();
  
  // 3. Now fill it
  await phoneInput.fill('1097048325');
  
  // Password field
  await page.getByRole('textbox', { name: 'كلمة المرور' }).fill('Test_123');
  
  // Submit button
  await page.getByRole('button', { name: 'تسجيل الدخول' }).press('Enter');
  
  // Assertion
  await expect(page.getByText('تحقق من تسجيل الدخول', { exact: true })).toBeVisible();

  await page.getByText('Dev code:', { exact: true }).click();

  const test =  page.getByRole('heading', { name: 'مرحبًا بعودتك، احمد' });
   
  await expect(test).toBeVisible();

});