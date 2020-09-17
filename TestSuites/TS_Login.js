var wdio = require('webdriverio');
var hml = require('xmlhttprequest');
var allureReporter = require('@wdio/allure-reporter').default;
var pg_login = require('../ObjectRepository/PG_Login');
var rc_common = require('../ReusableComponents/RS_Common');
var dt = require('../Utils/DataFile');

describe('Login', () => {
    if (driver.capabilities.platformName == 'iOS') {
        platfome = 'iOS';
    } else {
        platfome = 'Android';
    }
    describe(platfome, () => {
        describe(driver.config.capabilities.name, () => {

            dt.Login_TC_01_02_03.forEach((input) => {
                it(input.tcName, () => {
                    rc_common.ValidateLogin(input.userName, input.password);
                    rc_common.ValidateErrorMessages(input.validationMessage);
                });
            })
        });
    });
});
