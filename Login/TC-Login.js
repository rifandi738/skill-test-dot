Feature('Login');
const fs = require('fs');

Scenario('Login', async ({ I }) => {
    I.amOnPage('https://www.psegameshop.com');

    // Read data from a JSON file synchronously
    const rawData = fs.readFileSync('testData.json', 'utf8');
    const jsonData = JSON.parse(rawData);
    console.log(jsonData.email)

    I.click("[data-open='#login-form-popup']");
    I.waitForText('LOGIN');

    I.see('Username or email address');
    I.fillField("//input[@id='username']", jsonData[0].email);

    I.see('Password');
    I.fillField("//input[@id='password']", jsonData[0].password);

    I.checkOption("//input[@id='rememberme']");
    I.click("//button[@name='login']");

    I.waitForText('MY ACCOUNT');
    I.saveScreenshot('Login-Page.png');
  });