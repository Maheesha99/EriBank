var wdio = require('webdriverio');
var pg_common = require('./../ObjectRepository/PG_Common');
var pg_approvals = require('./../ObjectRepository/PG_Approvals');
var pg_reports = require('./../ObjectRepository/PG_Reports');
var cmd = require('./../Utils/CommandRepo');
var allureReporter = require('@wdio/allure-reporter').default;

module.exports.ApproveOrRejectReport = function (status, comment) {
  allureReporter.startStep('Approve Or Reject Report');
  switch (status.toLowerCase()) {
    case 'approve':
      cmd.tap(pg_approvals.btn_Approve);
      break;
    case 'reject':
      cmd.tap(pg_approvals.btn_Reject);
      break;
  }
  
  cmd.type(pg_approvals.tf_Comment, comment);
  cmd.tap(pg_reports.btn_Done);
  allureReporter.endStep();
};
module.exports.GoInsideApproveReport = function (reportName) {
  allureReporter.startStep('Go Inside Approve Report');
  cmd.getScreenshot();
  cmd.tap(pg_approvals.file_ApprovalsReport, reportName);
  driver.pause(3000);
  cmd.verifyText(pg_reports.lbl_ReportName, reportName);
  cmd.getScreenshot();
  allureReporter.endStep();
};
module.exports.navigateToFinieshedReportsTab = function (reportName) {
  allureReporter.startStep('Navigate To Finieshed Reports Tab');
  cmd.tap(pg_approvals.tab_Finished);
  driver.pause(3000);
  allureReporter.endStep();
};