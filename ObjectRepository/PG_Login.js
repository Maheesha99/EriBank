module.exports = {
    tf_userName: {
        iOS: "//XCUIElementTypeTextView[@name='Username']",
        Android: "//android.widget.EditText[@text='Username']",
        ElementName: 'PG_Login.tf_userName',
    },
    tf_password: {
        iOS: "//XCUIElementTypeTextView[@name='Password']",
        Android: "//android.widget.EditText[@text='Password']",
        ElementName: 'PG_Login.tf_password',
    },
    btn_login: {
        iOS: "//*[@name='Login']",
        Android: "//android.widget.Button[@text='Login']",
        ElementName: 'PG_Login.btn_login',
    },
    lbl_verifyText: {
        iOS: '',
        Android: "//android.widget.TextView[@text='EriBank']",
        ElementName: 'PG_Login.lbl_verifyText',
    },
    btn_logout: {
        iOS: "",
        Android: "//android.widget.Button[@text='Logout']",
        ElementName: 'PG_Login.btn_logout',
    }
}
