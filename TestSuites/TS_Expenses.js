var wdio = require('webdriverio');
var hml = require('xmlhttprequest');
var allureReporter = require('@wdio/allure-reporter').default;
var rc_reports = require('./../ReusableComponents/RC_Reports');
var rc_expenses = require('./../ReusableComponents/RC_Expenses');
var rc_common = require('./../ReusableComponents/RS_Common');
var dt = require('../Utils/DataFile');

describe('Expenses', () => {
    if (driver.capabilities.platformName == 'iOS') {
        platfome = 'iOS';
    } else {
        platfome = 'Android';
    }

    describe(platfome, () => {
        describe(driver.config.capabilities.name, () => {

            it('TC_01_Attach Existing Expense to a New Report', () => {
                allureReporter.addDescription('User should be able to attach an existing standalone expense to a new report');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new expense
                rc_common.NavigateToExpenses();
                rc_expenses.CreateExpense(dt.Expenses_TC_01.expenseName, dt.Expenses_TC_01.expenseCategory, dt.Expenses_TC_01.expense);
                //TC starts
                rc_expenses.AttachExistingExpenseToNewReport(dt.Expenses_TC_01.expenseName, dt.Expenses_TC_01.reportType);
                rc_reports.FillOutTheReport(dt.Expenses_TC_01.reportName);
                rc_reports.DoneReport();
                rc_reports.VerifyExpenseAttachment(dt.Expenses_TC_01.expenseName);
                rc_common.GoBack();
                rc_reports.GoInsideReport(dt.Expenses_TC_01.reportName, dt.Expenses_TC_01.reportType);
                rc_common.GoBack();
                rc_common.NavigateToExpenses();
                rc_expenses.ValidateDeletedExpense(dt.Expenses_TC_01.expenseName);
                //Post-Req: delete report
                rc_common.NavigateToReports();
                rc_reports.DeleteReport(dt.Expenses_TC_01.reportName, dt.Expenses_TC_01.reportType);

            });

            it('TC_02_Edit date to a past date of an existing expense', () => {
                allureReporter.addDescription('User should be able to edit expense date ');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new expense
                rc_common.NavigateToExpenses();
                rc_expenses.CreateExpense(dt.Expenses_TC_02.expenseName, dt.Expenses_TC_02.expenseCategory, dt.Expenses_TC_02.expense);
                // TC starts
                rc_expenses.GoInsideExpense(dt.Expenses_TC_02.expenseName);
                rc_expenses.EditDateOfExpense(dt.Expenses_TC_02.date);
                rc_reports.SaveReport();
            });

            it('TC_03_If user go back without save, user should be asked to save the expense', () => {
                allureReporter.addDescription('User should ask to save the expense if he go back without saving the it');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new expense
                rc_common.NavigateToExpenses();
                rc_expenses.CreateExpense(dt.Expenses_TC_03.expenseName, dt.Expenses_TC_03.expenseCategory, dt.Expenses_TC_03.expense)
                // TC starts
                rc_expenses.GoInsideExpense(dt.Expenses_TC_03.expenseName);
                rc_expenses.EditDateOfExpense(dt.Expenses_TC_03.date);
                rc_common.GoBack();
                rc_expenses.ValidateDiscardChangesAlert();
            });

            it('TC_04_Delete standalone expense', () => {
                allureReporter.addDescription('User should be able to delete a standalone expense');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : Create a new expense
                rc_common.NavigateToExpenses();
                rc_expenses.CreateExpense(dt.Expenses_TC_04.expenseName, dt.Expenses_TC_04.expenseCategory, dt.Expenses_TC_04.expense)
                // TC starts
                rc_expenses.DeleteAnExpense(dt.Expenses_TC_04.expenseName);
                rc_common.NavigateToHome();
                rc_common.NavigateToExpenses();
                rc_expenses.ValidateDeletedExpense(dt.Expenses_TC_04.expenseName);
            });
        });
    });
});