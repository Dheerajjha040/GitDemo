const { test, expect } = require('@playwright/test')


test('Raise Lease Transfer to smaller Unit', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://dafz--uat.sandbox.my.site.com/dafzcustomer");
    await expect(page).toHaveTitle("Login");

    const username = page.getByPlaceholder("username");
    const password = page.getByPlaceholder("password");
    const loginbutton = page.getByText('Log in');
    const validationArea = page.locator("[class='uiOutputRichText']");

    const closeButton = page.locator("button[title='close']")
    const menuLink_Services = page.locator("//a[normalize-space()='Services']");
    const sub_menuLink_CompnayServices = page.locator("//a[normalize-space()='Company Services']");
    const list_CompanyNameChange = page.locator("//a[normalize-space()='Company Name Change']");
    const input_SubmittedUserDesignation = page.locator("[name='Submitted User Designation']");
    const button_Next = page.locator("[title='NEXT']");
    const input_tradename1 = page.locator("[name='Trade_Name_1st_Choice_In_Arabic__c']");
    const input_tradename1_arabic = page.locator("[name='tradename1']");

    const input_tradename2 = page.locator("[name='Trade_Name_2nd_Choice_In_Arabic__c']");
    const input_tradename2_arabic = page.locator("[name='tradename2']");
    const country_of_operation = page.locator("//div[@role='option' and @data-value='India']") // Another way for locating the dropdown 
    const button_MovetoSelected = page.locator("[title='Move to Selected']")   // Multi selectoer - should be located like this 
    const dropdown_AttestationBy = page.locator("//select[@class='slds-select' and @name='Attestation By']");   /// Drop down on  portal - locatior should defined like this 
    const rb_MoASignBy_FirstManager = page.locator("//input[@value='First Manager']");
    const rb_MoASignBy_Shareholders = page.locator("//input[@value='Shareholders']");
    const dropdown_CountryCode = page.locator("//select[@class='slds-select' and @name='selectField']");
    const input_Mpbile = page.locator("//tr//th//div[text()='Mobile']/following::td[6]//input");
    const checkbox = page.locator(".slds-checkbox_faux");
    const input_BillingEmail = page.locator("[name='BillingEmail']");
    const input_EmergencyContact = page.locator("[name='EmergencyContact']");


    // Action on the locators - like fill, click .... etc...

    await username.fill('dheerajjha040@gmail.com.kjiu.dafz');
    await password.fill('Passw0rd@123');
    await loginbutton.click();

    //await closeButton.click();
    //await page.pause();
    await menuLink_Services.click();
    await sub_menuLink_CompnayServices.click();
    expect(await page.screenshot()).toMatchSnapshot('CompanyService.png')
    page.pause();
    await list_CompanyNameChange.click();
    await page.pause();
    await input_SubmittedUserDesignation.fill('Vice President');
    await page.pause();
    await button_Next.click();
    await input_tradename1.fill("TradeName1")
    //await page.pause();
    await input_tradename2.fill("TradeName2")
    //await page.pause();
    await country_of_operation.click();
    //await page.pause();
    await button_MovetoSelected.click();
    await page.pause();
    await dropdown_AttestationBy.selectOption("DAFZA"); // selecting value from the drop-down 
    await page.pause();
    //await rb_MoASignBy_FirstManager.click();
    await dropdown_CountryCode.last().selectOption('India +91');
    await page.pause();
    await input_Mpbile.fill("521992702")
    await checkbox.click();
    await input_BillingEmail.fill("dheeraj.jha@cloudearly.com")
    await input_EmergencyContact.fill("521992702")
    await button_Next.click();
    await page.pause();
    await page.pause();

    await page.pause();


});