# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locators.spec.ts >> element action
- Location: tests\locators.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'مرحبًا بعودتك، احمد' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'مرحبًا بعودتك، احمد' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'مرحبًا بعودتك، احمد' })

```

```yaml
- main:
  - link "وثيقتي":
    - /url: /
    - img "وثيقتي"
  - navigation "التنقل الرئيسي":
    - link "الرئيسية":
      - /url: /
    - button "أمن الآن"
    - link "عن وثيقتي":
      - /url: /about
    - link "تواصل معنا":
      - /url: /contact
    - link "الأسئلة الشائعة":
      - /url: /faqs
  - button "تغيير اللغة": English
  - button "فتح قائمة المستخدم": اع هوية موثقة احمد عصام السيد احمد خليل العايدى testerahmed40@gmail.com
  - region "أسهل الإجراءات، وأسرعها، وأوفرها":
    - heading "أسهل الإجراءات، وأسرعها، وأوفرها" [level=1]
    - paragraph: وثيقتي، وسيطك الأول في مصر لشراء التأمين، والحجز، ومقارنة أفضل عروض تأمين السيارات (الطبي) من كبرى الشركات، لتختار وتشتري وثيقتك فورًا بسهولة وفي لحظات.
    - link "لوحة التحكم":
      - /url: /dashboard
    - link "تعرف على خدمتنا":
      - /url: "#services"
  - img "الهيئة العامة للرقابة المالية"
  - paragraph: منصة وثيقتي مرخصة من ضمن البيئة التنظيمية التابعة للهيئة العامة للرقابة المالية - جمهورية مصر العربية
  - region "خدماتنا":
    - heading "خدماتنا" [level=2]
    - paragraph: كل ما تحتاجه من خدمات التأمين في مكان واحد، لتجربة سلسة وراحة بال كاملة
    - group "1 / 2":
      - article:
        - img "طبيب يتحدث مع مريض"
        - heading "تأمين طبي للأفراد" [level=3]
        - paragraph: تأمين صحي شامل وسريع وبأسعار مناسبة تجعل تجربة التأمين أسهل وأكثر راحة.
        - link "اشترك الآن":
          - /url: /individual-medical-insurance
    - group "2 / 2":
      - article:
        - img "عميل يستلم مفاتيح سيارته الجديدة"
        - heading "تأمين السيارات الجديدة" [level=3]
        - paragraph: أمّن سيارتك بأفضل الأسعار وسهولة تامة، مع تجربة تأمين سلسة ومتكاملة.
        - link "اشترك الآن":
          - /url: /new-cars-insurance
  - region "لماذا تستخدم وثيقتي":
    - heading "لماذا تستخدم وثيقتي" [level=2]
    - paragraph: صُمم خصيصًا ليضمن لك التجربة المثالية للتأمين، مع أفضل خدمة، بسعر منخفض وبأسهل طريقة ممكنة.
    - article:
      - heading "منصة متكاملة" [level=3]
      - paragraph: "منصة واحدة متخصصة في مقارنة وتقديم أفضل عروض الأسعار لجميع أنواع التأمين: التأمين الطبي للأفراد والشركات، وتأمين السيارات، وتأمين الحياة."
    - article:
      - heading "سهولة الاستخدام" [level=3]
      - paragraph: كل خطوة مصممة خصيصًا لتوفير الراحة والسهولة للمستخدم، دون أي تعقيدات.
    - article:
      - heading "أسعار تنافسية" [level=3]
      - paragraph: مع مقارنة جميع عروض الأسعار من شركات التأمين، لنختار العرض الأنسب بأفضل سعر.
    - article:
      - heading "فريق فني وقانوني" [level=3]
      - paragraph: فريق كامل ومتخصص لتقديم المساعدة والدعم، والرد على أي استفسارات على مدار الساعة، طوال أيام الأسبوع (24/7).
  - region "حمّل تطبيق وثيقتي الآن":
    - heading "حمّل تطبيق وثيقتي الآن" [level=2]
    - paragraph: تابع وثيقتك، وجددها، واطلب التأمين في أي وقت ومن أي مكان بسهولة وسرعة.
    - group "8 / 9":
      - img "شاشة الوثائق في تطبيق وثيقتي"
    - group "9 / 9":
      - img "شاشة حسابي في تطبيق وثيقتي"
    - group "1 / 9":
      - img "الصفحة الرئيسية لتطبيق وثيقتي"
    - group "2 / 9":
      - img "شاشة تغطيتي في تطبيق وثيقتي"
    - group "3 / 9":
      - img "شاشة المطالبات في تطبيق وثيقتي"
    - group "4 / 9":
      - img "شاشة الوثائق في تطبيق وثيقتي"
    - group "5 / 9":
      - img "شاشة حسابي في تطبيق وثيقتي"
    - group "6 / 9":
      - img "شاشة تغطيتي في تطبيق وثيقتي"
    - group "7 / 9":
      - img "شاشة المطالبات في تطبيق وثيقتي"
  - region "الأسئلة الشائعة":
    - heading "الأسئلة الشائعة" [level=2]
    - paragraph: في هذا القسم ستجد إجابات لأكثر الأسئلة التي يطرحها عملاؤنا حول الخدمات، وطريقة الاستخدام، والدعم الفني.
    - heading "كيف أشتري باقة تأمين؟" [level=3]:
      - button "كيف أشتري باقة تأمين؟"
    - heading "كيف يمكنني مقارنة باقات التأمين؟" [level=3]:
      - button "كيف يمكنني مقارنة باقات التأمين؟"
    - heading "تأمين السيارات والتأمين الطبي - 100% أونلاين!" [level=3]:
      - button "تأمين السيارات والتأمين الطبي - 100% أونلاين!"
    - heading "تأمين السيارات والتأمين - 100% أونلاين!" [level=3]:
      - button "تأمين السيارات والتأمين - 100% أونلاين!"
    - heading "ما هو التأمين؟" [level=3]:
      - button "ما هو التأمين؟"
    - heading "ما هو تأمين السيارات١؟" [level=3]:
      - button "ما هو تأمين السيارات١؟"
    - heading "كيف يمكنني التواصل مع خدمة العملاء؟" [level=3]:
      - button "كيف يمكنني التواصل مع خدمة العملاء؟"
    - heading "ما هو التأمين الطبي؟" [level=3]:
      - button "ما هو التأمين الطبي؟"
    - heading "ماذا يغطي التأمين الطبي؟" [level=3]:
      - button "ماذا يغطي التأمين الطبي؟"
    - link "مشاهدة الكل":
      - /url: /faqs
- link "تواصل معنا":
  - /url: /contact
- contentinfo:
  - heading "حول وثيقتي" [level=2]
  - paragraph: وثيقتي، وسيطك التأميني المعتمد لضمان حصولك على وثائقك التأمينية بأمان وسرعة فائقة. استمتع بتجربة تأمينية غير مسبوقة من خلال إجراءات واضحة وخيارات متعددة تناسب احتياجاتك.
  - list:
    - listitem:
      - text: "الهاتف:"
      - link "+20 2 2527 7071":
        - /url: tel:+20225277071
    - listitem:
      - text: "البريد الإلكتروني:"
      - link "support@wasekaty.local":
        - /url: mailto:support@wasekaty.local
    - listitem: "العنوان: ٣٥ أ كورنيش النيل - برج سرايا المعادي - الدور الأول بجوار مستشفى النيل بدراوي - المعادي - القاهرة"
  - navigation "خدماتنا":
    - heading "خدماتنا" [level=2]
    - list:
      - listitem:
        - link "تأمين سيارات":
          - /url: /new-cars-insurance
      - listitem:
        - link "تأمين طبي":
          - /url: /individual-medical-insurance
  - navigation "المصادر":
    - heading "المصادر" [level=2]
    - list:
      - listitem:
        - link "الأسئلة الشائعة":
          - /url: /faqs
      - listitem:
        - link "تواصل معنا":
          - /url: /contact
      - listitem:
        - link "عن وثيقتي":
          - /url: /about
  - navigation "روابط قانونية":
    - heading "روابط قانونية" [level=2]
    - list:
      - listitem:
        - link "سياسة الخصوصية":
          - /url: /privacy
      - listitem:
        - link "الشروط والأحكام":
          - /url: /terms
      - listitem:
        - button "إعدادات ملفات تعريف الارتباط"
  - group:
    - text: اشترك في نشرتنا البريدية
    - paragraph: سنراسلك بالأخبار والعروض فقط، ويمكنك إلغاء الاشتراك في أي وقت.
    - group:
      - group
      - textbox "اشترك في نشرتنا البريدية":
        - /placeholder: بريدك الإلكتروني
      - group:
        - button "اشتراك"
  - paragraph: جميع الحقوق محفوظة © 2026 وثيقتي - شركة مجموعة الابتكار لوساطة التأمين
  - list "تابعنا":
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/share/18VZ5hjhWB/
    - listitem:
      - link "Instagram":
        - /url: https://www.instagram.com/wathiqaty_com
    - listitem:
      - link "X":
        - /url: https://x.com/WATHIQATY_COM
- region "خيارات الخصوصية":
  - heading "خيارات الخصوصية" [level=2]
  - paragraph:
    - text: نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الموقع وحمايته (تسجيل الدخول واللغة والحماية من الروبوتات). وبإذنك نستخدم أيضاً ملفات التحليلات والتسويق.
    - link "سياسة الخصوصية":
      - /url: /privacy
  - button "رفض الكل"
  - button "قبول الكل"
  - button "تخصيص"
- region "Notifications alt+T":
  - list:
    - listitem:
      - button "Close toast"
      - text: تم التحقق من الكـود بنجاح
- alert: تأمين طبي وتأمين سيارات أونلاين | وثيقتي
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('element action', async ({ page }) => {
  4  |   await page.goto('https://wathiqaty-website-dev.dafa.dev/login');
  5  |   
  6  |   // 1. Locate the phone input
  7  |   const phoneInput = page.getByRole('textbox', { name: 'أدخل رقم جوالك' });
  8  |   
  9  |   // 2. Click it first to remove the readonly state / focus it
  10 |   await phoneInput.click();
  11 |   
  12 |   // 3. Now fill it
  13 |   await phoneInput.fill('1097048325');
  14 |   
  15 |   // Password field
  16 |   await page.getByRole('textbox', { name: 'كلمة المرور' }).fill('Test_123');
  17 |   
  18 |   // Submit button
  19 |   await page.getByRole('button', { name: 'تسجيل الدخول' }).press('Enter');
  20 |   
  21 |   // Assertion
  22 |   await expect(page.getByText('تحقق من تسجيل الدخول', { exact: true })).toBeVisible();
  23 | 
  24 |   await page.getByText('Dev code:', { exact: true }).click();
  25 | 
  26 |   const test =  page.getByRole('heading', { name: 'مرحبًا بعودتك، احمد' });
  27 |    
> 28 |   await expect(test).toBeVisible();
     |                      ^ Error: expect(locator).toBeVisible() failed
  29 | 
  30 | });
```