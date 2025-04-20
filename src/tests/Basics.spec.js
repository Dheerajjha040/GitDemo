const { test, expect } = require('@playwright/test')

test.only('First Playwright Test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.getByPlaceholder("username");
    const password = page.getByPlaceholder("password");
    const loginbutton = page.getByText('Log in');
    const closeButton = page.locator("button[title='close']")
    const menuLinks = page.locator('.menuLink')
    const companyProfileDetailsList = page.locator('//button//span[@class="slds-truncate"]')

    await page.goto("https://dafz--uat.sandbox.my.site.com/dafzcustomer");
    await expect(page).toHaveTitle("Login");

    await username.fill('dheerajjha040@gmail.com.kjiu.dafz');
    await password.fill('Passw0rd@123');
    await loginbutton.click();
    await expect(page).toHaveTitle("Home");
    await closeButton.click();

    //const menu = await menuLinks.first().textContent();
    await page.waitForLoadState('networkidle');
    const menu = await menuLinks.allTextContents();
    console.log(menu);
    const allmenu = await menuLinks.all();
    //console.log(allmenu);
    for (const am of allmenu) {
        const value = await am.textContent();
        //console.log(value)
        if (value == 'Company Profile') {
            console.log("if condition TRUE")
            await am.click();
            console.log("on CP page");
            //await page.waitForLoadState('networkidle');
            await companyProfileDetailsList.first().textContent();
            const detailslist = await companyProfileDetailsList.allTextContents();
            console.log(detailslist);
            break;
        }

    }
});


test('Validate incorrectLogin to Dafz portal', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://dafz--uat.sandbox.my.site.com/dafzcustomer");
    await expect(page).toHaveTitle("Login");

    // Defined all the locators 

    const username = page.getByPlaceholder("username");
    const password = page.getByPlaceholder("password");
    const loginbutton = page.getByText('Log in');
    const validationArea = page.locator("[class='uiOutputRichText']");

    // Action on the locators - like fill, click .... etc...

    await username.fill('dheerajjha040@gmail.com.kjiu.dafz');
    await username.fill('dheerajjha040@gmail.com.kjiu.dafz');
    await username.fill('dheerajjha040@gmail.com.kjiu.dafz');
    await username.fill('dheerajjha040@gmail.com.kjiu.dafz');
    await password.fill('Passw0rd@123');
    await password.fill('Passw0rd@456');
    await loginbutton.click();
    await expect(validationArea).toContainText('failed')


});

test('Learn Browser not required', async ({ page }) => {

    //const context  =await  browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://www.google.com")


});