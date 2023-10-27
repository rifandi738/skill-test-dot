Feature('Login-Negative');
const fs = require('fs');

let accounts = new DataTable(['username', 'password','assert']);
accounts.add(['', '123456','Error: Username is required.']);
accounts.add(['admin', '','The password field is empty.']);


Data(accounts).Scenario('Test Login', ({ I, current }) => {
  I.amOnPage('https://www.psegameshop.com');
  I.click("[data-open='#login-form-popup']");
  I.waitForText('LOGIN');
  I.see('Username or email address');
  I.fillField("//input[@id='username']", current.username);

  I.see('Password');
  I.fillField("//input[@id='password']", current.password);

  I.checkOption("//input[@id='rememberme']");
  I.click("//button[@name='login']");
  I.wait(2);
  I.waitForText(current.assert);

  I.saveScreenshot('Login-Page.png');
});
