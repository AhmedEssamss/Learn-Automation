import { test, expect } from '@playwright/test';

test('فتح صفحة تسجيل الدخول - Ibbil', async ({ page }) => {
  // روح لصفحة اللوجين
  await page.goto('https://ibbil-website-refactor-dev.dafa.dev/auth/login');

  // استنى لحد ما الصفحة تخلص تحميل
  await page.waitForLoadState('networkidle');

  // اطبع عنوان الصفحة في الترمينال (للتأكد إنها فتحت صح)
  console.log('Page title:', await page.title());

  // مثال بسيط: تأكد إن الصفحة فيها حاجة معينة (لو عارف اسم عنصر زي زرار اللوجين أو حقل الإيميل، عدّل السطر ده)
  // await expect(page.locator('text=Login')).toBeVisible();

  // لقطة شاشة للصفحة كدليل بصري
  await page.screenshot({ path: 'login-page.png', fullPage: true });
});


