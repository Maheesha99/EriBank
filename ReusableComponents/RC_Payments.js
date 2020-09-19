var wdio = require('webdriverio');
var pg_payments = require('./../ObjectRepository/PG_Payment');
var cmd = require('../Utils/CommandRepo');
var allureReporter = require('@wdio/allure-reporter').default;

module.exports.StoreAvailableBalance = function () {
    allureReporter.startStep('Verify Available Balance');
    currentBalance = cmd.getElementText(pg_payments.lbl_balance);
    currentBalance = currentBalance.replace("Your balance is: ", "");    //output = Your balance is: 100.00$
    currentBalance = currentBalance.split('.')[0]
    currentBalance = parseInt(currentBalance, 10);
    console.log("currentBalance >", currentBalance)
    driver.saveScreenshot('./screenshot/currentBalance.png');
    allureReporter.endStep();
    return currentBalance;
};
module.exports.MakePayment = function (phone, name, amount, country) {
    allureReporter.startStep('Make A Payment');
    cmd.tap(pg_payments.btn_makePayment)
    cmd.type(pg_payments.tf_phone, phone)
    cmd.type(pg_payments.tf_name, name)
    cmd.type(pg_payments.slider_amount, amount)
    cmd.tap(pg_payments.btn_countrySelect)
    cmd.tap(pg_payments.lbl_country, country)
    cmd.tap(pg_payments.btn_sendPayment)
    cmd.acceptAllert()
    driver.pause(3000)
    allureReporter.endStep();
};
module.exports.CalculateAndVerifyCurrentBalance = function (actualValue, expectedValue) {
    allureReporter.startStep('CalculateAndVerifyCurrentBalance');
    cmd.compareNumbers(actualValue,expectedValue)
  //  driver.takeSnapshot('Balance');
    driver.saveScreenshot('./screenshot/currentBalance.png');
    allureReporter.endStep();
};
