
module.exports = {
    menu_form: {
        iOS: "//XCUIElementTypeOther[@name='Forms']",
        Android: "//android.view.ViewGroup[@content-desc='Forms']/android.view.ViewGroup",
        ElementName: 'PG_Form.menu_form',
    },
    tf_textInput: {
        iOS: "~text-input",
        Android: "~text-input",
        ElementName: 'PG_Form.tf_textInput',
    },
    lbl_result: {
        iOS: "~input-text-result",
        Android: "~input-text-result",
        ElementName: 'PG_Form.lbl_result',
    },
    toggle_switch: {
        iOS: "~switch",
        Android: "~switch",
        ElementName: 'PG_Form.toggle_switch',
    },
    dd_SelectBest: {
        iOS: "~select-Dropdown",
        Android: "~select-Dropdown",
        ElementName: 'PG_Form.dd_SelectBest',
    },
    lbl_dropDownItem: {
        iOS: "//XCUIElementTypePickerWheel",
        Android: "//android.widget.CheckedTextView[@text='Appium is awesome']",
        ElementName: 'PG_Form.lbl_dropDownItem',
    },
    btn_active: {
        iOS: "//XCUIElementTypeOther[@name='Active']",
        Android: "//android.view.ViewGroup[@content-desc='button-Active']/android.view.ViewGroup",
        ElementName: 'PG_Form.btn_active',
    },
    lbl_alertText: {
        iOS: '',
        Android: "//android.widget.TextView[@resource-id='android:id/message']",
        ElementName: 'PG_Form.lbl_alertText',
    },
    wheelPicker_Item:{
        iOS: "//XCUIElementTypePickerWheel[@value='<>']",
        Android: "",
        ElementName: 'PG_Form.wheelPicker_Item',
    },
    btn_done:{
        iOS: "//*[@name='Done']",
        Android: "",
        ElementName: 'PG_Form.btn_done',
    }
}
