
const AppConfiguration = function() {
  /**
   * Set default application parameters.
   *
   * 1) Important to set a false if we don't use an Angular application.
   *
   *    browser.ignoreSynchronization = false
   *
   * 2) Every driver.manage().timeouts() value lives till the instance of the driver is alive.
   *
   *    pageLoadTimeout
   *    implicitlyWait
   */
  this.configureDefault = (isAngular) => {
    // Set default timeouts.
    browser.manage().timeouts().pageLoadTimeout(30000);
    browser.manage().timeouts().implicitlyWait(90000);

    // Create global functions.
    global.setAngularSite = (flag) => {
      browser.ignoreSynchronization = !flag;
    };

    global.errorCallback = (err) => {
      console.log(err);
    };

    // Turning off looking for angular, set false for angular sites.
    global.setAngularSite(isAngular);
  };
};

module.exports = new AppConfiguration();
