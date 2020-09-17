module.exports = {

    btn_NewTrip: {
        iOS: "//XCUIElementTypeOther[@name='New trip']",
        Android: "//android.widget.TextView[@text='New trip']",
        ElementName: 'PG_Mileage.btn_NewTrip',
    },
    btn_StartTrip: {
        iOS: "(//XCUIElementTypeOther[@name='Start trip'])",
        Android: "//android.widget.TextView[@text='Start trip']",
        ElementName: 'PG_Mileage.btn_StartTrip',
    },
    btn_Edit: {
        iOS: '//XCUIElementTypeStaticText[@name="New mileage entry"]/../following-sibling::XCUIElementTypeOther/XCUIElementTypeOther',
        Android: "//android.widget.TextView[@text='New mileage entry']/../following-sibling::android.view.ViewGroup",
        ElementName: 'PG_Mileage.btn_Edit',
    },
    tf_Title: {
        iOS: '(//XCUIElementTypeOther[@name="new mileage entry"])[3]/XCUIElementTypeTextField',
        Android: "//android.widget.TextView[@text='Save title']/../../android.view.ViewGroup[1]/android.widget.EditText",
        ElementName: 'PG_Mileage.tf_Title',
    },
    btn_SaveTitle: {
        iOS: '(//XCUIElementTypeOther[@name="Save title"])[2]',
        Android: "//android.widget.TextView[@text='Save title']/..",
        ElementName: 'PG_Mileage.btn_SaveTitle',
    },
    btn_EndTrip: {
        iOS: '~End trip',
        Android: '//android.widget.TextView[@text="End trip"]',
        ElementName: 'PG_Mileage.btn_EndTrip',
    },
    btn_CompleteTrip: {
        iOS: '~Complete trip',
        Android: "//android.widget.TextView[@text='Complete trip']",
        ElementName: 'PG_Mileage.btn_CompleteTrip',
    },
    btn_DiscardTrip: {
        iOS: '~Discard trip',
        Android: "//android.widget.TextView[@text='Discard trip']",
        ElementName: 'PG_Mileage.btn_DiscardTrip',
    },
    btn_SaveTrip: {
        iOS: '~Save trip',
        Android: "//android.widget.TextView[@text='Save trip']",
        ElementName: 'PG_Mileage.btn_SaveTrip',
    },
    popUp_Keep: {
        iOS: '//XCUIElementTypeButton[@name="Keep"]',
        Android: '//android.widget.Button[@text="KEEP"]',
        ElementName: 'PG_Mileage.popUp_Keep',
    },
    popUp_Yes: {
        iOS: '//XCUIElementTypeButton[@name="Yes"]',
        Android: '//android.widget.Button[@text="YES"]',
        ElementName: 'PG_Mileage.popUp_Keep',
    },
    tf_Description: {
        iOS: '(//XCUIElementTypeOther[@name="Description"])[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextView',
        Android: "//android.widget.TextView[@text='Description']/following-sibling::android.view.ViewGroup/android.widget.EditText",
        ElementName: 'PG_Mileage.tf_Description',
    },
    file_MileageTrip: {
        iOS: "(//XCUIElementTypeOther[starts-with(@name,'<>')])[1]",
        Android: "//android.widget.TextView[@text='<>']/..",
        ElementName: 'PG_Mileage.file_MileageTrip',
    },
    btn_CreateMileage: {
        iOS: "~Create mileage",
        Android: "//android.widget.TextView[@text='Create mileage']",
        ElementName: 'PG_Mileage.btn_CreateMileage',
    },
    btn_Allow:{
        iOS:'//XCUIElementTypeButton[@name="Allow"]',
        Android:"//android.widget.Button[@text='Allow']",
        ElementName: 'PG_Mileage.btn_Allow',
    },
    btn_AllowOnce:{
        iOS:'//XCUIElementTypeButton[@name="Allow Once"]',
        Android:"//android.widget.Button[@text='Allow Once']",
        ElementName: 'PG_Mileage.btn_AllowOnce',
    },
    btn_AlwaysAllow:{
        iOS:'//XCUIElementTypeButton[@name="Always Allow"]',
        Android:"//android.widget.Button[@text='Allow all the time']",
        ElementName: 'PG_Mileage.btn_AlwaysAllow',
    },
    btn_DeleteMileage:{
        iOS:'//XCUIElementTypeStaticText[@name="Delete"]/..',
        Android:"//android.widget.TextView[@text='Delete']/..",
        ElementName: 'PG_Mileage.btn_DeleteMileage',
    },
    
    

}