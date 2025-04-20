import { test, expect } from '@playwright/test';
import ExcelJS from 'exceljs';

const EXCEL_FILE_PATH = '/Users/dheerajjha/DAFZAPortalAutomation/testData/LTSU_Data.xlsx';
const SHEET_NAME = 'Sheet1';
const LOGIN_URL = 'https://dafz--uat.sandbox.my.site.com/dafzcustomer';

// Load all test data rows from Excel (assumes first row is headers)
async function loadTestData(filePath, sheetName) {  // To load the test data - give filepath and sheet name to function
  const workbook = new ExcelJS.Workbook();    // workbook object 
  await workbook.xlsx.readFile(filePath); // read the workbook from filw 
  const worksheet = workbook.getWorksheet(sheetName); // get the worksheet

  const testData = [];  // testdata array 
  const headerRow = worksheet.getRow(1);  // get the header row as key.
 
  for (let i = 2; i <= worksheet.rowCount; i++) {
    const row = worksheet.getRow(i);
    const rowData = {}; // ajvascript object used as dictionary or map 

    headerRow.eachCell((cell, colNumber) => {
      const key = cell.value;
      const cellValue = row.getCell(colNumber).value;
      rowData[key] = normalizeCellValue(cellValue);
    });

    testData.push(rowData); // push each row as key value pairs in testdata array
  }

  return testData;
}

// Normalize ExcelJS cell values
function normalizeCellValue(value) {
  if (typeof value === 'object' && value !== null) {
    if (value.text) return value.text;
    if (value.richText) return value.richText.map(part => part.text).join('');
    if (value.formula && value.result !== undefined) return String(value.result);
    return JSON.stringify(value); // fallback
  }
  return String(value ?? '').trim();
}

// Load data and dynamically create test cases
test.describe('Login tests from Excel data', async () => {
  const testData = await loadTestData(EXCEL_FILE_PATH, SHEET_NAME);

  for (const [index, data] of testData.entries()) {
    test(`Login Test - Row ${index + 2} - ${data.username}`, async ({ page }) => {
      const usernameField = page.getByPlaceholder('username');
      const passwordField = page.getByPlaceholder('password');
      const loginButton = page.getByText('Log in');

      await page.goto(LOGIN_URL);
      await expect(page).toHaveTitle('Login');

      await usernameField.fill(data.username);
      await passwordField.fill(data.password);
      await loginButton.click();

      // Optionally validate successful login or error message
      // Example: await expect(page).toHaveURL(/dashboard|home|error/);
    });
  }
});
