var wdio = require('webdriverio');
var pg_common = require('./../ObjectRepository/PG_Common');
var pg_expenses = require('./../ObjectRepository/PG_Expenses');
var pg_report = require('./../ObjectRepository/PG_Reports');
var cmd = require('./../Utils/CommandRepo');
var allureReporter = require('@wdio/allure-reporter').default;

module.exports.FillOutExpense = function (expName, expCategory, expense) {
    allureReporter.startStep('Create New Expense');
    if (driver.capabilities.platformName == 'iOS') {
        expCategory = ' ' + expCategory;
    }
    cmd.tap(pg_expenses.dd_ExpenseType);
    cmd.tap(pg_expenses.dd_ExpenseCategory, expCategory);
    cmd.tap(pg_expenses.lbl_Expense, expense);
    cmd.tapAtAndType(pg_expenses.tf_Description, expName)
    cmd.tap(pg_report.btn_Done);
    allureReporter.endStep();
};
module.exports.AttachExistingExpenseToExistingReport = function (expenseName, reportName) {
    allureReporter.startStep('Add Existing Expense To Existing Report');
    cmd.tap(pg_expenses.btn_CreateReport);
    cmd.tap(pg_expenses.chk_Expense, expenseName);
    cmd.getScreenshot();
    cmd.tap(pg_expenses.btn_ExistingReport);
    driver.pause(5000);
    cmd.tap(pg_expenses.chk_Report, reportName);
    driver.pause(5000);
    cmd.tap(pg_expenses.btn_Attach);
    driver.pause(6000);
    allureReporter.endStep();
};
module.exports.CreateExpense = function (expName, expCategory, expense) {
    allureReporter.startStep('Create Expense');
    if (driver.capabilities.platformName == 'iOS') {
        expCategory = ' ' + expCategory;
    }
    driver.pause(4000);
    cmd.tap(pg_expenses.btn_AddExpense);
    cmd.tap(pg_expenses.dd_ExpenseType);
    driver.pause(3000);
    cmd.tap(pg_expenses.dd_ExpenseCategory, expCategory);
    cmd.tap(pg_expenses.lbl_Expense, expense);
    driver.pause(2000);
    cmd.tapAtAndType(pg_expenses.tf_Description, expName);
    cmd.tap(pg_common.btn_Save);
    driver.pause(5000);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.GoInsideExpense = function (expenseName) {
    allureReporter.startStep('Go Inside Expense');
    _expenseName=expenseName;
    cmd.getScreenshot();
    if (driver.capabilities.platformName == 'iOS') {
        _expenseName = 'No image ' + expenseName;  
    }
    cmd.tap(pg_expenses.file_Expense, _expenseName);
    driver.pause(2000);
    if(cmd.GetElementCount(pg_expenses.tf_Description)==0){
        cmd.tap(pg_expenses.file_Expense, _expenseName);
    }
    cmd.verifyText(pg_expenses.tf_Description, expenseName);
    driver.pause(4000);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.AttachExistingExpenseToNewReport = function (expenseName, reportType) {
    allureReporter.startStep('Attach Existing Expense To New Report');
    cmd.tap(pg_expenses.btn_CreateReport);
    driver.pause(2000);
    cmd.tap(pg_expenses.chk_Expense, expenseName);
    cmd.getScreenshot();
    cmd.tap(pg_expenses.btn_NewReport);
    driver.pause(5000);
    cmd.tap(pg_report.btn_ReportType, reportType)
    allureReporter.endStep();
};
module.exports.EditDateOfExpense = function (date) {
    allureReporter.startStep('Edit Date Of An Expense');
    cmd.tap(pg_report.lbl_Date);
    cmd.getScreenshot();

    if (driver.capabilities.platformName == 'iOS') {
        cmd.selectDateFromDatePicker(pg_report.wheel_DatePicker, date);
    } else {
        // _fromdate = date.split("/");
        // date=_fromdate[1]+'/'+_fromdate[0]+'/'+_fromdate[2];
        // cmd.selectDateFromDatePicker(pg_report.wheel_DatePicker, date);
       
            _fromdate = date.split("/");
        if (_fromdate[0].length == 1) {
            date = '0' + date;
        }

        date = date.replace(/\//g, " ");
        driver.pause(3000);
        cmd.tap(pg_report.calander_DestinationDateAndroid, date);
     }
    cmd.tap(pg_report.btn_Confirm);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.ValidateDiscardChangesAlert = function () {
    allureReporter.startStep('Validate Discard Changes Alert');
    cmd.ElementPresent(pg_expenses.alert_DiscardChanges);
    cmd.getScreenshot();
    cmd.tap(pg_expenses.alert_YesDiscard);
    allureReporter.endStep();
};
module.exports.DeleteAnExpense = function (expaneseName) {
    allureReporter.startStep('Delete An Expense');
    if (driver.capabilities.platformName == 'iOS') {
    _expaneseName = 'No image ' + expaneseName;
    cmd.swipe(pg_expenses.file_Expense, _expaneseName, 'left');
    }else{
        cmd.swipeAndroid(pg_expenses.file_Expense,'longleft',expaneseName)
    }
    driver.pause(3000);
    cmd.tap(pg_expenses.btn_ExpenseDelete);
    cmd.tap(pg_report.popUp_OK);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.ValidateDeletedExpense = function (expaneseName) {
    allureReporter.startStep('Validate Deleted Expense is not there');
    driver.pause(2000);
    if (driver.capabilities.platformName == 'iOS') {
        expaneseName = 'No image ' + expaneseName;
    }
    cmd.ElementNotPresent(pg_expenses.file_Expense, expaneseName);
    cmd.getScreenshot();
    allureReporter.endStep();
};
