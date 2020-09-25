module.exports = {
    menu_login: {
        iOS: "//XCUIElementTypeOther[@name='Login']",
        Android: "//android.view.ViewGroup[@content-desc='Login']/android.view.ViewGroup/android.widget.TextView",
        ElementName: 'PG_Login.menu_login',
    },
    tf_email: {
        iOS: "~input-email",
        Android: "~input-email",
        ElementName: 'PG_Login.tf_email',
    },
    tf_password: {
        iOS: "~input-password",
        Android: "~input-password",
        ElementName: 'PG_Login.btn_password',
    },
    btn_login: {
        iOS: "//XCUIElementTypeOther[@name='LOGIN']",
        Android: "//android.view.ViewGroup[@content-desc='button-LOGIN']/android.view.ViewGroup",
        ElementName: 'PG_Login.btn_login',
    }
}
