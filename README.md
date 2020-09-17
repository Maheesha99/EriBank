# Automation_TravelText
Automation scripts for TravelText application

How to setup the project in oder to execute test cases in browserstack
1. clone the project
2. open terminal for project root and enter below commands <br/>
 > npm install -g allure-commandline --save-dev <br/>
 > npm install appium <br/>
3. Make sure to install java and set java path.
4. Sign in to the browserstack account and navigate to the 'app automate' section.Then copy the 'Access Key' and 'User Name'
4. Open the conf.js file which is in Utils folder
5. Paste 'User Name' value in 'user' variable
6. Paste 'Access Key' value in 'key' variable
7. If you want to change the devices then go to https://www.browserstack.com/automate/capabilities and select a device. copy device name and paste in 'deviceName_browserstack_android' or 'deviceName_browserstack_ios'
8. give the device versions accordingly

How to execute test cases
1. If you want to execute test cases in android device, use below commands <br/>
  If you want to execute TS_Smoke.js test suite only    :  npx wdio run wdio.conf_browserstack_android.js --suite Smoke <br/>
  If you want to execute TS_Expenses.js test suite only :  npx wdio run wdio.conf_browserstack_android.js --suite Expenses <br/>
  If you want to execute TS_Login.js test suite only    :  npx wdio run wdio.conf_browserstack_android.js --suite Login <br/>
  If you want to execute TS_Reports.js test suite only  :  npx wdio run wdio.conf_browserstack_android.js --suite Reports <br/>
  If you want to execute all test suites at once        :  npx wdio run wdio.conf_browserstack_android.js --suite All <br/>

2. If you want to execute test cases in iOS device, use below commands <br/>
  If you want to execute TS_Smoke.js test suite only    :  npx wdio run wdio.conf_browserstack_ios.js --suite Smoke <br/>
  If you want to execute TS_Expenses.js test suite only :  npx wdio run wdio.conf_browserstack_ios.js --suite Expenses <br/>
  If you want to execute TS_Login.js test suite only    :  npx wdio run wdio.conf_browserstack_ios.js --suite Login <br/>
  If you want to execute TS_Reports.js test suite only  :  npx wdio run wdio.conf_browserstack_ios.js --suite Reports <br/>
  If you want to execute all test suites at once        :  npx wdio run wdio.conf_browserstack_ios.js --suite All <br/>

3. if you want to execute only one test case in TS_Smoke.js, then comment all the other test cases which don't want to execute in TS_Smoke.js and use 'npx wdio run wdio.conf_browserstack_ios.js --suite Smoke' command. You can do the same for the other test suites.

4. Open allure report(Execution report) use below command <br/>
allure generate allure-results --clean  && allure open
