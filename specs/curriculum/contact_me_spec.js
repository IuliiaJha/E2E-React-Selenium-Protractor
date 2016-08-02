// Set application default configuration.
const configure = require('../../config/application.js');
const ContactMeComponent = require('../../components/contact_me_component');
const CurriculumPage = require('../../page/curriculum_main_page');

describe('Contact me Section', () => {
  beforeEach(() => {
    configure.configureDefault(false);
  });

  it('has to contain the contact me section class', () => {
    console.log('\nit: has to contain the contact me section class.');

    browser.get(browser.params.baseUrl).then(() => {
      ContactMeComponent.checkSectionContactMe();
    });
  });

  /**
   * Use cases:
   *
   * Test OK
   *
   * 1 - Fill up and check correct values for all input fields: Name, Email and Drop me a line.
   * 2 - Click on "Send it!" button.
   * 3 - Wait until the mail has been sent.
   *
   * Test Fail
   *
   * 1 - Leave all fields empty.
   * 2 - Submit the form.
   * 3 - Expect three validation messages.
   */
  describe('Submit the form', () => {
    it('all fields are filled up correctly', () => {
      console.log('\nit: all fields are filled up correctly.');

      browser.get(browser.params.baseUrl).then(() => {
        // Click over the Training link.
        CurriculumPage.clickContactMe().then(() => {

          // Sleep 3 seconds until scroll to the Contact me section.
          browser.sleep(2900).then(() => {
            ContactMeComponent.sendForm('Testing form mame', 'testing@example.com', 'Testing form message');
          });
        });
      });
    });

    it('all form fields are empty', () => {
      console.log('\nit: all form fields are empty.');

      browser.get(browser.params.baseUrl).then(() => {
        // Click over the Contat me menu option.
        CurriculumPage.clickContactMe().then(() => {

          // Sleep 3 seconds until scroll to the Contact me section.
          browser.sleep(2900).then(() => {
            ContactMeComponent.submitFormEmpty();
          });
        });
      });
    });
  });
});
