var assert = require('assert');

describe('WDIO App', () => {
    it('TC_01_Login', () => {
        $("//XCUIElementTypeOther[@name='Login']").click()
        $("~input-email").setValue("test@gmail.com")  	    //XCUIElementTypeTextField[@name='input-email']
        $("~input-password").setValue("test1234")           //XCUIElementTypeTextField[@name='input-password']
        $("//XCUIElementTypeOther[@name='LOGIN']").click()
        driver.pause(3000)
        alertText = driver.getAlertText()
        console.log("Allert Text >> ", alertText)
        assert.equal(alertText, "You are logged in!");
        driver.acceptAlert();
    })

    it('TC_02_Fill the form', () => {
        $("//XCUIElementTypeOther[@name='Forms']").click()
        $("~text-input").setValue("WDIO Sample Test") 	    //XCUIElementTypeTextField[@name='text-input']
        result = $("~input-text-result").getText()          //XCUIElementTypeStaticText[@name='input-text-result']
        assert.equal(result, "WDIO Sample Test");
        $("~switch").click()    	                        //XCUIElementTypeSwitch[@name='switch']
        $("~select-Dropdown").click()  	                    //XCUIElementTypeOther[@name='select-Dropdown']
        $("//XCUIElementTypePickerWheel").setValue("Appium is awesome")
        $("~text-input").click()
        $("//XCUIElementTypeOther[@name='Active']").click()
        alertText = driver.getAlertText()
        console.log("Allert Text >> ", alertText)
        assert.equal(alertText, "This button is active");
        driver.dismissAlert()
    })

})

