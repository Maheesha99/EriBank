var wdio = require('webdriverio');
var hml = require('xmlhttprequest');
var allureReporter = require('@wdio/allure-reporter').default;
var rc_login = require('../../ReusableComponents/WebdriveIOApp/RC_Login');
var rc_form = require('../../ReusableComponents/WebdriveIOApp/RC_Form');
var cmd = require('../../Utils/CommandRepo');
var dt = require('../../Utils/DataFile')

describe('WDIO App', () => {
    if (driver.capabilities.platformName == 'iOS') {
        platfome = 'iOS';
    } else {
        platfome = 'Android';
    }
    describe(platfome, () => {
        it('TC_01_Login', () => {
            allureReporter.addDescription('Login to the application');
            allureReporter.addSeverity("critical");
            rc_login.LoginToTheApplication("Test@gmail.com", "test1234")
            // rc_login.VerifyAlert("Success\nYou are logged in!")
        });
        it('TC_02_Fill the form', () => {
            allureReporter.addDescription('FIll the form');
            allureReporter.addSeverity("critical");
            rc_form.FillTheForm("WDIO Sample Test", "webdriver.io is awesome")
            rc_form.DismissAlert()
        });
    });
});