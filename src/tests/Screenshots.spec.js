const { test, expect } = require('@playwright/test')

test.only('First Playwright Test', async ({ page }) => {

    await page.goto("https://makemytrip.com")
    expect(await page.screenshot()).toMatchSnapshot('home.png')

});