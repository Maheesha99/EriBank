var wdio = require('webdriverio');
var pg_login = require('../../ObjectRepository/wdioApp/PG_Login');
var cmd = require('../../Utils/CommandRepo');
var allureReporter = require('@wdio/allure-reporter').default;
var assert = require('assert');

module.exports.LoginToTheApplication = function (email, pwd) {
  allureReporter.startStep('Login To The Application');
  driver.pause(3000)
  cmd.tap(pg_login.menu_login)
  cmd.type(pg_login.tf_email, email)
  cmd.type(pg_login.tf_password, pwd)
  cmd.tap(pg_login.btn_login)
  driver.pause(5000)
  cmd.getScreenshot()
  allureReporter.endStep();
};
module.exports.VerifyAlert = function (expectedText) {
  allureReporter.startStep('Verify Alert');
  alertText = driver.getAlertText()
  console.log("Allert Text >> ", expectedText)
  assert.equal(alertText, expectedText);
  driver.acceptAlert();
  allureReporter.endStep();
};
