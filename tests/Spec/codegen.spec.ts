import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wathiqaty-website-dev.dafa.dev/login');
  await page.getByRole('textbox', { name: 'أدخل رقم جوالك' }).click();
  await page.getByRole('textbox', { name: 'أدخل رقم جوالك' }).fill('1097048325');
  await page.getByRole('textbox', { name: 'كلمة المرور' }).click();
  await page.getByRole('textbox', { name: 'كلمة المرور' }).fill('Test_123');
  await page.getByRole('button', { name: 'إظهار كلمة المرور' }).click();
  await page.getByRole('button', { name: 'تسجيل الدخول' }).click();
  await expect(page.getByText('تحقق من تسجيل الدخول', { exact: true })).toBeVisible();
/*   await page.getByRole('textbox', { name: 'رمز التحقق' }).fill('');
  await page.getByRole('button', { name: 'Use the development code' }).click();
  await page.getByRole('textbox', { name: 'رمز التحقق' }).fill('662192');
  await page.getByRole('link', { name: 'لوحة التحكم' }).click();
  await page.getByRole('button', { name: 'وثائق التأمين الطبي' }).click();
  await page.getByRole('link', { name: 'سجل المدفوعات' }).click();
  await page.getByRole('tab', { name: 'قيد الانتظار' }).click();
  await page.getByRole('tab', { name: 'مدفوع' }).click();
  await page.getByRole('tab', { name: 'فشل' }).click();
  await page.getByRole('tab', { name: 'مسترد' }).click();
  await page.getByRole('tab', { name: 'ملغي' }).click();
  await page.getByRole('tab', { name: 'مستحق الاسترداد' }).click(); */
});