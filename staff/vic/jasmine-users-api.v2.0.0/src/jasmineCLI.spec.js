const Jasmine = require('jasmine')
var jasmine = new Jasmine();

jasmine.loadConfigFile(process.env.JASMINE_CONFIG_PATH);

jasmine.configureDefaultReporter({
    showColors: true
});
jasmine.execute();

jasmine.onComplete(function (passed) {
    if (passed) {
        console.log('All specs have passed');
    } else {
        throw new Error('Specs failed...')
    }
});