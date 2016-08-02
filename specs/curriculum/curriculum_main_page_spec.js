// Set application default configuration.
const configure = require('../../config/application.js');

// Contain methods and constants for testing "Curriculum Vítate" website.
const curriculum = require('../../page/curriculum_main_page');

describe('Main Page', () => {
  beforeEach(() => {
    configure.configureDefault(false);
  });

  it('page has the right title', () => {
    console.log('\nit: page has to be the right title.');

    browser.get(browser.params.baseUrl).then(() => {
      browser.driver.getTitle().then((title) => {
        expect(title).toBe('Currículum Vitae');
      });
    });
  });

  it('main page has to be all sections', () => {
    console.log('\nit: main page has to be all page sections.');

    browser.get(browser.params.baseUrl).then(() => {
      // Check all sections class names.
      curriculum.checkAllSections();
    });
  });
});
