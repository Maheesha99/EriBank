var wdio = require('webdriverio');
var pg_reports = require('./../ObjectRepository/PG_Reports');
var pg_common = require('./../ObjectRepository/PG_Common');
var pg_expense = require('./../ObjectRepository/PG_Expenses');
var cmd = require('./../Utils/CommandRepo');
var allureReporter = require('@wdio/allure-reporter').default;

module.exports.AddNewExpensesViaReport = function () {
    allureReporter.startStep('Add New Expenses Via Report');
    cmd.tap(pg_reports.tab_Expenses);
    driver.pause(5000);
    cmd.tap(pg_reports.btn_AddExpense);
    cmd.tap(pg_reports.btn_CreateNewExpenseItem);
    allureReporter.endStep();
};
module.exports.AddNewDestinationViaReport = function (countryName) {
    allureReporter.startStep('Add New Destination Via Report');
    cmd.tap(pg_reports.tab_DestinationsAndTime);
    cmd.tap(pg_reports.btn_AddDestination);
    cmd.tap(pg_reports.dd_CityCountry);
    driver.pause(3000);
    cmd.type(pg_reports.txt_countrySearch, countryName);
    cmd.tap(pg_reports.lbl_CountrySearchResult, countryName);
    driver.pause(5000);
    allureReporter.endStep();
};
module.exports.AddStandaloneExpensesViaReport = function (expName) {
    allureReporter.startStep('Add Standalone Expenses Via Report');
    cmd.tap(pg_reports.tab_Expenses);
    driver.pause(3000);
    cmd.tap(pg_reports.btn_AddExpense);
    cmd.tap(pg_reports.btn_PickFromStandaloneExpenses);
    driver.pause(3000);
    cmd.tap(pg_expense.chk_Expense, expName);
    cmd.tap(pg_expense.btn_Attach);
    driver.pause(4000);
    allureReporter.endStep();
};
module.exports.SaveReport = function () {
    allureReporter.startStep('Save Report');
    cmd.tap(pg_common.btn_Save);
    driver.pause(5000);
    allureReporter.endStep();
};
module.exports.GoInsideReport = function (reportName, reportType) {
    allureReporter.startStep('Go Inside Report');
    reportNameInHome = reportName;
    driver.pause(2000);
    cmd.getScreenshot();
    if (driver.capabilities.platformName == 'iOS') {

        switch (reportType) {
            case 'Travel report':
                reportNameInHome = ' ' + reportName;
                break;
            case 'Expense report':
                reportNameInHome = ' ' + reportName;
                break;
            case 'Mileage report':
                reportNameInHome = ' ' + reportName;
                break;
        }

    }
    cmd.tap(pg_reports.file_Report, reportNameInHome);
    cmd.verifyText(pg_reports.lbl_ReportName, reportName)
    // driver.pause(5000);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.ViewReport = function () {
    allureReporter.startStep('View Report');
    cmd.tap(pg_reports.tab_Details);
    cmd.tap(pg_reports.tab_Expenses);
    cmd.tap(pg_reports.tab_DestinationsAndTime);
    cmd.tap(pg_reports.tab_Attachments);
    allureReporter.endStep();
};
module.exports.CreateReport = function (reportType) {
    allureReporter.startStep('Create ' + reportType);
    //  driver.pause(4000);
    cmd.tap(pg_reports.btn_CreateReport);
    cmd.tap(pg_reports.btn_ReportType, reportType);
    //  driver.pause(3000);
    allureReporter.endStep();
};
module.exports.FillOutTheReport = function (title, purpose) {
    allureReporter.startStep('Fill Out The Report');
    if (title) {
        cmd.tapAtAndType(pg_reports.tf_ReportTittle, title);
    }
    if (purpose) {
        cmd.tapAtAndType(pg_reports.tf_Purpose, purpose);
        cmd.tap(pg_reports.lbl_Purpose);
    }
    cmd.getScreenshot();
    driver.pause(3000);
    allureReporter.endStep();
};
module.exports.DoneReport = function () {
    allureReporter.startStep('Done Report');
    cmd.tap(pg_reports.btn_Done);
    driver.pause(4000);
    allureReporter.endStep();
};

module.exports.VerifyReportName = function (reportName) {
    allureReporter.startStep('Verify Report Name');
    cmd.verifyText(pg_reports.lbl_ReportName, reportName);
    cmd.getScreenshot();
    allureReporter.endStep();
};
// module.exports.VerifyExpenseAttachment = function (expenseName) {
//     allureReporter.startStep('Verify Expense Tab');
//     cmd.tap(pg_reports.tab_Expenses);
//     cmd.getScreenshot();
//     cmd.tap(pg_reports.attached_Expense, expenseName);
//     cmd.verifyText(pg_expense.tf_Description, expenseName);
//     cmd.getScreenshot();
//     allureReporter.endStep();
// };
module.exports.VerifyExpenseAttachment = function (expenseName) {
    allureReporter.startStep('Verify Expense Tab');
    if (driver.capabilities.platformName == 'iOS') {
        expenseName = 'No image ' + expenseName;
    }
    cmd.tap(pg_reports.tab_Expenses);
    cmd.getScreenshot();
    cmd.ElementPresent(pg_reports.attached_Expense, expenseName);
    allureReporter.endStep();
};

module.exports.SendReportForApproval = function (approver) {
    allureReporter.startStep('Send Report For Approval');
    if (driver.capabilities.platformName == 'iOS') {
        approver = ` ${approver}`
    }
    cmd.tap(pg_reports.btn_SubmitReport);
    cmd.tap(pg_reports.popUp_Yes);
    cmd.tap(pg_reports.btn_Approver, approver);
    cmd.tap(pg_reports.btn_SubmitForApproval);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.VerifyReportStatus = function (status) {
    allureReporter.startStep('Verify Report Status');
    cmd.verifyText(pg_reports.lbl_ReportStatus, status);
    allureReporter.endStep();
};
module.exports.DeleteAttachedExpense = function (expenseName) {
    allureReporter.startStep('Delete Attached Expense');
    cmd.tap(pg_reports.tab_Expenses);
    if (driver.capabilities.platformName == 'iOS') {
        expenseName = 'No image ' + expenseName;
        cmd.swipe(pg_reports.attached_Expense, expenseName, 'left');
    } else {
        cmd.swipeAndroid(pg_reports.attached_Expense, 'left', expenseName);
    }
    cmd.getScreenshot();
    cmd.tap(pg_reports.btn_ExpenseDelete);
    cmd.tap(pg_reports.popUp_OK);
    driver.pause(2000);
    allureReporter.endStep();
};
module.exports.VerifyExpenseHasBeenDeleted = function (expenseName) {
    allureReporter.startStep('Verify Expense Has Been Deleted');
    cmd.tap(pg_reports.tab_Expenses);
    cmd.getScreenshot();
    cmd.ElementNotPresent(pg_reports.attached_Expense, expenseName);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.VerifyAttachedDestination = function (countryName) {
    allureReporter.startStep('Verify Attached Destination');
    cmd.tap(pg_reports.tab_DestinationsAndTime);
    cmd.getScreenshot();
    driver.pause(3000);
    cmd.ElementPresent(pg_reports.attached_Destination, countryName)
    allureReporter.endStep();
};
module.exports.DeleteAttachedDestination = function (countryName) {
    allureReporter.startStep('Delete Attached Destination');
    cmd.tap(pg_reports.tab_DestinationsAndTime);
    driver.pause(3000);
    if (driver.capabilities.platformName == 'iOS') {
        cmd.swipe(pg_reports.attached_Destination, countryName, 'left');
    } else {
        cmd.swipeAndroid(pg_reports.attached_Destination, 'longleft', countryName);
    }
    driver.pause(3000);
    cmd.getScreenshot();
    cmd.tap(pg_reports.btn_DestinationDelete, countryName);
    driver.pause(2000);
    allureReporter.endStep();
};
module.exports.VerifyDestinationHasBeenDeleted = function (countryName) {
    allureReporter.startStep('Verify Expense Has Been Deleted');
    cmd.tap(pg_reports.tab_DestinationsAndTime);
    cmd.getScreenshot();
    cmd.ElementNotPresent(pg_reports.attached_Destination, countryName);
    cmd.getScreenshot();
    driver.pause(3000);
    allureReporter.endStep();
};
module.exports.CreateDestinationWithDate = function (FromDate, ToDate) {
    allureReporter.startStep('Create Destination With the Date');
    cmd.tap(pg_reports.tab_DestinationsAndTime);
    cmd.tap(pg_reports.btn_AddDestination);
    cmd.tap(pg_reports.lbl_DestinationFromDate);
    if (driver.capabilities.platformName == 'iOS') {
        cmd.selectDateFromDatePicker(pg_reports.wheel_DatePicker, FromDate);
    } else {
        _fromdate = FromDate.split("/");
        if (_fromdate[0].length == 1) {
            FromDate = '0' + FromDate;
        }

        FromDate = FromDate.replace(/\//g, " ");
        driver.pause(3000);
        if (cmd.GetElementCount(pg_reports.calander_DestinationDateAndroid, FromDate) == 0) {
            cmd.tap(pg_reports.lbl_DestinationFromDate);
        }
        cmd.tap(pg_reports.calander_DestinationDateAndroid, FromDate);
    }
    driver.pause(3000);
    cmd.tap(pg_reports.btn_Confirm);
    cmd.tap(pg_reports.lbl_DestinationToDate);
    if (driver.capabilities.platformName == 'iOS') {
        cmd.selectDateFromDatePicker(pg_reports.wheel_DatePicker, ToDate);

    } else {
        _todate = ToDate.split("/");
        if (_todate[0].length == 1) {
            ToDate = '0' + ToDate;
        }
        ToDate = ToDate.replace(/\//g, " ");
        cmd.tap(pg_reports.calander_DestinationDateAndroid, ToDate)
    }
    driver.pause(5000);
    cmd.tap(pg_reports.btn_Confirm);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.ValidateDuplicateDestinationAlert = function () {
    allureReporter.startStep('Validate Duplicate Destination Alert');
    cmd.ElementPresent(pg_reports.alert_SegmentOverlap);
    cmd.getScreenshot();
    cmd.tap(pg_reports.popUp_OK);
    driver.pause(3000);
    allureReporter.endStep();
};
module.exports.ValidateInvalidDateRangeAlert = function () {
    allureReporter.startStep('Validate Duplicate Destination Alert');
    cmd.ElementPresent(pg_reports.alert_InvalidDateRange);
    cmd.getScreenshot();
    cmd.tap(pg_reports.popUp_OK);
    allureReporter.endStep();
};
module.exports.ValidateMandetoryFields = function () {
    allureReporter.startStep('Validate Mandetory Fields');
    if (driver.capabilities.platformName == 'iOS') {
        cmd.scroll('down');
        driver.pause(3000);
    }

    if (cmd.getElementText(pg_reports.tf_MandetoryFiled) != null) {
        cmd.clear(pg_reports.tf_MandetoryFiled);
        driver.pause(2000);
    }
    driver.pause(2000);
    cmd.getScreenshot();
    cmd.tap(pg_reports.btn_Done);
    cmd.ElementPresent(pg_reports.tf_MandetoryFiledErrorMessage);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.NavigateToDetailsTab = function () {
    allureReporter.startStep('Navigate To Details Tab');
    cmd.tap(pg_reports.tab_Details);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.EditReport = function () {
    allureReporter.startStep('Edit Report');
    cmd.tap(pg_reports.btn_Edit);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.VerifyDetailTab = function (purpose) {
    allureReporter.startStep('Verify Detail Tab');
    cmd.verifyText(pg_reports.lbl_DetailsPurpose, purpose)
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.ValidateDiscardChangesAlert = function () {
    allureReporter.startStep('Verify Detail Tab');
    cmd.ElementPresent(pg_reports.alert_DiscardChanges);
    cmd.getScreenshot();
    cmd.tap(pg_reports.popUp_Yes);
    allureReporter.endStep();
};
module.exports.SearchReport = function (reportName) {
    allureReporter.startStep('Search Report');
    cmd.tap(pg_reports.icon_Search);
    cmd.type(pg_reports.tf_Search, reportName);
    driver.pause(3000);
    cmd.tap(pg_reports.btn_Search);
    driver.pause(3000);
    allureReporter.endStep();
};
module.exports.VerifySearchReportExist = function (reportName) {
    allureReporter.startStep('Verify Search Report Exist');
    cmd.getScreenshot();
    cmd.ElementPresent(pg_reports.file_SearchResults, reportName);
    allureReporter.endStep();
};
module.exports.VerifySearchReportNotExist = function (reportName) {
    allureReporter.startStep('Verify Search Report Not Exist');
    cmd.getScreenshot();
    cmd.ElementNotPresent(pg_reports.file_SearchResults, reportName);
    allureReporter.endStep();
};
module.exports.FilterSerach = function (reportName, filterType) {
    allureReporter.startStep('Filter Serach');
    cmd.tap(pg_reports.lbl_SearchFilterTravel);
    if (filterType.split(' ')[0] == 'Travel') {
        cmd.ElementPresent(pg_reports.file_SearchResults, reportName)
        cmd.getScreenshot();
    } else {
        cmd.ElementNotPresent(pg_reports.file_SearchResults, reportName);
        cmd.getScreenshot();
    }
    cmd.tap(pg_reports.lbl_SearchFilterExpense);
    driver.pause(2000);
    if (filterType.split(' ')[0] == 'Expense') {
        cmd.ElementPresent(pg_reports.file_SearchResults, reportName)
        cmd.getScreenshot();
    } else {
        cmd.ElementNotPresent(pg_reports.file_SearchResults, reportName);
        cmd.getScreenshot();
    }
    cmd.tap(pg_reports.lbl_SearchFilterMileage);
    driver.pause(2000);
    if (filterType.split(' ')[0] == 'Mileage') {
        cmd.ElementPresent(pg_reports.file_SearchResults, reportName)
        cmd.getScreenshot();
    } else {
        cmd.ElementNotPresent(pg_reports.file_SearchResults, reportName);
        cmd.getScreenshot();
    }
    allureReporter.endStep();
};
module.exports.DeleteReport = function (reportName, reportType) {
    allureReporter.startStep('Delete the report');
    cmd.getScreenshot();
    if (driver.capabilities.platformName == 'iOS') {

        switch (reportType) {
            case 'Travel report':
                reportNameInHome = ' ' + reportName;
                break;
            case 'Expense report':
                reportNameInHome = ' ' + reportName;
                break;
            case 'Mileage report':
                reportNameInHome = ' ' + reportName;
                break;
        }

    }
    if (driver.capabilities.platformName == 'iOS') {
        cmd.swipe(pg_reports.file_Report, reportNameInHome, 'left');
    } else {
        cmd.swipeAndroid(pg_reports.file_Report, 'longleft', reportName);
        for (i = 0; i < 6; i++) {
            if (cmd.GetElementCount(pg_reports.btn_ReportDelete) == 0) {
                cmd.swipeAndroid(pg_reports.file_Report, 'longleft', reportName);
            } else {
                break;
            }
        }
    }
    driver.pause(5000);
    cmd.getScreenshot();
    cmd.tap(pg_reports.btn_ReportDelete);
    for (i = 0; i < 6; i++) {
        driver.pause(3000);
        if (cmd.GetElementCount(pg_reports.popUp_OK) == 0) {
            cmd.tap(pg_reports.btn_ReportDelete);
        } else {
            break;
        }
    }
    cmd.tap(pg_reports.popUp_OK);
    driver.pause(5000);
    cmd.getScreenshot();
    allureReporter.endStep();
};
module.exports.VerifyReportHasBeenDeleted = function (reportName, reportType) {
    allureReporter.startStep('Verify Report Has Been Deleted');
    cmd.getScreenshot();
    if (driver.capabilities.platformName == 'iOS') {

        switch (reportType) {
            case 'Travel report':
                reportName = ' ' + reportName;
                break;
            case 'Expense report':
                reportName = ' ' + reportName;
                break;
            case 'Mileage report':
                reportName = ' ' + reportName;
                break;
        }

    }
    cmd.ElementNotPresent(pg_reports.file_Report, reportName);
    allureReporter.endStep();
};
module.exports.CopyReport = function (reportName, reportType, copyOption) {
    allureReporter.startStep('Copy Report');
    if (cmd.GetElementCount(pg_common.btn_Back) == 1) {
        cmd.tap(pg_common.btn_Back);
    }
    cmd.getScreenshot();
    if (driver.capabilities.platformName == 'iOS') {
        switch (reportType) {
            case 'Travel report':
                reportNameInHome = ' ' + reportName;
                break;
            case 'Expense report':
                reportNameInHome = ' ' + reportName;
                break;
            case 'Mileage report':
                reportNameInHome = ' ' + reportName;
                break;
        }
    }
    if (driver.capabilities.platformName == 'iOS') {
        cmd.swipe(pg_reports.file_Report, reportNameInHome, 'left');
    } else {
        cmd.swipeAndroid(pg_reports.file_Report, 'longleft', reportName);
    }
    driver.pause(5000);
    cmd.getScreenshot();
    cmd.tap(pg_reports.btn_ReportCopy);
    if (copyOption.toLowerCase() == 'empty report') {
        cmd.tap(pg_reports.btn_EmptyReport);
    } else {
        cmd.tap(pg_reports.btn_IncludeExpenses);
    }
    driver.pause(5000);
    cmd.verifyTextContains(pg_reports.lbl_ReportName, reportName);
    allureReporter.endStep();
};