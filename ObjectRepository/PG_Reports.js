module.exports = {

    btn_CreateReport: {
        iOS: "~Create report",
        Android: "//android.widget.TextView[@text='Create report']/..",
        ElementName: 'PG_Reports.btn_CreateReport',
    },
    btn_ReportType: {
        iOS: "//*[@name='<>']",
        Android: "//*[@text='<>']",
        ElementName: 'PG_Reports.btn_ReportType',
    },
    tf_ReportTittle: {
        iOS: "(//XCUIElementTypeOther[@name='Report title'])[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextView",
        Android: '~Report-Description',
        ElementName: 'PG_Reports.tf_ReportTittle',
    },
    lbl_SelectAll: {
        iOS: "//*[@name='Select All']",
        Android: null,
        ElementName: 'PG_Reports.lbl_SelectAll',
    },
    tf_Purpose: {
        iOS: "(//XCUIElementTypeOther[@name='Purpose'])[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextView",
        Android: '~Report-Purpose',
        ElementName: 'PG_Reports.tf_Purpose',
    },
    lbl_Purpose: {
        iOS: "//*[@name='Purpose']",
        Android: "//*[@text='Purpose']",
        ElementName: 'PG_Reports.lbl_Purpose',
    },
    dd_DietaryRates: {
        iOS: "//XCUIElementTypeOther[@name='Dietary Rates']/../XCUIElementTypeOther[contains(@name,'None')]",
        Android: null,
        ElementName: 'PG_Reports.dd_DietaryRates',
    },
    lbl_OfficialRates: {
        iOS: "//*[@name='Official rates']",
        Android: null,
        ElementName: 'PG_Reports.lbl_OfficialRates',
    },
    lbl_Date: {
        iOS: "//*[@name='Date']",
        Android: '//android.widget.TextView[@text="Date"]/following-sibling::android.widget.TextView',
        ElementName: 'PG_Reports.lbl_Date',
    },
    wheel_DatePicker: {
        iOS: "//XCUIElementTypePickerWheel",
        Android: '//android.widget.EditText[@Resource-Id="numberpicker_input"]',
        ElementName: 'PG_Reports.wheel_DatePicker',
    },
    btn_Confirm: {
        iOS: "//*[@name='Confirm']",
        Android: '//android.widget.Button[@text="OK"]',
        ElementName: 'PG_Reports.btn_Confirm',
    },
    btn_Done: {
        iOS: "//XCUIElementTypeStaticText[@name='Done']",
        Android: '//android.widget.TextView[@text="Done"]',
        ElementName: 'PG_Reports.btn_Done',
    },
    tab_Expenses: {
        iOS: "//XCUIElementTypeOther[@name='Expenses']",
        Android: "~Expenses",
        ElementName: 'PG_Reports.tab_Expenses',
    },
    btn_AddExpense: {
        iOS: "//*[@name='Add expense']",
        Android: "//android.widget.TextView[@text='Add expense']",
        ElementName: 'PG_Reports.btn_AddExpense',
    },
    btn_CreateNewExpenseItem: {
        iOS: "//*[@name='Create new expense item']",
        Android: "//*[@text='Create new expense item']",
        ElementName: 'PG_Reports.btn_CreateNewExpenseItem',
    },
    btn_PickFromStandaloneExpenses: {
        iOS: "//*[@name='Pick from standalone expenses']",
        Android: "//*[@text='Pick from standalone expenses']",
        ElementName: 'PG_Reports.btn_PickFromStandaloneExpenses',
    },
    file_Report: {
        iOS: "(//XCUIElementTypeOther[starts-with(@name,'<>')])[2]",
        Android: "//android.widget.TextView[@text='<>']",
        ElementName: 'PG_Reports.file_Report',
    },
    file_ReportStatus: {
        iOS: "(//XCUIElementTypeOther[contains(@name,'<>')])[last()]",
        Android: "//android.widget.TextView[@text='<>']/../android.widget.TextView[4]",
        ElementName: 'PG_Reports.file_Report',
    },
    tab_Details: {
        iOS: "//*[@name='Details']",
        Android: '~Details',
        ElementName: 'PG_Reports.tab_Details',
    },
    tab_DestinationsAndTime: {
        iOS: "//*[@name='Destinations and time']",
        Android: '~Destinations and time',
        ElementName: 'PG_Reports.tab_DestinationsAndTime',
    },
    tab_Attachments: {
        iOS: "//*[@name='Attachments']",
        Android: null,
        ElementName: 'PG_Reports.tab_Attachments',
    },
    btn_SubmitReport: {
        iOS: '//XCUIElementTypeStaticText[@name="Submit"]',
        Android: '//android.widget.TextView[@text="Submit"]',
        ElementName: 'PG_Reports.btn_SubmitReport',
    },
    btn_SubmitForApproval: {
        iOS: '~Submit',
        Android: '//android.widget.TextView[@text="Submit"]',
        ElementName: 'PG_Reports.btn_SubmitForApproval',
    },
    lbl_ReportName: {
        iOS: '//XCUIElementTypeOther[contains(@name,"Reference")]/../../XCUIElementTypeStaticText',
        Android: "//android.widget.TextView[contains(@text,'Reference')]/../android.widget.TextView[1]",
        ElementName: 'PG_Reports.lbl_ReportName',
    },
    attached_Expense: {
        iOS: "//XCUIElementTypeOther[starts-with(@label,'<>')][last()]",
        Android: "//android.widget.TextView[@text='<>']/..",
        ElementName: 'PG_Reports.attach_Expense',
    },
    btn_Approver: {
        iOS: "(//XCUIElementTypeOther[@name='<>'])[3]",
        Android: "//android.widget.TextView[@text='<>']/..",
        ElementName: 'PG_Reports.btn_approver',
    },
    lbl_ReportStatus: {
        iOS: '//XCUIElementTypeStaticText[contains(@name,"Reference")]/../../XCUIElementTypeOther[2]//XCUIElementTypeStaticText',
        Android: "//android.widget.TextView[contains(@text,'<>')]",
        ElementName: 'PG_Reports.lbl_ReportStatus',
    },
    popUp_Yes: {
        iOS: '~Yes',
        Android: "//android.widget.Button[@text='YES']",
        ElementName: 'PG_Reports.popUp_Yes',
    },
    btn_ExpenseDelete: {
        iOS: '//XCUIElementTypeOther[contains(@name,"Expense-Delete")]',
        Android: "//android.view.ViewGroup[contains(@content-desc,'Expense-Delete')]",
        ElementName: 'PG_Reports.btn_ExpenseDelete',
    },
    popUp_OK: {
        iOS: '~OK',
        Android: "//android.widget.Button[@text='OK']",
        ElementName: 'PG_Reports.popUp_OK',
    },
    btn_AddDestination: {
        iOS: '(//XCUIElementTypeOther[@name="Add destination"])[1]',
        Android: "//android.widget.TextView[@text='Add destination']",
        ElementName: 'PG_Reports.btn_AddDestination',
    },
    dd_CityCountry: {
        iOS: '//XCUIElementTypeStaticText[@name="City/country"]/../following-sibling::XCUIElementTypeOther',
        Android: "//android.widget.TextView[@text='City/country']/following-sibling::android.view.ViewGroup",
        ElementName: 'PG_Reports.dd_CityCountry',
    },
    txt_countrySearch: {
        iOS: '(//XCUIElementTypeOther[@name="Search country"])[2]/XCUIElementTypeTextField',
        Android: "//android.widget.EditText[@text='Search country']",
        ElementName: 'PG_Reports.dd_CityCountry',
    },
    lbl_CountrySearchResult: {
        iOS: "//XCUIElementTypeStaticText[@name='<>']",
        Android: "//android.widget.TextView[@text='<>']",
        ElementName: 'PG_Reports.lbl_CountrySearchResult',
    },
    attached_Destination: {
        iOS: "(//XCUIElementTypeOther[starts-with(@name,'<>')])[3]",
        Android: "//android.widget.TextView[@text='<>']/../../../..",
        ElementName: 'PG_Reports.attached_Destination',
    },
    btn_DestinationDelete: {
        iOS: "(//XCUIElementTypeOther[starts-with(@name,'<>')])[1]/following-sibling::XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther",
        Android: "//android.widget.TextView[@text='<>']/../../../following-sibling::android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup",
        ElementName: 'PG_Reports.btn_DestinationDelete',
    },
    lbl_DestinationFromDate: {
        iOS: "//XCUIElementTypeOther[@name='Timespan from']/following-sibling::XCUIElementTypeOther/XCUIElementTypeOther",
        Android: "//android.widget.TextView[@text='Timespan from']/following-sibling::android.view.ViewGroup[1]",
        ElementName: 'PG_Reports.lbl_DestinationFromDate',
    },
    lbl_DestinationToDate: {
        iOS: "//XCUIElementTypeOther[@name='Timespan to']/following-sibling::XCUIElementTypeOther/XCUIElementTypeOther",
        Android: "//android.widget.TextView[@text='Timespan to']/following-sibling::android.view.ViewGroup[1]",
        ElementName: 'PG_Reports.lbl_DestinationToDate',
    },
    alert_SegmentOverlap: {
        iOS: "//XCUIElementTypeStaticText[contains(@name,'The segment overlaps another segment')]",
        Android: "//android.widget.TextView[contains(@text,'The segment overlaps another segment starting')]",
        ElementName: 'PG_Reports.alert_SegmentOverlap',
    },
    alert_InvalidDateRange: {
        iOS: "//XCUIElementTypeStaticText[contains(@name,'Invalid date range')]",
        Android: "//android.widget.TextView[contains(@text,'Invalid date range')]",
        ElementName: 'PG_Reports.alert_InvalidDateRange',
    },
    tf_MandetoryFiled: {
        iOS: '//XCUIElementTypeOther[contains(@name,"customField-Test")][1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField',
        Android: "//android.widget.TextView[contains(@text,'customField-Test')]/following-sibling::android.view.ViewGroup[1]/android.widget.EditText",
        ElementName: 'PG_Reports.tf_MandetoryFiled',
    },
    tf_MandetoryFiledErrorMessage: {
        iOS: '//XCUIElementTypeStaticText[@name="This field is required"]',
        Android: '//android.widget.TextView[@text="This field is required"]',
        ElementName: 'PG_Reports.tf_MandetoryFiledErrorMessage',
    },
    btn_Edit: {
        iOS: '~Edit',
        Android: '//android.widget.TextView[@text="Edit"]',
        ElementName: 'PG_Reports.btn_Edit',
    },
    lbl_DetailsPurpose: {
        iOS: '//XCUIElementTypeStaticText[@name="Purpose"]/following-sibling::XCUIElementTypeStaticText',
        Android: '//android.widget.TextView[@text="Purpose"]/following-sibling::android.widget.TextView',
        ElementName: 'PG_Reports.lbl_DetailsPurpose',
    },
    alert_DiscardChanges: {
        iOS: '//XCUIElementTypeStaticText[contains(@name,"You have unsaved changes! Do you still want to leave this page?")]',
        Android: '//android.widget.TextView[@text="You have unsaved changes! Do you still want to leave this page?"]',
        ElementName: 'PG_Reports.alert_DiscardChanges',
    },
    icon_Search: {
        iOS: '//XCUIElementTypeOther[@name="Reports"]/following-sibling::XCUIElementTypeOther',
        Android: "//android.widget.TextView[@text='Reports']/../following-sibling::android.view.ViewGroup[1]",
        ElementName: 'PG_Reports.btn_Search',
    },
    tf_Search: {
        iOS: '//XCUIElementTypeOther[@name="Search text"]/XCUIElementTypeTextField',
        Android: '//android.widget.EditText[@text="Search text"]',
        ElementName: 'PG_Reports.btn_Search',
    },
    btn_Search: {
        iOS: '(//XCUIElementTypeOther[@name="Search"])[2]',
        Android: '//android.widget.TextView[@text="Filter search"]/../android.view.ViewGroup[2]',
        ElementName: 'PG_Reports.btn_Search',
    },
    file_SearchResults: {
        iOS: "(//XCUIElementTypeStaticText[@name='<>'])[1]",
        Android: "//android.widget.TextView[@text='<>'][1]",
        ElementName: 'PG_Reports.file_SearchResults',
    },
    calander_DestinationDateAndroid: {
        iOS: null,
        Android: "//android.view.View[@content-desc='<>']",
        ElementName: 'PG_Reports.lbl_DestinationToDate',
    },
    btn_ReportDelete: {
        iOS: "//XCUIElementTypeStaticText[@value='Delete']/..",
        Android: "//android.widget.TextView[@text='Delete']/..",
        ElementName: 'PG_Reports.btn_Delete',
    },
    btn_ReportCopy: {
        iOS: "//XCUIElementTypeStaticText[@value='Copy report']/..",
        Android: "//android.widget.TextView[@text='Copy report']/..",
        ElementName: 'PG_Reports.btn_ReportCopy',
    },
    btn_EmptyReport: {
        iOS: "//*[@name='Empty report']",
        Android: "//android.widget.TextView[@text='Empty report']",
        ElementName: 'PG_Reports.btn_EmptyReport',
    },
    btn_IncludeExpenses: {
        iOS: "//*[@name='Include expenses']",
        Android: "//android.widget.TextView[@text='Include expenses']",
        ElementName: 'PG_Reports.btn_IncludeExpenses',
    },
    lbl_NoSearchResultFound: {
        iOS: "//XCUIElementTypeStaticText[@name='No search results found']",
        Android: "//android.widget.TextView[@text='No search results found']",
        ElementName: 'PG_Reports.lbl_NoSearchResultFound',
    },
    lbl_SearchFilterTravel: {
        iOS: "//XCUIElementTypeStaticText[@name='Travel']/../XCUIElementTypeOther",
        Android: "//android.widget.TextView[@text='Travel']/../android.view.ViewGroup[4]",
        ElementName: 'PG_Reports.lbl_SearchFilterTravel',
    },
    lbl_SearchFilterExpense: {
        iOS: "//XCUIElementTypeStaticText[@name='Expense']/../XCUIElementTypeOther",
        Android: "//android.widget.TextView[@text='Expense']/../android.view.ViewGroup[5]",
        ElementName: 'PG_Reports.lbl_SearchFilterExpense',
    },
    lbl_SearchFilterMileage: {
        iOS: "//XCUIElementTypeStaticText[@name='Mileage']/../XCUIElementTypeOther",
        Android: "//android.widget.TextView[@text='Mileage']/../android.view.ViewGroup[6]",
        ElementName: 'PG_Reports.lbl_SearchFilterMileage',
    },

}
