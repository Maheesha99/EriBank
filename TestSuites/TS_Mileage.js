var wdio = require('webdriverio');
var hml = require('xmlhttprequest');
var allureReporter = require('@wdio/allure-reporter').default;
var rc_reports = require('../ReusableComponents/RC_Reports');
var rc_expenses = require('../ReusableComponents/RC_Expenses');
var rc_common = require('../ReusableComponents/RS_Common');
var rc_mileage = require('../ReusableComponents/RC_Mileage');
var dt = require('../Utils/DataFile');
var conf = require('../Utils/conf');

describe('Mileage', () => {
    if (driver.capabilities.platformName == 'iOS') {
        platfome = 'iOS';

    } else {
        platfome = 'Android';
    }
    describe(platfome, () => {
        describe(driver.config.capabilities.name, () => {
            
            it('TC_01_Delete Mileage', () => {
                allureReporter.addDescription('User should be able to Delete Mileage Trip');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                //Pre-Req : create mileage trip
                rc_common.NavigateToMileage();
                rc_mileage.CreateMileageTrip(dt.Mileage_TC_1.mileageTrip);
                rc_mileage.CompleteMileageTrip();
                rc_mileage.SaveMileageTrip();
                //TC starts : delete mileage
                rc_mileage.DeleteMileageTrip(dt.Mileage_TC_1.mileageTrip);
                rc_common.NavigateToHome();
                rc_common.NavigateToMileage();
                rc_mileage.VerifyDeletedMileageTrip(dt.Mileage_TC_1.mileageTrip);
            });
            it('TC_02_Discard a Mileage Trip', () => {
                allureReporter.addDescription('User should be able to discard a Mileage');
                allureReporter.addSeverity("critical");
                rc_common.LoginToTheApplication(dt.SuccessLoginCredentials.userName, dt.SuccessLoginCredentials.pwd);
                rc_common.NavigateToMileage();
                rc_mileage.CreateMileageTrip(dt.Mileage_TC_2.mileageTrip);
                rc_mileage.DiscardMileageTrip();
                rc_mileage.VerifyDeletedMileageTrip(dt.Mileage_TC_2.mileageTrip);
            });
        });
    });
});