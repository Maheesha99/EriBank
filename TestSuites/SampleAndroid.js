var assert = require('assert');

describe('WDIO App', () => {
    it('TC_01_Login', () => {
        $("//android.view.ViewGroup[@content-desc='Login']/android.view.ViewGroup/android.widget.TextView").click()
        $("~input-email").setValue("test@gmail.com")
        $("~input-password").setValue("test1234")
        $("//android.view.ViewGroup[@content-desc='button-LOGIN']/android.view.ViewGroup").click()
        driver.pause(3000)
        alertText = driver.getAlertText()
        console.log("Allert Text >> ", alertText)
        assert.equal(alertText, "Success\nYou are logged in!");
        driver.acceptAlert();
    })

    it('TC_02_Fill the form', () => {
        $("//android.view.ViewGroup[@content-desc='Forms']/android.view.ViewGroup").click()
        $("~text-input").setValue("WDIO Sample Test")
        result = $("~input-text-result").getText()
        assert.equal(result, "WDIO Sample Test");
        $("~switch").click()
        $("~select-Dropdown").click()
        $("//android.widget.CheckedTextView[@text='Appium is awesome']").click()
        $("//android.view.ViewGroup[@content-desc='button-Active']/android.view.ViewGroup").click()
        alertText = driver.getAlertText()
        console.log("Allert Text >> ", alertText)
        assert.equal(alertText, "This button is\nThis button is active test");
        driver.dismissAlert()
    })
})

