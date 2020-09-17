var wdio = require('webdriverio');
var pg_common = require('./../ObjectRepository/PG_Common');
var pg_expenses = require('./../ObjectRepository/PG_Expenses');
var pg_mileage = require('./../ObjectRepository/PG_Mileage');
var pg_reports = require('./../ObjectRepository/PG_Reports');
var cmd = require('./../Utils/CommandRepo');
var allureReporter = require('@wdio/allure-reporter').default;

module.exports.CreateMileageTrip = function (title) {
    allureReporter.startStep('Create Mileage Trip');
    cmd.tap(pg_mileage.btn_NewTrip);
    driver.pause(3000);

    if (cmd.GetElementCount(pg_mileage.btn_Allow) == 1) {
        cmd.tap(pg_mileage.btn_Allow);
    }
    if (cmd.GetElementCount(pg_mileage.btn_AllowOnce) == 1) {
        cmd.tap(pg_mileage.btn_AllowOnce);
    }
    if (cmd.GetElementCount(pg_mileage.btn_AlwaysAllow) == 1) {
        cmd.tap(pg_mileage.btn_AlwaysAllow);
    }
    while (cmd.GetElementCount(pg_reports.popUp_OK) == 1) {
        cmd.tap(pg_reports.popUp_OK);
    }
    driver.pause(3000);
    for (i = 0; i < 6; i++) {
        if (cmd.GetElementCount(pg_mileage.btn_Edit) == 0) {
            driver.pause(5000);
        } else {
            break;
        }
    }
    cmd.tap(pg_mileage.btn_Edit);
    driver.pause(2000);
    cmd.type(pg_mileage.tf_Title, title);
    cmd.tap(pg_mileage.btn_SaveTitle);
    driver.pause(8000);
    cmd.getScreenshot();
    cmd.tap(pg_mileage.btn_EndTrip);
    driver.pause(5000);
    allureReporter.endStep();
};
module.exports.CompleteMileageTrip = function () {
    allureReporter.startStep('Complete Mileage Trip');
    cmd.tap(pg_mileage.btn_CompleteTrip);
    driver.pause(15000);
    allureReporter.endStep();
};
module.exports.SaveMileageTrip = function () {
    allureReporter.startStep('Save Mileage Trip');
    cmd.getScreenshot();
    cmd.tap(pg_mileage.btn_SaveTrip);
    cmd.tap(pg_mileage.popUp_Keep);
    driver.pause(5000);
    allureReporter.endStep();
};
module.exports.DiscardMileageTrip = function () {
    allureReporter.startStep('Discard Mileage Trip');
    cmd.getScreenshot();
    cmd.tap(pg_mileage.btn_DiscardTrip);
    cmd.tap(pg_mileage.popUp_Yes);
    allureReporter.endStep();
};
module.exports.GoInsideMileageTrip = function (mileageName) {
    allureReporter.startStep('Go Inside Mileage Trip');
    cmd.getScreenshot();
    cmd.tap(pg_mileage.file_MileageTrip, mileageName);
    driver.pause(4000);
    if (driver.capabilities.platformName == 'Android') {
        if (cmd.GetElementCount(pg_mileage.tf_Description) == 0) {
            cmd.scrollAndroid(pg_mileage.tf_Description, '', 'down');
        }
    }
    cmd.verifyText(pg_mileage.tf_Description, mileageName);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.CreateMileageExpense = function () {
    allureReporter.startStep('Create Mileage Expense');
    cmd.tap(pg_mileage.btn_CreateMileage);
    driver.pause(6000);
    allureReporter.endStep();
};
module.exports.DeleteMileageTrip = function (mileageTripName) {
    allureReporter.startStep('Delete Mileage Trip');
    if (driver.capabilities.platformName == 'iOS') {
        cmd.swipe(pg_mileage.file_MileageTrip, mileageTripName, 'left');
    } else {
        // driver.pause(5000);
        cmd.swipeAndroid(pg_mileage.file_MileageTrip, 'Longleft', mileageTripName);
    }
    driver.pause(2000);
    cmd.getScreenshot();
    cmd.tap(pg_mileage.btn_DeleteMileage);
    cmd.tap(pg_reports.popUp_OK);
    driver.pause(2000);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.VerifyDeletedMileageTrip = function (mileageTripName) {
    allureReporter.startStep('Verify Deleted Mileage Trip');
    cmd.ElementNotPresent(pg_mileage.file_MileageTrip, mileageTripName);
    cmd.getScreenshot();
    allureReporter.endStep();
};