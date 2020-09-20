var wdio = require('webdriverio');
var hml = require('xmlhttprequest');
var allureReporter = require('@wdio/allure-reporter').default;
var assert = require('assert');

describe('EriBank', () => {
    it('TC_01_Verify Balance', () => {
        expectedText = 100;
        driver.pause(3000);
        driver.acceptAlert()
        //Login to the application
        $("//android.widget.EditText[@text='Username']").setValue("company");  // type user name
        $("//android.widget.EditText[@text='Password']").setValue("company"); //type password
        $("//android.widget.Button[@text='Login']").click();  //click on login button
        driver.pause(3000);

        //Verify homepage and store available balance
        $("//android.widget.TextView[@text='EriBank']")  //verify text Eri Bank
        initialBalance = $("//android.view.View[contains(@text,'Your balance is')]").getText();  //get text from the text
        initialBalance = initialBalance.replace("Your balance is: ", "");    //output = Your balance is: 100.00$
        initialBalance = initialBalance.split('.')[0]
        initialBalance = parseInt(initialBalance, 10);
        console.log("initialBalance >", initialBalance)
        assert.equal(initialBalance, expectedText);  // (actualText, value);
    })

    it('TC_02_Make a Payment', () => {
        country = 'USA'
        amount = 10;
        
        driver.pause(3000);
        driver.acceptAlert()

        //Login to the application
        $("//android.widget.EditText[@text='Username']").setValue("company");  // type user name
        $("//android.widget.EditText[@text='Password']").setValue("company"); //type password
        $("//android.widget.Button[@text='Login']").click();  //click on login button
        driver.pause(3000);

        //Verify homepage and store available balance
        $("//android.widget.TextView[@text='EriBank']")  //verify text Eri Bank
        initialBalance = $("//android.view.View[contains(@text,'Your balance is')]").getText();  //get text from the text
        initialBalance = initialBalance.replace("Your balance is: ", "");    //output = Your balance is: 100.00$
        initialBalance = initialBalance.split('.')[0]
        initialBalance = parseInt(initialBalance, 10);
        console.log("initialBalance >", initialBalance)
        driver.saveScreenshot('./screenshot/initialBalance.png');

        //Make a payment
        $("//android.widget.Button[@text='Make Payment']").click();
        $("//android.widget.EditText[@text='Phone']").setValue("0112367345")
        $("//android.widget.EditText[@text='Name']").setValue("Ann")
        $("//android.widget.SeekBar[@resource-id='com.experitest.ExperiBank:id/amount']").setValue(amount)
        $("//android.widget.Button[@text='Select']").click();
        $(`//android.widget.TextView[@text='${country}']`).click()
        $("//android.widget.Button[@text='Send Payment']").click()
        driver.acceptAlert()

        //Verify current balance
        driver.pause(3000);
        currentBalance = $("//android.view.View[contains(@text,'Your balance is')]").getText()
        currentBalance = currentBalance.replace("Your balance is: ", "");    //output = Your balance is: 100.00$
        currentBalance = currentBalance.split('.')[0]
        currentBalance = parseInt(currentBalance, 10);
        console.log("currentBalance >", currentBalance)

        assert.equal(currentBalance, initialBalance - amount);  // (actualText, value);
        driver.saveScreenshot('./screenshot/currentBalance.png');

        //Logout
        $("//android.widget.Button[@text='Logout']").click()
        driver.pause(3000);
    })

})

