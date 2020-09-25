var allureReporter = require('@wdio/allure-reporter').default;
var rc_login = require('../ReusableComponents/RC_Login');
var rc_form = require('../ReusableComponents/RC_Form');
var dt = require('../Utils/DataFile')

describe('WDIO Application', () => {
    if (driver.isIOS) {
        platfome = 'iOS';
    } else {
        platfome = 'Android';
    }
    describe(platfome, () => {
        it("TC_01_Login to the application", () => {
            // allureReporter.addDescription('Login to the application');
            // allureReporter.addSeverity("critical");
            rc_login.LoginToTheApplication("Test@gmail.com", "test1234")
            rc_login.VerifyAlert("Success\nYou are logged in!")
        });
       
        xit('TC_02_Fill the form', () => {
            // allureReporter.addDescription('FIll the form');
            // allureReporter.addSeverity("critical");
            rc_form.FillTheForm("WDIO Sample Test", "webdriver.io is awesome")
            rc_form.DismissAlert()
        });
    });
});