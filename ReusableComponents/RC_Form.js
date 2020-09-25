var pg_form = require('../ObjectRepository/PG_Form');
var cmd = require('../Utils/CommandRepo');
var allureReporter = require('@wdio/allure-reporter').default;

module.exports.FillTheForm = function (textInput, item) {
    allureReporter.startStep('Fill The Form');
    cmd.tap(pg_form.menu_form)
    cmd.type(pg_form.tf_textInput, textInput)
    cmd.verifyText(pg_form.lbl_result, textInput)
    cmd.tap(pg_form.toggle_switch)
    cmd.tap(pg_form.dd_SelectBest)
    if (driver.isIOS) {
        cmd.tap(pg_form.wheelPicker_Item,item)
        cmd.tap(pg_form.btn_done)
    } else {
        cmd.tap(pg_form.lbl_dropDownItem)
    }
    cmd.tap(pg_form.btn_active)
    cmd.getScreenshot()
    allureReporter.endStep();
};
module.exports.DismissAlert = function () {
    allureReporter.startStep('Dismiss Alert');
    driver.dismissAlert()
    allureReporter.endStep();
};

