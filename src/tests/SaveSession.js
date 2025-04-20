const { chromium } = require('@playwright/test');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch({ headless: false }); // Open browser UI
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to Salesforce login page
    await page.goto('https://test.salesforce.com');

    // Manually enter credentials & approve MFA
    console.log("Manually log in, approve MFA, then press Enter in the terminal...");
    await page.pause(); // Pause execution for manual login

    // Save session storage and cookies
    const storage = await context.storageState();
    fs.writeFileSync('auth.json', JSON.stringify(storage));

    console.log("Session saved successfully.");
    await browser.close();


    console.log("New Line");
    await browser.close();
})();