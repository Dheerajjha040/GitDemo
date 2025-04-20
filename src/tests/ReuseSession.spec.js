const { test, expect,chromium } = require('@playwright/test')
const fs = require('fs');

test('Reuse Salesforce Session', async ({ }) => {
    // Load saved session storage
    const storageState = JSON.parse(fs.readFileSync('auth.json', 'utf8'));

    // Launch browser with saved session
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ storageState });
    const page = await context.newPage();

    // Lead Creation Page objects 
    const tab_Leads = page.getByRole('link', { name: 'Leads' });
    const btn_New = page.getByRole('button', { name: 'New' });
    const rb_DCCLead = page.getByRole('group', { name: 'Select a record type' }).locator('span').nth(1);
    const rb_DAFZALead = page.getByRole('group', { name: 'Select a record type' }).locator('span').nth(2);
    const btn_Next = page.getByRole('button', { name: 'Next' });
    const input_LastName = page.getByRole('textbox', { name: '*Last Name' });
    const input_Email = page.getByRole('textbox', { name: '*Email' });
    const combobox_CountryCode = page.getByRole('combobox', { name: 'Country Code', exact: true });
    const combobox_value = page.getByText('Christmas Island +')
    const input_mobile = page.getByRole('textbox', { name: '*Mobile' });
    const combobox_CurrentLeadChannel = page.getByRole('combobox', { name: 'Current Lead Source' });
    const option_CurrentLeadChannel = page.getByRole('option', { name: 'Walk-In' })
    const combobox_CurrentLeadSource = page.getByRole('combobox', { name: 'Current Lead Channel' });
    const option_CurrentLeadSource = page.getByText('DAFZ Office')
    const dropdown_HowDoYouHearAboutUs = page.getByLabel('*How did you hear about us');
    const combobox_OrganizationType = page.getByRole('combobox', { name: 'Organization Type' });
    const option_OrganizationType = page.getByRole('option', { name: 'SME' }).locator('span').nth(1)
    const select_OrganizationCriteria = page.getByRole('option', { name: 'Less than 250 employees' });
    const btn_move_OrganizationCriteria = page.getByLabel('*Organization Criteria').getByRole('button', { name: 'Move to Chosen Move selection' })
    const input_Company = page.getByRole('textbox', { name: '*Company' });
    const btn_Create = page.getByRole('button', { name: 'Create' });
    const searchbar = page.locator("//button[@aria-label='Search']");
    const searchinput = page.getByPlaceholder('Search..');

    // Qualify Page Object 
    const btn_Qualify = page.getByRole('button', { name: 'Qualify', exact: true });
    const input_company = page.locator("//label//span[text()='Company']/following::input[1]");
    const btn_Save = page.getByRole('button', { name: 'Save' });

   // await page.goto('https://dafz--uat.sandbox.lightning.force.com/lightning/page/home');
    // await searchbar.click();
    // await searchinput.pressSequentially('Play');
    // const list = page.getByRole('listbox');
    // await list.waitFor();
    // const optionscount = await list.getByRole('option').count();
    // console.log(optionscount)
    // for (let i = 0; i < optionscount; i++) {
    //     console.log('Inside for loop')
    //     page.pause();
    //     const text = await list.getByRole('option').nth(i).textContent();
    //     console.log(text)
    //     if (text == "PlaywrightAccount") {
    //         console.log('Inside If loop ');
    //         await list.getByRole('option').nth(i).click();
    //         break;

    //     }

    // }
    // page.pause();



    //Lease Creation action  
     await page.goto('https://dafz--uat.sandbox.lightning.force.com/lightning/page/home');
     await tab_Leads.click();
     await page.pause();
     await btn_New.click();
     await rb_DAFZALead.click();
     await btn_Next.click();
     await input_LastName.fill('Jha');
     await input_Email.fill('dheeraj.jha@cloudearly.com.jkui');
     await combobox_CountryCode.click();
     await combobox_value.click();
     await input_mobile.fill('345234234');
     await combobox_CurrentLeadSource.click();
     await option_CurrentLeadChannel.click();
     await combobox_CurrentLeadChannel.click();
     await option_CurrentLeadSource.click();
     await dropdown_HowDoYouHearAboutUs.selectOption('Website');
     await combobox_OrganizationType.click();
     await option_OrganizationType.click();
     await select_OrganizationCriteria.click();
     await btn_move_OrganizationCriteria.click();
     await input_Company.fill('Playwright');
     await btn_Create.click();
 
 
     await btn_Qualify.click();
     await page.pause();
     await btn_Save.click();
     await browser.close(); 



});
