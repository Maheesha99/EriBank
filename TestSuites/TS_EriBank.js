var wdio = require('webdriverio');
var hml = require('xmlhttprequest');
var allureReporter = require('@wdio/allure-reporter').default;
var rc_common = require('./../ReusableComponents/RC_Common');
var rc_payments = require('./../ReusableComponents/RC_Payments');
var cmd = require('../Utils/CommandRepo');
var dt = require('../Utils/DataFile')

describe('EriBank', () => {
    if (driver.capabilities.platformName == 'iOS') {
        platfome = 'iOS';
    } else {
        platfome = 'Android';
    }

    describe(platfome, () => {

        // it('TC_01_Verify Balance', () => {
        //     allureReporter.addDescription('Login to the application and verify available balance');
        //     allureReporter.addSeverity("critical");
        //     rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd)
        //     initialBalance = rc_payments.StoreAvailableBalance();
        //     rc_payments.CalculateAndVerifyCurrentBalance(initialBalance, dt.Payment_TC01.expectedAmount)
        //     rc_common.LogoutFromTheApplication()
        // });
        it('TC_02_Make a Payment', () => {
            allureReporter.addDescription('Make a payment and verify available balance');
            allureReporter.addSeverity("critical");
            rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd)
            initialBalance = rc_payments.StoreAvailableBalance()
            rc_payments.MakePayment(dt.Payment_TC02.phone, dt.Payment_TC02.name, dt.Payment_TC02.amount, dt.Payment_TC02.country)
            currentBalance = rc_payments.StoreAvailableBalance()
            rc_payments.CalculateAndVerifyCurrentBalance(currentBalance, initialBalance - dt.Payment_TC02.amount)
            rc_common.LogoutFromTheApplication()
        });

    });
});