var wdio = require('webdriverio');
var pg_login = require('../../ObjectRepository/EriBank/PG_Login');
var cmd = require('../../Utils/CommandRepo');
var allureReporter = require('@wdio/allure-reporter').default;

module.exports.LoginToTheApplication = function (uname, pwd) {
  allureReporter.startStep('Login To The Application');
  driver.pause(3000)
  cmd.acceptAllert();
  cmd.type(pg_login.tf_userName, uname)
  cmd.type(pg_login.tf_password, pwd)
  cmd.tap(pg_login.btn_login)
 // driver.takeSnapshot('login page');
  allureReporter.endStep();
};
module.exports.ValidateHomePage = function () {
  allureReporter.startStep('Login To The Application');
  cmd.ElementPresent(pg_login.lbl_verifyText);
  allureReporter.endStep();
};
module.exports.LogoutFromTheApplication = function () {
  allureReporter.startStep('Logout From The Application');
  cmd.tap(pg_login.btn_logout)
  allureReporter.endStep();
};
