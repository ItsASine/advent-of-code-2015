var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');
var noop = function() {
};

var jrunner = new Jasmine();

jrunner.configureDefaultReporter({print: noop});
jasmine.getEnv().addReporter(new SpecReporter({
  displayStacktrace: 'summary'
}));
jrunner.loadConfigFile();
jrunner.execute();
