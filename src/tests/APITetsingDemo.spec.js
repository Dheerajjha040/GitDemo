const { test, expect, request } = require('@playwright/test');
const payload = { username: "dheerajjha040@gmail.com.kjiu.dafz", password: "Passw0rd@123" }

test.beforeAll('Login', async () => {

    const apicontext = await request.newContext()
    const loginresponse = await apicontext.post("https://dafz--uat.sandbox.my.site.com/dafzcustomer/s/",

        {
            data: payload

        }
    )

    expect((await loginresponse).ok).toBeTruthy();
    const loginresponsejson = (await loginresponse).json();
    const token = await loginresponsejson.token;
    console.log(token);




})


test('Learn Browser not required', async ({ page }) => {

    //const context  =await  browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://www.google.com")


});

test('Demo for merge branch', async ({ page }) => {

    //const context  =await  browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://www.primevideo.com/detail/0Q9TEXARMYXUPXUWH63JEZ5B4L/ref=atv_plr_landingpage_play")


});

