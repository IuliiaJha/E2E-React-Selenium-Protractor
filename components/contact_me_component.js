const Common = require('../test/common');

const ContactMeComponent = function() {
  // Classes.
  this.cssSectionContactMe = browser.params.cssSectionContactMe;
  this.cssHasError = '.has-error';

  // IDs.
  this.idName = 'name';
  this.idFrom = 'from';
  this.idMessage = 'message';
  this.idInputSubmit = 'input-submit';

  /*
   * Check that the contactme class exists.
   */
  this.checkSectionContactMe = () => {
    Common.checkElementsNumber(this.cssSectionContactMe, 1);
  };

  // Contact me allows the user to type their user into the User field.
  this.typeName = (name) => {
    const elem = element(by.id(this.idName));

    // This is the only place that "knows" how to enter a name
    elem.sendKeys(name);
    expect(elem.getAttribute('value')).toEqual(name);
  };

  // Contact me allows the user to type a value into the From field.
  this.typeFrom = (from) => {
    const elem = element(by.id(this.idFrom));

    // This is the only place that "knows" how to enter from value.
    elem.sendKeys(from);
    expect(elem.getAttribute('value')).toEqual(from);
  };

  // Contact me allows the user to type a value into the Message field.
  this.typeMessage = (message) => {
    const elem = element(by.id(this.idMessage));

    // This is the only place that "knows" how to enter a message value.
    elem.sendKeys(message);
    expect(elem.getAttribute('value')).toEqual(message);
  };

  // The Contact me component allows to submit form.
  this.submitSendIt = () => {
    const elem = element(by.id(this.idInputSubmit));
    elem.click();
    return elem;
  };

  // Wait until the email has been sent, it happens when the button values changes to "Send it!".
  this.waitSubmit = (button) => {
    browser.driver.wait(function() {
      return button.getAttribute('value').then(function(value) {
        return /Send it!/.test(value);
      });
    });
  };

  /**
   * <p>Conceptually, the curriculum page offers the user the service of being able to
   * send an email.</p>
   *
   * @param  String name field value.
   * @param  String from field value.
   * @param  String message field value.
   */
  this.sendForm = (name, from, message) => {
    this.typeName(name);
    this.typeFrom(from);
    this.typeMessage(message);
    this.waitSubmit(this.submitSendIt());
  };

  // Submit the from empty and check the validation errors.
  this.submitFormEmpty = () => {
    // Submit the empty form.
    this.submitSendIt();
    // Three error messages have to be shown.
    Common.checkElementsNumber(this.cssHasError, 3);
  };
};

module.exports = new ContactMeComponent();
