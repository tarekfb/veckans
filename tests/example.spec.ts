import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://veckans.site/');
  await page.locator('label').getByRole('img').nth(1).click();
});