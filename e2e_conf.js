/**
 * Name: e2e_conf.js
 * Description: Default template for running Curriculum protractor tests
 * Created by: Pablo Magro
 * Date: 20/07/16
 */

const _extend = require('extend');
const constants = require('./config/constants');

exports.config = {
  // Define parameters and environment attibutes to be used.
  // By default development.
  params: _extend(
    constants
  ),

  // Timeout by default for all scripts.
  allScriptsTimeout: 15000,

  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        'incognito', 'disable-extensions', 'start-maximized'
      ]
    },
    loggingPrefs: { browser: 'ALL' },
    platform: 'ANY',
    version: ''
  },

  restartBrowserBetweenTests: true,

  // CLI --suite training
  suites: {
    all: 'specs/curriculum/*spec.js',
    mainpage: 'specs/curriculum/curriculum_main_page_spec.js',
    training: 'specs/curriculum/training_spec.js',
    contactme: 'specs/curriculum/contact_me_spec.js'
  },

  // ---------------------------------------------------------------------------
  // ----- The test framework --------------------------------------------------
  // ---------------------------------------------------------------------------

  framework: 'jasmine2',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 60000
  },
};
