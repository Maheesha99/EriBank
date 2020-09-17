
module.exports = {

    dd_ExpenseType: {
        iOS: "//XCUIElementTypeStaticText[@name='Expense type']/../../XCUIElementTypeOther[2]",
        Android: "//android.widget.TextView[@text='Expense type']/following-sibling::android.view.ViewGroup",
        ElementName: 'PG_Expenses.dd_ExpenseType',
    },
    dd_ExpenseCategory: {
        iOS: "//XCUIElementTypeOther[starts-with(@name,'<>')]",
        Android: "//android.widget.TextView[@text='<>']/../..",
        ElementName: 'PG_Expenses.dd_ExpenseCategory',
    },
    lbl_Expense: {
        iOS: "//*[@name='<>']",
        Android: "//android.widget.TextView[@text='<>']",
        ElementName: 'PG_Expenses.lbl_Expense',
    },
    btn_CreateReport: {
        iOS: "~Create report",
        Android: "//android.widget.TextView[@text='Create report']/..",
        ElementName: 'PG_Expenses.btn_CreateReport',
    },
    chk_Expense: {
        iOS: "//XCUIElementTypeStaticText[@name='<>']/../following-sibling::XCUIElementTypeOther/XCUIElementTypeOther",
        Android: "//android.widget.TextView[@text='<>']",
        ElementName: 'PG_Expenses.chk_Expense',
    },
    btn_ExistingReport: {
        iOS: "~Existing report",
        Android: "//*[@text='Existing report']",
        ElementName: 'PG_Expenses.btn_ExistingReport',
    },
    btn_NewReport: {
        iOS: "~New report",
        Android: "//*[@text='New report']",
        ElementName: 'PG_Expenses.btn_NewReport',
    },
    chk_Report: {
        iOS: "//XCUIElementTypeStaticText[contains(@name,'<>')]",
        Android: "//android.widget.TextView[@text='<>']",
        ElementName: 'PG_Expenses.chk_Report',
    },
    btn_Attach: {
        iOS: "(//XCUIElementTypeOther[@name='Attach (1)'])[2]",
        Android: "//android.widget.TextView[contains(@text,'Attach')]",
        ElementName: 'PG_Expenses.btn_Attach',
    },
    btn_AddExpense: {
        iOS: "~Add expense",
        Android: "//android.widget.TextView[@text='Add expense']/..",
        ElementName: 'PG_Expenses.btn_AddExpense',
    },
    tf_Description: {
        iOS: '(//XCUIElementTypeOther[@name="Description"])[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextView',
        Android: "//android.widget.TextView[@text='Description']/following-sibling::android.view.ViewGroup/android.widget.EditText",
        ElementName: 'PG_Expenses.tf_Description',
    },
    file_Expense: {
        iOS: "(//XCUIElementTypeOther[starts-with(@name,'<>')])[3]",
        Android: "//android.widget.TextView[contains(@text,'<>')]",
        ElementName: 'PG_Expenses.file_Expense',
    },
    alert_DiscardChanges: {
        iOS: '//XCUIElementTypeStaticText[contains(@name,"There are some unsaved changes. Do you want to discard?")]',
        Android: '//android.widget.TextView[contains(@text,"There are some unsaved changes. Do you want to discard?")]',
        ElementName: 'PG_Expenses.alert_DiscardChanges',
    },
    alert_YesDiscard: {
        iOS: '~Yes, discard',
        Android: "//android.widget.Button[@text='YES, DISCARD']",
        ElementName: 'PG_Expenses.alert_YesDiscard',
    },
    btn_ExpenseDelete: {
        iOS: '//XCUIElementTypeOther[contains(@name,"Expense-Delete")]',
        Android: '//android.view.ViewGroup[contains(@content-desc,"Expense-Delete")]',
        ElementName: 'PG_Expenses.btn_ExpenseDelete',
    },
}