// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://khb.abc:3000/v3');
});

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    await page.evaluate(async () => {
      await new Promise((res, rej) => {
        setInterval(() => {
          document.querySelector('button').click()
        }, 1000);
      })
    })
  });
});
