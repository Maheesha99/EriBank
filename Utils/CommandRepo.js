var wdio = require('webdriverio');
var hml = require('xmlhttprequest');
var allureReporter = require('@wdio/allure-reporter').default;
var conf = require('./../Utils/conf');
var assert = require('assert');

module.exports.tap = function (ele, param) {
    xpath = getElement(ele, param);
    allureReporter.startStep('Tap on ' + getElementName(ele.ElementName));
    arguments = [{ name: 'Action', value: 'TAP' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }]
    this.allureReportAddSteps(arguments);
    $(xpath).click();
    allureReporter.endStep();
};
module.exports.type = function (ele, value) {
    xpath = getElement(ele);
    allureReporter.startStep('Type "' + value + '" on ' + getElementName(ele.ElementName));
    arguments = [{ name: 'Action', value: 'TYPE' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Value', value: value }]
    this.allureReportAddSteps(arguments);
    $(xpath).setValue(value);
    allureReporter.endStep();
};
module.exports.scrollTo = function (ele, param) {
    xpath = getElement(ele, param);
    allureReporter.startStep('Scroll to ' + getElementName(ele.ElementName));
    arguments = [{ name: 'Action', value: 'SCROLL TO' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }]
    this.allureReportAddSteps(arguments);
    driver.execute('mobile: scroll', { element: $(xpath).elementId, toVisible: true });
    allureReporter.endStep();
};
module.exports.swipe = function (ele, param, dir) {
    xpath = getElement(ele, param);
    allureReporter.startStep('Swipe ' + dir + ' on ' + getElementName(ele.ElementName));
    arguments = [{ name: 'Action', value: 'SWIPE' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }]
    this.allureReportAddSteps(arguments);
    driver.execute('mobile: swipe', { element: $(xpath).elementId, direction: dir });
    allureReporter.endStep();
};
module.exports.scroll = function (_direction) {
    allureReporter.startStep('Scroll ' + _direction + ' the screen');
    driver.execute('mobile: scroll', { direction: _direction });
    allureReporter.endStep();
};
module.exports.tapAt = function (ele) {
    xpath = getElement(ele);
    allureReporter.startStep('Tap at ' + getElementName(ele.ElementName));
    arguments = [{ name: 'Action', value: 'TAP AT' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }]
    this.allureReportAddSteps(arguments);

    _ele = $(xpath);
    h = _ele.getSize('height')
    w = _ele.getSize('width')
    _ele.touchAction({
        action: 'tap', x: w - 3, y: (h / 2) - 3
    })

    allureReporter.endStep();
};
module.exports.tapAtAndType = function (ele, value, param) {
    xpath = getElement(ele, param);
    allureReporter.startStep('Tap at and Type "' + value + '" on ' + getElementName(ele.ElementName));
    arguments = [{ name: 'Action', value: 'TAP AT AND TYPE' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Value', value: value }]
    this.allureReportAddSteps(arguments);

    _ele = $(xpath);
    h = _ele.getSize('height');
    w = _ele.getSize('width');
    console.log('Height > ', h);
    console.log('Width > ', w);

    _ele.touchAction({
        action: 'tap', x: w - 3, y: (h / 2) - 3
    })
    driver.pause(3000);
    _ele.setValue(value);
    allureReporter.endStep();
};
module.exports.selectDateFromDatePicker = function (ele, value) {
    xpath = getElement(ele);
    allureReporter.startStep('Select Date ' + value + ' from date picker');
    arguments = [{ name: 'Action', value: 'SELECT DATE FROM DATE PICKER' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Value', value: value }]
    this.allureReportAddSteps(arguments);

    var wheelPicker = $$(xpath);

    _value = value.split('/');
    this.typeWithoutClear(wheelPicker[0], _value[0]);
    this.typeWithoutClear(wheelPicker[1], _value[1]);
    this.typeWithoutClear(wheelPicker[2], _value[2]);

    allureReporter.endStep();
};

module.exports.verifyText = function (ele, value) {
    xpath = getElement(ele, value);
    allureReporter.startStep('Verify "' + value + '" text is available');
    actualText = $(xpath).getText();
    arguments = [{ name: 'Action', value: 'VERIFY TEXT' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Expected Value', value: value }, { name: 'Actual Value', value: actualText }]
    this.allureReportAddSteps(arguments);
    assert.equal(actualText, value);
    allureReporter.endStep();
};
module.exports.verifyTextContains = function (ele, value, param) {
    xpath = getElement(ele, param);
    actualText = $(xpath).getText();
    allureReporter.startStep('Verify "' + value + '" text is available');
    arguments = [{ name: 'Action', value: 'VERIFY TEXT CONTAINS' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Expected Value', value: value }, { name: 'Actual Value', value: actualText }]
    this.allureReportAddSteps(arguments);

    if (actualText.includes(value)) {
        assert.equal(value, value);
    } else {
        assert.equal(actualText, value);
    }
    allureReporter.endStep();
};
module.exports.getElementText = function (ele, param) {
    xpath = getElement(ele, param);
    allureReporter.startStep('Store text of ' + getElementName(ele.ElementName));
    let elementText = $(xpath).getText();
    arguments = [{ name: 'Action', value: 'GET ELEMENT TEXT' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Value', value: elementText }]
    this.allureReportAddSteps(arguments);
    allureReporter.endStep();
    return elementText;
};
module.exports.getScreenshot = function () {
    allureReporter.startStep('Get screenshot');
    browser.saveScreenshot('./screenshot/screenshot.png');
    allureReporter.endStep();
};
module.exports.ElementPresent = function (ele, param) {
    xpath = getElement(ele, param);
    count = $$(xpath);
    allureReporter.startStep('Verify ' + getElementName(ele.ElementName) + ' element is present');
    arguments = [{ name: 'Action', value: 'ELEMENT PRESENT' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Element count', value: count.length }]
    this.allureReportAddSteps(arguments);
    if (count.length > 0) {
        assert.ok("ELEMENT IS PRESENT");
    } else {
        assert.fail("ELEMENT IS NOT PRESENT");
    }
    allureReporter.endStep();
};
module.exports.ElementNotPresent = function (ele, param) {
    xpath = getElement(ele, param);
    count = $$(xpath);
    allureReporter.startStep('Verify ' + getElementName(ele.ElementName) + ' element is not present');
    arguments = [{ name: 'Action', value: 'ELEMENT NOT PRESENT' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Element count', value: count.length }]
    this.allureReportAddSteps(arguments);
    if (count.length == 0) {
        assert.ok("ELEMENT IS NOT PRESENT");
    } else {
        assert.fail("ELEMENT IS PRESENT");
    }
    allureReporter.endStep();
};
module.exports.scrollAndroid = function (ele, param, direction) {
    xpath = getElement(ele, param);
    allureReporter.startStep('Scroll to ' + getElementName(ele.ElementName));
    arguments = [{ name: 'Action', value: 'SCROLL ANDROID' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Direction', value: direction }]
    this.allureReportAddSteps(arguments);

    // while (!$(xpath).isDisplayed()) {
    this.scrollAPICall(direction);
    driver.pause(3000);
    // }
    allureReporter.endStep();
};
module.exports.typeWithoutClear = function (ele, _value) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("result status >> ", this.status);
            console.log("result text >> ", this.responseText);
        }
    };
    url = getHubURL();
    url1 = url + `/wd/hub/session/${ele.sessionId}/element/${ele.elementId}/value`;
    //url1 = `http://127.0.0.1:4723/wd/hub/session/${ele.sessionId}/element/${ele.elementId}/value`;
    xhttp.open('POST', url1);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("charset", "UTF-8");
    xhttp.send(JSON.stringify({ value: _value.split('') }));
};
module.exports.scrollAPICall = function (direction) {
    direction = direction.toLowerCase();
    switch (direction) {
        case 'up':
            var _yspeed = 500;
            var _xspeed = -10;
            break;

        case 'down':
            var _yspeed = -100;
            var _xspeed = 10;
            break;

        default:
            var _yspeed = -100;
            var _xspeed = 10;

    }
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("result status >> ", this.status);
            console.log("result text >> ", this.responseText);
        }
    };
    // url1 = `http://127.0.0.1:4723/wd/hub/session/${driver.sessionId}/touch/flick`;
    url = getHubURL();
    url1 = url + `/wd/hub/session/${driver.sessionId}/touch/flick`;

    xhttp.open('POST', url1);
    console.log("URL >> ", url1)
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("charset", "UTF-8");
    xhttp.send(JSON.stringify({
        xspeed: 5,
        yspeed: _yspeed,
    }));

};
module.exports.swipeAndroid = function (ele, direction, param) {
    xpath = getElement(ele, param);
    _ele = $(xpath);
    console.log('element >>>', _ele.elementId)
    allureReporter.startStep('Swipe ' + getElementName(ele.ElementName) + ' to ' + direction);
    arguments = [{ name: 'Action', value: 'SWIPE ANDROID' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }, { name: 'Direction', value: direction }]
    this.allureReportAddSteps(arguments);

    direction = direction.toLowerCase();
    switch (direction) {
        case 'left':
            var _xoffset = -300;
            var _yoffset = 0;
            break;
        case 'longleft':
            var _xoffset = -1300;
            var _yoffset = 0;
            break;
        case 'right':
            var _xoffset = 300;
            var _yoffset = 0;
            break;
        default:
            var _xoffset = -300;
            var _yoffset = 0;

    }
    console.log('_xoffset >>>>', _xoffset);
    console.log('_yoffset >>>>', _yoffset);

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("result status >> ", this.status);
            console.log("result text >> ", this.responseText);
        }
    };

    url = getHubURL();
    url1 = url + `/wd/hub/session/${driver.sessionId}/touch/flick`;
    //url1 = `http://127.0.0.1:4723/wd/hub/session/${driver.sessionId}/touch/flick`;
    xhttp.open('POST', url1, false);
    console.log("URL >> ", url1)
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("charset", "UTF-8");
    xhttp.send(JSON.stringify({
        element: _ele.elementId,
        xoffset: _xoffset,
        yoffset: _yoffset,
        speed: 100
    }));
    allureReporter.endStep();
};
module.exports.clear = function (ele) {
    xpath = getElement(ele);
    _ele = $(xpath);

    allureReporter.startStep('Clear values in ' + getElementName(ele.ElementName));
    arguments = [{ name: 'Action', value: 'CLEAR' }, { name: 'Element', value: ele.ElementName }, { name: 'Xpath', value: xpath }]
    this.allureReportAddSteps(arguments);

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("result status >> ", this.status);
            console.log("result text >> ", this.responseText);
        }
    };
    url = getHubURL();
    url1 = url + `/wd/hub/session/${_ele.sessionId}/element/${_ele.elementId}/clear`;
    //url1 = `http://127.0.0.1:4723/wd/hub/session/${_ele.sessionId}/element/${_ele.elementId}/clear`;
    xhttp.open('POST', url1);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("charset", "UTF-8");
    xhttp.send();

    allureReporter.endStep();
};

module.exports.GetElementCount = function (ele, param) {
    element = getElement(ele, param);
    count = $$(element);
    console.log('element count >>>>> ', count.length);
    return count.length;
};

getElement = function (ele, param) {
    _platform = driver.capabilities.platformName;
    if (_platform == 'iOS') {
        ele = ele.iOS;
    } else {
        ele = ele.Android;
    }
    ele = resolveElement(ele, param);
    return ele;
}
resolveElement = function (ele, param) {
    if (ele.includes("<>")) {
        ele = ele.replace("<>", param);
    }
    return ele;
}
getElementName = function (ele) {
    return ele.split(".")[1].split("_")[1];
}
getHubURL = function () {
    protocal = driver.config.protocol;
    hostname = driver.config.hostname;
    port = driver.config.port;
    return url = protocal + `://` + hostname + `:` + port;
}
module.exports.allureReportAddSteps = function (arguments) {
    arguments.forEach((input) => {
        allureReporter.startStep(input.name + ' : ' + input.value);
        allureReporter.endStep();
    })
};