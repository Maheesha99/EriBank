var wdio = require('webdriverio');
var hml = require('xmlhttprequest');
var allureReporter = require('@wdio/allure-reporter').default;
var rc_common = require('./../ReusableComponents/RS_Common');
var rc_reports = require('./../ReusableComponents/RC_Reports');
var rc_expenses = require('./../ReusableComponents/RC_Expenses');
var rc_mileage = require('./../ReusableComponents/RC_Mileage');
var rc_approvals = require('./../ReusableComponents/RC_Approvals');
var dt = require('../Utils/DataFile');


describe('Smoke TS', () => {
    if (driver.capabilities.platformName == 'iOS') {
        platfome = 'iOS';
    } else {
        platfome = 'Android';
    }
    describe(platfome, () => {
        describe(driver.config.capabilities.name, () => {

            it('TC_01_Sign In To The Accoun', () => {
                allureReporter.addDescription('User should be able to login to the account and verify the user name');
                allureReporter.addSeverity("critical");
                rc_common.ValidateLogin(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                rc_common.VerifyHomePage(dt.SuccessLoginCredentials.verifyUserName);
            });

            dt.Smoke_TC_02_03_04.forEach((inputs) => {
                it(inputs.tcName, () => {
                    allureReporter.addDescription(inputs.tcDescription);
                    allureReporter.addSeverity("critical");
                    rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                    rc_common.NavigateToReports();
                    rc_reports.CreateReport(inputs.reportType);
                    rc_reports.FillOutTheReport(inputs.reportName, inputs.reportPurpose);
                    rc_reports.DoneReport();
                    rc_common.GoBack();
                    rc_reports.GoInsideReport(inputs.reportName, inputs.reportType);

                });
            });

            it('TC_05_Add And View Expense', () => {
                allureReporter.addDescription('User should be able to add a new expense');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                rc_common.NavigateToExpenses();
                rc_expenses.CreateExpense(dt.Smoke_TC_05_06.expenseName, dt.Smoke_TC_05_06.expenseCategory, dt.Smoke_TC_05_06.expense);
                rc_expenses.GoInsideExpense(dt.Smoke_TC_05_06.expenseName);
            });

            it('TC_06_Add Expense To Existing Report', () => {
                allureReporter.addDescription('User should be able to add a existing expense to a existing report');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                rc_common.NavigateToExpenses();
                rc_expenses.AttachExistingExpenseToExistingReport(dt.Smoke_TC_05_06.expenseName, dt.Smoke_TC_05_06.reportName);
                rc_reports.VerifyReportName(dt.Smoke_TC_05_06.reportName);
                rc_reports.VerifyExpenseAttachment(dt.Smoke_TC_05_06.expenseName);
            });

            it('TC_07_Create And View Mileage Trip', () => {
                allureReporter.addDescription('User should be able to create and view newly created Mileage');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                rc_common.NavigateToMileage();
                rc_mileage.CreateMileageTrip(dt.Smoke_TC_07_08.mileageTrip);
                rc_mileage.CompleteMileageTrip();
                rc_mileage.SaveMileageTrip();
                rc_mileage.GoInsideMileageTrip(dt.Smoke_TC_07_08.mileageTrip);
            });

            it('TC_08_Create And View Mileage Expense', () => {
                allureReporter.addDescription('User should be able to create a Mileage expense from existing mileage trip');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                rc_common.NavigateToMileage();
                rc_mileage.GoInsideMileageTrip(dt.Smoke_TC_07_08.mileageTrip);
                rc_mileage.CreateMileageExpense();
                rc_expenses.GoInsideExpense(dt.Smoke_TC_07_08.mileageTrip);
                rc_common.GoBack();
                rc_expenses.DeleteAnExpense(dt.Smoke_TC_07_08.mileageTrip);
                rc_common.NavigateToMileage();
                rc_mileage.DeleteMileageTrip(dt.Smoke_TC_07_08.mileageTrip)
            });

            dt.Smoke_TC_09_10.forEach((inputs) => {
                it(inputs.tcName, () => {
                    allureReporter.addDescription(inputs.tcDescription);
                    allureReporter.addSeverity("critical");
                    rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                    rc_common.NavigateToReports();
                    rc_reports.GoInsideReport(inputs.reportName, inputs.reportType);
                    rc_reports.SendReportForApproval(inputs.approver);
                    rc_reports.GoInsideReport(inputs.reportName, inputs.reportType);
                    rc_reports.VerifyReportStatus('For approval');
                    rc_common.GoBack();
                    rc_common.NavigateToApprovals();
                    rc_approvals.GoInsideApproveReport(inputs.reportName);
                    rc_approvals.ApproveOrRejectReport(inputs.ApproveOrReject, inputs.comment);
                    rc_common.GoBack();
                    //rc_common.GoBack();
                    rc_reports.GoInsideReport(inputs.reportName, inputs.reportType);
                    rc_reports.VerifyReportStatus(inputs.finalReportStatus);

                });
            })

            it('TC_11_Logout From The Account', () => {
                allureReporter.addDescription('User should be able to log out from the account');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                rc_common.Logout();
            });
         });
    });
});