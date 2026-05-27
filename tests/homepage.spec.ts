import { test, expect } from '@playwright/test';

test('has GitHub changelog', async ({ page }) => {
  const responsePromise = page.waitForResponse('**/*/github/changelog');

  await page.goto('http://localhost:8000');
  await responsePromise;

  const changelogEntryCount = await page.getByTestId("changelog-entry").count();

  expect(changelogEntryCount).toBeGreaterThan(0);
});