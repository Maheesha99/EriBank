
module.exports = {

    lbl_HamburgerMenu: {
        iOS: '~Drawer-Icon',
        Android: '~Drawer-Icon',
        ElementName: 'PG_Common.lbl_HamburgerMenu',
    },
    hmb_LogOut: {
        iOS: '~Drawer-Logout',
        Android: '~Drawer-Logout',
        ElementName: 'PG_Common.hmb_LogOut',
    },
    hmb_Reports: {
        iOS: "~Drawer-Report",
        Android: "~Drawer-Report",
        ElementName: 'PG_Common.hmb_Reports',
    },
    btn_Back: {
        iOS: "//XCUIElementTypeButton[@name='header-back']",
        Android: "~Go back",
        ElementName: 'PG_Common.btn_Back',
    },
    btn_SearchBack: {
        iOS: "//XCUIElementTypeButton[@name='header-back']",
        Android: "//android.widget.TextView[@text='Search']/../../android.view.ViewGroup[1]//android.widget.Button",
        ElementName: 'PG_Common.btn_SearchBack',
    },
    btn_DestinationBack: {
        iOS: "//XCUIElementTypeButton[@name='header-back']",
        Android: "//android.widget.TextView[@text='Add destination']/../../android.view.ViewGroup[1]//android.widget.Button",
        ElementName: 'PG_Common.btn_BackTwo',
    },
    btn_Save: {
        iOS: "//*[@name='Save']",
        Android: "//android.widget.TextView[@text='Save']",
        ElementName: 'PG_Common.btn_Save',
    },
    hmb_Expenses: {
        iOS: "~Drawer-Expense",
        Android: '~Drawer-Expense',
        ElementName: 'PG_Common.hmb_Expenses',
    },
    hmb_Approvals: {
        iOS: '~Drawer-Approvals',
        Android: '~Drawer-Approvals',
        ElementName: 'PG_Common.hmb_Approvals',
    },
    lbl_UserNameHome: {
        iOS: '//XCUIElementTypeStaticText[@name="Drawer-Profile"]/../XCUIElementTypeStaticText',
        Android: "//android.widget.TextView[@text='Profile settings']/../android.widget.TextView",
        ElementName: 'PG_Common.lbl_UserNameHome',
    },
    hmb_Mileage: {
        iOS: "~Drawer-Mileage",
        Android: '~Drawer-Mileage',
        ElementName: 'PG_Common.hmb_Mileage',
    },
    hmb_Home: {
        iOS: "~Drawer-Home",
        Android: '~Drawer-Home',
        ElementName: 'PG_Common.hmb_Home',
    }

    
    
    
}
