import { test, expect } from '@playwright/test';

test('screenshot test', async ({ page }) => {
  await page.goto('https://corp.moneyforward.com/en/aboutus/mission/');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});