const { test, expect } = require('@playwright/test');

const PAGE_URL = "http://localhost:3000/";

test('example test 1', async ({ page }) => {
  await page.goto(PAGE_URL);
  await expect(page).toHaveTitle(/Testing Playground/);
});
