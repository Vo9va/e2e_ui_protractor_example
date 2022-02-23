const {SpecReporter} = require('jasmine-spec-reporter');
const AllureReporter = require('jasmine-allure-reporter');
const apiHelper = require('./helper/dashboardHelper/apiHelper');
const config = require('./resources/config');

let token;

global.nfs_e2e_results = [];

const onPrepare = async () => {
     browser
        .manage()
        .window()
        .maximize();
    browser.waitForAngularEnabled(false);

    jasmine.getEnv().addReporter(
        new SpecReporter({
            spec: {displayStacktrace: true},
        }),
    );

    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function (done) {
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment(
                'Screenshot',
                function () {
                    return Buffer.from(png, 'base64');
                },
                'image/png',
            )();
            done();
        });
    });
};

module.exports = {
    onPrepare,
    SpecReporter,
};
