const { test, expect } = require('@playwright/test')

test('Lease Transfer to Smaller Unit', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    //Elements 

    const username = page.getByPlaceholder("username");
    const password = page.getByPlaceholder("password");
    const loginbutton = page.getByText('Log in');
    const link_Services = age.getByRole('link', { name: 'SERVICES' });
    const link_companyServices = page.getByRole('presentation').filter({ hasText: "Company Services" });
    const label_companyServices = page.getByRole('paragraph').filter({ hasText: 'Company Services' });
    const link_LeaseTrasnferToSmallerUnit = page.getByRole('link', { name: 'Lease Transfer to Smaller Unit' });
    const label_LeaseTrasnferToSmallerUnit = await page.getByText('Lease Transfer to Smaller Unit', { exact: true });
    const btn_NEXT = page.getByRole('button', { name: 'NEXT' })
    const btn_Select = page.getByRole('button', { name: 'Select' });
    const text_ExpectedRangeStart = page.getByRole('textbox', { name: '*Expected Area Range Start (' });
    const text_ExpectedRangeEnd = page.getByRole('textbox', { name: '*Expected Area Range End (' });
    const datepicker_NewLeaseStart = page.getByRole('textbox', { name: 'New Lease Expected Start Date' })
    const dropdwon_year = page.getByLabel('Pick a Year');
    const btn_date = page.getByRole('button', { name: date });
    const dropdwon_NewLeaseterm = page.getByLabel('*New Lease Term');
    const text_ReinstContactName = page.getByText('*Reinstatement Contact Name');
    const text_mobile = page.getByRole('textbox', { name: '*Contact Mobile #' });
    const dropdown_trasnferreason = page.locator('//select[@name="transferReason"]');
    const btn_Submit = page.getByRole('button', { name: 'SUBMIT' })
    const label_ThankYou = page.getByText('Thank You');
    const labelDAFZ = page.getByText('DAFZ-')


    const year = '2026';
    const date = '19';



    // Actions 

    await page.goto("https://dafz--uat.sandbox.my.site.com/dafzcustomer");
    await expect(page).toHaveTitle("Login");
    await username.fill('dheerajjha040@gmail.com.kjiu.dafz');
    await password.fill('Passw0rd@123');
    await loginbutton.click();
    await expect(page).toHaveTitle("Home");
    await link_Services.click();
    await link_companyServices.click();
    expect(await label_companyServices).toBeVisible();
    await link_LeaseTrasnferToSmallerUnit.click();
    expect(label_LeaseTrasnferToSmallerUnit)
    await btn_NEXT.click();
    await btn_Select.click();
    await text_ExpectedRangeStart.fill('10');
    await text_ExpectedRangeEnd.fill('12');
    await datepicker_NewLeaseStart.click();
    await dropdwon_year.selectOption(year);
    await btn_date.click();
    await dropdwon_NewLeaseterm.selectOption('1 Year');
    await text_ReinstContactName.fill('Dheeraj');
    await text_mobile.fill('2342432342');
    await dropdown_trasnferreason.selectOption('High Rental Rate');
    await btn_NEXT.click();
    await btn_Submit.click();
    expect(await label_ThankYou).toBeVisible();
    const DafzRequest = await labelDAFZ.textContent();
    console.log(DafzRequest);
});
