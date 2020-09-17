
var wdio = require('webdriverio');
var pg_common = require('./../ObjectRepository/PG_Common');
var pg_login = require('./../ObjectRepository/PG_Login');
var pg_report = require('./../ObjectRepository/PG_Reports');
var cmd = require('./../Utils/CommandRepo');
var allureReporter = require('@wdio/allure-reporter').default;
var conf = require('./../Utils/conf');


module.exports.LoginToTheApplication = function (uname, pwd) {
    driver.pause(5000);
    _platform = driver.capabilities.platformName;
    console.log(_platform, '>>>>>>platform')
    var count;
    if (_platform == 'iOS') {
        count = $$(pg_login.tf_UserName.iOS).length;
    } else {
        count = $$(pg_login.tf_UserName.Android).length;
    }
    if (count > 0) {
        allureReporter.startStep('Login To The Application');
        cmd.type(pg_login.tf_UserName, uname);
        cmd.tap(pg_login.lbl_Email);
        cmd.type(pg_login.tf_Password, pwd);
        cmd.tap(pg_login.lbl_Email);
        cmd.tap(pg_login.btn_SignIn);
        driver.pause(6000);
        allureReporter.endStep();
    }
};
module.exports.ValidateLogin = function (uname, pwd) {
    allureReporter.startStep('Validate Login');
    driver.pause(5000);
    _platform = driver.capabilities.platformName;

    var count;
    if (_platform == 'iOS') {
        count = $$(pg_common.lbl_HamburgerMenu.iOS).length;
    } else {
        count = $$(pg_common.lbl_HamburgerMenu.Android).length;
    }
    if (count > 0) {

        this.Logout();
    }
    driver.takeSnapshot('login page');
    cmd.type(pg_login.tf_UserName, uname);
    cmd.tap(pg_login.lbl_Email);
    cmd.type(pg_login.tf_Password, pwd);
    cmd.tap(pg_login.lbl_Email);
    cmd.tap(pg_login.btn_SignIn);
    driver.pause(6000);
    allureReporter.endStep();
};
module.exports.ValidateErrorMessages = function (errorMessage) {
    allureReporter.startStep('Validate Error Messages');
    cmd.verifyText(pg_login.lbl_ErrorMessages, errorMessage)
    cmd.getScreenshot();
    driver.takeSnapshot('error message');
    allureReporter.endStep();
};

module.exports.VerifyHomePage = function (verifyName) {
    allureReporter.startStep('Verify Home Page');
    driver.pause(5000);
    cmd.tap(pg_common.lbl_HamburgerMenu);
    cmd.verifyText(pg_common.lbl_UserNameHome, verifyName);
    driver.pause(4000);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.NavigateToReports = function () {
    allureReporter.startStep('Navigate To Reports');
    cmd.tap(pg_common.lbl_HamburgerMenu);
    cmd.tap(pg_common.hmb_Reports);
    // driver.pause(3000);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.NavigateToExpenses = function () {
    allureReporter.startStep('Navigate To Expenses');
    cmd.tap(pg_common.lbl_HamburgerMenu);
    cmd.tap(pg_common.hmb_Expenses);
    driver.pause(4000);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.Logout = function () {
    allureReporter.startStep('Logout From The Account');
    cmd.tap(pg_common.lbl_HamburgerMenu);
    if (driver.capabilities.platformName == 'iOS') {
        //  cmd.scrollTo(pg_common.hmb_LogOut);
        cmd.scroll('down');
    } else {
        if (cmd.GetElementCount(pg_common.hmb_LogOut) == 0) {
            cmd.scrollAndroid(pg_common.hmb_LogOut, '', 'down');
        }
    }
    cmd.tap(pg_common.hmb_LogOut);
    if (cmd.GetElementCount(pg_report.popUp_Yes) == 1) {
        cmd.tap(pg_report.popUp_Yes);
    }
    driver.pause(3000);
    cmd.ElementPresent(pg_login.tf_UserName);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.GoBack = function () {
    allureReporter.startStep('Go Back');
    if (cmd.GetElementCount(pg_common.btn_Back) == 1) {
        cmd.tap(pg_common.btn_Back);
    } else if (cmd.GetElementCount(pg_common.btn_SearchBack) == 1) {
        cmd.tap(pg_common.btn_SearchBack);
    } else if (cmd.GetElementCount(pg_common.btn_DestinationBack) == 1) {
        cmd.tap(pg_common.btn_DestinationBack);
    }
    driver.pause(3000);
    allureReporter.endStep();
};
module.exports.NavigateToMileage = function () {
    allureReporter.startStep('Navigate To Mileage');
    cmd.tap(pg_common.lbl_HamburgerMenu);
    cmd.tap(pg_common.hmb_Mileage);
    driver.pause(3000);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.NavigateToApprovals = function () {
    allureReporter.startStep('Navigate To Approvals');
    cmd.tap(pg_common.lbl_HamburgerMenu);
    cmd.tap(pg_common.hmb_Approvals);
    driver.pause(3000);
    allureReporter.endStep();
};
module.exports.RefreshPage = function (direction) {
    allureReporter.startStep('Refresh Page');
    if (driver.capabilities.platformName == 'iOS') {
        cmd.scroll(direction);
    } else {
        cmd.scrollAPICall('up');
    }
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.NavigateToHome = function () {
    allureReporter.startStep('Navigate To Home Tab');
    cmd.tap(pg_common.lbl_HamburgerMenu);

    if (cmd.GetElementCount(pg_common.hmb_Home) == 0) {
        driver.pause(3000);
        cmd.tap(pg_common.lbl_HamburgerMenu);
    }

    cmd.tap(pg_common.hmb_Home);
    driver.pause(3000);
    allureReporter.endStep();
};
