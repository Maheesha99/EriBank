module.exports = {

    file_ApprovalsReport: {
        iOS: "//XCUIElementTypeStaticText[@name='<>']",
        Android: "//android.widget.TextView[@text='<>']",
        ElementName: 'PG_Common.file_ApprovalsReport',
    },
    btn_Approve: {
        iOS: "~Approve",
        Android: "//android.widget.TextView[@text='Approve']",
        ElementName: 'PG_Common.btn_Approve',
    },
    btn_Reject: {
        iOS: "~Reject",
        Android: "//android.widget.TextView[@text='Reject']",
        ElementName: 'PG_Common.btn_Reject',
    },
    tf_Comment: {
        iOS: "//XCUIElementTypeOther[@name='Comment']/../XCUIElementTypeOther[2]//XCUIElementTypeTextView",
        Android: "//android.widget.EditText[@text='Your reason']",
        ElementName: 'PG_Common.tf_Comment',
    },
    tf_CommentTest: {
        iOS: "//XCUIElementTypeOther[@name='Comment']/../XCUIElementTypeOther[2]//XCUIElementTypeTextView",
        Android: "//android.widget.EditText[@text='Your reason']",
        ElementName: 'PG_Common.tf_CommentTest',
    },
    tab_Finished: {
        iOS: "~Finished",
        Android: "//android.widget.TextView[@text='Finished']/..",
        ElementName: 'PG_Common.tab_Finished',
    }
    
}