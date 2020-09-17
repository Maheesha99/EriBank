module.exports = {

    tf_UserName: {
        iOS: "(//XCUIElementTypeOther[@name='Email address'])[2]/XCUIElementTypeTextField",
        Android: "//android.widget.EditText[@text='Email address']",
        ElementName: 'PG_Login.tf_UserName',
    },
    tf_Password: {
        iOS: '(//XCUIElementTypeOther[@name="Password"])[3]/XCUIElementTypeSecureTextField',
        Android: "//android.widget.EditText[@text='Password']",
        ElementName: 'PG_Login.tf_Password',
    },
    btn_SignIn: {
        iOS: '//XCUIElementTypeOther[@name="Sign in"]',
        Android: "//android.widget.TextView[@text='Sign in']",
        ElementName: 'PG_Login.btn_SignIn',
    },
    lbl_Home: {
        iOS: '//XCUIElementTypeStaticText[@name="Email"]',
        Android: "//android.widget.TextView[@text = 'Email']",
        ElementName: 'PG_Login.lbl_Home',
    },
    lbl_ErrorMessages: {
        iOS: "//XCUIElementTypeStaticText[@name='<>']",
        Android: "//android.widget.TextView[@text='<>']",
        ElementName: 'PG_Login.lbl_ErrorMessages',
    },
    lbl_Email: {
        iOS: "//XCUIElementTypeStaticText[@name='Email']",
        Android: "//android.widget.TextView[@text='Email']",
        ElementName: 'PG_Login.lbl_Email',
    }
}
