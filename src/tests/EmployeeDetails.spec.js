const { test, expect } = require('@playwright/test')


test('Employee Details', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://dafz--uat.sandbox.my.site.com/dafzcustomer");
    await expect(page).toHaveTitle("Login");

    // Defined all the locators 
 
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



    const closebtn_EmployeeDetailsupdatepopup = page.getByRole('button', { name: 'close Close' })
    const link_Employeeaffairs = page.getByRole('link', { name: 'Employee Affairs' });
    const dropdown_SponsoredType = page.getByLabel('Sponsored Type');
    const card_employeedetails = page.locator("//div[@class='slds-card__body']");
    //const active_employeedetails = page.locator("//div[@class='slds-card__body']//div[text()='Active']")
    //const Inactive_employeedetails = page.locator("//div[@class='slds-card__body']"

    // Action on the locators - like fill, click .... etc...

    await username.fill('middleeast@accaviation.com.uat');
    await password.fill('Passw0rd@123');
    await loginbutton.screenshot({path : 'loginimage.png'});
    await page.screenshot({path : 'loginipage.png'})
    await loginbutton.click();
    await closeButton.click();
    // await closebtn_EmployeeDetailsupdatepopup.click();
  await link_Employeeaffairs.click();
  await link_Employeeaffairs.screenshot({path : 'Employeeaffairpage.png'})
    await page.pause();
    const count_employeesAll = await card_employeedetails.count();
    await card_employeedetails.screenshot({path : 'CardDetails.png'})


    console.log(count_employeesAll)
    page.pause();

    //const a = await card_employeedetails.allTextContents()
    let NoofIndians = 0;

    for (let i = 0; i < count_employeesAll; i++) {
        if (await card_employeedetails.locator("//div[contains(text(),'Nationality')]//span").nth(i).textContent() == 'India') {

            NoofIndians++;
            

        }
        

    }
    console.log(NoofIndians)






    //console.log("Number of Active Employees"+await card_employeedetails.locator("//div[text()='Active']").count());

    //console.log("Number of Active Employees"+await card_employeedetails.locator("//div[text()='Inactive']").count());
    //console.log("Number of Active Employees"+await card_employeedetails.locator("//div[text()='In Progress']").count());



});