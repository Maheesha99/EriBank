var wdio = require('webdriverio');
var hml = require('xmlhttprequest');
var allureReporter = require('@wdio/allure-reporter').default;
var rc_common = require('./../ReusableComponents/RS_Common');
var rc_reports = require('./../ReusableComponents/RC_Reports');
var rc_expenses = require('./../ReusableComponents/RC_Expenses');
var dt = require('../Utils/DataFile');

describe('Reports', () => {
    if (driver.capabilities.platformName == 'iOS') {
        platfome = 'iOS';
    } else {
        platfome = 'Android';
    }
    describe(platfome, () => {
        describe(driver.config.capabilities.name, () => {

            it('TC_01_Create new travel report and attach existing expense', () => {
                allureReporter.addDescription('User should be able to create a new Travel Report and attach an existing standalone expense');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                rc_common.NavigateToExpenses();
                //Pre-Req : Create a new expense
                rc_expenses.CreateExpense(dt.Reports_TC_01.expenseName, dt.Reports_TC_01.expenseCategory, dt.Reports_TC_01.expense)
                //TC starts : create new travel report and add standalone expense
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_01.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_01.reportName);
                rc_reports.DoneReport();
                rc_reports.AddStandaloneExpensesViaReport(dt.Reports_TC_01.expenseName);
                rc_reports.VerifyExpenseAttachment(dt.Reports_TC_01.expenseName);
                rc_common.GoBack();
                rc_reports.GoInsideReport(dt.Reports_TC_01.reportName, dt.Reports_TC_01.reportType);
                rc_reports.VerifyExpenseAttachment(dt.Reports_TC_01.expenseName);
                rc_common.GoBack();
                rc_common.NavigateToExpenses();
                rc_expenses.ValidateDeletedExpense(dt.Reports_TC_01.expenseName);
                //Post - Req
                rc_common.NavigateToReports();
                rc_reports.DeleteReport(dt.Reports_TC_01.reportName, dt.Reports_TC_01.reportType);

            });
            it('TC_02_Create new travel report and attach new expense', () => {
                allureReporter.addDescription('User should be able to create a new Travel Report and attach a new expense');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //TC starts
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_02.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_02.reportName);
                rc_reports.DoneReport();
                rc_reports.AddNewExpensesViaReport()
                rc_expenses.FillOutExpense(dt.Reports_TC_02.expenseName, dt.Reports_TC_02.expenseCategory, dt.Reports_TC_02.expense);
                rc_reports.VerifyExpenseAttachment(dt.Reports_TC_02.expenseName);
                rc_reports.SaveReport();
                rc_common.GoBack();
                rc_reports.GoInsideReport(dt.Reports_TC_02.reportName, dt.Reports_TC_02.reportType);
                rc_reports.VerifyExpenseAttachment(dt.Reports_TC_02.expenseName);
                //Post - Req
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_02.reportName, dt.Reports_TC_02.reportType);
            });

            it('TC_03_Delete Expense from a Report', () => {
                allureReporter.addDescription('User should be able to delete attached expense from a report');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report and attach new expense
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_03.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_03.reportName);
                rc_reports.DoneReport();
                rc_reports.AddNewExpensesViaReport()
                rc_expenses.FillOutExpense(dt.Reports_TC_03.expenseName, dt.Reports_TC_03.expenseCategory, dt.Reports_TC_03.expense);
                rc_reports.SaveReport();
                rc_common.GoBack();
                //TC starts
                rc_reports.GoInsideReport(dt.Reports_TC_03.reportName, dt.Reports_TC_03.reportType);
                rc_reports.DeleteAttachedExpense(dt.Reports_TC_03.expenseName);
                rc_reports.SaveReport();
                rc_common.GoBack();
                rc_reports.GoInsideReport(dt.Reports_TC_03.reportName, dt.Reports_TC_03.reportType);
                rc_reports.VerifyExpenseHasBeenDeleted(dt.Reports_TC_03.expenseName);
                //Post - Req
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_03.reportName, dt.Reports_TC_03.reportType);
            });

            it('TC_04_Add new destination to a report and delete it', () => {
                allureReporter.addDescription('User should be able to add new destination to the report and delete it');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_04.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_04.reportName);
                rc_reports.DoneReport();
                //TC starts: Add new destination
                rc_reports.AddNewDestinationViaReport(dt.Reports_TC_04.countryName);
                rc_reports.DoneReport();
                rc_reports.VerifyAttachedDestination(dt.Reports_TC_04.countryName);
                rc_reports.SaveReport();
                rc_common.GoBack();
                rc_reports.GoInsideReport(dt.Reports_TC_04.reportName, dt.Reports_TC_04.reportType);
                rc_reports.VerifyAttachedDestination(dt.Reports_TC_04.countryName);
                //Remove added destination
                rc_reports.DeleteAttachedDestination(dt.Reports_TC_04.countryName);
                rc_reports.SaveReport();
                rc_common.GoBack();
                rc_reports.GoInsideReport(dt.Reports_TC_04.reportName, dt.Reports_TC_04.reportType);
                rc_reports.VerifyDestinationHasBeenDeleted(dt.Reports_TC_04.countryName);
                //Post - Req
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_04.reportName, dt.Reports_TC_04.reportType);
            });

            it('TC_05_Try to add overlap destinations to the report', () => {
                allureReporter.addDescription('User should not be able to add overlapping destination to the report');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_05.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_05.reportName);
                rc_reports.DoneReport();
                //TC starts: add overlapping destinations
                rc_reports.CreateDestinationWithDate(dt.Reports_TC_05.fromDate_01, dt.Reports_TC_05.toDate_01);
                rc_reports.DoneReport();
                rc_reports.SaveReport();
                rc_reports.CreateDestinationWithDate(dt.Reports_TC_05.fromDate_02, dt.Reports_TC_05.toDate_02);
                rc_reports.DoneReport();
                rc_reports.ValidateDuplicateDestinationAlert();
                //Post - Req
                rc_common.GoBack();
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_05.reportName, dt.Reports_TC_05.reportType);
            });

            it('TC_06_Validate invalid date ranges in destination', () => {
                allureReporter.addDescription('User should not be able to add invalid date ranges to the destination');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_06.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_06.reportName);
                rc_reports.DoneReport();
                //TC starts: add overlapping destinations
                rc_reports.CreateDestinationWithDate(dt.Reports_TC_06.fromDate, dt.Reports_TC_06.toDate);
                rc_reports.DoneReport();
                rc_reports.ValidateInvalidDateRangeAlert();
                //Post-Req
                rc_common.GoBack();
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_06.reportName, dt.Reports_TC_06.reportType);
            });

            it('TC_07_Verify mandetory fields in a report', () => {
                allureReporter.addDescription('User should not be able to create a report with empty value for a mandetory field');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //TC starts
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_07.reportType);
                rc_reports.ValidateMandetoryFields();
            });

            it('TC_08_Edit Report', () => {
                allureReporter.addDescription('User should be able to edit the report without any issue');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_08.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_08.reportName1, dt.Reports_TC_08.reportPurpose1);
                rc_reports.DoneReport();
                //TC starts : Edit the report 
                rc_reports.NavigateToDetailsTab();
                rc_reports.EditReport();
                rc_reports.FillOutTheReport(dt.Reports_TC_08.reportName2, dt.Reports_TC_08.reportPurpose2);
                rc_reports.DoneReport();
                rc_reports.SaveReport();
                rc_common.GoBack();
                rc_reports.GoInsideReport(dt.Reports_TC_08.reportName1, dt.Reports_TC_08.reportType);
                rc_reports.NavigateToDetailsTab();
                rc_reports.VerifyDetailTab(dt.Reports_TC_08.reportPurpose2);
                //Post-Req
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_08.reportName1, dt.Reports_TC_08.reportType);
            });

            it('TC_09_If user go back without save, user should be asked to save the report', () => {
                allureReporter.addDescription('User should ask to save the report if he go back without saving the report');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_09.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_09.reportName1, dt.Reports_TC_09.reportPurpose1);
                rc_reports.DoneReport();
                //TC starts : Edit the report and not saving it
                rc_reports.NavigateToDetailsTab();
                rc_reports.EditReport();
                rc_reports.FillOutTheReport(dt.Reports_TC_09.reportName2, dt.Reports_TC_09.reportPurpose2);
                rc_reports.DoneReport();
                rc_reports.VerifyDetailTab(dt.Reports_TC_09.reportPurpose2);
                rc_common.GoBack();
                rc_reports.ValidateDiscardChangesAlert();
                rc_reports.GoInsideReport(dt.Reports_TC_09.reportName1, dt.Reports_TC_09.reportType);
                rc_reports.NavigateToDetailsTab();
                rc_reports.VerifyDetailTab(dt.Reports_TC_09.reportPurpose1);
                //Post-Req
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_09.reportName1, dt.Reports_TC_09.reportType);
            });

            it('TC_10_Search report', () => {
                allureReporter.addDescription('User should be able to search for a report');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_10.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_10.reportName);
                rc_reports.DoneReport();
                rc_common.GoBack();
                //TC starts : search report
                rc_reports.SearchReport(dt.Reports_TC_10.reportName);
                rc_reports.VerifySearchReportExist(dt.Reports_TC_10.reportName);
                //Post-Req
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_10.reportName, dt.Reports_TC_10.reportType);
            });

            it('TC_11_Delete Report', () => {
                allureReporter.addDescription('User should be able to delete a report');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_11.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_11.reportName);
                rc_reports.DoneReport();
                rc_common.GoBack();
                //TC starts : create new travel report and add standalone expense
                rc_reports.DeleteReport(dt.Reports_TC_11.reportName, dt.Reports_TC_11.reportType);
                rc_common.NavigateToHome();
                rc_common.NavigateToReports();
                rc_reports.VerifyReportHasBeenDeleted(dt.Reports_TC_11.reportName, dt.Reports_TC_11.reportType)
            });

            it('TC_12_Copy Report Include Expenses', () => {
                allureReporter.addDescription('User should be able copy a report including expenses');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report with expense
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_12.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_12.reportName);
                rc_reports.DoneReport();
                rc_reports.AddNewExpensesViaReport()
                rc_expenses.FillOutExpense(dt.Reports_TC_12.expenseName, dt.Reports_TC_12.expenseCategory, dt.Reports_TC_12.expense);
                rc_reports.VerifyExpenseAttachment(dt.Reports_TC_12.expenseName);
                rc_reports.SaveReport();
                rc_common.GoBack();
                //TC starts : create new travel report and add standalone expense
                rc_reports.CopyReport(dt.Reports_TC_12.reportName, dt.Reports_TC_12.reportType, '');
                rc_common.GoBack();
                rc_reports.GoInsideReport(dt.Reports_TC_12.copiedReportName, dt.Reports_TC_12.reportType);
                rc_reports.VerifyExpenseAttachment(dt.Reports_TC_12.expenseName);
                //Post-Req
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_12.copiedReportName, dt.Reports_TC_12.reportType);
                rc_reports.DeleteReport(dt.Reports_TC_12.reportName, dt.Reports_TC_12.reportType);
            });

            it('TC_13_Copy Report Without Expenses', () => {
                allureReporter.addDescription('User should be able copy a report without expenses');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new report with expense
                rc_common.NavigateToReports();
                rc_reports.CreateReport(dt.Reports_TC_13.reportType);
                rc_reports.FillOutTheReport(dt.Reports_TC_13.reportName);
                rc_reports.DoneReport();
                rc_reports.AddNewExpensesViaReport()
                rc_expenses.FillOutExpense(dt.Reports_TC_13.expenseName, dt.Reports_TC_13.expenseCategory, dt.Reports_TC_13.expense);
                rc_reports.VerifyExpenseAttachment(dt.Reports_TC_13.expenseName);
                rc_reports.SaveReport();
                rc_common.GoBack();
                //TC starts : create new travel report and add standalone expense
                rc_reports.CopyReport(dt.Reports_TC_13.reportName, dt.Reports_TC_13.reportType, 'empty report');
                rc_common.GoBack();
                rc_reports.GoInsideReport(dt.Reports_TC_13.copiedReportName, dt.Reports_TC_13.reportType);
                rc_reports.VerifyExpenseHasBeenDeleted(dt.Reports_TC_13.expenseName);
                //Post-Req
                rc_common.GoBack();
                rc_reports.DeleteReport(dt.Reports_TC_13.copiedReportName, dt.Reports_TC_13.reportType);
                rc_reports.DeleteReport(dt.Reports_TC_13.reportName, dt.Reports_TC_13.reportType);
            });

            it('TC_14_Search report which is not exist', () => {
                allureReporter.addDescription('User should be able to see no search result found placeholder when do search non exist report');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //TC starts : Search non exist report
                rc_common.NavigateToReports();
                rc_reports.SearchReport(dt.Reports_TC_14.reportName);
                rc_reports.VerifySearchReportNotExist(dt.Reports_TC_14.reportName);
            });
            dt.Reports_TC_15_16_17.forEach((inputs) => {
                it(inputs.tcName, () => {
                    allureReporter.addDescription('User should be able to');
                    allureReporter.addSeverity("critical");
                    rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                    //Pre-Req : Create report
                    rc_common.NavigateToReports();
                    rc_reports.CreateReport(inputs.reportType);
                    rc_reports.FillOutTheReport(inputs.reportName);
                    rc_reports.DoneReport();
                    rc_common.GoBack();
                    //TC starts : Search report with filters
                    rc_reports.SearchReport(inputs.reportName);
                    rc_reports.VerifySearchReportExist(inputs.reportName);
                    rc_reports.FilterSerach(inputs.reportName, inputs.reportType);
                    //Post-Req : Delete report
                    rc_common.GoBack();
                    rc_reports.DeleteReport(inputs.reportName, inputs.reportType);
                });
            });
        });
    });
});
