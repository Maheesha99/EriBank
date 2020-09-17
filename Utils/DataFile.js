//Common login
module.exports.SuccessLoginCredentials = {
    userName: 'automationtest@99x.lk',
    pwd: 'test1234',
    verifyUserName: 'Automation test'
}
//Smoke Data
module.exports.Smoke_TC_02_03_04 = [
    {
        tcName: 'TC_02_Create And View Travel Report',
        tcDescription: 'User should be able to create a new Travel Report and View newly created report',
        reportType: 'Travel report',
        reportName: 'Automation Travel Report 1',
        reportPurpose: 'Automation'
    },
    {
        tcName: 'TC_03_Create And View Expense Report',
        tcDescription: 'User should be able to create a new Expense Report and View newly created report',
        reportType: 'Expense report',
        reportName: 'Automation Expense Report 1',
        reportPurpose: 'Automation'
    },
    {
        tcName: 'TC_04_Create And View Mileage Report',
        tcDescription: 'User should be able to create a new Expense Report',
        reportType: 'Mileage report',
        reportName: 'Automation Mileage Report 1',
        reportPurpose: 'Automation'
    }
]
module.exports.Smoke_TC_05_06 =
{
    expenseName: 'Expense 1',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
    reportName: 'Automation Travel Report 1',
}
module.exports.Smoke_TC_07_08 =
{
    mileageTrip: 'Automation mileage 2',
}
module.exports.Smoke_TC_09_10 = [
    {
        tcName: 'TC_09_Approve Report',
        tcDescription: 'User should be able to approve a report',
        reportType: 'Mileage report',
        reportName: 'Automation Mileage Report 1',
        approver: 'Automation',
        ApproveOrReject: 'Approve',
        comment: 'Test',
        finalReportStatus: 'Finished',
    },
    {
        tcName: 'TC_10_Reject Report',
        tcDescription: 'User should be able to reject a report',
        reportType: 'Expense report',
        reportName: 'Automation Expense Report 1',
        approver: 'Automation',
        ApproveOrReject: 'Reject',
        comment: 'Test',
        finalReportStatus: 'Rejected',
    }
]
//Expenses Data
module.exports.Expenses_TC_01 =
{
    reportName: 'Automation Report 1',
    expenseName: 'Expense TC_1',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
    reportType: 'Travel report',
}
module.exports.Expenses_TC_02 =
{
    expenseName: 'Expense TC_2',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
    date: '11/June/2020'
}
module.exports.Expenses_TC_03 =
{
    expenseName: 'Expense TC_3',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
    date: '11/June/2020'
}
module.exports.Expenses_TC_04 =
{
    expenseName: 'Expense TC_4',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
}
//Reports Data
module.exports.Reports_TC_01 =
{
    reportName: 'Automation Report TC_1',
    expenseName: 'Report Expense 1',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
    reportType: 'Travel report',
    reportPurpose: 'Automation',
}
module.exports.Reports_TC_02 =
{
    reportName: 'Automation Report TC_2',
    expenseName: 'New Expense 1',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
    reportType: 'Travel report',
    reportPurpose: 'Automation',
}
module.exports.Reports_TC_03 =
{
    reportName: 'Automation Report TC_3',
    expenseName: 'Expense 1',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
    reportType: 'Travel report',
    reportPurpose: 'Automation',
}
module.exports.Reports_TC_04 =
{
    reportName: 'Automation Report TC_4',
    reportType: 'Travel report',
    countryName: 'Sri Lanka',
}
module.exports.Reports_TC_05 =
{
    reportName: 'Automation Report TC_5',
    reportType: 'Travel report',
    reportPurpose: 'Automation',
    fromDate_01: '16/June/2020',
    toDate_01: '16/June/2020',
    fromDate_02: '15/June/2020',
    toDate_02: '17/June/2020',
}
module.exports.Reports_TC_06 =
{
    reportName: 'Automation Report TC_6',
    reportType: 'Travel report',
    reportPurpose: 'Automation',
    fromDate: '16/June/2020',
    toDate: '15/June/2020'
}
module.exports.Reports_TC_07 =
{
    reportType: 'Travel report',
}
module.exports.Reports_TC_08 =
{
    reportName1: 'Automation Report TC_8',
    reportPurpose1: '',
    reportName2: '',
    reportPurpose2: 'Automation',
    reportType: 'Travel report',
}
module.exports.Reports_TC_09 =
{
    reportName1: 'Automation Report TC_9',
    reportPurpose1: 'Automation',
    reportName2: '',
    reportPurpose2: 'Update Purpose',
    reportType: 'Travel report',
}
module.exports.Reports_TC_10 =
{
    reportName: 'Automation Report TC_10',
    reportPurpose: 'Automation',
    reportType: 'Travel report',
}
module.exports.Reports_TC_11 =
{
    reportName: 'Automation Report TC_11',
    reportPurpose: 'Automation',
    reportType: 'Travel report',
}
module.exports.Reports_TC_12 =
{
    reportName: 'Automation Report TC_12',
    copiedReportName: 'Copy of Automation Report TC_12',
    reportPurpose: 'Automation',
    reportType: 'Travel report',
    expenseName: 'expense 12',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
}
module.exports.Reports_TC_13 =
{
    reportName: 'Automation Report TC_13',
    copiedReportName: 'Copy of Automation Report TC_13',
    reportPurpose: 'Automation',
    reportType: 'Travel report',
    expenseName: 'expense 13',
    expenseCategory: 'Accomodation',
    expense: 'Hotel',
}
module.exports.Reports_TC_14 =
{
    reportName: 'Automation Report TC_14',
}
module.exports.Reports_TC_15_16_17 = [
    {
        tcName: 'TC_15_Search report with Travel filter',
        tcDescription: 'User should be able to see travel report under travel report filter',
        reportType: 'Travel report',
        reportName: 'Automation Travel Report 15',
    },
    {
        tcName: 'TC_16_Search report with Expense filter',
        tcDescription: 'User should be able to see expense report under expense report filter',
        reportType: 'Expense report',
        reportName: 'Automation Expense Report 16',
    },
    {
        tcName: 'TC_17_Search report with Mileage filter',
        tcDescription: 'User should be able to see mileage report under mileage report filter',
        reportType: 'Mileage report',
        reportName: 'Automation Mileage Report 17',
    }
]
//Login Data
module.exports.Login_TC_01_02_03 = [
    {
        tcName: 'TC_01_Login with wrong user name',
        userName: 'automationte@99x.lk',
        password: 'test1234',
        validationMessage: 'Invalid username or password.'
    },
    // {
    //     tcName: 'TC_02_Login with wrong password',
    //     userName: 'automationtest@99x.lk',
    //     password: '123',
    //     validationMessage: 'Invalid username or password.'
    // },
    // {
    //     tcName: 'TC_03_Login with incorrect user name and password',
    //     userName: 'automation@99x.lk',
    //     password: '123',
    //     validationMessage: 'Invalid username or password.'
    // }

]
//Mileage data
module.exports.Mileage_TC_1 =
{
    mileageTrip: 'Mileage TC_1',
}
module.exports.Mileage_TC_2 =
{
    mileageTrip: 'Mileage TC_2',
}