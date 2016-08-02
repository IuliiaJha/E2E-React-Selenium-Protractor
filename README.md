### E2E testing with Protractor and React.

This a brief document where I am going to explain how to text a React application using Protractor as testing framework.

### Environment

Below is my working environment and binaries versions used to date in this document.

##### OS
```
Distributor ID: Debian
Description:    Debian GNU/Linux 8.5 (jessie)
Release:        8.5
Codename:       jessie
```
##### Binaries
```
$ node --version
v6.3.0
```
```
$  grunt --version
grunt-cli v1.2.0
grunt v1.0.1
```
```
$ ./node_modules/.bin/protractor --version
Version 4.0.0
```
```
$ java -version
java version "1.8.0_91"
Java(TM) SE Runtime Environment (build 1.8.0_91-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.91-b14, mixed mode)
```

### Prerequisites

`Node.js` has to be installed. You can download and install it from the following [link][1].

### Protractor

Your can read from the protractor official [website][2]:

> Protractor is an end-to-end test framework for AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

> Protractor is a Node.js program. To run Protractor, you will need to have Node.js installed. Check the version of node you have by running node --version. It should be greater than v0.10.0.

As mention, Protractor is the testing framework for AngularJS, however you can use it for testing any web application not including AngularJS directives. Without including below line code protractor will wait for Angular.

> Failed: Angular could not be found on the page http://localhost:8080/ : retries looking for angular exceeded

For instance, we have to add the following line for testing no AngularJS applications.

```
browser.ignoreSynchronization = true;
```
### Intallation

Node.js comes with the node package manager `npm`, which you can use to install Protractor.
```
$ npm install --save-dev protractor
```
The [Selenium webriver][3] is included once you have installed Proctractor. Below command updates the Selenium webdriver, which also updates the [ChromeDriver][4].

```
$ ./node_modules/.bin/webdriver-manager update
```
###### Selenium

Selenium automates browsers. That's it! What you do with that power is entirely up to you. Primarily, it is for automating web applications for testing purposes, but is certainly not limited to just that. Boring web-based administration tasks can (and should!) also be automated as well.

###### Chromedriver

WebDriver is an open source tool for automated testing of webapps across many browsers. It provides capabilities for navigating to web pages, user input, JavaScript execution, and more.  ChromeDriver is a standalone server which implements WebDriver's wire protocol for Chromium. ChromeDriver is available for Chrome on Android and Chrome on Desktop (Mac, Linux, Windows and ChromeOS).

### Preparing everything

Lets go to create the first protractor file which will run the e2e tests.

You need to create configuration file for running your tests, you can review my `e2e_conf.js` configuration file for more details.

```
exports.config = {
  ...
}
```

You can get more information about all the configuration options in the following [link][5].

###### As reference, I summarize some important options to have in count.

**params**
I use it to add constants to the be accessible via `browser.params`.

> The params object will be passed directly to the Protractor instance,
> and can be accessed from your test as browser.params. It is an arbitrary
> object and can contain anything you may need in your test.

**capabilities**
Capabilities to run the browser (also in parallel).
>  In addition, you may specify count, shardTestFiles, and maxInstances.

**suites**
Useful for running only one testing suite, eg "protractor --suite training e2e_conf.js":
> Alternatively, suites may be used. When run without a command line
> parameter, all suites will run. If run with --suite=smoke or
> --suite=smoke,full only the patterns matched by the specified suites will
> run.

**framework**
For e2e I use Jasmine, however it you are more familar with mocha you can use it too.
> Test framework to use. This may be one of:
> jasmine, mocha or custom.

[//]: # (###### Intalling protractor reporter)
[//]: # (npm install --save-dev protractor-html-screenshot-reporter)

### Running the test

Once everything is twiked is time to run a test. I store all my tests using suites by functionality to keep it simple and ordered.

First of all we need to start up the Selenium Webdriver manager with the following command.
```
$ ./node_modules/.bin/webdriver-manager start
```

And then run all test in production .

```
$ npm run test-all-prod
```

### Automation

As you have realized, we have to open two consoles to complete any test, and it is cumbersome.

To speed it up in one unique task, I am going to use [Grunt][6] to achieve it.

Tasks:

1. Check the code styles and syntax.
2. Start up the selenium-webdriver server.
3. Run tests.
4. Stop the selenium-webdriver server.

You can check my file `Gruntfile.js` to check all options, for sample, below code will execute all steps described above in production.

```javascript
grunt.registerTask('production', 'run production tasks', [
    'jshint',
    'selenium_start',
    'shell:production',
    'selenium_stop'
  ];
});
```
May be you'll need to install the chromedriver globally if you get below error:

```
[15:22:35] E/launcher - "process.on('uncaughtException'" error, see launcher
[15:22:35] E/launcher - Process exited with error code 199
```
So
```
$ sudo npm i -g chromedriver
```

### Summary

#### Setup
You can start to test the application cloning tre repository and installing the dependencies.
```
$ git clone https://github.com/pablomagro/E2E-React-Selenium-Protractor.git
$ cd E2E-React-Selenium-Protractor
$ npm install
```

#### To run
```
$ grunt production
```

Note that you'll need to install cli-grunt and grunt. Grunt suggests to install cli-grunt globally and grunt locally, it is on your taste.

Hope this helps!!!

### References:

1. http://www.protractortest.org/
2. http://www.protractortest.org/#/api
3. https://github.com/yeoman/generator-gruntfile
4. http://gruntjs.com/getting-started
5. http://gruntjs.com/api/grunt.task
6. https://www.npmjs.com/package/grunt-exec


[1]: https://nodejs.org/en/download
[2]: http://www.protractortest.org/#/protractor-setup
[3]: http://www.seleniumhq.org/
[4]: https://sites.google.com/a/chromium.org/chromedriver/
[5]: https://github.com/angular/protractor/blob/master/docs/referenceConf.js
[6]: http://gruntjs.com/getting-started
