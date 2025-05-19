const { test, expect } = require('@playwright/test');
test('Amazon iPhone 16e Search and Price Extractor', async ({ page }) => {
  // Step 1: Visit Amazon India
  await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21');

  // Step 2: Search for "iphone 16e"
  const searchBox = page.getByPlaceholder('Search Amazon.in');
  await searchBox.fill('iphone 16e');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000)
    // Wait for the search-results container
  const resultsLocator = page.locator('div.s-main-slot').locator('div[data-component-type="s-search-result"]');

 const count = await resultsLocator.count();
  console.log(`\nFound ${count} results. Showing up to 5:\n`);
  for (let i = 0; i < Math.min(count, 5); i++) {
    const item = resultsLocator.nth(i);
    const title = await item.locator('a h2  span').textContent()
    const price = await item.locator('[class="a-price-whole"]').textContent()
    console.log(`Product name :- ${title}\nprice :- ${price}\n`);
  }
});
