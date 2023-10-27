Feature('Register');
const fs = require('fs');
const { faker } = require('@faker-js/faker');

Scenario('Register', async ({ I }) => {
    I.amOnPage('https://www.psegameshop.com');
    
    //Data Credentials
    var email = faker.internet.email();
    var password = 'Skill-test26';

    I.click("[data-open='#login-form-popup']");
    I.waitForText('REGISTER');

    //Input Data Register
    I.see('Favorite Genre');
    I.selectOption('.acf-field-5e758bca4e8cc .input-text', 'Action');

    I.see('Favorite Console');
    I.selectOption('.acf-field-5e75905014c81 .input-text','Playstation');

    I.see('Hobbies & Interests');
    I.selectOption('.acf-field-5ea976d054e4e .input-text','Culinary');

    I.see('Hobbies & Interests');
    I.checkOption('.acf-radio-list > li:nth-of-type(2) > label');

    I.see('Email address');
    I.fillField("//input[@id='reg_email']", email);

    I.see('Password');
    I.fillField("//input[@id='reg_password']", password);

    I.see('Confirm Password');
    I.fillField("//input[@id='reg_confirm_password']",password);

    I.scrollTo("//button[@name='register']");
    I.click("//button[@name='register']");

    // fs.readFile('testData.json', 'utf8', (err, data) => {
    //    const jsonData = JSON.parse(data);
    //    jsonData[0].email = email
    //    console.log('Data read from file:', jsonData);
    //    fs.writeFile('testData.json', JSON.stringify(jsonData),'utf8', (err) => {
    //   });
    // });
    I.saveScreenshot('Register-Page.png');
  });