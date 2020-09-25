//Common login
module.exports.SuccessLoginCredentials = {
    userName: 'company',
    pwd: 'company',
}
//Payment data
module.exports.Login_TC01 = [
    {
        tcName: "TC_01_Login to the application",
        userName: "Test@gmail.com",
        password: "test1234",
        alertText: "Success\nYou are logged in!"
    }, 
    // {
    //     tcName: "TC_03_Login to the application",
    //     userName: "sample@gmail.com",
    //     password: "sample12",
    //     alertText: "Success\nYou are logged in!"
    // }
]
module.exports.Payment_TC02 =
{
    phone: '0112676545',
    name: 'Ann',
    amount: 10,
    country: 'USA',
}
