// Utilities module.

const Common = function() {
  /*
   * Expect that number of elements with the class name "expectedClass" are
   * equal to the number of elements specified by "expectedValue".
   */
  this.checkElementsNumber = function(expectedClass, expectedValue) {
    element.all(protractor.By.css(expectedClass)).then(function(elements) {
      expect(elements.length).toEqual(expectedValue);
    })
  };

}

module.exports = new Common();
