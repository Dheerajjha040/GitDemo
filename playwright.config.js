// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000

  },
  reporter: 'html',
  use: {

    storageState: 'auth.json', // Reuse saved session
    headless: false, // Run in headless mode
    baseURL: 'https://test.salesforce.com', // Replace with your Salesforce instance URL
    browserName: 'chromium',
    screenshot : 'on',
    trace : 'retain-on-failure'

  },

});

